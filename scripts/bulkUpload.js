#!/usr/bin/env node

/**
 * Script de traitement d'images en masse avec Cloudinary
 * Architecture modulaire et configurable pour faciliter la maintenance et l'extension
 * 
 * Usage: node scripts/bulkUpload.js
 * 
 * @author TRUE ME Marketplace
 * @version 1.0.0
 */

const fs = require('fs').promises;
const path = require('path');
const { v2: cloudinary } = require('cloudinary');
// Configuration manuelle Cloudinary (temporaire pour test)
process.env.CLOUDINARY_CLOUD_NAME = 'dxdhr05i6';
process.env.CLOUDINARY_API_KEY = '639851136567114';
process.env.CLOUDINARY_API_SECRET = 'TzgRHLJcfWFQyjW02o_zHNkhhd0';

// ===========================
// CONFIGURATION CENTRALISÉE
// ===========================
const CONFIG = {
  sourceFolder: './images_a_uploader',
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
  cloudinary: {
    folder: 'products',
    transformation: [
      {
        width: 1080, 
        height: 1080, 
        crop: 'pad', 
        background: 'white'
      },
      {
        gravity: 'auto', 
        width: 950, 
        height: 950, 
        crop: 'fill'
      }
    ]
  },
  logging: {
    enableVerbose: true,
    enableErrors: true
  }
};

// ===========================
// INITIALISATION CLOUDINARY
// ===========================

/**
 * Configure Cloudinary avec les variables d'environnement
 * @returns {boolean} Success status
 */
function initializeCloudinary() {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Vérification de la configuration
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      throw new Error('Variables d\'environnement Cloudinary manquantes. Vérifiez votre fichier .env');
    }

    console.log('✅ Cloudinary configuré avec succès');
    return true;
  } catch (error) {
    console.error('❌ Erreur d\'initialisation Cloudinary:', error.message);
    return false;
  }
}

// ===========================
// FONCTIONS UTILITAIRES
// ===========================

/**
 * Vérifie si un fichier a une extension autorisée
 * @param {string} filePath - Chemin du fichier
 * @returns {boolean} - True si l'extension est autorisée
 */
function isAllowedFileType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONFIG.allowedExtensions.includes(ext);
}

/**
 * Génère un nom de fichier public unique pour Cloudinary
 * @param {string} originalName - Nom original du fichier
 * @returns {string} - Nom public unique
 */
function generatePublicId(originalName) {
  const nameWithoutExt = path.parse(originalName).name;
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `${nameWithoutExt}_${timestamp}_${randomSuffix}`;
}

/**
 * Affiche un message de log formaté
 * @param {string} type - Type de message (success, error, info)
 * @param {string} message - Message à afficher
 */
function log(type, message) {
  const timestamp = new Date().toISOString();
  const icons = {
    success: '✅',
    error: '❌',
    info: '📋',
    warning: '⚠️'
  };
  
  console.log(`${icons[type] || '📋'} [${timestamp}] ${message}`);
}

// ===========================
// FONCTIONS DE TRAITEMENT
// ===========================

/**
 * Lit et filtre les fichiers du dossier source
 * @returns {Promise<string[]>} - Liste des fichiers valides
 */
async function getValidImageFiles() {
  try {
    // Vérifier l'existence du dossier source
    await fs.access(CONFIG.sourceFolder);
    
    // Lire le contenu du dossier
    const files = await fs.readdir(CONFIG.sourceFolder);
    
    // Filtrer uniquement les fichiers image valides
    const validFiles = files.filter(file => {
      const filePath = path.join(CONFIG.sourceFolder, file);
      return isAllowedFileType(filePath);
    });

    log('info', `${validFiles.length} fichier(s) image(s) trouvé(s) dans ${CONFIG.sourceFolder}`);
    
    if (validFiles.length === 0) {
      log('warning', 'Aucun fichier image valide trouvé');
    }
    
    return validFiles;
  } catch (error) {
    if (error.code === 'ENOENT') {
      log('error', `Dossier source introuvable: ${CONFIG.sourceFolder}`);
    } else {
      log('error', `Erreur lors de la lecture du dossier: ${error.message}`);
    }
    return [];
  }
}

/**
 * Traite une seule image : upload vers Cloudinary avec transformations
 * Cette fonction est conçue pour être facilement extensible (pipeline approach)
 * 
 * @param {string} fileName - Nom du fichier à traiter
 * @returns {Promise<Object>} - Résultat du traitement
 */
async function processImage(fileName) {
  const filePath = path.join(CONFIG.sourceFolder, fileName);
  const publicId = generatePublicId(fileName);
  
  try {
    log('info', `Traitement de ${fileName}...`);

    // ÉTAPE 1: Upload vers Cloudinary avec transformations
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: CONFIG.cloudinary.folder,
      transformation: CONFIG.cloudinary.transformation,
      overwrite: false, // Évite d'écraser les images existantes
      resource_type: 'image',
    });

    // ÉTAPE 2: [EXTENSIBLE] Ici on peut ajouter d'autres étapes
    // Exemple futur: const aiAnalysis = await analyzeImageWithAI(uploadResult);
    // Exemple futur: const dbUpdate = await updateDatabase(uploadResult, aiAnalysis);

    log('success', `${fileName} → ${uploadResult.secure_url}`);
    
    return {
      success: true,
      fileName: fileName,
      publicId: uploadResult.public_id,
      secureUrl: uploadResult.secure_url,
      format: uploadResult.format,
      width: uploadResult.width,
      height: uploadResult.height,
      bytes: uploadResult.bytes
    };

  } catch (error) {
    log('error', `Échec de ${fileName}: ${error.message}`);
    
    return {
      success: false,
      fileName: fileName,
      error: error.message
    };
  }
}

/**
 * Fonction principale qui orchestre le traitement en masse
 * Traitement séquentiel pour éviter la surcharge réseau
 */
async function processBulkUpload() {
  log('info', '🚀 Démarrage du traitement d\'images en masse');
  
  // Initialisation
  if (!initializeCloudinary()) {
    process.exit(1);
  }

  // Récupération des fichiers
  const imageFiles = await getValidImageFiles();
  
  if (imageFiles.length === 0) {
    log('warning', 'Aucun fichier à traiter. Fin du script.');
    return;
  }

  // Traitement séquentiel
  const results = {
    successful: [],
    failed: [],
    total: imageFiles.length
  };

  for (const fileName of imageFiles) {
    const result = await processImage(fileName);
    
    if (result.success) {
      results.successful.push(result);
    } else {
      results.failed.push(result);
    }
    
    // Petite pause entre les uploads pour éviter la surcharge
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Rapport final
  console.log('\n' + '='.repeat(60));
  log('info', `📊 RAPPORT FINAL`);
  log('success', `Images uploadées avec succès: ${results.successful.length}`);
  
  if (results.failed.length > 0) {
    log('error', `Images échouées: ${results.failed.length}`);
    console.log('\n📋 Détails des échecs:');
    results.failed.forEach(failure => {
      console.log(`   - ${failure.fileName}: ${failure.error}`);
    });
  }
  
  log('info', `Total traité: ${results.total} fichier(s)`);
  console.log('='.repeat(60));
}

// ===========================
// POINT D'ENTRÉE
// ===========================

if (require.main === module) {
  processBulkUpload()
    .then(() => {
      log('info', '🎉 Script terminé avec succès');
      process.exit(0);
    })
    .catch((error) => {
      log('error', `Erreur fatale: ${error.message}`);
      process.exit(1);
    });
}

// Export pour permettre l'utilisation comme module
module.exports = {
  processBulkUpload,
  processImage,
  CONFIG
};

#!/usr/bin/env python3
"""
Script automatisé de détourage et fond blanc pour TRUE ME Marketplace
Utilise rembg pour le détourage automatique + PIL pour le fond blanc
"""

import os
import sys
import requests
from PIL import Image, ImageOps
import numpy as np
from pathlib import Path

# Installation automatique des dépendances si nécessaires
def install_requirements():
    try:
        import rembg
    except ImportError:
        print("Installation de rembg...")
        os.system("pip install rembg[new] pillow requests")
        import rembg

def download_and_process_image(image_url, output_path, target_size=(400, 400)):
    """
    Télécharge une image, supprime l'arrière-plan, ajoute fond blanc
    et redimensionne à la taille cible
    """
    try:
        print(f"📥 Téléchargement: {image_url}")
        
        # Téléchargement
        response = requests.get(image_url, stream=True)
        response.raise_for_status()
        
        # Ouverture de l'image
        input_image = Image.open(response.raw)
        
        # Conversion en RGB si nécessaire
        if input_image.mode != 'RGB':
            input_image = input_image.convert('RGB')
        
        # Suppression du fond avec rembg
        print("✂️  Détourage automatique...")
        from rembg import remove
        output_image = remove(input_image)
        
        # Création du fond blanc
        print("🎨 Ajout fond blanc...")
        white_bg = Image.new('RGB', output_image.size, (255, 255, 255))
        
        # Fusion avec le fond blanc
        if output_image.mode == 'RGBA':
            white_bg.paste(output_image, mask=output_image.split()[3])
        else:
            white_bg.paste(output_image, (0, 0))
        
        # Redimensionnement
        print(f"📏 Redimensionnement vers {target_size}...")
        final_image = ImageOps.fit(white_bg, target_size, Image.Resampling.LANCZOS)
        
        # Sauvegarde
        output_dir = os.path.dirname(output_path)
        if output_dir:
            os.makedirs(output_dir, exist_ok=True)
        final_image.save(output_path, 'JPEG', quality=90, optimize=True)
        
        print(f"✅ Sauvegardé: {output_path}")
        return True
        
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def process_folder_images(input_folder="images-sources", use_ai_naming=False):
    """
    Traite toutes les images d'un dossier source et génère les images détourées
    avec une nomenclature automatique dans les bons dossiers de destination
    Si use_ai_naming=True, utilise Gemini pour identifier le produit automatiquement
    """
    
    install_requirements()
    
    if not os.path.exists(input_folder):
        print(f"❌ Dossier {input_folder} introuvable")
        return
    
    # Extensions supportées
    supported_extensions = ('.jpg', '.jpeg', '.png', '.webp', '.bmp')
    
    # Récupération de tous les fichiers images
    image_files = []
    for file in os.listdir(input_folder):
        if file.lower().endswith(supported_extensions):
            image_files.append(os.path.join(input_folder, file))
    
    if not image_files:
        print(f"❌ Aucune image trouvée dans {input_folder}")
        print(f"Formats supportés: {', '.join(supported_extensions)}")
        return
    
    print(f"🎯 {len(image_files)} images trouvées à traiter")
    
    success_count = 0
    
    for i, input_path in enumerate(image_files, 1):
        filename = os.path.basename(input_path)
        name_without_ext = os.path.splitext(filename)[0]
        
        print(f"\n🔄 [{i}/{len(image_files)}] Traitement: {filename}")
        
        # Nommage intelligent avec Gemini si activé
        if use_ai_naming:
            smart_name = identify_product_with_gemini(input_path)
            if smart_name:
                output_filename = f"{smart_name}.jpg"
                print(f"🤖 Produit identifié: {smart_name}")
            else:
                output_filename = f"{name_without_ext}-processed.jpg"
                print(f"⚠️  Identification échouée, nom par défaut: {output_filename}")
        else:
            output_filename = f"{name_without_ext}-processed.jpg"
        
        output_path = f"images-processed/{output_filename}"
        
        # Créer le dossier de destination
        os.makedirs("images-processed", exist_ok=True)
        
        if process_single_image(input_path, output_path):
            success_count += 1
            print(f"   ✅ → {output_path}")
        else:
            print(f"   ❌ Échec du traitement")
    
    print(f"\n📊 Résumé: {success_count}/{len(image_files)} images traitées avec succès")
    print(f"📁 Images détourées disponibles dans: images-processed/")
    
    return success_count

def identify_product_with_gemini(image_path):
    """
    Utilise Google Gemini Vision pour identifier automatiquement le produit
    et générer un nom de fichier approprié
    """
    try:
        api_key = os.getenv('GEMINI_API_KEY')
        if not api_key:
            print("⚠️  GEMINI_API_KEY non configurée, identification impossible")
            return None
        
        import google.generativeai as genai
        genai.configure(api_key=api_key)
        
        # Charger l'image
        image = Image.open(image_path)
        
        # Prompt optimisé pour la reconnaissance de produits de luxe
        prompt = """
        Analyser cette image de produit de luxe et identifier précisément:
        1. La marque (Chanel, Hermès, Louis Vuitton, Dior, Gucci, etc.)
        2. Le type de produit (sac, chaussures, veste, etc.)
        3. Le modèle spécifique si reconnaissable
        
        Répondre UNIQUEMENT avec un nom de fichier au format:
        marque-produit-modele
        
        Exemples:
        - chanel-tweed-jacket
        - hermes-kelly-32
        - louboutin-so-kate
        - dior-book-tote
        
        Utiliser uniquement des lettres minuscules, tirets, pas d'espaces.
        Si le produit n'est pas identifiable, répondre: "produit-inconnu"
        """
        
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content([prompt, image])
        
        if response.text:
            # Nettoyer la réponse
            product_name = response.text.strip().lower()
            # Remplacer espaces par tirets et garder lettres, chiffres, tirets
            import re
            product_name = re.sub(r'[^a-z0-9\-]', '-', product_name.replace(' ', '-'))
            # Supprimer tirets multiples et tirets en début/fin
            product_name = re.sub(r'-+', '-', product_name).strip('-')
            
            if product_name and product_name != "produit-inconnu" and len(product_name) > 3:
                return product_name
        
        return None
        
    except Exception as e:
        print(f"❌ Erreur Gemini: {e}")
        return None

def process_single_image(input_path_or_url, output_path):
    """
    Traite une seule image (local ou URL)
    """
    install_requirements()
    
    if input_path_or_url.startswith(('http://', 'https://')):
        return download_and_process_image(input_path_or_url, output_path)
    else:
        # Traitement d'un fichier local
        try:
            input_image = Image.open(input_path_or_url)
            if input_image.mode != 'RGB':
                input_image = input_image.convert('RGB')
            
            from rembg import remove
            output_image = remove(input_image)
            
            white_bg = Image.new('RGB', output_image.size, (255, 255, 255))
            if output_image.mode == 'RGBA':
                white_bg.paste(output_image, mask=output_image.split()[3])
            else:
                white_bg.paste(output_image, (0, 0))
            
            final_image = ImageOps.fit(white_bg, (400, 400), Image.Resampling.LANCZOS)
            
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            final_image.save(output_path, 'JPEG', quality=90, optimize=True)
            
            print(f"✅ Image traitée: {output_path}")
            return True
            
        except Exception as e:
            print(f"❌ Erreur: {e}")
            return False

if __name__ == "__main__":
    if len(sys.argv) == 1:
        # Mode batch - traite toutes les images du dossier source
        print("🚀 Mode batch - traitement du dossier images-sources/...")
        process_folder_images()
    elif len(sys.argv) == 2:
        if sys.argv[1] == "--gemini":
            # Mode batch avec Gemini IA
            print("🚀 Mode batch Gemini - reconnaissance automatique...")
            process_folder_images("images-sources", use_ai_naming=True)
        elif sys.argv[1] == "--help":
            print("Usage:")
            print("  python auto-background-removal.py                          # Traite images-sources/")
            print("  python auto-background-removal.py <dossier>                # Traite dossier personnalisé")
            print("  python auto-background-removal.py <input> <output>         # Mode single")
            print("")
            print("Exemples:")
            print("  python auto-background-removal.py")
            print("  python auto-background-removal.py mes-images/")
            print("  python auto-background-removal.py https://example.com/bag.jpg output.jpg")
            print("  python auto-background-removal.py input.jpg output.jpg")
        else:
            # Mode dossier personnalisé
            folder_path = sys.argv[1]
            print(f"🎯 Mode dossier - traitement de {folder_path}")
            process_folder_images(folder_path)
    elif len(sys.argv) == 3:
        # Mode single - traite une image spécifique
        input_path = sys.argv[1]
        output_path = sys.argv[2]
        print(f"🎯 Mode single - traitement de {input_path}")
        process_single_image(input_path, output_path)
    else:
        print("Usage:")
        print("  python auto-background-removal.py                          # Traite images-sources/")
        print("  python auto-background-removal.py <dossier>                # Traite dossier personnalisé")
        print("  python auto-background-removal.py <input> <output>         # Mode single")
        print("")
        print("Exemples:")
        print("  python auto-background-removal.py")
        print("  python auto-background-removal.py mes-images/")
        print("  python auto-background-removal.py https://example.com/bag.jpg output.jpg")
        print("  python auto-background-removal.py input.jpg output.jpg")

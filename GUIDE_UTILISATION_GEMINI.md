# 🎯 **Guide d'Utilisation - Système Gemini Intégré**

## ✅ **Configuration Réussie**
- ✅ Google Gemini Vision API fonctionnelle 
- ✅ Détourage automatique opérationnel
- ✅ Reconnaissance de produits de luxe validée
- ✅ Pipeline complet testé avec succès

---

## 🚀 **Mode d'Emploi Complet**

### **📁 Étape 1: Placer vos Images**
```bash
# Copiez vos images (n'importe quel nom) dans:
images-sources/
```

**Formats supportés:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.bmp`

### **🔑 Étape 2: Configurer la Clé API** 
```bash
export GEMINI_API_KEY=AIzaSyDQOhcmEMBorfcrKDQCKKH0wWB9WoBTjhI
```

### **🤖 Étape 3: Lancement Automatique**
```bash
# Mode Intelligence Artificielle (RECOMMANDÉ)
GEMINI_API_KEY=AIzaSyDQOhcmEMBorfcrKDQCKKH0wWB9WoBTjhI python3 scripts/auto-background-removal.py --gemini

# Mode Simple (sans IA)
python3 scripts/auto-background-removal.py
```

---

## 🎨 **Ce que fait le Script**

### **Automatiquement pour chaque image:**
1. **📸 Reconnaissance IA** → Identifie marque/modèle (ex: `hermes-kelly-32`)
2. **✂️ Détourage** → Supprime l'arrière-plan avec précision
3. **🎨 Fond blanc** → Ajoute fond uniforme professionnel  
4. **📏 Redimensionnement** → Taille standard 400x400px
5. **💾 Sauvegarde** → Optimisation qualité JPEG

### **Exemples de Reconnaissance:**
- `chanel-tweed-jacket.jpg`
- `hermes-kelly-32.jpg` 
- `louboutin-so-kate.jpg`
- `dior-book-tote.jpg`

---

## 📂 **Résultat Final**

```
images-processed/
├── hermes-kelly-32.jpg          ← Identifié automatiquement
├── chanel-tweed-jacket.jpg      ← Reconnaissance IA
├── louboutin-so-kate.jpg        ← Nommage intelligent
└── dior-book-tote.jpg           ← Parfait pour marketplace
```

**Chaque image est prête pour intégration directe dans le marketplace !**

---

## 🎯 **Votre Prochaine Action**

1. **Placez vos images** dans `images-sources/`
2. **Lancez la commande** avec `--gemini`  
3. **Récupérez vos images** dans `images-processed/`
4. **Intégrez-les** dans le marketplace

**C'est tout ! Le système est 100% opérationnel.**

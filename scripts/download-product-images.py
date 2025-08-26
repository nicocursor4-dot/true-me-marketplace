#!/usr/bin/env python3
"""
Script pour télécharger de vraies images de produits de luxe sur fond blanc
depuis Unsplash API et les organiser dans la structure de dossiers.
"""

import os
import requests
import json
from PIL import Image, ImageOps
import io
from rembg import remove
import time

# Configuration Unsplash (clé d'accès gratuite)
UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"  # À remplacer par une vraie clé
BASE_URL = "https://api.unsplash.com"

# Structure des produits avec mots-clés de recherche
PRODUCTS = {
    "notre-selection": {
        "hermes/femme": {
            "birkin-35-black.jpg": "hermes birkin bag black leather"
        },
        "chanel/femme": {
            "255-classic-black.jpg": "chanel 2.55 quilted bag black"
        },
        "cartier/femme": {
            "love-bracelet-gold.jpg": "cartier love bracelet gold jewelry"
        },
        "louisvuitton/homme": {
            "keepall-55-monogram.jpg": "louis vuitton keepall bag monogram"
        },
        "dior/femme": {
            "saddle-bag-oblique.jpg": "dior saddle bag oblique canvas"
        }
    },
    "sacs": {
        "chanel/femme": {
            "boy-bag-quilted-black.jpg": "chanel boy bag quilted black leather"
        },
        "hermes/femme": {
            "kelly-32-epsom-rouge.jpg": "hermes kelly bag red leather epsom"
        },
        "louisvuitton/femme": {
            "neverfull-mm-damier.jpg": "louis vuitton neverfull damier canvas"
        },
        "dior/femme": {
            "book-tote-oblique-navy.jpg": "dior book tote navy blue oblique"
        },
        "gucci/femme": {
            "dionysus-gg-supreme.jpg": "gucci dionysus bag gg supreme canvas"
        }
    },
    "bijoux": {
        "vancleef/femme": {
            "alhambra-vintage-gold.jpg": "van cleef arpels alhambra necklace gold"
        },
        "cartier/femme": {
            "panthere-watch-gold.jpg": "cartier panthere watch gold bracelet"
        },
        "tiffany/femme": {
            "t1-ring-diamond.jpg": "tiffany T1 ring diamond white gold"
        },
        "bulgari/femme": {
            "serpenti-bracelet-gold.jpg": "bulgari serpenti bracelet gold jewelry"
        },
        "chanel/femme": {
            "camelia-brooch-white.jpg": "chanel camelia brooch white ceramic"
        }
    },
    "chaussures": {
        "louboutin/femme": {
            "so-kate-120-black.jpg": "christian louboutin so kate pumps black"
        },
        "manoloblahnik/femme": {
            "hangisi-satin-blue.jpg": "manolo blahnik hangisi pumps blue satin"
        },
        "jimmychoo/femme": {
            "romy-100-nude.jpg": "jimmy choo romy pumps nude patent leather"
        },
        "gianvitorossi/femme": {
            "plexi-105-transparent.jpg": "gianvito rossi plexi pumps transparent"
        },
        "chanel/femme": {
            "two-tone-slingback-beige.jpg": "chanel slingback pumps beige black"
        }
    },
    "pret-a-porter": {
        "chanel/femme": {
            "tweed-jacket-pink.jpg": "chanel tweed jacket pink bouclé"
        },
        "dior/femme": {
            "bar-jacket-navy.jpg": "dior bar jacket navy blue wool"
        },
        "hermes/homme": {
            "cashmere-coat-camel.jpg": "hermes cashmere coat camel beige men"
        },
        "gucci/femme": {
            "silk-blouse-floral.jpg": "gucci silk blouse floral print"
        },
        "louisvuitton/homme": {
            "leather-jacket-black.jpg": "louis vuitton leather jacket black men"
        }
    },
    "accessoires": {
        "hermes/femme": {
            "carre-silk-equestrian.jpg": "hermes silk scarf carré equestrian"
        },
        "chanel/femme": {
            "sunglasses-quilted-black.jpg": "chanel sunglasses quilted black"
        },
        "goyard/homme": {
            "passport-holder-black.jpg": "goyard passport holder black canvas"
        },
        "louisvuitton/homme": {
            "belt-initiales-damier.jpg": "louis vuitton belt initiales damier"
        },
        "gucci/homme": {
            "horsebit-loafers-brown.jpg": "gucci horsebit loafers brown leather"
        }
    }
}

def search_unsplash_image(query, per_page=10):
    """Recherche une image sur Unsplash"""
    try:
        url = f"{BASE_URL}/search/photos"
        params = {
            "query": query,
            "per_page": per_page,
            "orientation": "portrait",
            "color": "white",
            "order_by": "relevant"
        }
        headers = {
            "Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"
        }
        
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        
        data = response.json()
        if data["results"]:
            # Prendre la première image
            return data["results"][0]["urls"]["regular"]
        return None
        
    except Exception as e:
        print(f"Erreur recherche Unsplash pour '{query}': {e}")
        return None

def download_image(url, filepath):
    """Télécharge une image depuis une URL"""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Ouvrir l'image avec PIL
        img = Image.open(io.BytesIO(response.content))
        
        # Convertir en RGB si nécessaire
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Redimensionner à 400x400 en gardant les proportions
        img = ImageOps.fit(img, (400, 400), Image.Resampling.LANCZOS)
        
        # Supprimer l'arrière-plan (optionnel - nécessite rembg)
        try:
            img_bytes = io.BytesIO()
            img.save(img_bytes, format='PNG')
            img_bytes.seek(0)
            
            # Supprimer l'arrière-plan
            img_no_bg = remove(img_bytes.getvalue())
            img_final = Image.open(io.BytesIO(img_no_bg))
            
            # Créer un fond blanc
            white_bg = Image.new('RGB', (400, 400), 'white')
            if img_final.mode == 'RGBA':
                white_bg.paste(img_final, mask=img_final.split()[-1])
            else:
                white_bg.paste(img_final)
            
            img = white_bg
            
        except Exception as e:
            print(f"Impossible de supprimer l'arrière-plan pour {filepath}: {e}")
            # Garder l'image originale
        
        # Créer le dossier si nécessaire
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        # Sauvegarder
        img.save(filepath, 'JPEG', quality=90)
        print(f"✅ Image téléchargée: {filepath}")
        return True
        
    except Exception as e:
        print(f"❌ Erreur téléchargement {url}: {e}")
        return False

def fallback_to_placeholder(filepath, product_name, brand):
    """Crée une image placeholder si le téléchargement échoue"""
    try:
        # Créer une image simple avec fond blanc
        img = Image.new('RGB', (400, 400), 'white')
        
        # Créer le dossier si nécessaire
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        # Sauvegarder
        img.save(filepath, 'JPEG', quality=90)
        print(f"📝 Placeholder créé: {filepath}")
        return True
        
    except Exception as e:
        print(f"❌ Erreur création placeholder {filepath}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Début du téléchargement des images produits...")
    
    if UNSPLASH_ACCESS_KEY == "YOUR_UNSPLASH_ACCESS_KEY":
        print("⚠️  Clé Unsplash non configurée. Utilisation d'images placeholder...")
        use_unsplash = False
    else:
        use_unsplash = True
    
    base_path = "../apps/web/public/images/products"
    success_count = 0
    total_count = 0
    
    for category, brands in PRODUCTS.items():
        print(f"\n📁 Traitement catégorie: {category}")
        
        for brand_gender, files in brands.items():
            for filename, search_query in files.items():
                total_count += 1
                filepath = os.path.join(base_path, category, brand_gender, filename)
                
                print(f"\n🔍 Recherche: {search_query}")
                
                if use_unsplash:
                    # Essayer de télécharger depuis Unsplash
                    image_url = search_unsplash_image(search_query)
                    
                    if image_url:
                        if download_image(image_url, filepath):
                            success_count += 1
                            time.sleep(1)  # Respecter les limites de l'API
                            continue
                    
                    # Fallback vers placeholder
                    print(f"⚠️  Pas d'image trouvée, création d'un placeholder...")
                
                # Créer un placeholder
                brand_name = brand_gender.split('/')[0].title()
                product_name = filename.replace('.jpg', '').replace('-', ' ').title()
                
                if fallback_to_placeholder(filepath, product_name, brand_name):
                    success_count += 1
    
    print(f"\n✅ Téléchargement terminé!")
    print(f"📊 Succès: {success_count}/{total_count} images")
    
    if success_count == total_count:
        print("🎉 Toutes les images ont été créées avec succès!")
    else:
        print(f"⚠️  {total_count - success_count} images n'ont pas pu être téléchargées")

if __name__ == "__main__":
    main()

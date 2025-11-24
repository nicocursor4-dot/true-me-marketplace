#!/usr/bin/env python3
"""
Script d'automatisation pour générer des images produits uniformisées sur fond blanc
TRUE ME Marketplace - Product Image Generator
"""

from PIL import Image, ImageDraw, ImageFont
import os
import json
from pathlib import Path

# Configuration
IMAGE_SIZE = (800, 800)
BACKGROUND_COLOR = (255, 255, 255)  # Blanc
TEXT_COLOR = (51, 51, 51)  # Gris foncé élégant
BRAND_COLOR = (197, 151, 88)  # Trueme Gold
BORDER_COLOR = (240, 240, 240)  # Gris clair

# Définition des produits
PRODUCTS = {
    "notre-selection": [
        {"name": "Birkin 35", "brand": "Hermès", "gender": "femme", "price": "AED 45,000", "filename": "birkin-35-black.jpg"},
        {"name": "2.55 Classic", "brand": "Chanel", "gender": "femme", "price": "AED 12,500", "filename": "255-classic-black.jpg"},
        {"name": "Love Bracelet", "brand": "Cartier", "gender": "femme", "price": "AED 8,200", "filename": "love-bracelet-gold.jpg"},
        {"name": "Keepall 55", "brand": "Louis Vuitton", "gender": "homme", "price": "AED 3,800", "filename": "keepall-55-monogram.jpg"},
        {"name": "Saddle Bag", "brand": "Dior", "gender": "femme", "price": "AED 6,200", "filename": "saddle-bag-oblique.jpg"}
    ],
    "sacs": [
        {"name": "Boy Bag", "brand": "Chanel", "gender": "femme", "price": "AED 11,800", "filename": "boy-bag-quilted-black.jpg"},
        {"name": "Kelly 32", "brand": "Hermès", "gender": "femme", "price": "AED 35,000", "filename": "kelly-32-epsom-rouge.jpg"},
        {"name": "Neverfull MM", "brand": "Louis Vuitton", "gender": "femme", "price": "AED 2,800", "filename": "neverfull-mm-damier.jpg"},
        {"name": "Book Tote", "brand": "Dior", "gender": "femme", "price": "AED 4,500", "filename": "book-tote-oblique-navy.jpg"},
        {"name": "Dionysus", "brand": "Gucci", "gender": "femme", "price": "AED 3,200", "filename": "dionysus-gg-supreme.jpg"}
    ],
    "bijoux": [
        {"name": "Alhambra Vintage", "brand": "Van Cleef & Arpels", "gender": "femme", "price": "AED 15,500", "filename": "alhambra-vintage-gold.jpg"},
        {"name": "Panthère Watch", "brand": "Cartier", "gender": "femme", "price": "AED 22,000", "filename": "panthere-watch-gold.jpg"},
        {"name": "T1 Ring", "brand": "Tiffany & Co.", "gender": "femme", "price": "AED 4,800", "filename": "t1-ring-diamond.jpg"},
        {"name": "Serpenti Bracelet", "brand": "Bulgari", "gender": "femme", "price": "AED 18,500", "filename": "serpenti-bracelet-gold.jpg"},
        {"name": "Camélia Brooch", "brand": "Chanel", "gender": "femme", "price": "AED 3,500", "filename": "camelia-brooch-white.jpg"}
    ],
    "chaussures": [
        {"name": "So Kate 120", "brand": "Christian Louboutin", "gender": "femme", "price": "AED 2,800", "filename": "so-kate-120-black.jpg"},
        {"name": "Hangisi Satin", "brand": "Manolo Blahnik", "gender": "femme", "price": "AED 3,200", "filename": "hangisi-satin-blue.jpg"},
        {"name": "Romy 100", "brand": "Jimmy Choo", "gender": "femme", "price": "AED 2,400", "filename": "romy-100-nude.jpg"},
        {"name": "Plexi 105", "brand": "Gianvito Rossi", "gender": "femme", "price": "AED 2,600", "filename": "plexi-105-transparent.jpg"},
        {"name": "Two-Tone Slingback", "brand": "Chanel", "gender": "femme", "price": "AED 3,800", "filename": "two-tone-slingback-beige.jpg"}
    ],
    "pret-a-porter": [
        {"name": "Tweed Jacket", "brand": "Chanel", "gender": "femme", "price": "AED 15,000", "filename": "tweed-jacket-pink.jpg"},
        {"name": "Bar Jacket", "brand": "Dior", "gender": "femme", "price": "AED 12,500", "filename": "bar-jacket-navy.jpg"},
        {"name": "Cashmere Coat", "brand": "Hermès", "gender": "homme", "price": "AED 8,500", "filename": "cashmere-coat-camel.jpg"},
        {"name": "Silk Blouse", "brand": "Gucci", "gender": "femme", "price": "AED 2,800", "filename": "silk-blouse-floral.jpg"},
        {"name": "Leather Jacket", "brand": "Louis Vuitton", "gender": "homme", "price": "AED 6,200", "filename": "leather-jacket-black.jpg"}
    ],
    "accessoires": [
        {"name": "Carré Silk Scarf", "brand": "Hermès", "gender": "femme", "price": "AED 1,200", "filename": "carre-silk-equestrian.jpg"},
        {"name": "Quilted Sunglasses", "brand": "Chanel", "gender": "femme", "price": "AED 1,800", "filename": "sunglasses-quilted-black.jpg"},
        {"name": "Passport Holder", "brand": "Goyard", "gender": "homme", "price": "AED 850", "filename": "passport-holder-black.jpg"},
        {"name": "Initiales Belt", "brand": "Louis Vuitton", "gender": "homme", "price": "AED 1,500", "filename": "belt-initiales-damier.jpg"},
        {"name": "Horsebit Loafers", "brand": "Gucci", "gender": "homme", "price": "AED 2,200", "filename": "horsebit-loafers-brown.jpg"}
    ]
}

def create_placeholder_image(product, category):
    """Crée une image placeholder élégante pour un produit"""
    
    # Créer l'image de base
    img = Image.new('RGB', IMAGE_SIZE, BACKGROUND_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Ajouter une bordure subtile
    border_width = 2
    draw.rectangle([border_width, border_width, IMAGE_SIZE[0]-border_width, IMAGE_SIZE[1]-border_width], 
                  outline=BORDER_COLOR, width=border_width)
    
    # Essayer de charger des polices, sinon utiliser la police par défaut
    try:
        font_brand = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        font_name = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
        font_price = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        font_category = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    except:
        font_brand = ImageFont.load_default()
        font_name = ImageFont.load_default()
        font_price = ImageFont.load_default()
        font_category = ImageFont.load_default()
    
    # Calculer les positions pour centrer le texte
    center_x = IMAGE_SIZE[0] // 2
    center_y = IMAGE_SIZE[1] // 2
    
    # Texte de la marque (en haut, couleur dorée)
    brand_bbox = draw.textbbox((0, 0), product["brand"], font=font_brand)
    brand_width = brand_bbox[2] - brand_bbox[0]
    draw.text((center_x - brand_width//2, center_y - 80), product["brand"], 
              fill=BRAND_COLOR, font=font_brand)
    
    # Nom du produit (centre)
    name_bbox = draw.textbbox((0, 0), product["name"], font=font_name)
    name_width = name_bbox[2] - name_bbox[0]
    draw.text((center_x - name_width//2, center_y - 20), product["name"], 
              fill=TEXT_COLOR, font=font_name)
    
    # Prix (en bas)
    price_bbox = draw.textbbox((0, 0), product["price"], font=font_price)
    price_width = price_bbox[2] - price_bbox[0]
    draw.text((center_x - price_width//2, center_y + 40), product["price"], 
              fill=TEXT_COLOR, font=font_price)
    
    # Catégorie et genre (tout en bas)
    category_text = f"{category.upper()} • {product['gender'].upper()}"
    category_bbox = draw.textbbox((0, 0), category_text, font=font_category)
    category_width = category_bbox[2] - category_bbox[0]
    draw.text((center_x - category_width//2, center_y + 100), category_text, 
              fill=(150, 150, 150), font=font_category)
    
    # Ajouter un logo/icône stylisé TRUE ME (optionnel)
    draw.text((40, IMAGE_SIZE[1] - 60), "TRUE ME", fill=BRAND_COLOR, font=font_category)
    draw.text((40, IMAGE_SIZE[1] - 40), "CERTIFIED", fill=(150, 150, 150), font=font_category)
    
    return img

def generate_all_images():
    """Génère toutes les images produits"""
    
    base_path = Path("../apps/web/public/images/products")
    generated_count = 0
    
    print("🎨 Génération des images produits TRUE ME...")
    print(f"📁 Dossier de destination: {base_path.absolute()}")
    
    for category, products in PRODUCTS.items():
        print(f"\n📦 Catégorie: {category}")
        
        for product in products:
            # Déterminer le chemin complet
            brand_folder = product["brand"].lower().replace(" ", "").replace("&", "").replace(".", "")
            
            # Mappings spéciaux pour les marques
            brand_mappings = {
                "vancleefarpels": "vancleef",
                "tiffanyco": "tiffany",
                "christianlouboutin": "louboutin",
                "manoloblahnik": "manoloblahnik",
                "jimmychoo": "jimmychoo",
                "gianvitorossi": "gianvitorossi",
                "louisvuitton": "louisvuitton"
            }
            
            if brand_folder in brand_mappings:
                brand_folder = brand_mappings[brand_folder]
            
            # Créer le chemin du fichier
            if category == "notre-selection":
                # Pour notre-selection, mapper vers les vraies catégories
                if "bag" in product["name"].lower() or "sac" in product["name"].lower():
                    file_path = base_path / category / brand_folder / product["gender"] / product["filename"]
                else:
                    file_path = base_path / category / brand_folder / product["gender"] / product["filename"]
            else:
                file_path = base_path / category / brand_folder / product["gender"] / product["filename"]
            
            # Créer les dossiers si nécessaire
            file_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Générer l'image
            img = create_placeholder_image(product, category)
            img.save(file_path, "JPEG", quality=95)
            
            print(f"  ✅ {product['brand']} {product['name']} -> {file_path.name}")
            generated_count += 1
    
    print(f"\n🎉 {generated_count} images générées avec succès!")
    print("🔥 Images prêtes pour TRUE ME Marketplace")

if __name__ == "__main__":
    generate_all_images()

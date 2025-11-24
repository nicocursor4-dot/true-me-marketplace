// Collection virtuelle de l'utilisateur - synchronisée entre dashboard et brands

export interface CollectionItem {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  purchaseDate: string;
  purchasePrice: number;
  currentValue: number;
  evolution: string;
  evolutionPercent: number;
}

export interface HistoryTransaction {
  id: number;
  type: "Achat" | "Vente";
  article: string;
  brand: string;
  category: string;
  image: string;
  date: string;
  prix: number;
  evolution: string;
  evolutionPercent: number;
}

// Collection de l'utilisateur
export const userCollection: CollectionItem[] = [
  {
    id: 1,
    name: "Kelly 32",
    brand: "Hermès",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/herohermes.png",
    purchaseDate: "15 Janv 2024",
    purchasePrice: 7589,
    currentValue: 8500,
    evolution: "+12%",
    evolutionPercent: 12
  },
  {
    id: 2,
    name: "Neverfull MM",
    brand: "Louis Vuitton",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/GRAND SAC LV 1.svg",
    purchaseDate: "03 Fév 2024",
    purchasePrice: 1890,
    currentValue: 2100,
    evolution: "+11%",
    evolutionPercent: 11
  },
  {
    id: 3,
    name: "Boy Bag",
    brand: "Chanel",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/herochanel.png",
    purchaseDate: "28 Fév 2024",
    purchasePrice: 3900,
    currentValue: 4200,
    evolution: "+8%",
    evolutionPercent: 8
  },
  {
    id: 4,
    name: "Love Bracelet",
    brand: "Cartier",
    category: "Bijoux",
    image: "/images/products/PHOTOS SITE TM/herobijoux.png",
    purchaseDate: "20 Mars 2024",
    purchasePrice: 5900,
    currentValue: 6200,
    evolution: "+5%",
    evolutionPercent: 5
  },
  {
    id: 5,
    name: "Alhambra Bracelet",
    brand: "Van Cleef & Arpels",
    category: "Bijoux",
    image: "/images/products/PHOTOS SITE TM/herobijoux.png",
    purchaseDate: "12 Avr 2024",
    purchasePrice: 3200,
    currentValue: 3450,
    evolution: "+8%",
    evolutionPercent: 8
  },
  {
    id: 6,
    name: "Saddle Bag",
    brand: "Dior",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/herodior.png",
    purchaseDate: "05 Mai 2024",
    purchasePrice: 2850,
    currentValue: 3100,
    evolution: "+9%",
    evolutionPercent: 9
  },
  {
    id: 7,
    name: "Book Tote Small",
    brand: "Dior",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/herodior.png",
    purchaseDate: "18 Mai 2024",
    purchasePrice: 2950,
    currentValue: 3200,
    evolution: "+8%",
    evolutionPercent: 8
  },
  {
    id: 8,
    name: "Hangisi 70",
    brand: "Manolo Blahnik",
    category: "Chaussures",
    image: "/images/products/PHOTOS SITE TM/CHAUSSURES/CL corneille velours 35 1_2 Hauteur Talon 10 cm/CL Corneille 2.svg",
    purchaseDate: "25 Juin 2024",
    purchasePrice: 890,
    currentValue: 950,
    evolution: "+7%",
    evolutionPercent: 7
  },
  {
    id: 9,
    name: "Romy 100",
    brand: "Jimmy Choo",
    category: "Chaussures",
    image: "/images/products/PHOTOS SITE TM/CHAUSSURES/JC taille 37 Hauteur talon 8 cm/TM JC  1.svg",
    purchaseDate: "10 Juil 2024",
    purchasePrice: 650,
    currentValue: 710,
    evolution: "+9%",
    evolutionPercent: 9
  },
  {
    id: 10,
    name: "Horsebit 1953",
    brand: "Gucci",
    category: "Chaussures",
    image: "/images/products/PHOTOS SITE TM/CHAUSSURES/Basket Gucci homme 45/GUCCI Homme  1.svg",
    purchaseDate: "22 Août 2024",
    purchasePrice: 780,
    currentValue: 850,
    evolution: "+9%",
    evolutionPercent: 9
  },
  {
    id: 11,
    name: "Keepall Bandoulière 50",
    brand: "Louis Vuitton",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/SAC DE VOYAGE NOIR ET GRIS/SAC KEEPALL BANDOULIERE 50/SAC V LV 1.svg",
    purchaseDate: "05 Sept 2024",
    purchasePrice: 2250,
    currentValue: 2400,
    evolution: "+7%",
    evolutionPercent: 7
  },
  {
    id: 12,
    name: "Mini Dionysus",
    brand: "Gucci",
    category: "Sacs",
    image: "/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/GUCCI/LUNETTE GUCCI 1.svg",
    purchaseDate: "15 Sept 2024",
    purchasePrice: 1890,
    currentValue: 2050,
    evolution: "+8%",
    evolutionPercent: 8
  }
];

// Format date in French short month style used across the app
const FR_MONTHS = ['Janv', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
const formatFrDate = (d: Date) => {
  const day = d.getDate();
  const monthLabel = FR_MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day < 10 ? '0' + day : day} ${monthLabel} ${year}`;
};

// Generate a demo history aligned with the last 12 months (based on userCollection)
export const userHistory: HistoryTransaction[] = (() => {
  const now = new Date('2024-11-24T12:00:00Z'); // Fixed date for consistency
  const months = 12;
  const generated: HistoryTransaction[] = [];

  // Create a pool of items to pick from randomly
  const itemPool = [...userCollection];

  // Generate ~2-3 transactions per month to populate the chart better
  for (let i = 0; i < months; i++) {
    const transactionsInMonth = Math.floor(Math.random() * 2) + 1; // 1 to 2 items per month

    for (let j = 0; j < transactionsInMonth; j++) {
      const itemIndex = Math.floor(Math.random() * itemPool.length);
      const item = itemPool[itemIndex];

      // Randomize day
      const day = Math.floor(Math.random() * 28) + 1;
      const date = new Date(
        now.getFullYear(),
        now.getMonth() - (months - 1 - i),
        day
      );

      // Randomize price slightly (+- 10%) to simulate different conditions/sellers
      const priceVariation = 1 + (Math.random() * 0.2 - 0.1);
      const randomizedPrice = Math.round(item.purchasePrice * priceVariation);

      generated.push({
        id: (i * 10) + j + 1,
        type: "Achat",
        article: item.name,
        brand: item.brand,
        category: item.category,
        image: item.image,
        date: formatFrDate(date),
        prix: randomizedPrice,
        evolution: `+${item.evolutionPercent}%`,
        evolutionPercent: item.evolutionPercent
      });
    }
  }

  // Sort by date descending (most recent first)
  return generated.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split(' ');
    const [dayB, monthB, yearB] = b.date.split(' ');
    const dateA = new Date(parseInt(yearA), FR_MONTHS.indexOf(monthA), parseInt(dayA));
    const dateB = new Date(parseInt(yearB), FR_MONTHS.indexOf(monthB), parseInt(dayB));
    return dateB.getTime() - dateA.getTime();
  });
})();

export const getTopItems = (count: number = 3): CollectionItem[] => {
  return [...userCollection]
    .sort((a, b) => b.currentValue - a.currentValue)
    .slice(0, count);
};

// Fonction pour calculer la valeur totale de la collection
export const getTotalCollectionValue = (): number => {
  return userCollection.reduce((sum, item) => sum + item.currentValue, 0);
};

// Fonction pour calculer l'évolution moyenne
export const getAverageEvolution = (): number => {
  const avg = userCollection.reduce((sum, item) => sum + item.evolutionPercent, 0) / userCollection.length;
  return Math.round(avg);
};

// Fonction pour obtenir les données du graphique (12 derniers mois)
export const getCollectionChartData = (): { values: number[], labels: string[] } => {
  // Simuler l'évolution de la collection sur 12 mois
  // Basé sur la valeur actuelle et l'évolution moyenne
  const totalValue = getTotalCollectionValue();
  const avgEvolution = getAverageEvolution() / 100;

  const monthlyData: number[] = [];
  const monthLabels: string[] = [];
  const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

  const now = new Date('2024-11-24T12:00:00Z'); // Fixed date for consistency

  for (let i = 11; i >= 0; i--) {
    const monthValue = totalValue / Math.pow(1 + avgEvolution / 12, i);
    monthlyData.push(Math.round(monthValue));

    // Calculer le mois correspondant
    const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
    monthLabels.push(monthNames[monthDate.getMonth()]);
  }

  // Fallback: if data ends up to all zeros for any reason, synthesize a smooth demo curve
  const allZero = monthlyData.every(v => v === 0);
  if (allZero) {
    const base = Math.max(totalValue, 1000);
    const synth: number[] = [];
    for (let i = 0; i < 12; i++) {
      const wave = Math.sin(i / 2) * 0.08; // ±8%
      const jitter = ((i * 7) % 11 - 5) / 200; // ±2.5%
      synth.push(Math.round(base * (1 + wave + jitter)));
    }
    return { values: synth, labels: monthLabels };
  }

  return { values: monthlyData, labels: monthLabels };
};

// Fonction pour filtrer l'historique par durée (en mois)
export const getFilteredHistory = (months: number): HistoryTransaction[] => {
  const cutoffDate = new Date('2024-11-24T12:00:00Z'); // Fixed date for consistency
  cutoffDate.setMonth(cutoffDate.getMonth() - months);

  // Mapping des mois français
  const monthMap: { [key: string]: number } = {
    'Janv': 0, 'Fév': 1, 'Mars': 2, 'Avr': 3, 'Mai': 4, 'Juin': 5,
    'Juil': 6, 'Août': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Déc': 11
  };

  return userHistory.filter(transaction => {
    try {
      const [day, month, year] = transaction.date.split(' ');
      const monthNum = monthMap[month];
      if (monthNum === undefined) return true; // Afficher si parsing échoue

      const transactionDate = new Date(parseInt(year), monthNum, parseInt(day));
      return transactionDate >= cutoffDate;
    } catch {
      return true; // Afficher si parsing échoue
    }
  });
};

// Fonction pour obtenir le nombre d'articles
export const getTotalArticles = (): number => {
  return userCollection.length;
};

// Fonction pour obtenir le nombre de commandes (achats dans l'historique)
export const getTotalPurchases = (): number => {
  return userHistory.filter(t => t.type === "Achat").length;
};

// Fonction pour regrouper la collection par marque
export interface BrandCollection {
  brand: string;
  items: CollectionItem[];
  totalValue: number;
  totalItems: number;
  avgEvolution: number;
  tier: "Bronze" | "Silver" | "Gold" | "Platinum";
  progressPct: number;
}

export const getCollectionByBrand = (): BrandCollection[] => {
  const brandMap = new Map<string, CollectionItem[]>();

  // Regrouper par marque
  userCollection.forEach(item => {
    if (!brandMap.has(item.brand)) {
      brandMap.set(item.brand, []);
    }
    brandMap.get(item.brand)!.push(item);
  });

  // Calculer les stats par marque
  const brandCollections: BrandCollection[] = [];
  brandMap.forEach((items, brand) => {
    const totalValue = items.reduce((sum, item) => sum + item.currentValue, 0);
    const avgEvolution = items.reduce((sum, item) => sum + item.evolutionPercent, 0) / items.length;

    // Déterminer le tier basé sur le nombre d'articles et la valeur
    let tier: "Bronze" | "Silver" | "Gold" | "Platinum" = "Bronze";
    let progressPct = (items.length / 5) * 100; // 5 articles = 100%

    if (items.length >= 5 && totalValue >= 15000) {
      tier = "Platinum";
      progressPct = 100;
    } else if (items.length >= 3 && totalValue >= 8000) {
      tier = "Gold";
      progressPct = Math.min(80, (items.length / 5) * 100);
    } else if (items.length >= 2 && totalValue >= 4000) {
      tier = "Silver";
      progressPct = Math.min(60, (items.length / 5) * 100);
    } else {
      tier = "Bronze";
      progressPct = Math.min(30, (items.length / 5) * 100);
    }

    brandCollections.push({
      brand,
      items,
      totalValue,
      totalItems: items.length,
      avgEvolution: Math.round(avgEvolution),
      tier,
      progressPct: Math.round(progressPct)
    });
  });

  // Trier par valeur totale
  return brandCollections.sort((a, b) => b.totalValue - a.totalValue);
};


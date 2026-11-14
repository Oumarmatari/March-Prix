window.marketPrixData = {
  markets: [
    { id: "central", name: "Marché Central" },
    { id: "dembe", name: "Marché de Dembé" },
  ],
  products: [
    {
      name: "Tomates",
      category: "Fruits & légumes",
      emoji: "🍅",
      unit: "le tas",
      prices: [
        { marketId: "central", price: 500 },
        { marketId: "dembe", price: 400 },
      ],
    },
    {
      name: "Oignons",
      category: "Fruits & légumes",
      emoji: "🧅",
      unit: "le tas",
      prices: [
        { marketId: "central", price: 700 },
        { marketId: "dembe", price: 600 },
      ],
    },
    {
      name: "Riz",
      category: "Céréales",
      emoji: "🍚",
      unit: "le kg",
      prices: [
        { marketId: "central", price: 800 },
        { marketId: "dembe", price: 750 },
      ],
    },
    {
      name: "Mil",
      category: "Céréales",
      emoji: "🌾",
      unit: "le kg",
      prices: [
        { marketId: "central", price: 650 },
        { marketId: "dembe", price: 700 },
      ],
    },
    {
      name: "Huile",
      category: "Épicerie",
      emoji: "🫗",
      unit: "la bouteille",
      prices: [
        { marketId: "central", price: 1500 },
        { marketId: "dembe", price: 1400 },
      ],
    },
    {
      name: "Bananes",
      category: "Fruits & légumes",
      emoji: "🍌",
      unit: "le régime",
      prices: [
        { marketId: "central", price: 1200 },
        { marketId: "dembe", price: 1000 },
      ],
    },
  ],
};

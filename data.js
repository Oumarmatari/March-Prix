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
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=640&q=80",
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
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=640&q=80",
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
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=640&q=80",
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
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=640&q=80",
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
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=640&q=80",
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
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=640&q=80",
      unit: "le régime",
      prices: [
        { marketId: "central", price: 1200 },
        { marketId: "dembe", price: 1000 },
      ],
    },
  ],
};

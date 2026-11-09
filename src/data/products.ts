import { Product } from "@/types";

export const products: Product[] = [
  // ===================== 1. PREMIUM BUTTER =====================
  {
    id: "butter-pure-creamery",
    slug: "premium-butter",
    name: "Premium Butter",
    category: "butter",
    categoryLabel: "Butter",
    tagline: "Slow-churned from fresh cream for rich flavour and smooth texture.",
    shortDescription: "Made from 100% grass-fed buffalo and cow milk cream, our premium dairy butter offers a naturally sweet taste, smooth creamy texture, and rich flavour, with no added emulsifiers or artificial additives.",
    fullDescription: "Our Pure Creamery Butter is crafted from fresh cow and buffalo milk cream, delivering a rich taste, smooth texture, and excellent performance for both home and professional kitchens. Carefully processed to maintain its natural dairy goodness, it is ideal for baking, cooking, pastries, croissants, and everyday spreading.",
    images: [
      "/images/Butter salted 2.webp",
      "/images/butter2ndpic.jpg",
      // "/images/Butter salted 3.webp"
    ],
    price: 2150,
    originalPrice: 2450,
    variants: [
      { id: "premium-butter-1kg-unsalted", label: "1kg (Unsalted)", price: 2150, originalPrice: 2450 },
      { id: "premium-butter-1kg-salted", label: "1kg (Salted)", price: 2250, originalPrice: 2550 },
      { id: "premium-butter-10kg-unsalted", label: "10kg (Unsalted)", price: 20500, originalPrice: 23000 },
      { id: "premium-butter-10kg-salted", label: "10kg (Salted)", price: 21500, originalPrice: 24000 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Fresh Dairy Cream: Made from quality cow and buffalo milk cream.",
      "82% Butterfat minimum for superior taste, melting point, and baking volume.",
      "Rich & Creamy: Smooth texture and naturally delicious buttery flavour.",
      "Quality Packaging: Hygienically packed to maintain freshness and quality."
    ],
    benefits: [
      "Rich in natural fat-soluble vitamins A, D, E, and K2.",
      "Contains beneficial conjugated linoleic acid (CLA) from pasture-fed milk.",
      "Promotes healthy satiety and steady cellular energy without blood sugar spikes.",
      "Supports gut health and smooth digestion due to natural butyric acid."
    ],
    uses: [
      "Perfect for baking croissants, cakes, cookies, biscuits, pastries, and other delicious baked goods.",
      "Adds rich, creamy flavour to soups, sauces, gravies, sautéed vegetables, and everyday cooking.",
      "Ideal for spreading on bread, toast, sandwiches, and rolls for a smooth and delicious taste.",
      "Excellent for grilling and roasting meats, seafood, and vegetables, enhancing flavour and richness."
    ],
    faqs: [
      {
        question: "How long does Mz Premium Butter stay fresh?",
        answer: "Stored in the refrigerator below 4°C, it stays peak fresh for up to 60 days. You can also freeze it in its original packaging for up to 6 months."
      },
      {
        question: "Is this butter salted or unsalted?",
        answer: "Available in both Unsalted and Salted variations to give you complete seasoning control over your culinary creations."
      }
    ],
    landscapeBanner: "/images/productpagelandscape.webp",
    portraitFeature: "/images/productpageportraitpremium.webp",
    inStock: true,
    featured: true,
  },

  // ===================== 2. BUTTER =====================
  {
    id: "butter-salted-table",
    slug: "butter",
    name: "Butter",
    category: "butter",
    categoryLabel: "Butter",
    tagline: "Crafted from quality dairy cream for a naturally rich, creamy taste.",
    shortDescription: "Our deliciously creamy butter, made from quality dairy cream to bring rich flavour, smooth texture, and everyday goodness to your breakfast table and favourite recipes.",
    fullDescription: "Our quality dairy butter is made from cow and buffalo milk cream, offering a smooth texture and delicious buttery flavour for everyday use. Carefully processed and hygienically packed, it is a versatile choice for cooking, spreading, sauces, and a variety of culinary applications in homes, restaurants, and commercial kitchens.",
    images: [
      "/images/Butter unsalted 1.webp",
      "/images/productpagelandscapebutter.webp",
      // "/images/Butter unsalted 1.webp"
    ],
    price: 1850,
    originalPrice: 2150,
    variants: [
      { id: "butter-1kg-unsalted", label: "1kg (Unsalted)", price: 1850, originalPrice: 2150 },
      { id: "butter-1kg-salted", label: "1kg (Salted)", price: 1950, originalPrice: 2250 },
      { id: "butter-10kg-unsalted", label: "10kg (Unsalted)", price: 17500, originalPrice: 20000 },
      { id: "butter-10kg-salted", label: "10kg (Salted)", price: 18500, originalPrice: 21000 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Quality Dairy Cream: Made from cow and buffalo milk cream.",
      "Smooth & Creamy Texture: Adds delicious buttery flavour to everyday meals.",
      "Versatile Applications: Ideal for cooking, spreading, sauces, and food preparation."
    ],
    benefits: [
      "Dense in fat-soluble vitamins and active dairy lipids.",
      "100% pure dairy butterfat.",
      "No artificial trans-fats or hydrogenated oils."
    ],
    uses: [
      "Perfect for baking croissants, cakes, cookies, biscuits, pastries, and other delicious baked goods.",
      "Adds rich, creamy flavour to soups, sauces, gravies, sautéed vegetables, and everyday cooking.",
      "Ideal for spreading on bread, toast, sandwiches, and rolls for a smooth and delicious taste.",
      "Excellent for grilling and roasting meats, seafood, and vegetables, enhancing flavour and richness."
    ],
    faqs: [
      {
        question: "What is the difference between Salted and Unsalted?",
        answer: "Unsalted is pure sweet cream butter, great for precise baking. Salted is lightly salted for daily breakfast and savory cooking."
      }
    ],
    landscapeBanner: "/images/productpagelandscapebutter.webp",
    portraitFeature: "/images/productpageportrait.webp",
    inStock: true,
    featured: true,
  },

  // ===================== 3. FRESH CREAM =====================
  {
    id: "cream-rich-velvet",
    slug: "pure-rich-velvet-fresh-cream",
    name: "Whipping Cream",
    category: "cream",
    categoryLabel: "Cream",
    tagline: "Whipped to perfection for a light, smooth texture and rich, creamy indulgence.",
    shortDescription: "Rich and creamy whipping cream, perfect for cakes, pastries, desserts, and decorative toppings. Ideal for bakeries, cafés, and home kitchens seeking smooth texture and delicious flavour. ",
    fullDescription: "Arwa Whipping Cream is a homogenized, non-dairy whipping cream designed to deliver a smooth texture, consistent performance, and excellent whipping results. Its creamy consistency makes it ideal for professional cake decoration, pastries, desserts, and bakery applications",
    images: [
      "/images/arwa cream 2.jpg",
      "/images/arwacream2ndpic.jpg",
      // "/images/arwa cream.webp"
    ],
    price: 550,
    originalPrice: 650,
    variants: [
      { id: "cream-1litre", label: "1 Litre", price: 550, originalPrice: 650 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Homogenized Formulation: Provides a smooth and uniform cream consistency.",
      "Excellent Whipping Performance: Whips into a light, fluffy texture suitable for decorative applications.",
      "Smooth & Creamy Texture: Delivers an appealing finish for cakes and desserts.",
      "Versatile Applications: Ideal for cake frosting, pastries, fillings, mousses, and dessert toppings."
    ],
    benefits: [
      "Dairy-Free Alternative: Suitable for creating creamy desserts without dairy cream.",
      "Energy Source: Provides dietary energy through its fat and carbohydrate con.",
      "Versatile Nutrition: Can be incorporated into a variety of desserts and sweet preparations."
    ],
    uses: [
      "Ideal for cake decoration, frosting, and piping, delivering a smooth and consistent finish.",
      "Perfect for preparing mousses, dessert fillings, pastries, and creamy confectionery creations.",
      "Excellent for topping cakes, cupcakes, waffles, pancakes, and other desserts.",
      "A reliable choice for bakeries, cafés, hotels, and professional kitchens seeking consistent whipping performance."
    ],
    faqs: [
      {
        question: "How should I store Arwa Whipping Cream?",
        answer: "Always store the product frozen at -18°C to maintain its quality and freshness."
      },
      {
        question: "How should I store it after opening?",
        answer: "Once opened, keep the product refrigerated at +4°C to +8°C and consume within 3 days."
      },
      {
        question: "How should I whip Arwa Whipping Cream?",
        answer: "Thaw the cream under refrigerated conditions before use. Whip the chilled cream using a clean mixing bowl and whisk at medium to high speed until it reaches your desired consistency and forms stable peak."
      }
    ],
    landscapeBanner: "/images/arwa cream.webp",
    portraitFeature: "/images/arwa whipping cream.webp",
    inStock: true,
    featured: true,
  },

  // ===================== 4. DESI GHEE (DANEDAR) =====================
  {
    id: "ghee-traditional-danedar",
    slug: "traditional-danedar-desi-ghee",
    name: "Desi Ghee",
    category: "ghee",
    categoryLabel: "Desi Ghee",
    tagline: "Traditionally crafted Desi Ghee with a rich aroma and authentic danedar texture.",
    shortDescription: "Cooked slowly over gentle flame from pure butter until water evaporates and milk solids caramelize to golden perfection. Perfect for traditional cooking, frying, parathas, and everyday Pakistani cuisine.",
    fullDescription: "Our Traditional Desi Ghee is slowly prepared from quality butter to develop its rich aroma, authentic taste, and signature granular texture. Carefully clarified to deliver traditional goodness, it is perfect for cooking, frying, baking, parathas, and traditional sweets.",
    images: [
      "/images/Desi Ghee 2.jpg",
      "/images/Desi Ghee.webp",
      // "/images/Desi Ghee.webp"
    ],
    price: 2800,
    originalPrice: 3200,
    variants: [
      { id: "ghee-1kg", label: "1kg", price: 2800, originalPrice: 3200 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Traditional Preparation: Slowly clarified from quality butter.",
      "Authentic Danedar Texture: Features a distinctive granular consistency.",
      "Rich Aroma & Flavour: Adds traditional taste and richness to meals.",
      "Versatile Cooking: Ideal for frying, sautéing, baking, and everyday cooking."
    ],
    benefits: [
      "Natural Energy: Provides concentrated energy through naturally occurring dairy fats.",
      "Essential Vitamins: Contains fat-soluble vitamins A, E, and K in varying amounts.",
      "Vitamin Absorption: Supports the absorption of fat-soluble vitamins from other foods.",
      "Traditional Nutrition: A time-honoured dairy fat used in traditional cuisines."
    ],
    uses: [
      "Aromatic sizzling tadka for lentils (daal), curries, and haleem.",
      "Brushing over hot crispy parathas, roti, and pulao.",
      "Artisanal panjeeri, suji halwa, and festive holiday mithai.",
      "Healthy daily cooking, sautéing, and high-heat searing."
    ],
    faqs: [
      {
        question: "Does Desi Ghee require refrigeration?",
        answer: "No, refrigeration is generally not required. Store Desi Ghee in a cool, dry place away from direct sunlight and moisture. Always use a clean, dry spoon to maintain freshness and quality."
      },
      {
        question: "Why does Desi Ghee have a granular (Danedar) texture?",
        answer: "The distinctive danedar texture develops during the natural cooling and crystallization of ghee, giving it its traditional grainy consistency and authentic appearance."
      }
    ],
    landscapeBanner: "",
    portraitFeature: "",
    inStock: true,
    featured: true,
  },

  // ===================== 5. BLACK CHOCOLATE CHIP =====================
  {
    id: "choc-artisanal-spread",
    slug: "black-chocolate-chip",
    name: "Black Chocolate Chip",
    category: "chocolate",
    categoryLabel: "Chocolate & Chip",
    tagline: "Rich and indulgent Black Chocolate Chips, crafted with quality cocoa for a deep chocolate flavour and smooth texture.",
    shortDescription: "Rich and indulgent Black Chocolate Chips, crafted with quality cocoa for a deep chocolate flavour and smooth texture.",
    fullDescription: "Our Back Chocolate Chips deliver a rich cocoa flavour and smooth chocolate taste, making them perfect for baking and confectionery. An ideal choice for cookies, brownies, cakes, muffins, desserts, and professional bakery applications.",
    images: [
      "/images/Chocolate chip.webp",
      "/images/chocolatechip2npic.jpg",
      // "/images/Chocolate chip.webp"
    ],
    price: 800,
    originalPrice: 950,
    variants: [
      { id: "black-chip-1kg", label: "1kg", price: 800, originalPrice: 950 },
      { id: "black-chip-25kg", label: "25kg", price: 20000, originalPrice: 23500 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Rich Cocoa Flavour: Deep and delicious chocolate taste",
      "Quality Ingredients: Carefully selected for consistent quality.",
      "Versatile Baking: Ideal for cookies, brownies, cakes, and muffins.",
      "Multiple Applications: Perfect for toppings, fillings, and dessert decoration."
    ],
    benefits: [
      "Antioxidant Content: Cocoa contains naturally occurring antioxidants called flavonoids..",
      "Source of Energy: Provides energy through its carbohydrate and fat content.",
      "Mineral Content: Cocoa naturally contains minerals such as iron, magnesium, and copper.",
      "Cocoa Goodness: Offers naturally occurring cocoa compounds that contribute to its nutritional value."
    ],
    uses: [
      "Perfect for baking chocolate chip cookies, brownies, muffins, cakes, and delicious pastries.",
      "Ideal for melting into chocolate sauces, dessert fillings, and confectionery creations.",
      "Excellent for topping ice creams, waffles, pancakes, and other sweet treats.",
      "A versatile choice for professional bakeries, cafés, chocolatiers, and home baking."
    ],
    faqs: [
      {
        question: "Does Black Chocolate Chip contain palm oil?",
        answer: "Please refer to the product ingredient list for accurate information about palm oil and other vegetable fats. Our ingredient information is provided to help customers make informed choices."
      },
      {
        question: "How should Black Chocolate Chips be stored",
        answer: "Store Dark Chocolate Chips at below 25°C in a cool, dry place, away from direct sunlight and moisture. Keep the packaging tightly sealed after opening to maintain freshness and quality."
      }
    ],
    landscapeBanner: "",
    portraitFeature: "",
    inStock: true,
    featured: true,
  },

  // ===================== 6. WHITE CHOCOLATE CHIP =====================
  {
    id: "choc-chip-dairy-fudge",
    slug: "white-chocolate-chip",
    name: "White Chocolate Chip",
    category: "chocolate",
    categoryLabel: "Chocolate & Chip",
    tagline: "Add a touch of creamy sweetness and elegance to every creation.",
    shortDescription: "Enjoy the smooth, creamy sweetness of White Chocolate Chips, perfect for adding a rich milky flavour to cookies, cakes, brownies, muffins, and desserts.",
    fullDescription: "Crafted for delightful sweetness, our White Chocolate Chips combine a smooth, creamy taste with the richness of skimmed milk. Perfect for cookies, cakes, brownies, pastries, and desserts, they bring a delicious milky touch to every baking creation.",
    images: [
      "/images/White chip.webp",
      "/images/whitechip2ndpic.jpg",
      // "/images/White chip.webp"
    ],
    price: 900,
    originalPrice: 1050,
    variants: [
      { id: "white-chip-1kg", label: "1kg", price: 900, originalPrice: 1050 },
      { id: "white-chip-25kg", label: "25kg", price: 22500, originalPrice: 26000 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Smooth & Creamy Taste: Delivers a delightful milky sweetness in every bite.",
      "Skimmed Milk Goodness: Adds a rich, creamy character to white chocolate flavour.",
      "Versatile Baking Ingredient: Perfect for cookies, cakes, brownies, muffins, and pastries.",
      "Endless Dessert Creations: Ideal for baking, melting, toppings, fillings, and decoration."
    ],
    benefits: [
      "Energy Support: Provides energy through its carbohydrate and fat content",
      "Calcium Contribution: Skimmed milk ingredients may provide calcium.",
      "Protein Content: May contribute small amounts of milk protein.",
      "Enjoyable Treat: Adds creamy sweetness to desserts and baked goods."
    ],
    uses: [
      "Perfect for baking cookies, brownies, muffins, cakes, and delicious pastries with a creamy white chocolate touch.",
      "Ideal for melting into dessert sauces, cake fillings, and confectionery creations.",
      "Excellent for topping ice creams, waffles, pancakes, and other sweet treats.",
      "A versatile choice for professional bakeries, cafés, chocolatiers, and home baking."
    ],
    faqs: [
      {
        question: "Does White Chocolate Chip contain palm oil?",
        answer: "Please refer to the product ingredient list for accurate information about palm oil and other vegetable fats. Our ingredient information is provided to help customers make informed choices.",
      },
      {
        question: "How should White Chocolate Chips be stored?",
        answer: "Store White Chocolate Chips at below 25°C in a cool, dry place, away from direct sunlight and moisture. Keep the packaging tightly sealed after opening to maintain freshness and quality.",
      }
    ],
    landscapeBanner: "",
    portraitFeature: "",
    inStock: true,
    featured: true,
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured || true).slice(0, 8);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === "all") return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id || p.slug === id);
};

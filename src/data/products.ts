import { Product } from "@/types";

export const products: Product[] = [
  // ===================== 1. BUTTER (UNSALTED) =====================
  {
    id: "butter-pure-creamery",
    slug: "pure-creamery-butter",
    name: "Salted Butter",
    category: "butter",
    categoryLabel: "Butter",
    tagline: "Slow-churned from fresh sweet cream for unmatched richness",
    shortDescription: "Crafted exclusively from 100% grass-fed buffalo and cow milk cream. Naturally sweet, dense, and golden with zero artificial yellow food dyes or emulsifiers.",
    fullDescription: "Our signature Mz Pure Creamery Butter represents the quintessential golden standard of dairy craftsmanship. Sourced daily from pasture-raised livestock, the fresh milk is gently separated, allowed to naturally ripen, and churned in small traditional wooden and stainless-steel churns. The result is a silken, spreadable butter with a higher butterfat content of 82%, making it ideal for morning toast, flaky laminated croissants, delicate pastries, and sizzling steaks.",
    images: [
      "/images/Butter salted 2.jpeg",
      "/images/Butter salted 3.jpeg",
      "/images/Butter salted 3.jpeg"
    ],
    price: 950,
    originalPrice: 1100,
    variants: [
      { id: "butter-500g", label: "500g", price: 950, originalPrice: 1100 },
      { id: "butter-1kg", label: "1kg", price: 1850, originalPrice: 2150 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "100% Pure sweet farm cream churned daily in temperature-controlled facilities.",
      "82% Butterfat minimum for superior taste, melting point, and baking volume.",
      "Zero added colors, zero preservatives, zero palm oil or vegetable shortening.",
      "Packaged in parchment wrap inside a food-grade insulated box."
    ],
    benefits: [
      "Rich in natural fat-soluble vitamins A, D, E, and K2.",
      "Contains beneficial conjugated linoleic acid (CLA) from pasture-fed milk.",
      "Promotes healthy satiety and steady cellular energy without blood sugar spikes.",
      "Supports gut health and smooth digestion due to natural butyric acid."
    ],
    uses: [
      "Can be used to season and add depth to soups,stews, and marinades.",
      "Adds rich, savory flavor to a variety of dishes, such as sauteed vegetables, scrambled eggs, and sauces.",
      "Ideal for spreading on bread, rolls, and crackers, providing a flavorful addition to snacks and meals.",
      "Perfect for brushing on meats and vegetables before grilling, enhancing their taste and preventing sticking"
    ],
    faqs: [
      {
        question: "How long does Mz Salted Butter stay fresh?",
        answer: "Stored in the refrigerator below 4°C, it stays peak fresh for up to 60 days. You can also freeze it in its original packaging for up to 6 months."
      },
      {
        question: "Is this butter salted or salted?",
        answer: "This particular variant is salted Sweet Cream butter, giving you complete seasoning control over your dishes and baking."
      },
      {
        question: "How is it delivered chilled?",
        answer: "We dispatch orders in insulated thermal coolers with frozen gel packs via dedicated cold delivery riders so it reaches your doorstep firm and cold."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    featured: true,
  },

  // ===================== 2. BUTTER (UNSALTED) =====================
  {
    id: "butter-salted-table",
    slug: "traditional-salted-table-butter",
    name: "Unsalted Butter",
    category: "butter",
    categoryLabel: "Butter",
    tagline: "Lightly touched with pure Himalayan pink mineral salt",
    shortDescription: "Our slow-churned butter delicately kissed with natural pink rock salt. Irresistibly savory, creamy, and ready to elevate your morning breakfast table.",
    fullDescription: "Blended with micro-crystallized Himalayan pink rock salt, Mz Traditional Salted Table Butter delivers an exquisite equilibrium of pure dairy sweetness and savory depth. It delivers a golden, velvety spread that transforms simple bread, boiled corn, morning eggs, or baked potatoes into a luxury gourmet treat.",
    images: [
      "/images/Butter unsalted 1.jpeg",
      "/images/Butter unsalted 1.jpeg",
      "/images/Butter unsalted 1.jpeg"
    ],
    price: 980,
    originalPrice: 1150,
    variants: [
      { id: "salted-500g", label: "500g", price: 980, originalPrice: 1150 },
      { id: "salted-1kg", label: "1kg", price: 1900, originalPrice: 2200 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Churned fresh every morning from grass-fed whole milk cream.",
      "Seasoned with unrefined Himalayan pink salt rich in 84 trace minerals.",
      "Free from artificial anti-caking agents and chemical preservatives."
    ],
    benefits: [
      "Contains balanced electrolytes from natural unrefined rock salt.",
      "Dense in fat-soluble vitamins and active dairy lipids.",
      "No artificial sodium additives."
    ],
    uses: [
      "Perfect breakfast spread on toast, crumpets, and bagels.",
      "Melting over steamed vegetables, sweet corn cobs, and roasted potatoes.",
      "Basting meats and poultry for deep savory caramelized crusts."
    ],
    faqs: [
      {
        question: "What type of salt is used?",
        answer: "We use exclusively food-grade gourmet Himalayan pink rock salt, providing clean mineral flavor without harsh chemical additives."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    featured: true,
  },

  // ===================== 3. FRESH CREAM (VELVET) =====================
  {
    id: "cream-rich-velvet",
    slug: "pure-rich-velvet-fresh-cream",
    name: "Whipping Cream",
    category: "cream",
    categoryLabel: "Cream",
    tagline: "Silky, thick, and farm-fresh with 40% natural butterfat",
    shortDescription: "Dense, unhomogenized sweet dairy cream collected during first morning skimming. Ideal for whipping into cloud-like peaks, topping fruit chaat, or enriching rich gravies.",
    fullDescription: "Mz Pure Rich Velvet Fresh Cream is the crown jewel of dairy indulgence. Unlike industrial creams that are ultra-pasteurized and chemically stabilized with carrageenan or gums, our fresh cream is gently separated from morning milk and chilled immediately. It retains the delicate floral and sweet notes of pure dairy with a natural 40% milkfat density that whips into stiff, luxurious peaks within minutes.",
    images: [
      "/images/arwa cream.jpg",
      "/images/arwa whipping cream.jpeg",
      "/images/arwa cream.jpg"
    ],
    price: 680,
    originalPrice: 800,
    variants: [
      { id: "cream-500g", label: "500g", price: 680, originalPrice: 800 },
      { id: "cream-1kg", label: "1kg", price: 1300, originalPrice: 1550 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Skimmed fresh daily from pure whole farm milk.",
      "40% natural dairy butterfat content for stable, glossy whipping.",
      "Zero thickeners, zero starch, zero gelatins or emulsifiers.",
      "Delivered cold-chain in tamper-evident sealed tubs."
    ],
    benefits: [
      "Provides wholesome clean calories and essential dairy nutrients.",
      "Rich in calcium and natural vitamin A for healthy skin and eyes.",
      "Natural clean flavor without stale canned or UHT metallic aftertastes."
    ],
    uses: [
      "Whip with a hint of vanilla and icing sugar for cake frosting and dessert tarts.",
      "Fold into authentic fruit chaat, mango mousse, and trifles.",
      "Stir into Mughlai gravies, butter chicken, dal makhani, and pasta alfredo.",
      "Pour over freshly sliced seasonal strawberries or peaches."
    ],
    faqs: [
      {
        question: "Does this whip into stiff peaks?",
        answer: "Yes! Because of its natural 40% fat content, ensure the cream and mixing bowl are thoroughly chilled before whipping. Stiff peaks form in 3 to 4 minutes."
      },
      {
        question: "How long can I keep it in the fridge?",
        answer: "Because our fresh cream has no chemical stabilizers or chemical preservatives, keep it refrigerated between 2°C to 4°C and enjoy within 10 days of opening."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    featured: true,
  },

  // ===================== 4. FRESH CREAM (FARM MALAI) =====================
  // {
  //   id: "cream-malai-clotted",
  //   slug: "traditional-farm-malai-cream",
  //   name: "Mz Traditional Farm Malai (Heavy Clotted)",
  //   category: "cream",
  //   categoryLabel: "Cream",
  //   tagline: "Authentic slow-simmered thick creamy malai layers",
  //   shortDescription: "Crafted in the authentic heritage style by gently simmering fresh grass-fed buffalo milk in wide shallow pans. Golden crust and dense layers.",
  //   fullDescription: "For lovers of traditional desi breakfast and royal festive desserts, Mz Traditional Farm Malai is an artisanal wonder. We slow-simmer rich buffalo milk over gentle embers, allowing the thick cream layer to slowly rise and form dense, golden, crusted folds. Thick, rich, and unforgettable with warm sheermal or honey.",
  //   images: [
  //     "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  //     "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  //     "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
  //   ],
  //   price: 750,
  //   originalPrice: 900,
  //   variants: [
  //     { id: "malai-500g", label: "500g", price: 750, originalPrice: 900 },
  //     { id: "malai-1kg", label: "1kg", price: 1450, originalPrice: 1750 },
  //   ],
  //   rating: 0,
  //   reviewsCount: 0,
  //   reviews: [],
  //   about: [
  //     "Slow-simmered in wide vessels for natural malai fold formation.",
  //     "Crafted exclusively from high-fat pure buffalo milk.",
  //     "Thick clotted consistency that holds its shape."
  //   ],
  //   benefits: [
  //     "Natural energy booster packed with healthy dairy fats.",
  //     "Rich in natural fat-soluble fat-binding nutrients.",
  //     "100% natural without artificial gum emulsifiers."
  //   ],
  //   uses: [
  //     "Classic breakfast with tandoori naan, sheermal, jaggery, or organic honey.",
  //     "Base for royal Shahi kheer, rasmalai, and rabri desserts.",
  //     "Traditional Pakistani sweet dishes and gajar ka halwa topping."
  //   ],
  //   faqs: [
  //     {
  //       question: "Is this sweet or unsweetened?",
  //       answer: "It is completely pure, unsweetened, and natural with only the subtle inherent sweetness of fresh milk."
  //     }
  //   ],
  //   landscapeBanner: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80",
  //   portraitFeature: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  //   inStock: true,
  //   featured: true,
  // },

  // ===================== 5. DESI GHEE (DANEDAR) =====================
  {
    id: "ghee-traditional-danedar",
    slug: "traditional-danedar-desi-ghee",
    name: "Desi Ghee",
    category: "ghee",
    categoryLabel: "Desi Ghee",
    tagline: "Slow-simmered golden grain ghee with signature intoxicating aroma",
    shortDescription: "Cooked slowly over gentle flame from pure cultured butter until water evaporates and milk solids caramelize to golden perfection. Distinct granular (danedar) texture.",
    fullDescription: "Mz Traditional Danedar Desi Ghee is celebrated for its hypnotic nutty fragrance, luminous golden amber color, and the signature crystalline granular texture cherished by desi culinary purists. Prepared by slowly clarifying our hand-churned butter, every batch is simmered to precise caramelization point, releasing authentic aromas that fill the home. Lactose-free, nutrient-dense, and shelf-stable without refrigeration.",
    images: [
      "/images/Desi Ghee.jpeg",
      "/images/Desi Ghee.jpeg",
      "/images/Desi Ghee.jpeg"
    ],
    price: 1850,
    originalPrice: 2200,
    variants: [
      { id: "ghee-500g", label: "500g", price: 1000, originalPrice: 1200 },
      { id: "ghee-1kg", label: "1kg", price: 1850, originalPrice: 2200 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Slow-cooked from pure butter churned from farm-fresh grass-fed milk.",
      "High smoke point (250°C / 485°F) for healthy, clean cooking without burning.",
      "Lactose-free and casein-free due to complete clarified separation.",
      "Rich golden grain structure (danedar) preserved in glass jars."
    ],
    benefits: [
      "Abundant in butyrate to nourish the intestinal lining and support immunity.",
      "Boosts metabolic absorption of turmeric, spices, and fat-soluble vitamins.",
      "High thermal stability prevents harmful oxidation during high-heat cooking.",
      "Ancient Ayurvedic superfood for joint vitality, stamina, and mental clarity."
    ],
    uses: [
      "Aromatic sizzling tadka for lentils (daal), curries, and haleem.",
      "Brushing over hot crispy parathas, roti, and pulao.",
      "Artisanal panjeeri, suji halwa, and festive holiday mithai.",
      "Healthy daily cooking, sautéing, and high-heat searing."
    ],
    faqs: [
      {
        question: "Does Mz Desi Ghee require refrigeration?",
        answer: "No refrigeration is required! Pure clarified desi ghee is naturally shelf-stable for over 12 months when stored in a cool, dark pantry. Always use a dry, clean spoon."
      },
      {
        question: "Why is the texture granular (danedar)?",
        answer: "The granular crystals are the hallmark of authentic, slowly cooled, pure ghee made from pasture-raised milk butter. Industrial processed ghee lacks this natural grain."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    featured: true,
  },

  // ===================== 6. DESI GHEE (BILONA COW) =====================
  // {
  //   id: "ghee-bilona-cow",
  //   slug: "pure-bilona-cow-desi-ghee",
  //   name: "Mz Pure Bilona Cow Desi Ghee",
  //   category: "ghee",
  //   categoryLabel: "Desi Ghee",
  //   tagline: "Vedic bilona churned from grass-fed whole cow milk yogurt",
  //   shortDescription: "Produced using the revered ancient 5-step Bilona method. Yogurt is hand-churned with bi-directional wooden whisks, then wood-fire simmered for therapeutic purity.",
  //   fullDescription: "Mz Pure Bilona Cow Desi Ghee is prepared strictly adhering to ancient Vedic traditions. We take whole grass-fed cow milk, culture it into fresh active yogurt (dahi), and churn it using traditional wooden bilonas to separate the butter (makkhan). This cultured butter is then gently simmered over controlled low flame, yielding a bright golden, light, easily digestible ghee with therapeutic properties.",
  //   images: [
  //     "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80",
  //     "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=900&q=80",
  //     "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80"
  //   ],
  //   price: 2150,
  //   originalPrice: 2500,
  //   variants: [
  //     { id: "bilona-500g", label: "500g", price: 1150, originalPrice: 1350 },
  //     { id: "bilona-1kg", label: "1kg", price: 2150, originalPrice: 2500 },
  //   ],
  //   rating: 0,
  //   reviewsCount: 0,
  //   reviews: [],
  //   about: [
  //     "Made from cultured whole cow milk yogurt, not direct cream separation.",
  //     "Traditional two-way bilona churning preserves delicate nutritional enzymes.",
  //     "Natural golden beta-carotene color from green grass pasture diet.",
  //     "Packaged in heavy amber glass jars to protect from light degradation."
  //   ],
  //   benefits: [
  //     "Easier on the stomach and digestion compared to direct cream ghee.",
  //     "Supports healthy cholesterol balance and cardiovascular function.",
  //     "Nourishes memory, brain development, and restorative sleep."
  //   ],
  //   uses: [
  //     "Take 1 teaspoon in morning warm water or herbal tea.",
  //     "Pour over steaming basmati rice, lentils, and khichdi.",
  //     "Gentle massage for infants, dry skin, and soothing joints."
  //   ],
  //   faqs: [
  //     {
  //       question: "How is Bilona ghee different from regular cream ghee?",
  //       answer: "Regular commercial ghee is made directly by heating raw cream. Bilona ghee first converts milk into cultured yogurt, churns the yogurt into butter, and clarifies the butter. It requires nearly 25-30 liters of milk for 1 kg of ghee!"
  //     }
  //   ],
  //   landscapeBanner: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1600&q=80",
  //   portraitFeature: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=900&q=80",
  //   inStock: true,
  //   featured: true,
  // },

  // ===================== 7. CHOCOLATE (ARTISANAL SPREAD) =====================
  {
    id: "choc-artisanal-spread",
    slug: "artisanal-chocolate-butter-spread",
    name: "Mz Chocolate Chips",
    category: "chocolate",
    categoryLabel: "Chocolate & Chip",
    tagline: "Velvety farm butter whipped with premium roasted Belgian cocoa",
    shortDescription: "A gourmet fusion of our signature sweet cream butter, dark Dutch-processed cocoa, and real cane sugar. Zero palm oil, zero artificial hydrogenated fats.",
    fullDescription: "Mz Artisanal Chocolate Butter Spread is the delicious antidote to industrial palm-oil heavy hazelnut spreads. We blend our fresh sweet cream butter with fine roasted Dutch-processed cocoa, pure vanilla beans, and unrefined cane sugar. It spreads like molten silk at room temperature, offering deep chocolate intensity followed by the luscious, clean melt of authentic dairy butter.",
    images: [
      "/images/Chocolate chip.webp",
      "/images/Chocolate chip.webp",
      "/images/Chocolate chip.webp"
    ],
    price: 850,
    originalPrice: 1000,
    variants: [
      { id: "choc-spread-500g", label: "500g", price: 850, originalPrice: 1000 },
      { id: "choc-spread-1kg", label: "1kg", price: 1600, originalPrice: 1900 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Crafted with 70% dark cocoa and farm-fresh Mz sweet cream butter.",
      "100% Free of palm oil, soy lecithin, and artificial preservatives.",
      "Naturally sweetened with pure cane sugar and real Bourbon vanilla."
    ],
    benefits: [
      "Natural energy from pure cocoa flavonoids and butter fats.",
      "Contains powerful antioxidants for mood elevation.",
      "Wholesome breakfast alternative for growing children."
    ],
    uses: [
      "Generously spread on warm crepes, pancakes, French toast, and brioche.",
      "Frosting for brownies, chocolate cupcakes, and birthday sponge cakes.",
      "Stir into warm milk for an instant gourmet hot cocoa."
    ],
    faqs: [
      {
        question: "Does it contain palm oil?",
        answer: "Never! All commercial hazelnut spreads are over 50% cheap palm oil. Mz Chocolate Butter Spread uses exclusively our pure dairy creamery butter as the fat base."
      },
      {
        question: "Should it be kept in the fridge or pantry?",
        answer: "For easy spreading, keep in a cool pantry. In summer or hot weather, store in the fridge and take out 5 minutes before spreading."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    featured: true,
  },

  // ===================== 8. CHOCOLATE (CHOCO-CHIP CRUNCH) =====================
  {
    id: "choc-chip-dairy-fudge",
    slug: "chocochip-dairy-crunch-spread",
    name: "Mz White Chip",
    category: "chocolate",
    categoryLabel: "Chocolate & Chip",
    tagline: "Creamy cocoa butter loaded with crisp dark chocolate micro-chips",
    shortDescription: "A decadent blend of velvety dairy chocolate cream studded with generous crunchy dark chocolate chips. Every spoonful delivers smooth creaminess and satisfying crunch.",
    fullDescription: "Taking chocolate indulgence to the next level, Mz Choco-Chip Dairy Crunch Spread blends our signature whipped cream butter and cocoa with crunchy miniature Belgian dark chocolate chips. Perfect for dessert lovers who crave texture contrast on their waffles, morning toast, or straight from the spoon.",
    images: [
      "/images/White chip.jpeg",
      "/images/White chip.jpeg",
      "/images/White chip.jpeg"
    ],
    price: 900,
    originalPrice: 1100,
    variants: [
      { id: "choc-chip-500g", label: "500g", price: 900, originalPrice: 1100 },
      { id: "choc-chip-1kg", label: "1kg", price: 1700, originalPrice: 2000 },
    ],
    rating: 0,
    reviewsCount: 0,
    reviews: [],
    about: [
      "Studded with 55% dark chocolate micro chips that retain crunchy texture.",
      "Blended into pure whipped butter and cocoa emulsion.",
      "No chemical preservatives or synthetic flavorings."
    ],
    benefits: [
      "Rich in cocoa polyphenols and natural healthy dairy fats.",
      "A comforting wholesome treat without hydrogenated trans fats."
    ],
    uses: [
      "Warm dessert topping over scoops of vanilla or coffee gelato.",
      "Sandwiched between crispy tea biscuits or graham crackers.",
      "Dolloped on morning oatmeal or smoothie bowls."
    ],
    faqs: [
      {
        question: "Do the chocolate chips melt into the spread?",
        answer: "No, the micro chocolate chips are formulated to remain crisp and distinct at room temperature, giving a wonderful dual texture in every bite."
      }
    ],
    landscapeBanner: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1600&q=80",
    portraitFeature: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
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

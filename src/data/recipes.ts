import { Recipe } from "@/types";

export const recipes: Recipe[] = [
  // ===================== 1. Classic Butter Croissants =====================
  {
    id: "recipe-butter-croissants",
    slug: "classic-butter-croissants",
    title: "Classic Butter Croissants",
    shortTitle: "Butter Croissants",
    tagline: "Crispy Layers. Rich Butter Flavour. French Baking Excellence.",
    category: "Bakery & Viennoiserie",
    prepTime: "40 mins",
    cookTime: "20–25 mins",
    servings: "8 croissants",
    difficulty: "Advanced",
    featuredProductId: "butter-pure-creamery",
    featuredProductName: "Mz Pure Creamery Butter (Unsalted)",
    featuredProductSlug: "pure-creamery-butter",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    description: "Classic butter croissants are renowned for their golden, flaky exterior and delicate, airy interior. Made using carefully layered dough and quality butter, these French pastries are an elegant choice for breakfast, brunch, or an afternoon treat.",
    ingredients: [
      "500 g all-purpose flour",
      "250 g cold Mz Pure Creamery Butter (for lamination)",
      "60 g softened Mz Pure Creamery Butter",
      "60 g sugar",
      "10 g salt",
      "10 g instant yeast",
      "250 ml cold milk",
      "1 egg for egg wash"
    ],
    instructions: [
      {
        step: 1,
        title: "Knead the Base Dough",
        detail: "Combine flour, sugar, salt, yeast, milk, and softened butter. Knead until a smooth dough forms. Cover and refrigerate for 30 minutes."
      },
      {
        step: 2,
        title: "Shape the Butter Sheet",
        detail: "Place the cold butter between sheets of baking paper and roll into a uniform rectangular sheet."
      },
      {
        step: 3,
        title: "Laminate and Fold",
        detail: "Enclose the butter sheet in the dough. Roll out and fold into thirds. Refrigerate between folds to maintain the butter's firmness. Repeat until three folds have been completed."
      },
      {
        step: 4,
        title: "Shape the Croissants",
        detail: "Roll the dough into a rectangle and cut into triangles. Roll each triangle from the base towards the tip to create the traditional croissant shape."
      },
      {
        step: 5,
        title: "Proof Until Puffy",
        detail: "Arrange the shaped croissants on a lined baking tray and allow them to rest and rise for 3–4 hours until visibly puffy."
      },
      {
        step: 6,
        title: "Bake to Golden Excellence",
        detail: "Brush with beaten egg and bake in a preheated oven at 200°C for 20–25 minutes, or until deeply golden brown and flaky."
      }
    ],
    chefTips: [
      "Keep the butter and dough at the same cool pliable temperature during rolling to avoid butter tearing through the layers.",
      "Resting between folds is vital for clean lamination and honeycomb interior crumbs.",
      "Enjoy fresh from the oven with fruit jam or café au lait."
    ],
    nutrition: {
      calories: "310 kcal",
      butterfat: "19g pure butterfat",
      protein: "5g"
    }
  },

  // ===================== 2. Butter Shortbread Biscuits =====================
  {
    id: "recipe-shortbread-biscuits",
    slug: "butter-shortbread-biscuits",
    title: "Butter Shortbread Biscuits",
    shortTitle: "Shortbread Biscuits",
    tagline: "Golden, Crisp and Delicately Buttery",
    category: "Biscuits & Cookies",
    prepTime: "15 mins",
    cookTime: "12–15 mins",
    servings: "20 biscuits",
    difficulty: "Easy",
    featuredProductId: "butter-pure-creamery",
    featuredProductName: "Mz Pure Creamery Butter (Unsalted)",
    featuredProductSlug: "pure-creamery-butter",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    description: "Butter shortbread biscuits are a classic bakery product known for their delicate crumb, crisp texture, and balanced sweetness. Their simple ingredient profile allows the flavour of butter to take centre stage, making them ideal for tea service, gift boxes, and everyday snacking.",
    ingredients: [
      "200 g all-purpose flour",
      "125 g softened Mz Pure Creamery Butter",
      "80 g powdered sugar",
      "1 egg yolk",
      "1 teaspoon vanilla essence",
      "A pinch of salt"
    ],
    instructions: [
      {
        step: 1,
        title: "Cream Butter and Sugar",
        detail: "Beat the softened Mz Butter and powdered sugar until completely smooth and creamy."
      },
      {
        step: 2,
        title: "Add Egg Yolk and Vanilla",
        detail: "Incorporate the egg yolk and vanilla essence until fully blended."
      },
      {
        step: 3,
        title: "Fold Dry Ingredients",
        detail: "Add the flour and salt gradually. Mix until a soft dough forms without excessive kneading."
      },
      {
        step: 4,
        title: "Chill the Dough",
        detail: "Cover and refrigerate for 20 minutes to improve handling and shaping."
      },
      {
        step: 5,
        title: "Roll and Cut Shapes",
        detail: "Roll the dough to approximately 5 mm thickness. Cut into uniform rounds or decorative shapes."
      },
      {
        step: 6,
        title: "Bake Gently",
        detail: "Place the biscuits on a lined baking tray and bake in a preheated oven at 170°C for 12–15 minutes, until the edges are lightly golden."
      },
      {
        step: 7,
        title: "Cool and Serve",
        detail: "Allow the biscuits to cool completely before serving or storing in an airtight container."
      }
    ],
    chefTips: [
      "Avoid overmixing the dough once flour is added to maintain that melt-in-your-mouth shortbread snap.",
      "Dust lightly with fine caster sugar while warm for a glistening bakery finish.",
      "Pairs delightfully with afternoon English breakfast tea or Kashmiri chai."
    ],
    nutrition: {
      calories: "140 kcal",
      butterfat: "8g dairy butterfat",
      protein: "2g"
    }
  },

  // ===================== 3. Creamy Alfredo Pasta =====================
  {
    id: "recipe-creamy-alfredo-pasta",
    slug: "creamy-alfredo-pasta",
    title: "Creamy Alfredo Pasta",
    shortTitle: "Alfredo Pasta",
    tagline: "Smooth Cream Sauce with Garlic, Butter and Parmesan",
    category: "Main Courses & Pastas",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "3–4 servings",
    difficulty: "Easy",
    featuredProductId: "cream-rich-velvet",
    featuredProductName: "Mz Pure Rich Velvet Fresh Cream",
    featuredProductSlug: "pure-rich-velvet-fresh-cream",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80",
    description: "Creamy Alfredo pasta is a popular Italian-inspired dish featuring tender pasta coated in a rich, velvety sauce. Butter, cream, garlic, and Parmesan cheese combine to create a comforting meal suitable for lunch, dinner, or a restaurant-style menu.",
    ingredients: [
      "300 g fettuccine or pasta of choice",
      "40 g Mz Pure Creamery Butter",
      "200 ml Mz Pure Rich Velvet Fresh Cream",
      "3 garlic cloves, finely chopped",
      "60 g grated Parmesan cheese",
      "Salt to taste",
      "½ teaspoon freshly cracked black pepper",
      "½ cup reserved pasta water, as needed",
      "Fresh parsley for garnish"
    ],
    instructions: [
      {
        step: 1,
        title: "Boil the Pasta",
        detail: "Bring a large pot of salted water to a boil. Cook the pasta according to package instructions until al dente. Reserve some cooking water before draining."
      },
      {
        step: 2,
        title: "Sauté the Garlic in Butter",
        detail: "Melt the Mz Butter in a pan over medium-low heat. Add the minced garlic and cook for approximately one minute without browning it."
      },
      {
        step: 3,
        title: "Simmer the Fresh Cream",
        detail: "Pour in the Mz Velvet Fresh Cream and warm gently for 2–3 minutes, stirring continuously."
      },
      {
        step: 4,
        title: "Melt in the Parmesan",
        detail: "Gradually add the grated Parmesan cheese, stirring until the sauce becomes silky smooth. Season with black pepper and adjust salt."
      },
      {
        step: 5,
        title: "Toss Pasta in Sauce",
        detail: "Add the drained pasta to the sauce and toss thoroughly. Add reserved pasta water a little at a time to achieve the desired silky coating."
      },
      {
        step: 6,
        title: "Garnish and Serve Hot",
        detail: "Garnish with freshly chopped parsley and additional Parmesan cheese. Serve immediately while warm."
      }
    ],
    chefTips: [
      "Keep heat gentle when adding dairy cream to preserve its velvety emulsion without breaking.",
      "Starchy pasta water is the secret to emulsifying the butter and cheese into an ultra-creamy glaze.",
      "Add grilled chicken strips or sautéed mushrooms for a hearty restaurant-style variation."
    ],
    nutrition: {
      calories: "460 kcal",
      butterfat: "24g fresh milkfat",
      protein: "14g"
    }
  },

  // ===================== 4. Chicken Butter Makhani =====================
  {
    id: "recipe-chicken-butter-makhani",
    slug: "chicken-butter-makhani",
    title: "Chicken Butter Makhani",
    shortTitle: "Butter Chicken Makhani",
    tagline: "Rich Tomato Gravy. Tender Chicken. Silky Cream Finish.",
    category: "Curries & Traditional",
    prepTime: "20 mins",
    cookTime: "30–35 mins",
    servings: "4 servings",
    difficulty: "Medium",
    featuredProductId: "butter-pure-creamery",
    featuredProductName: "Mz Pure Creamery Butter (Unsalted)",
    featuredProductSlug: "pure-creamery-butter",
    image: "https://images.unsplash.com/photo-160389458373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    description: "Chicken Butter Makhani is a popular South Asian restaurant dish featuring tender chicken in a smooth tomato-based gravy enriched with butter, cream, and aromatic spices. Its balanced flavour and creamy consistency make it an excellent choice for family dining and special occasions.",
    ingredients: [
      "500 g boneless chicken (bite-sized cubes)",
      "100 g plain yoghurt",
      "2 tablespoons ginger-garlic paste (divided)",
      "2 teaspoons red chilli powder (divided)",
      "½ teaspoon turmeric powder",
      "1½ teaspoons garam masala (divided)",
      "1 tablespoon oil (for chicken sear)",
      "50 g Mz Pure Creamery Butter",
      "400 g chopped tomatoes or fresh tomato purée",
      "1 medium onion, finely chopped",
      "1 teaspoon coriander powder",
      "100 ml Mz Pure Rich Velvet Fresh Cream",
      "1 teaspoon dried fenugreek leaves (kasuri methi)",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate the Chicken",
        detail: "Combine the chicken with yoghurt, 1 tbsp ginger-garlic paste, 1 tsp chilli powder, turmeric, 1 tsp garam masala, and salt. Marinate for at least 30 minutes under refrigeration."
      },
      {
        step: 2,
        title: "Pan-Sear Chicken",
        detail: "Heat oil in a pan and cook the marinated chicken over medium-high heat until lightly browned and thoroughly cooked through. Set aside."
      },
      {
        step: 3,
        title: "Sauté Aromatics in Butter",
        detail: "Melt Mz Butter in a separate pan. Add the chopped onion and cook until softened. Add the remaining ginger-garlic paste and cook briefly until fragrant."
      },
      {
        step: 4,
        title: "Simmer Tomato Spices",
        detail: "Add tomatoes, remaining chilli powder, coriander powder, and salt. Simmer until the tomatoes soften completely and the gravy thickens."
      },
      {
        step: 5,
        title: "Blend Until Silky",
        detail: "Blend the gravy carefully until velvet smooth, then return it to the pan."
      },
      {
        step: 6,
        title: "Combine Chicken and Gravy",
        detail: "Add the seared chicken pieces and simmer gently for 5–10 minutes to allow the spices and juices to meld together."
      },
      {
        step: 7,
        title: "Add Velvet Cream and Fenugreek",
        detail: "Stir in Mz Velvet Fresh Cream, ½ tsp garam masala, and crushed dried fenugreek leaves (kasuri methi). Simmer gently for 2 minutes."
      },
      {
        step: 8,
        title: "Garnish and Serve",
        detail: "Finish with fresh coriander and a swirl of cream. Serve hot with garlic naan, tandoori roti, or steamed basmati rice."
      }
    ],
    chefTips: [
      "Crushing kasuri methi between your palms before adding unlocks its distinctive restaurant aroma.",
      "A dollop of cold Mz Butter stirred in just before serving creates a glossy lacquer finish.",
      "Pair with hot tandoori garlic naan or fragrant jeera rice."
    ],
    nutrition: {
      calories: "520 kcal",
      butterfat: "28g pure dairy fat",
      protein: "32g"
    }
  },

  // ===================== 5. Creamy Mushroom Soup =====================
  {
    id: "recipe-creamy-mushroom-soup",
    slug: "creamy-mushroom-soup",
    title: "Creamy Mushroom Soup",
    shortTitle: "Mushroom Soup",
    tagline: "Earthy Mushroom Flavour, Smooth Texture and Comforting Warmth",
    category: "Soups & Starters",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "4 servings",
    difficulty: "Easy",
    featuredProductId: "cream-rich-velvet",
    featuredProductName: "Mz Pure Rich Velvet Fresh Cream",
    featuredProductSlug: "pure-rich-velvet-fresh-cream",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    description: "Creamy mushroom soup is a popular international favourite, valued for its earthy mushroom flavour, smooth texture, and comforting warmth. Butter enhances the savoury character of the mushrooms, while cream gives the soup its rich, velvety finish.",
    ingredients: [
      "400 g fresh mushrooms, sliced",
      "40 g Mz Pure Creamery Butter",
      "1 medium onion, finely chopped",
      "3 garlic cloves, minced",
      "2 tablespoons all-purpose flour",
      "750 ml vegetable or chicken stock",
      "200 ml Mz Pure Rich Velvet Fresh Cream",
      "½ teaspoon freshly cracked black pepper",
      "Salt to taste",
      "1 tablespoon chopped fresh parsley",
      "Crispy croutons for serving (optional)"
    ],
    instructions: [
      {
        step: 1,
        title: "Sauté Mushrooms in Butter",
        detail: "Melt Mz Butter in a large saucepan over medium heat. Add the sliced mushrooms and cook for 6–8 minutes until softened and lightly browned."
      },
      {
        step: 2,
        title: "Sweat Onions and Garlic",
        detail: "Add the chopped onion and cook until translucent. Stir in the minced garlic and cook for another minute."
      },
      {
        step: 3,
        title: "Incorporate Flour Roux",
        detail: "Sprinkle the flour over the mushroom mixture and stir for 1–2 minutes to cook out the raw flour flavour."
      },
      {
        step: 4,
        title: "Pour in Stock",
        detail: "Gradually pour in the stock while stirring to prevent lumps from forming. Bring to a gentle simmer."
      },
      {
        step: 5,
        title: "Simmer to Deepen Flavours",
        detail: "Cook for 10–12 minutes, allowing the mushroom flavours to develop and the soup to thicken."
      },
      {
        step: 6,
        title: "Blend to Desired Texture",
        detail: "Use an immersion blender to blend until smooth, or leave some mushroom pieces for a rustic textured finish."
      },
      {
        step: 7,
        title: "Finish with Fresh Cream",
        detail: "Reduce the heat and stir in the Mz Velvet Fresh Cream. Season with salt and black pepper. Warm gently without boiling vigorously."
      },
      {
        step: 8,
        title: "Ladle and Garnish",
        detail: "Ladle into warm soup bowls and garnish with freshly chopped parsley and golden croutons. Serve immediately."
      }
    ],
    chefTips: [
      "Do not crowd the mushrooms in the pan initially; browning them in pure butter caramelizes their natural sugars.",
      "Never boil the soup after adding the fresh cream to keep the velvety emulsion intact.",
      "Serve alongside warm crusty sourdough or toasted baguette."
    ],
    nutrition: {
      calories: "230 kcal",
      butterfat: "16g dairy lipids",
      protein: "5g"
    }
  },

  // ===================== 6. Chocolate Cupcakes with Buttercream Frosting =====================
  {
    id: "recipe-chocolate-cupcakes",
    slug: "chocolate-cupcakes-buttercream",
    title: "Chocolate Cupcakes with Buttercream Frosting",
    shortTitle: "Chocolate Cupcakes",
    tagline: "Moist Chocolate Sponge with Smooth, Rich Buttercream",
    category: "Bakery & Desserts",
    prepTime: "20 mins",
    cookTime: "18–22 mins",
    servings: "12 cupcakes",
    difficulty: "Medium",
    featuredProductId: "choc-artisanal-spread",
    featuredProductName: "Mz Artisanal Chocolate Butter Spread",
    featuredProductSlug: "artisanal-chocolate-butter-spread",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    description: "Chocolate cupcakes are a popular bakery favourite, combining a soft cocoa sponge with a smooth, sweet buttercream topping. Their attractive presentation and rich flavour make them suitable for birthdays, celebrations, cafés, and dessert counters.",
    ingredients: [
      "150 g all-purpose flour",
      "40 g unsweetened cocoa powder",
      "150 g sugar",
      "2 large eggs",
      "100 g softened Mz Pure Creamery Butter",
      "120 ml whole milk",
      "1 teaspoon baking powder",
      "½ teaspoon baking soda",
      "1 teaspoon vanilla essence",
      "A pinch of salt",
      "150 g softened Mz Pure Creamery Butter (for frosting)",
      "250 g icing sugar (sifted)",
      "2 tablespoons cocoa powder (for frosting)",
      "2–3 tablespoons Mz Velvet Fresh Cream (for frosting)",
      "1 teaspoon vanilla essence (for frosting)"
    ],
    instructions: [
      {
        step: 1,
        title: "Preheat and Prepare Muffin Tray",
        detail: "Preheat the oven to 175°C. Line a 12-cup muffin tray with paper cupcake cases."
      },
      {
        step: 2,
        title: "Sift Dry Ingredients",
        detail: "Sift together the flour, cocoa powder, baking powder, baking soda, and salt."
      },
      {
        step: 3,
        title: "Beat Butter and Sugar",
        detail: "Beat the softened Mz Butter and sugar until pale and fluffy."
      },
      {
        step: 4,
        title: "Incorporate Eggs and Vanilla",
        detail: "Beat in the eggs one at a time, followed by the vanilla essence."
      },
      {
        step: 5,
        title: "Fold Batter Gradually",
        detail: "Add the dry ingredients in batches, alternating with milk. Mix until just combined, taking care not to overmix."
      },
      {
        step: 6,
        title: "Portion and Bake",
        detail: "Divide the batter evenly among the cupcake cases, filling each approximately two-thirds full. Bake for 18–22 minutes, or until a toothpick inserted into the centre comes out clean."
      },
      {
        step: 7,
        title: "Cool Completely",
        detail: "Transfer the cupcakes to a wire rack and allow them to cool completely before decorating."
      },
      {
        step: 8,
        title: "Whip the Chocolate Buttercream",
        detail: "Beat softened butter until smooth. Gradually add sifted icing sugar and cocoa powder. Add vanilla essence and enough fresh cream to achieve a silky, pipeable consistency."
      },
      {
        step: 9,
        title: "Pipe and Finish",
        detail: "Pipe generous swirls of the chocolate buttercream onto the cooled cupcakes. Finish with chocolate shavings or sprinkles as desired."
      }
    ],
    chefTips: [
      "Ensure cupcakes are completely cold to the touch before piping buttercream so the frosting holds its sharp swirl definition.",
      "Room temperature butter produces the fluffiest, lightest sponge batter and frosting.",
      "Garnish with chocolate curls or cocoa nibs for an artisan bakery aesthetic."
    ],
    nutrition: {
      calories: "295 kcal",
      butterfat: "15g pure dairy butterfat",
      protein: "4g"
    }
  }
];

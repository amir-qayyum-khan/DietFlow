// 31-Day Unique Halal Family Meal Plan (93 Recipes Total: 31 Breakfasts, 31 Lunches, 31 Dinners)
// Standardized measuring units: grams (g), milliliters/liters (ml/l), tablespoons (tbsp), teaspoons (tsp)
// All recipes scaled for a balanced 5-person family serving.

export const recipesData = [
  {
    day: 1,
    breakfast: {
      id: "d1-b",
      title: "Mediterranean Shakshuka with Whole Grain Toast",
      cuisine: "Mediterranean",
      prepTime: "15 mins",
      cookTime: "20 mins",
      calories: "380 kcal per serving",
      macros: { protein: "22g", carbs: "35g", fiber: "8g", fat: "16g" },
      seasonalTip: "Great year-round; in summer, garnish with extra fresh cooling cilantro or mint.",
      ingredients: [
        "6 fresh eggs (approx 300g)",
        "800g ripe tomatoes, finely diced (or 2 cans crushed tomatoes)",
        "200g red bell peppers, finely sliced",
        "150g onions, finely chopped",
        "15g fresh garlic (about 4 cloves), minced",
        "30ml extra virgin olive oil (2 tbsp)",
        "5g ground cumin (1 tsp)",
        "5g sweet paprika (1 tsp)",
        "2g black pepper (1/2 tsp)",
        "3g sea salt (1/2 tsp - low sodium balanced)",
        "250g whole grain artisan bread (for serving)"
      ],
      instructions: [
        "1. Heat 30ml olive oil in a large deep skillet over medium heat.",
        "2. Add 150g chopped onions and 200g sliced red bell peppers; sauté for 6–8 minutes until softened.",
        "3. Add 15g minced garlic, 5g cumin, and 5g paprika; cook for 1 minute until fragrant.",
        "4. Pour in 800g diced tomatoes and simmer gently for 10 minutes until the sauce thickens into a rich gravy.",
        "5. Make 6 small wells in the tomato sauce using a spoon and crack 1 fresh egg into each well.",
        "6. Cover the skillet with a lid and simmer on low heat for 6–8 minutes until egg whites are set but yolks remain tender and creamy.",
        "7. Garnish with fresh herbs and serve warm alongside slices of whole grain bread."
      ]
    },
    lunch: {
      id: "d1-l",
      title: "Lahori Spiced Chicken & Yellow Lentil Bowl (Dal Murgh)",
      cuisine: "Pakistani",
      prepTime: "20 mins",
      cookTime: "35 mins",
      calories: "490 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "11g", fat: "12g" },
      seasonalTip: "Perfect for hot and rainy monsoon days as lentils are light on digestion and high in energy.",
      ingredients: [
        "500g halal boneless chicken breast, cubed",
        "250g yellow lentils (moong and masoor dal mix), washed and drained",
        "1.2 l water or low-sodium chicken broth",
        "150g onions, finely sliced",
        "200g fresh tomatoes, chopped",
        "15g ginger-garlic paste (1 tbsp)",
        "15ml sunflower or olive oil (1 tbsp)",
        "5g turmeric powder (1 tsp)",
        "5g coriander powder (1 tsp)",
        "3g cumin seeds (1 tsp)",
        "3g salt (1/2 tsp)",
        "20g fresh coriander leaves, chopped (for garnish)"
      ],
      instructions: [
        "1. In a pot, combine 250g yellow lentils with 1.2 liters of water, 5g turmeric, and 3g salt. Bring to a boil, then simmer for 25 minutes until lentils are completely soft and creamy.",
        "2. In a separate pan, heat 15ml oil over medium heat and sauté 150g sliced onions until golden brown.",
        "3. Add 15g ginger-garlic paste and 500g cubed chicken breast; cook for 5–7 minutes until chicken turns white.",
        "4. Mix in 200g chopped tomatoes and 5g coriander powder; cover and cook for 10 minutes until tomatoes soften into a gravy.",
        "5. Pour the cooked chicken masala into the soft lentil pot and stir well to combine.",
        "6. Simmer together for 5 minutes so flavors meld together into a smooth, savory broth.",
        "7. Garnish with 20g chopped fresh coriander leaves and serve warm."
      ]
    },
    dinner: {
      id: "d1-d",
      title: "Herb-Crusted Baked Fish with Lemon Quinoa & Roasted Zucchini",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "450 kcal per serving",
      macros: { protein: "38g", carbs: "44g", fiber: "7g", fat: "14g" },
      seasonalTip: "A light, refreshing evening meal that ensures comfortable, restful sleep without heaviness.",
      ingredients: [
        "600g halal white fish fillets (cod, haddock, or snapper)",
        "250g dry quinoa, rinsed",
        "500ml water or light vegetable broth",
        "400g fresh zucchini, sliced into half-moons",
        "30ml olive oil (2 tbsp)",
        "30ml fresh lemon juice (2 tbsp)",
        "10g dried oregano and parsley mix (2 tbsp)",
        "10g garlic powder (2 tsp)",
        "3g sea salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and line a baking sheet with parchment paper.",
        "2. In a saucepan, combine 250g quinoa with 500ml water and 1g salt. Bring to a boil, cover, reduce heat to low, and cook for 15 minutes until fluffy.",
        "3. Place 600g fish fillets and 400g sliced zucchini on the prepared baking sheet.",
        "4. In a small bowl, whisk together 30ml olive oil, 30ml lemon juice, 10g herb mix, 10g garlic powder, and remaining salt and pepper.",
        "5. Brush the herb-lemon dressing evenly over the fish fillets and zucchini slices.",
        "6. Bake in the preheated oven for 15–18 minutes until the fish flakes easily with a fork and zucchini is tender.",
        "7. Fluff the cooked quinoa with a fork, divide among 5 plates, and top with baked fish and roasted zucchini."
      ]
    }
  },
  {
    day: 2,
    breakfast: {
      id: "d2-b",
      title: "Warm Apple Cinnamon Oatmeal with Crushed Walnuts & Honey",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "15 mins",
      calories: "360 kcal per serving",
      macros: { protein: "14g", carbs: "58g", fiber: "9g", fat: "10g" },
      seasonalTip: "Comforting in cooler months; in summer, can be chilled overnight as refreshing overnight oats.",
      ingredients: [
        "250g rolled oats",
        "800ml low-fat milk or almond milk",
        "200ml water",
        "300g sweet apples, peeled and diced into small cubes",
        "50g crushed walnuts",
        "30ml pure honey (2 tbsp)",
        "5g ground cinnamon (1 tsp)",
        "2ml vanilla extract (1/2 tsp)"
      ],
      instructions: [
        "1. In a medium saucepan, combine 800ml milk and 200ml water and bring to a gentle simmer over medium heat.",
        "2. Stir in 250g rolled oats and 300g diced apples; reduce heat to medium-low.",
        "3. Cook for 10–12 minutes, stirring occasionally, until the oats are creamy and apples are soft and tender.",
        "4. Remove from heat and stir in 5g ground cinnamon, 2ml vanilla extract, and 30ml honey.",
        "5. Let stand covered for 2 minutes to thicken.",
        "6. Spoon into serving bowls and sprinkle evenly with 50g crushed walnuts for a delightful crunch."
      ]
    },
    lunch: {
      id: "d2-l",
      title: "Turkish Grilled Chicken Kofta Skewers with Cucumber Mint Raita & Bulgur",
      cuisine: "Turkish",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "510 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "8g", fat: "15g" },
      seasonalTip: "The cooling cucumber mint raita provides instant refreshment during hot summer days.",
      ingredients: [
        "600g halal lean minced chicken",
        "100g finely grated onion (excess water squeezed out)",
        "15g fresh parsley, finely minced (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "5g ground coriander (1 tsp)",
        "3g salt (1/2 tsp)",
        "250g coarse bulgur wheat",
        "500ml hot water or vegetable broth",
        "300g plain low-fat yogurt",
        "150g cucumber, grated",
        "10g fresh mint leaves, chopped (2 tbsp)"
      ],
      instructions: [
        "1. In a mixing bowl, combine 600g minced chicken, 100g grated onion, 15g parsley, 5g cumin, 5g coriander, and 3g salt. Mix thoroughly until sticky.",
        "2. Shape the chicken mixture into 10 oblong koфта patties or skewers; refrigerate for 10 minutes to firm up.",
        "3. Meanwhile, place 250g bulgur wheat in a bowl, pour 500ml hot broth over it, cover with a plate, and let steam for 15 minutes until tender.",
        "4. Prepare the cooling raita by mixing 300g yogurt, 150g grated cucumber, and 10g fresh mint in a serving bowl.",
        "5. Heat a non-stick grill pan or skillet over medium-high heat brushed with 10ml oil.",
        "6. Grill the chicken koftas for 6–8 minutes, turning occasionally, until golden brown and fully cooked through (internal temp 75°C/165°F).",
        "7. Fluff the bulgur with a fork and serve hot with juicy chicken koftas and refreshing mint raita."
      ]
    },
    dinner: {
      id: "d2-d",
      title: "Gentle Slow-Cooked Mutton & Spinach Stew (Palak Gosht) with Brown Rice",
      cuisine: "Pakistani",
      prepTime: "20 mins",
      cookTime: "50 mins",
      calories: "530 kcal per serving",
      macros: { protein: "45g", carbs: "46g", fiber: "9g", fat: "18g" },
      seasonalTip: "Rich in natural iron and fiber; cooked with minimal oil for a light, nourishing feel.",
      ingredients: [
        "500g halal lean mutton (leg or shoulder cubes, trimmed of fat)",
        "500g fresh spinach leaves, washed and chopped",
        "150g onions, finely chopped",
        "150g fresh tomatoes, diced",
        "15g garlic paste (1 tbsp)",
        "10g ginger paste (2 tsp)",
        "15ml olive or canola oil (1 tbsp)",
        "5g coriander powder (1 tsp)",
        "3g turmeric powder (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "250g brown basmati rice, washed and soaked for 20 mins",
        "600ml water (for cooking rice)"
      ],
      instructions: [
        "1. In a saucepan, bring 600ml water to a boil, add 250g soaked brown rice, reduce heat to low, cover, and cook for 35 minutes until tender.",
        "2. In a heavy-bottomed pot or pressure cooker, heat 15ml oil over medium heat and sauté 150g onions until golden.",
        "3. Add 15g garlic paste, 10g ginger paste, and 500g lean mutton cubes; sear for 5 minutes until browned.",
        "4. Stir in 150g diced tomatoes, 5g coriander powder, 3g turmeric, and 3g salt along with 200ml water.",
        "5. Cover and cook on low heat for 35–40 minutes (or 15 mins in pressure cooker) until mutton is exceptionally tender.",
        "6. Add 500g chopped spinach to the mutton pot; cook uncovered for 8–10 minutes until spinach wilts and merges into a thick, savory green gravy.",
        "7. Serve the hot spinach mutton stew over steamed fluffy brown basmati rice."
      ]
    }
  },
  {
    day: 3,
    breakfast: {
      id: "d3-b",
      title: "Fluffy Spinach & Mushroom Egg Frittata with Sweet Potato Hash",
      cuisine: "Italian / American",
      prepTime: "15 mins",
      cookTime: "20 mins",
      calories: "390 kcal per serving",
      macros: { protein: "24g", carbs: "38g", fiber: "7g", fat: "15g" },
      seasonalTip: "Baked in one skillet for minimal cleanup; sweet potatoes provide sustained morning energy.",
      ingredients: [
        "6 large eggs (300g)",
        "100ml low-fat milk",
        "200g fresh button mushrooms, sliced",
        "150g fresh baby spinach",
        "400g sweet potatoes, peeled and diced into 1cm cubes",
        "100g onions, diced",
        "20ml olive oil (4 tsp)",
        "3g garlic powder (1/2 tsp)",
        "3g sea salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. In a non-stick oven-safe skillet, heat 10ml olive oil over medium heat.",
        "2. Add 400g diced sweet potatoes and 100g diced onions; sauté for 10–12 minutes until sweet potatoes are golden and fork-tender.",
        "3. Remove sweet potatoes to a plate and add remaining 10ml oil to the skillet.",
        "4. Sauté 200g sliced mushrooms for 4 minutes until golden, then add 150g spinach and cook for 1 minute until wilted.",
        "5. Return sweet potatoes to the skillet, spreading everything evenly.",
        "6. In a bowl, whisk together 6 eggs, 100ml milk, garlic powder, salt, and pepper; pour evenly over the vegetables.",
        "7. Cover and cook on low heat for 8–10 minutes on the stovetop (or transfer to a 180°C/350°F oven for 10 minutes) until eggs are completely set and fluffy."
      ]
    },
    lunch: {
      id: "d3-l",
      title: "Lebanese Grilled Beef Kafta Bowls with Hummus & Cucumber Tomato Salad",
      cuisine: "Middle Eastern",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "520 kcal per serving",
      macros: { protein: "42g", carbs: "45g", fiber: "10g", fat: "18g" },
      seasonalTip: "Crunchy fresh cucumber tomato salad adds hydration and natural vitamins.",
      ingredients: [
        "500g halal lean minced beef (90% lean)",
        "100g onion, finely grated",
        "20g fresh parsley, finely minced",
        "5g ground allspice (1 tsp)",
        "5g ground cumin (1 tsp)",
        "3g salt (1/2 tsp)",
        "250g whole wheat pita bread (5 small pitas)",
        "200g prepared low-sodium hummus",
        "300g fresh cucumbers, diced",
        "300g ripe tomatoes, diced",
        "15ml fresh lemon juice (1 tbsp)"
      ],
      instructions: [
        "1. In a large bowl, combine 500g lean minced beef, 100g grated onion, 20g parsley, 5g allspice, 5g cumin, and 3g salt. Knead well.",
        "2. Form the beef mixture into 10 small oval kafta skewers or patties.",
        "3. Heat a non-stick skillet or grill pan over medium heat brushed with a light touch of oil.",
        "4. Cook the beef kafta for 4–5 minutes per side until beautifully browned and cooked through (internal temp 70°C/160°F).",
        "5. In a separate bowl, toss 300g diced cucumbers and 300g diced tomatoes with 15ml fresh lemon juice.",
        "6. Warm the 5 whole wheat pita breads on a dry skillet for 30 seconds per side.",
        "7. Assemble serving bowls with 2 beef kaftas, a scoop of hummus (40g per person), fresh cucumber tomato salad, and warm pita."
      ]
    },
    dinner: {
      id: "d3-d",
      title: "Soothing Lentil & Veggie Soup with Baked Chicken Tenders",
      cuisine: "Continental",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "12g", fat: "10g" },
      seasonalTip: "Gentle, warm, and highly comforting; incredibly easy on the stomach for a peaceful evening.",
      ingredients: [
        "400g halal chicken breast strips (tenders)",
        "200g brown or green lentils, rinsed",
        "1.2 l vegetable or chicken broth",
        "200g carrots, diced into small cubes",
        "200g celery stalks, diced",
        "150g onions, chopped",
        "15ml olive oil (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "3g dried thyme (1 tsp)",
        "3g salt (1/2 tsp)",
        "10ml lemon juice (2 tsp - stirred in at the end)"
      ],
      instructions: [
        "1. In a large soup pot, heat 15ml olive oil over medium heat. Sauté 150g onions, 200g carrots, and 200g celery for 6 minutes until softened.",
        "2. Stir in 200g lentils, 5g cumin, 3g thyme, and 1.2 liters of broth. Bring to a boil.",
        "3. Reduce heat to low, cover, and simmer for 25–30 minutes until lentils and vegetables are completely soft.",
        "4. Meanwhile, season 400g chicken breast strips with a pinch of salt, garlic powder, and pepper.",
        "5. Place chicken strips on a baking tray and bake at 190°C (375°F) for 15–18 minutes until juicy and tender.",
        "6. Once the soup is done, stir in 10ml fresh lemon juice for a bright, refreshing finish.",
        "7. Serve bowls of warm lentil vegetable soup alongside golden baked chicken tenders."
      ]
    }
  },
  {
    day: 4,
    breakfast: {
      id: "d4-b",
      title: "Protein-Packed Greek Yogurt Parfait with Mixed Berries & Chia Seeds",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "0 mins (No Cook)",
      calories: "340 kcal per serving",
      macros: { protein: "24g", carbs: "42g", fiber: "9g", fat: "8g" },
      seasonalTip: "Refreshing, cooling breakfast ideal for warm summer mornings requiring zero stove heat.",
      ingredients: [
        "750g low-fat plain Greek yogurt",
        "400g fresh or thawed frozen blueberries and strawberries",
        "150g low-sugar whole grain granola",
        "30g chia seeds (2 tbsp)",
        "30ml pure honey or maple syrup (2 tbsp)",
        "5ml vanilla extract (1 tsp - stirred into yogurt)"
      ],
      instructions: [
        "1. In a medium mixing bowl, gently stir 5ml vanilla extract and 30ml honey into 750g plain Greek yogurt until smooth.",
        "2. Set out 5 serving glasses or bowls.",
        "3. Layer 75g of flavored Greek yogurt into the bottom of each glass.",
        "4. Add a generous layer of mixed berries (about 40g per glass) and sprinkle with 3g chia seeds.",
        "5. Repeat with another layer of yogurt and remaining berries.",
        "6. Right before serving, top each parfait with 30g whole grain granola so it stays delightfully crunchy."
      ]
    },
    lunch: {
      id: "d4-l",
      title: "Persian Saffron Chicken with Barberry Rice (Zereshk Polo)",
      cuisine: "Persian",
      prepTime: "20 mins",
      cookTime: "35 mins",
      calories: "510 kcal per serving",
      macros: { protein: "40g", carbs: "56g", fiber: "6g", fat: "13g" },
      seasonalTip: "A fragrant, celebratory midday meal with tangy barberries that stimulate a healthy appetite.",
      ingredients: [
        "600g halal boneless chicken thighs or breasts, cut into chunks",
        "300g basmati rice, washed and soaked for 20 mins",
        "700ml water",
        "150g onions, finely sliced",
        "50g dried barberries (zereshk), rinsed (or dried cranberries as alternative)",
        "15ml olive oil (1 tbsp)",
        "15g butter (1 tbsp)",
        "1g saffron threads, steeped in 30ml warm water",
        "5g turmeric powder (1 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. In a pot, combine 300g soaked basmati rice with 700ml water and a pinch of salt. Cook covered on low heat for 18 minutes until fluffy.",
        "2. In a skillet, heat 15ml olive oil over medium heat and sauté 150g sliced onions for 5 minutes until translucent.",
        "3. Add 600g chicken chunks and 5g turmeric; sauté for 6–8 minutes until chicken is seared on all sides.",
        "4. Pour half of the saffron-infused water over the chicken, cover, and simmer on low heat for 15 minutes until chicken is juicy and tender.",
        "5. In a small separate pan, melt 15g butter over low heat, add 50g rinsed barberries and 1 tsp sugar or honey; sauté gently for 1 minute until plump.",
        "6. Fluff the cooked rice and drizzle the remaining saffron water over the top layer for a brilliant golden color.",
        "7. Serve the saffron rice topped with tangy sautéed barberries alongside tender Persian chicken."
      ]
    },
    dinner: {
      id: "d4-d",
      title: "Baked Halal Beef Meatballs in Rustic Tomato Herb Gravy with Zucchini Noodles",
      cuisine: "Italian",
      prepTime: "25 mins",
      cookTime: "25 mins",
      calories: "470 kcal per serving",
      macros: { protein: "42g", carbs: "32g", fiber: "8g", fat: "18g" },
      seasonalTip: "Using zucchini noodles alongside whole grain pasta keeps this evening meal light and high in fiber.",
      ingredients: [
        "500g halal lean minced beef",
        "50g whole wheat breadcrumbs",
        "1 large egg (50g)",
        "15g garlic paste (1 tbsp)",
        "10g dried Italian herbs (oregano, basil, thyme)",
        "600g passata or crushed tomatoes",
        "400g fresh zucchini, spiralized into noodles (zoodles)",
        "150g whole wheat spaghetti or penne",
        "15ml olive oil (1 tbsp)",
        "3g sea salt (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 190°C (375°F) and line a baking tray with parchment paper.",
        "2. In a mixing bowl, combine 500g lean minced beef, 50g breadcrumbs, 1 egg, half of the garlic paste, 5g Italian herbs, and a pinch of salt.",
        "3. Roll into 15 equal-sized meatballs and place on the baking tray. Bake for 18–20 minutes until golden and cooked through.",
        "4. Meanwhile, boil 150g whole wheat pasta in salted water for 10 minutes until al dente; drain.",
        "5. In a large skillet, heat 15ml olive oil, add remaining garlic paste and 600g crushed tomatoes with 5g herbs. Simmer for 10 minutes into a rich sauce.",
        "6. Gently add the baked meatballs and 400g spiralized zucchini noodles into the warm tomato gravy; simmer for just 3 minutes so zucchini stays slightly crisp.",
        "7. Divide the cooked whole wheat pasta among 5 bowls and ladle the meatballs, zucchini noodles, and tomato sauce over top."
      ]
    }
  },
  {
    day: 5,
    breakfast: {
      id: "d5-b",
      title: "Golden Turmeric Veggie Scramble with Avocado & Whole Wheat Tortilla",
      cuisine: "Mexican / Continental",
      prepTime: "15 mins",
      cookTime: "10 mins",
      calories: "370 kcal per serving",
      macros: { protein: "20g", carbs: "36g", fiber: "9g", fat: "16g" },
      seasonalTip: "Turmeric offers wonderful natural antioxidant warmth while avocado provides creamy healthy fats.",
      ingredients: [
        "6 large eggs (300g)",
        "100ml low-fat milk",
        "150g red bell pepper, finely diced",
        "150g baby spinach, chopped",
        "100g red onions, finely diced",
        "1 medium ripe avocado (150g), sliced",
        "5 whole wheat tortillas (small 6-inch)",
        "15ml olive oil (1 tbsp)",
        "3g turmeric powder (1/2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. In a mixing bowl, whisk together 6 eggs, 100ml milk, 3g turmeric powder, and 3g salt until bright golden.",
        "2. Heat 15ml olive oil in a non-stick skillet over medium heat.",
        "3. Add 100g diced onions and 150g diced bell peppers; sauté for 4–5 minutes until tender.",
        "4. Add 150g chopped spinach and stir for 1 minute until wilted.",
        "5. Pour the golden egg mixture over the vegetables and turn heat to medium-low.",
        "6. Gently fold and scramble with a spatula for 3–4 minutes until eggs are soft, fluffy, and fully cooked.",
        "7. Warm the 5 whole wheat tortillas on a dry skillet, divide the scramble evenly, and top each with fresh avocado slices."
      ]
    },
    lunch: {
      id: "d5-l",
      title: "Malaysian Grilled Chicken Satay with Peanut Lime Sauce & Cucumber Rice",
      cuisine: "Southeast Asian",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "520 kcal per serving",
      macros: { protein: "44g", carbs: "50g", fiber: "7g", fat: "16g" },
      seasonalTip: "Vibrant Southeast Asian citrus flavors awaken the palate without feeling heavy.",
      ingredients: [
        "600g halal boneless chicken breast, cut into strips",
        "250g jasmine or basmati rice",
        "500ml water",
        "15g lemongrass paste or ginger paste (1 tbsp)",
        "15ml soy sauce (low sodium)",
        "10g ground turmeric and coriander mix",
        "80g natural creamy peanut butter",
        "100ml warm water or light coconut milk",
        "15ml lime juice (1 tbsp)",
        "5g pure honey (1 tsp)",
        "200g fresh cucumber, diced into small cubes"
      ],
      instructions: [
        "1. In a bowl, marinate 600g chicken strips with 15g lemongrass/ginger paste, 15ml low-sodium soy sauce, and 10g spice mix for 15 minutes.",
        "2. Cook 250g rice in 500ml water in a covered pot on low heat for 15 minutes until tender; fluff and fold in 200g diced fresh cucumber.",
        "3. Thread marinated chicken strips onto wooden skewers.",
        "4. Heat a non-stick grill pan or skillet over medium-high heat brushed with 10ml oil.",
        "5. Grill chicken skewers for 5–6 minutes per side until beautifully charred and juicy (internal temp 75°C/165°F).",
        "6. In a small bowl, whisk together 80g peanut butter, 100ml warm water/coconut milk, 15ml lime juice, and 5g honey into a smooth satay dipping sauce.",
        "7. Serve hot chicken satay skewers over refreshing cucumber rice with peanut lime sauce on the side."
      ]
    },
    dinner: {
      id: "d5-d",
      title: "One-Pot Moroccan Mutton Tagine with Chickpeas, Carrots & Couscous",
      cuisine: "Middle Eastern / North African",
      prepTime: "20 mins",
      cookTime: "45 mins",
      calories: "540 kcal per serving",
      macros: { protein: "42g", carbs: "58g", fiber: "11g", fat: "15g" },
      seasonalTip: "Slow-simmered chickpeas and carrots absorb delicious aromatic spices without needing excess fat.",
      ingredients: [
        "500g halal lean mutton cubes (trimmed)",
        "250g cooked chickpeas (1 can, rinsed and drained)",
        "300g carrots, sliced into thick rounds",
        "150g onions, chopped",
        "400g canned diced tomatoes",
        "15ml olive oil (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "5g ground cinnamon (1 tsp)",
        "3g turmeric (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "250g whole wheat couscous",
        "300ml boiling water or vegetable broth"
      ],
      instructions: [
        "1. In a heavy pot or Dutch oven, heat 15ml olive oil over medium heat. Brown 500g lean mutton cubes for 5 minutes.",
        "2. Add 150g chopped onions, 5g cumin, 5g cinnamon, and 3g turmeric; sauté for 3 minutes until aromatic.",
        "3. Stir in 400g diced tomatoes, 300g sliced carrots, and 300ml water. Cover and simmer on low heat for 35 minutes until mutton is tender.",
        "4. Stir in 250g rinsed chickpeas and simmer for an additional 10 minutes so flavors blend into a rich stew.",
        "5. Meanwhile, place 250g whole wheat couscous in a bowl, pour 300ml boiling broth over it, cover with a plate, and let stand for 5 minutes.",
        "6. Fluff the couscous with a fork until light and airy.",
        "7. Serve the aromatic mutton and chickpea tagine ladled over warm whole wheat couscous."
      ]
    }
  },
  {
    day: 6,
    breakfast: {
      id: "d6-b",
      title: "Savory Vegetable Besan Cheela (Chickpea Flour Pancakes) with Mint Chutney",
      cuisine: "Pakistani / Indian",
      prepTime: "15 mins",
      cookTime: "15 mins",
      calories: "330 kcal per serving",
      macros: { protein: "18g", carbs: "44g", fiber: "9g", fat: "9g" },
      seasonalTip: "Naturally gluten-free and high fiber; provides sustained morning satiety without heaviness.",
      ingredients: [
        "250g besan (chickpea flour / gram flour)",
        "350ml water",
        "100g finely grated carrots",
        "100g finely chopped tomatoes",
        "50g finely chopped coriander leaves",
        "50g finely chopped onions",
        "5g cumin seeds (1 tsp)",
        "3g turmeric powder (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "15ml olive or canola oil (for brushing pan)",
        "150g yogurt mint chutney (for serving)"
      ],
      instructions: [
        "1. In a large mixing bowl, whisk together 250g chickpea flour, 5g cumin seeds, 3g turmeric, and 3g salt.",
        "2. Gradually pour in 350ml water while whisking to create a smooth, lump-free batter (similar to pancake batter consistency).",
        "3. Fold in 100g grated carrots, 100g chopped tomatoes, 50g onions, and 50g fresh coriander.",
        "4. Heat a non-stick frying pan or tawa over medium heat and brush lightly with 3ml oil.",
        "5. Pour a ladleful of batter (about 80ml) onto the center of the pan and spread gently into a 6-inch circle.",
        "6. Cook for 2–3 minutes until the bottom is golden brown and edges lift easily, then flip and cook the other side for 2 minutes.",
        "7. Repeat to make 10 savory pancakes (2 per serving) and serve warm with refreshing yogurt mint chutney."
      ]
    },
    lunch: {
      id: "d6-l",
      title: "Greek Chicken Souvlaki Skewers with Tzatziki & Warm Flatbread",
      cuisine: "Mediterranean / Greek",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "500 kcal per serving",
      macros: { protein: "46g", carbs: "44g", fiber: "6g", fat: "14g" },
      seasonalTip: "Lemon and garlic marinade tenderizes the chicken naturally without requiring cream.",
      ingredients: [
        "600g halal chicken breast cubes",
        "30ml olive oil (2 tbsp)",
        "30ml lemon juice (2 tbsp)",
        "15g minced garlic (1 tbsp)",
        "10g dried oregano (2 tsp)",
        "3g sea salt (1/2 tsp)",
        "5 small whole wheat flatbreads or pitas",
        "250g Greek yogurt tzatziki sauce",
        "200g cherry tomatoes, halved",
        "150g cucumber slices"
      ],
      instructions: [
        "1. In a bowl, toss 600g chicken cubes with 30ml olive oil, 30ml lemon juice, 15g garlic, 10g oregano, and salt. Marinate for 15 minutes.",
        "2. Thread the seasoned chicken cubes onto 10 wooden or metal skewers.",
        "3. Heat a grill pan or outdoor grill over medium-high heat.",
        "4. Grill chicken skewers for 6–7 minutes per side until beautifully browned and fully cooked (internal temp 75°C/165°F).",
        "5. Warm the 5 flatbreads on a dry skillet for 30 seconds until soft and pliable.",
        "6. Arrange plates with 2 chicken skewers, warm flatbread, cherry tomatoes, and cucumber slices.",
        "7. Serve with creamy Greek tzatziki dipping sauce on the side."
      ]
    },
    dinner: {
      id: "d6-d",
      title: "Comforting Beef & Vegetable Shepherd's Pie with Mashed Cauliflower-Potato Top",
      cuisine: "Continental / British",
      prepTime: "25 mins",
      cookTime: "30 mins",
      calories: "480 kcal per serving",
      macros: { protein: "40g", carbs: "38g", fiber: "9g", fat: "16g" },
      seasonalTip: "Blending cauliflower with potato lowers calorie density while keeping the crust creamy and comforting.",
      ingredients: [
        "500g halal lean minced beef",
        "300g potatoes, peeled and cubed",
        "300g cauliflower florets",
        "200g carrots, diced",
        "150g green peas (fresh or frozen)",
        "150g onions, finely chopped",
        "200ml low-sodium beef broth",
        "15ml tomato paste (1 tbsp)",
        "15ml olive oil (1 tbsp)",
        "50ml low-fat milk (for mash)",
        "3g garlic powder (1/2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F).",
        "2. In a pot of boiling water, cook 300g potato cubes and 300g cauliflower florets for 15 minutes until fork-tender. Drain well.",
        "3. Mash the potato and cauliflower together with 50ml milk, garlic powder, and a pinch of salt until smooth and creamy.",
        "4. In a large skillet, heat 15ml olive oil over medium heat. Sauté 150g onions and 200g carrots for 5 minutes.",
        "5. Add 500g lean minced beef and cook for 6 minutes until browned.",
        "6. Stir in 15ml tomato paste, 200ml broth, 150g peas, and salt; simmer for 8 minutes until gravy thickens slightly.",
        "7. Transfer the beef mixture into a baking dish, spread the creamy cauliflower-potato mash evenly over top, and bake for 20 minutes until the crust turns golden."
      ]
    }
  },
  {
    day: 7,
    breakfast: {
      id: "d7-b",
      title: "Toasted Whole Grain Bagels with Smoked Salmon, Labneh & Cucumber",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "5 mins",
      calories: "390 kcal per serving",
      macros: { protein: "26g", carbs: "45g", fiber: "7g", fat: "12g" },
      seasonalTip: "Rich in brain-healthy omega-3 fatty acids and high-quality protein without cooking fuss.",
      ingredients: [
        "5 whole grain or sprouted wheat bagels, halved",
        "250g halal smoked salmon slices (or cooked flaked salmon)",
        "200g low-fat labneh or cream cheese",
        "200g fresh cucumber, thinly sliced into ribbons",
        "15g fresh dill or chives, chopped",
        "5ml fresh lemon juice (1 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Toast the 10 bagel halves in a toaster or under an oven broiler for 2–3 minutes until lightly crisp and warm.",
        "2. In a small bowl, mix 200g labneh with 5ml lemon juice and 15g chopped dill.",
        "3. Spread 20g of the herbed labneh evenly over each toasted bagel half.",
        "4. Layer thin cucumber ribbons decoratively over the labneh.",
        "5. Drape 25g of smoked salmon over the cucumber on each bagel.",
        "6. Sprinkle lightly with freshly cracked black pepper.",
        "7. Serve immediately while bagels are warm and toppings are cool and refreshing."
      ]
    },
    lunch: {
      id: "d7-l",
      title: "Hyderabadi Chicken Dum Biryani with Cucumber Onion Raita",
      cuisine: "Pakistani / Indian",
      prepTime: "30 mins",
      cookTime: "35 mins",
      calories: "550 kcal per serving",
      macros: { protein: "44g", carbs: "62g", fiber: "6g", fat: "14g" },
      seasonalTip: "A beloved Sunday family classic cooked with aromatic whole spices and lean chicken.",
      ingredients: [
        "600g halal chicken breast or thigh pieces (bone-in or boneless), skinned",
        "300g long-grain basmati rice, soaked for 30 mins",
        "200g plain yogurt",
        "150g onions, thinly sliced and caramelized",
        "15g ginger-garlic paste (1 tbsp)",
        "10g biryani masala powder (2 tsp)",
        "15ml oil or ghee (1 tbsp)",
        "15g fresh mint and coriander leaves, chopped",
        "1g saffron soaked in 30ml warm milk",
        "300g cucumber onion raita (for serving)"
      ],
      instructions: [
        "1. In a large bowl, marinate 600g chicken with 200g yogurt, 15g ginger-garlic paste, 10g biryani masala, half the caramelized onions, and chopped mint/coriander for 20 minutes.",
        "2. In a large pot of boiling salted water, cook 300g soaked basmati rice for 6–7 minutes until 70% cooked (grains should be firm); drain thoroughly.",
        "3. In a heavy-bottomed pot or Dutch oven, heat 15ml oil and place the marinated chicken in an even layer at the bottom.",
        "4. Spread the semi-cooked basmati rice evenly over the chicken layer.",
        "5. Drizzle the saffron milk and remaining caramelized onions over the top of the rice.",
        "6. Cover the pot tightly with aluminum foil and a tight-fitting lid (dum). Cook on medium heat for 8 minutes, then reduce heat to the lowest setting and simmer for 20 minutes.",
        "7. Gently fluff the aromatic layers together and serve hot with cooling cucumber onion raita."
      ]
    },
    dinner: {
      id: "d7-d",
      title: "Zesty Mexican Chicken Fajita Bowls with Black Beans, Corn & Brown Rice",
      cuisine: "Mexican",
      prepTime: "20 mins",
      cookTime: "20 mins",
      calories: "510 kcal per serving",
      macros: { protein: "45g", carbs: "56g", fiber: "11g", fat: "12g" },
      seasonalTip: "High in dietary fiber from black beans and brown rice; colorful veggies make eating fun for everyone.",
      ingredients: [
        "500g halal chicken breast strips",
        "250g cooked black beans (1 can, rinsed)",
        "150g sweet corn kernels",
        "250g bell peppers (red and green), sliced into strips",
        "150g onions, sliced into strips",
        "250g brown rice, cooked",
        "15ml olive oil (1 tbsp)",
        "10g fajita spice mix (cumin, paprika, oregano, chili powder)",
        "30ml lime juice (2 tbsp)",
        "100g fresh tomato salsa (for topping)"
      ],
      instructions: [
        "1. In a bowl, toss 500g chicken strips with 10g fajita spice mix and 15ml lime juice.",
        "2. In a large skillet, heat 15ml olive oil over medium-high heat.",
        "3. Add seasoned chicken strips and sauté for 6–8 minutes until browned and cooked through; remove to a plate.",
        "4. In the same skillet, add 150g sliced onions and 250g bell pepper strips; sauté for 5 minutes until tender-crisp with slightly charred edges.",
        "5. Add 250g rinsed black beans and 150g corn kernels to the skillet; stir for 2 minutes to warm through.",
        "6. Divide warm cooked brown rice into 5 serving bowls.",
        "7. Arrange the sautéed chicken, fajita vegetables, beans, and corn over the rice, and top each bowl with a spoonful of fresh salsa."
      ]
    }
  },
  {
    day: 8,
    breakfast: {
      id: "d8-b",
      title: "Hearty Banana Almond Butter Oatmeal Bowl with Chia Seeds",
      cuisine: "Continental",
      prepTime: "5 mins",
      cookTime: "12 mins",
      calories: "380 kcal per serving",
      macros: { protein: "15g", carbs: "56g", fiber: "10g", fat: "12g" },
      seasonalTip: "Almond butter provides heart-healthy monounsaturated fats and creamy richness without dairy cream.",
      ingredients: [
        "250g rolled oats",
        "900ml low-fat milk or water",
        "3 medium ripe bananas (approx 300g), sliced",
        "60g natural almond butter (4 tbsp)",
        "20g chia seeds (2 tbsp)",
        "5g ground cinnamon (1 tsp)",
        "15ml maple syrup or honey (1 tbsp)"
      ],
      instructions: [
        "1. In a medium pot, bring 900ml milk or water to a gentle boil over medium heat.",
        "2. Stir in 250g rolled oats and 5g cinnamon; reduce heat to low.",
        "3. Simmer for 10 minutes, stirring frequently, until oats are thick and creamy.",
        "4. Stir in half of the sliced bananas and 20g chia seeds; cook for 2 more minutes until bananas melt into the porridge.",
        "5. Remove from heat and stir in 15ml maple syrup.",
        "6. Spoon oatmeal into 5 bowls.",
        "7. Top each bowl with a dollop of almond butter (approx 12g per bowl) and the remaining banana slices."
      ]
    },
    lunch: {
      id: "d8-l",
      title: "Arabic Spiced Mutton Majboos (Kabsa) with Fresh Tomato Salsa (Daqqus)",
      cuisine: "Arabic / Middle Eastern",
      prepTime: "25 mins",
      cookTime: "50 mins",
      calories: "540 kcal per serving",
      macros: { protein: "44g", carbs: "58g", fiber: "7g", fat: "16g" },
      seasonalTip: "Cooked in a single pot where rice absorbs the rich mutton broth and warm Arabic spices.",
      ingredients: [
        "500g halal lean mutton cubes (leg or shoulder)",
        "300g basmati rice, soaked for 20 mins",
        "700ml water or mutton stock",
        "150g onions, finely chopped",
        "200g tomatoes, chopped",
        "15g garlic-ginger paste (1 tbsp)",
        "15ml olive or canola oil (1 tbsp)",
        "10g kabsa/majboos spice mix (cardamom, cinnamon, black lime powder, cumin)",
        "1 dried black lime (loomi), pierced",
        "200g fresh tomato daqqus salsa (blended tomatoes, garlic, coriander, lemon juice)"
      ],
      instructions: [
        "1. In a heavy pot or pressure cooker, heat 15ml oil over medium heat and brown 500g mutton cubes for 6 minutes.",
        "2. Add 150g chopped onions and 15g garlic-ginger paste; sauté for 4 minutes until aromatic.",
        "3. Stir in 200g chopped tomatoes, 10g kabsa spice mix, and the pierced dried black lime.",
        "4. Pour in 700ml water, cover, and cook on low heat for 40 minutes (or 18 mins in pressure cooker) until mutton is fork-tender.",
        "5. Add 300g drained basmati rice directly into the boiling mutton broth.",
        "6. Cover tightly and cook on low heat for 18 minutes until rice absorbs all liquid and is fluffy.",
        "7. Serve the fragrant majboos on a platter accompanied by spicy, tangy tomato daqqus salsa."
      ]
    },
    dinner: {
      id: "d8-d",
      title: "Lemon Herb Baked Chicken Breasts with Steamed Broccoli & Quinoa",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "450 kcal per serving",
      macros: { protein: "46g", carbs: "42g", fiber: "8g", fat: "11g" },
      seasonalTip: "Ultra-clean and high in dietary fiber; leaves you feeling energized and satiated.",
      ingredients: [
        "600g halal chicken breast fillets",
        "250g dry quinoa, rinsed",
        "500ml water",
        "500g fresh broccoli florets",
        "30ml olive oil (2 tbsp)",
        "30ml lemon juice (2 tbsp)",
        "10g dried thyme and rosemary mix",
        "10g garlic powder (2 tsp)",
        "3g salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and lightly oil a baking dish.",
        "2. In a bowl, whisk together 30ml olive oil, 30ml lemon juice, 10g herb mix, garlic powder, salt, and pepper.",
        "3. Place 600g chicken breast fillets in the baking dish and pour half the herb dressing over them.",
        "4. Bake chicken for 22–25 minutes until golden and juices run clear (internal temp 75°C/165°F).",
        "5. Meanwhile, cook 250g quinoa in 500ml water in a covered saucepan for 15 minutes until fluffy.",
        "6. Steam 500g broccoli florets in a steamer basket over boiling water for 5–6 minutes until vibrant green and tender-crisp; toss with remaining dressing.",
        "7. Slice the baked chicken and serve over fluffy quinoa with a generous portion of lemon-steamed broccoli."
      ]
    }
  },
  {
    day: 9,
    breakfast: {
      id: "d9-b",
      title: "Creamy Mushroom & Herb Scrambled Eggs on Sprouted Wheat Toast",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "360 kcal per serving",
      macros: { protein: "22g", carbs: "34g", fiber: "7g", fat: "15g" },
      seasonalTip: "Mushrooms provide natural B-vitamins and earthy umami flavor without needing heavy cheeses.",
      ingredients: [
        "6 large eggs (300g)",
        "80ml low-fat milk",
        "250g fresh button or cremini mushrooms, finely sliced",
        "100g onions, finely diced",
        "15ml olive oil or butter (1 tbsp)",
        "15g fresh chives or parsley, chopped",
        "3g sea salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)",
        "5 slices sprouted wheat or whole grain bread, toasted"
      ],
      instructions: [
        "1. In a bowl, beat 6 eggs with 80ml milk, salt, and pepper until well blended.",
        "2. Heat 15ml olive oil in a non-stick frying pan over medium heat.",
        "3. Add 100g diced onions and 250g sliced mushrooms; sauté for 6–7 minutes until mushrooms release their moisture and turn golden brown.",
        "4. Turn heat down to low and pour the egg mixture over the sautéed mushrooms.",
        "5. Stir gently with a silicone spatula, folding the eggs continuously for 3 minutes until soft curds form and eggs are creamy.",
        "6. Remove from heat immediately (eggs will finish cooking from residual heat) and stir in 15g fresh chives.",
        "7. Toast the 5 slices of sprouted wheat bread and top generously with creamy mushroom scrambled eggs."
      ]
    },
    lunch: {
      id: "d9-l",
      title: "Thai Green Curry Chicken with Bamboo Shoots, Eggplant & Jasmine Rice",
      cuisine: "Southeast Asian / Thai",
      prepTime: "20 mins",
      cookTime: "25 mins",
      calories: "510 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "7g", fat: "15g" },
      seasonalTip: "Using light coconut milk keeps the authentic Thai creaminess while reducing saturated fats significantly.",
      ingredients: [
        "500g halal chicken breast cubes",
        "400ml light coconut milk (1 can)",
        "30g Thai green curry paste (approx 2 tbsp)",
        "250g Thai eggplant or regular eggplant, cubed",
        "150g bamboo shoots (canned, drained)",
        "100g green bell peppers, sliced",
        "250g jasmine rice, cooked with 500ml water",
        "15ml fish sauce or low-sodium soy sauce (1 tbsp)",
        "10g brown sugar or honey (2 tsp)",
        "15g fresh basil leaves (Thai basil preferred)"
      ],
      instructions: [
        "1. In a deep skillet or wok, heat 100ml of light coconut milk over medium heat until it bubbles.",
        "2. Stir in 30g green curry paste and sauté for 2–3 minutes until fragrant and oils separate slightly.",
        "3. Add 500g chicken cubes and cook for 5 minutes until sealed and coated in green curry spices.",
        "4. Pour in the remaining 300ml coconut milk, 15ml soy sauce, and 10g honey; bring to a gentle simmer.",
        "5. Add 250g cubed eggplant, 150g bamboo shoots, and 100g bell peppers; simmer uncovered for 12–15 minutes until vegetables are tender.",
        "6. Turn off the heat and fold in 15g fresh basil leaves so they wilt gently into the sauce.",
        "7. Serve the fragrant green curry chicken over steaming bowls of fluffy jasmine rice."
      ]
    },
    dinner: {
      id: "d9-d",
      title: "Traditional Pakistani Beef Shami Kebabs with Mint Chutney & Whole Wheat Roti",
      cuisine: "Pakistani",
      prepTime: "30 mins",
      cookTime: "30 mins",
      calories: "490 kcal per serving",
      macros: { protein: "44g", carbs: "46g", fiber: "10g", fat: "14g" },
      seasonalTip: "Combining beef with chana dal (split bengal gram) creates an ultra-high fiber patty that binds naturally.",
      ingredients: [
        "500g halal lean beef (boneless cubes or mince)",
        "150g chana dal (split yellow gram), washed and soaked for 2 hours",
        "500ml water",
        "15g ginger-garlic paste (1 tbsp)",
        "10g shami kebab whole spice mix (cinnamon, cloves, peppercorns, cumin)",
        "1 medium egg (50g - for binding)",
        "50g finely chopped onions",
        "20g fresh mint and coriander leaves, chopped",
        "15ml oil (for shallow pan-toasting)",
        "5 whole wheat rotis or chapatis",
        "150g yogurt mint chutney"
      ],
      instructions: [
        "1. In a saucepan or pressure cooker, combine 500g beef, 150g soaked chana dal, 15g ginger-garlic paste, 10g whole spices, and 500ml water.",
        "2. Boil until beef and dal are completely tender and all water is evaporated (approx 30 mins, or 12 mins in pressure cooker); let cool.",
        "3. Grind or food-processor the mixture into a smooth, fibrous dough.",
        "4. Fold in 1 egg, 50g chopped onions, and 20g fresh mint/coriander; knead well.",
        "5. Shape into 10 round, smooth shami kebab patties.",
        "6. Heat a non-stick frying pan over medium heat brushed with 15ml oil. Toast the kebabs for 3–4 minutes per side until a crisp golden-brown crust forms.",
        "7. Serve 2 warm shami kebabs per person with fresh whole wheat roti and cooling yogurt mint chutney."
      ]
    }
  },
  {
    day: 10,
    breakfast: {
      id: "d10-b",
      title: "Mediterranean Omelette Wrap with Feta, Spinach & Sun-Dried Tomatoes",
      cuisine: "Mediterranean",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "370 kcal per serving",
      macros: { protein: "22g", carbs: "35g", fiber: "6g", fat: "15g" },
      seasonalTip: "Portable and delicious; sun-dried tomatoes provide intense savory bursts without extra salt.",
      ingredients: [
        "6 large eggs (300g)",
        "80ml low-fat milk",
        "150g fresh baby spinach",
        "50g sun-dried tomatoes (dry-packed or oil drained), chopped",
        "60g crumbled feta cheese (low sodium)",
        "5 whole wheat tortillas or wraps",
        "10ml olive oil (2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. In a bowl, whisk 6 eggs with 80ml milk and black pepper.",
        "2. Heat 10ml olive oil in a large non-stick frying pan over medium heat.",
        "3. Add 150g spinach and 50g sun-dried tomatoes; sauté for 2 minutes until spinach wilts.",
        "4. Pour the whisked eggs over the greens and cook into a large flat omelette (or make individual smaller omelettes).",
        "5. When eggs are nearly set, sprinkle 60g crumbled feta cheese over top and fold.",
        "6. Warm the 5 whole wheat tortillas on a dry griddle for 20 seconds.",
        "7. Divide the Mediterranean egg scramble among the tortillas, wrap tightly into burritos, and serve warm."
      ]
    },
    lunch: {
      id: "d10-l",
      title: "Indian Butter Chicken (Lightened Up Murgh Makhani) with Basmati Rice",
      cuisine: "Indian / Pakistani",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "520 kcal per serving",
      macros: { protein: "44g", carbs: "54g", fiber: "5g", fat: "14g" },
      seasonalTip: "Using blended cashew paste and yogurt instead of heavy double cream cuts calories while preserving velvet texture.",
      ingredients: [
        "600g halal boneless chicken breast, cubed",
        "300g basmati rice, cooked with 600ml water",
        "400g tomato puree or passata",
        "150g onions, finely chopped",
        "15g ginger-garlic paste (1 tbsp)",
        "40g raw cashews, soaked in warm water and blended into a paste",
        "100ml plain low-fat yogurt",
        "15g butter (1 tbsp)",
        "10g tandoori or garam masala spice mix (2 tsp)",
        "5g kasuri methi (dried fenugreek leaves, crushed - 1 tsp)"
      ],
      instructions: [
        "1. In a bowl, marinate 600g chicken cubes in 100ml yogurt, 5g spice mix, and half the ginger-garlic paste for 15 minutes.",
        "2. In a deep non-stick pan, melt 15g butter over medium heat. Add 150g onions and sauté for 6 minutes until golden.",
        "3. Add remaining ginger-garlic paste and 400g tomato puree; simmer for 10 minutes until sauce deepens in color.",
        "4. Add the marinated chicken cubes and remaining 5g spice mix; cover and cook on medium-low heat for 15 minutes until chicken is cooked through.",
        "5. Stir in the smooth cashew paste and simmer for 3 minutes until the gravy turns rich, creamy, and velvety.",
        "6. Crush 5g kasuri methi between your palms and sprinkle over the curry for unmistakable authentic aroma.",
        "7. Serve the creamy lightened butter chicken over steamed aromatic basmati rice."
      ]
    },
    dinner: {
      id: "d10-d",
      title: "Baked Fish Tacos with Crunchy Cabbage Slaw & Avocado Lime Dressing",
      cuisine: "Mexican",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "460 kcal per serving",
      macros: { protein: "38g", carbs: "44g", fiber: "9g", fat: "14g" },
      seasonalTip: "Crunchy fresh purple cabbage slaw adds refreshing texture and vital antioxidants.",
      ingredients: [
        "600g halal white fish fillets (cod or tilapia), sliced into strips",
        "10 whole wheat corn or flour tortillas (small street-taco size)",
        "300g shredded purple and green cabbage",
        "100g carrots, shredded",
        "1 medium ripe avocado (150g), blended with 30ml lime juice and 50g yogurt",
        "15ml olive oil (1 tbsp)",
        "10g taco seasoning mix (cumin, paprika, garlic, oregano)",
        "20g fresh coriander leaves, chopped"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and line a baking sheet with parchment paper.",
        "2. Toss 600g fish strips with 15ml olive oil and 10g taco seasoning; arrange in a single layer on the baking sheet.",
        "3. Bake fish for 12–15 minutes until flaky and tender.",
        "4. Meanwhile, prepare the slaw: in a bowl, toss 300g shredded cabbage and 100g shredded carrots with half of the creamy avocado-lime yogurt dressing.",
        "5. Warm the 10 tortillas on a dry skillet for 15 seconds per side until pliable.",
        "6. Assemble tacos by placing seasoned baked fish strips onto each warm tortilla.",
        "7. Top with crunchy cabbage slaw, drizzle with remaining avocado lime dressing, and garnish with fresh coriander."
      ]
    }
  },
  {
    day: 11,
    breakfast: {
      id: "d11-b",
      title: "Warm Apple Pear Quinoa Porridge with Toasted Almonds",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "20 mins",
      calories: "350 kcal per serving",
      macros: { protein: "12g", carbs: "58g", fiber: "8g", fat: "9g" },
      seasonalTip: "Quinoa provides a complete plant protein; simmered with pears and apples for soothing warmth.",
      ingredients: [
        "200g dry white or tricolor quinoa, rinsed thoroughly",
        "600ml low-fat milk or almond milk",
        "300ml water",
        "200g apples, diced",
        "200g ripe pears, diced",
        "40g sliced almonds, toasted",
        "30ml pure maple syrup or honey (2 tbsp)",
        "5g cinnamon (1 tsp)",
        "2ml vanilla extract (1/2 tsp)"
      ],
      instructions: [
        "1. In a medium saucepan, combine 200g rinsed quinoa, 600ml milk, and 300ml water. Bring to a boil.",
        "2. Reduce heat to low, cover, and simmer for 12 minutes.",
        "3. Stir in 200g diced apples, 200g diced pears, and 5g cinnamon; cover and continue simmering for 8 minutes until quinoa is tender and fruit is soft.",
        "4. Remove from heat and stir in 2ml vanilla extract and 30ml maple syrup.",
        "5. Let sit covered for 3 minutes to fluff up.",
        "6. Spoon into 5 breakfast bowls and garnish evenly with 40g toasted sliced almonds for a wonderful nutty crunch."
      ]
    },
    lunch: {
      id: "d11-l",
      title: "Persian Herbed Lentil & Rice Pilaf (Adas Polo) with Spiced Chicken Skewers",
      cuisine: "Persian",
      prepTime: "20 mins",
      cookTime: "35 mins",
      calories: "530 kcal per serving",
      macros: { protein: "44g", carbs: "58g", fiber: "10g", fat: "13g" },
      seasonalTip: "Combining brown lentils with aromatic basmati rice creates an exceptionally satiating, high-fiber foundation.",
      ingredients: [
        "500g halal boneless chicken breast cubes",
        "250g basmati rice, soaked for 20 mins",
        "150g brown or green lentils, rinsed",
        "800ml water or broth",
        "150g onions, sliced and caramelized",
        "50g raisins or dates, chopped (optional sweet contrast)",
        "15ml olive oil (1 tbsp)",
        "10g Persian spice mix (cinnamon, cumin, saffron pinch)",
        "15g yogurt garlic marinade (for chicken)"
      ],
      instructions: [
        "1. In a pot, boil 150g lentils in 400ml water for 15 minutes until par-cooked; drain.",
        "2. In a larger pot, bring 400ml salted water to a boil, add 250g soaked rice and par-cooked lentils; simmer covered on low heat for 18 minutes until tender.",
        "3. Meanwhile, marinate 500g chicken cubes with 15g yogurt garlic paste, olive oil, and pinch of spices; thread onto skewers.",
        "4. Grill or pan-sear the chicken skewers over medium-high heat for 10–12 minutes until golden and cooked through.",
        "5. In a small pan, warm the caramelized onions and raisins with a pinch of cinnamon for 2 minutes.",
        "6. Gently fluff the lentil rice pilaf (Adas Polo) with a fork and transfer to a serving platter.",
        "7. Top with sweet spiced onions/raisins and arrange the juicy grilled chicken skewers alongside."
      ]
    },
    dinner: {
      id: "d11-d",
      title: "Hearty Beef & Red Bean Chili with Whole Grain Cornbread",
      cuisine: "American / Mexican",
      prepTime: "15 mins",
      cookTime: "35 mins",
      calories: "510 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "12g", fat: "15g" },
      seasonalTip: "Rich in kidney bean fiber which slows digestion and keeps blood sugar stable throughout the night.",
      ingredients: [
        "500g halal lean minced beef",
        "400g canned red kidney beans, rinsed and drained",
        "600g crushed tomatoes (1 large can)",
        "150g onions, chopped",
        "150g bell peppers, diced",
        "15ml olive oil (1 tbsp)",
        "10g chili powder and cumin mix (2 tsp)",
        "3g garlic powder (1 tsp)",
        "3g salt (1/2 tsp)",
        "250g whole grain cornbread squares (for serving)"
      ],
      instructions: [
        "1. In a large heavy soup pot or Dutch oven, heat 15ml olive oil over medium heat.",
        "2. Sauté 150g chopped onions and 150g diced bell peppers for 6 minutes until tender.",
        "3. Add 500g lean minced beef and cook for 6–8 minutes until browned, breaking it apart with a wooden spoon.",
        "4. Stir in 10g chili spice mix and 3g garlic powder; cook for 1 minute until fragrant.",
        "5. Pour in 600g crushed tomatoes and 200ml water; bring to a boil.",
        "6. Stir in 400g rinsed kidney beans, reduce heat to low, cover, and simmer for 25 minutes until rich and thick.",
        "7. Ladle warm beef chili into bowls and serve with a square of whole grain cornbread on the side."
      ]
    }
  },
  {
    day: 12,
    breakfast: {
      id: "d12-b",
      title: "Mediterranean Egg & Veggie Muffins with Fresh Melon Slices",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "20 mins",
      calories: "340 kcal per serving",
      macros: { protein: "22g", carbs: "32g", fiber: "5g", fat: "14g" },
      seasonalTip: "Baked in muffin tins for easy grab-and-go portions; hydrating melon slices refresh the morning palate.",
      ingredients: [
        "6 large eggs (300g)",
        "100ml low-fat milk",
        "150g red bell peppers, diced small",
        "150g zucchini, diced small",
        "100g onions, finely diced",
        "50g cheddar or feta cheese, grated",
        "10ml olive oil (for greasing muffin tin)",
        "3g salt (1/2 tsp)",
        "2g oregano (1/2 tsp)",
        "500g fresh cantaloupe or watermelon, sliced"
      ],
      instructions: [
        "1. Preheat oven to 190°C (375°F) and grease a 10-cup muffin tin with 10ml olive oil (or use silicone liners).",
        "2. In a skillet, lightly sauté 100g onions, 150g bell peppers, and 150g zucchini for 4 minutes to remove excess moisture; divide evenly among the 10 muffin cups.",
        "3. In a bowl, whisk together 6 eggs, 100ml milk, 50g grated cheese, salt, and oregano.",
        "4. Pour the egg mixture over the vegetables in the muffin cups, filling each about 3/4 full.",
        "5. Bake in the oven for 18–20 minutes until the egg muffins are puffed, golden, and set in the center.",
        "6. Allow to cool for 3 minutes before unmolding.",
        "7. Serve 2 warm veggie egg muffins per person alongside juicy, hydrating slices of fresh melon."
      ]
    },
    lunch: {
      id: "d12-l",
      title: "Lebanese Chicken Shish Taouk with Garlic Labneh & Bulgur Wheat Pilaf",
      cuisine: "Middle Eastern / Lebanese",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "510 kcal per serving",
      macros: { protein: "46g", carbs: "48g", fiber: "8g", fat: "14g" },
      seasonalTip: "Yogurt and lemon marinade makes the chicken melt-in-your-mouth tender without frying.",
      ingredients: [
        "600g halal boneless chicken breast cubes",
        "100ml plain yogurt",
        "30ml lemon juice (2 tbsp)",
        "15g garlic paste (1 tbsp)",
        "10g tomato paste (2 tsp)",
        "5g paprika and thyme mix (1 tsp)",
        "250g coarse bulgur wheat",
        "500ml hot chicken or vegetable broth",
        "150g garlic labneh (strained yogurt with garlic hint)",
        "200g cucumber tomato salad"
      ],
      instructions: [
        "1. In a mixing bowl, combine 100ml yogurt, 30ml lemon juice, 15g garlic paste, 10g tomato paste, and paprika/thyme mix.",
        "2. Add 600g chicken cubes, coat thoroughly, and marinate for at least 15 minutes.",
        "3. Thread the marinated chicken onto skewers.",
        "4. Heat a grill pan or outdoor grill over medium-high heat and cook skewers for 6–8 minutes per side until charred and juicy (internal temp 75°C/165°F).",
        "5. Meanwhile, place 250g bulgur wheat in a saucepan with 500ml boiling broth, cover, and simmer on low heat for 12 minutes until tender.",
        "6. Fluff the cooked bulgur pilaf with a fork and divide among 5 plates.",
        "7. Arrange the grilled Shish Taouk skewers over the bulgur and serve with creamy garlic labneh and fresh cucumber salad."
      ]
    },
    dinner: {
      id: "d12-d",
      title: "Gentle Baked White Fish with Garlic Mashed Potatoes & Roasted Green Beans",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "440 kcal per serving",
      macros: { protein: "38g", carbs: "42g", fiber: "6g", fat: "12g" },
      seasonalTip: "Mild, easy-to-digest white fish paired with comforting olive oil mashed potatoes ensures effortless digestion.",
      ingredients: [
        "600g halal white fish fillets (haddock, cod, or flounder)",
        "600g potatoes, peeled and cubed",
        "400g fresh green beans, trimmed",
        "30ml extra virgin olive oil (2 tbsp)",
        "80ml warm low-fat milk (for mash)",
        "10g garlic powder (2 tsp)",
        "15ml fresh lemon juice (1 tbsp)",
        "3g sea salt (1/2 tsp)",
        "15g fresh parsley, chopped"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and line a baking sheet with parchment paper.",
        "2. Place 600g fish fillets and 400g trimmed green beans on the baking sheet. Drizzle with 15ml olive oil, 15ml lemon juice, half the garlic powder, salt, and pepper.",
        "3. Bake for 15–18 minutes until fish flakes easily with a fork and green beans are tender-crisp.",
        "4. Meanwhile, boil 600g cubed potatoes in salted water for 15 minutes until fork-tender; drain completely.",
        "5. Mash the potatoes with 80ml warm milk, remaining 15ml olive oil, garlic powder, and chopped parsley until ultra-smooth and fluffy.",
        "6. Divide the creamy garlic mashed potatoes among 5 warmed plates.",
        "7. Top with flaky baked fish fillets and a generous side of roasted green beans."
      ]
    }
  },
  {
    day: 13,
    breakfast: {
      id: "d13-b",
      title: "High-Protein Buckwheat & Oat Pancakes with Berry Compote",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "15 mins",
      calories: "370 kcal per serving",
      macros: { protein: "18g", carbs: "56g", fiber: "8g", fat: "9g" },
      seasonalTip: "Buckwheat flour adds nutty rustic flavor and exceptional dietary fiber without refined sugars.",
      ingredients: [
        "150g buckwheat flour",
        "100g oat flour (or finely blended rolled oats)",
        "300ml low-fat milk or buttermilk",
        "2 large eggs (100g)",
        "15ml honey (1 tbsp)",
        "5g baking powder (1 tsp)",
        "300g mixed berries (fresh or frozen)",
        "15ml water (for compote)",
        "10ml olive or canola oil (for griddle)"
      ],
      instructions: [
        "1. To make the compote: in a small saucepan, simmer 300g mixed berries with 15ml water and 1 tsp honey over medium-low heat for 10 minutes until juicy and thickened; set aside.",
        "2. In a large bowl, whisk together 150g buckwheat flour, 100g oat flour, and 5g baking powder.",
        "3. In a separate bowl, beat 2 eggs with 300ml milk and remaining honey; pour into the dry ingredients and whisk until a smooth batter forms.",
        "4. Heat a non-stick griddle or frying pan over medium heat and brush lightly with oil.",
        "5. Pour 60ml of batter per pancake onto the griddle.",
        "6. Cook for 2–3 minutes until bubbles form on top and edges look dry, then flip and cook for 1–2 minutes until golden brown.",
        "7. Stack 2 warm pancakes per person and spoon warm, naturally sweet berry compote generously over top."
      ]
    },
    lunch: {
      id: "d13-l",
      title: "Turkish Minced Beef Pide (Flatbread Pizza) with Arugula & Tomato Salad",
      cuisine: "Turkish",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "520 kcal per serving",
      macros: { protein: "40g", carbs: "52g", fiber: "7g", fat: "16g" },
      seasonalTip: "Using thin whole wheat flatbread bases creates the authentic Turkish pide crunch with half the carbs of traditional pizza.",
      ingredients: [
        "500g halal lean minced beef",
        "5 whole wheat flatbreads or naan bases",
        "150g onions, finely minced",
        "150g tomatoes, finely minced",
        "15g garlic paste (1 tbsp)",
        "15ml tomato paste (1 tbsp)",
        "10g Turkish spice mix (cumin, paprika, red pepper flakes pinch)",
        "15ml olive oil (1 tbsp)",
        "200g fresh arugula (rocket leaves)",
        "200g cherry tomatoes, halved",
        "10ml lemon juice (2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 220°C (425°F) and line two baking sheets with parchment paper.",
        "2. In a skillet, heat 15ml olive oil over medium heat. Sauté 150g minced onions and 15g garlic for 4 minutes.",
        "3. Add 500g lean minced beef and cook for 6 minutes until browned.",
        "4. Stir in 150g minced tomatoes, 15ml tomato paste, and 10g spices; simmer for 5 minutes until thick and savory; remove from heat.",
        "5. Place the 5 whole wheat flatbreads on baking sheets and spread the spiced beef mixture evenly over each base right to the edges.",
        "6. Bake in the preheated oven for 10–12 minutes until the flatbread edges are crispy and golden.",
        "7. Toss 200g arugula and 200g cherry tomatoes with 10ml lemon juice; slice the warm beef pides and serve with the fresh green salad."
      ]
    },
    dinner: {
      id: "d13-d",
      title: "Soothing Chicken & Rice Congee (Arroz Caldo) with Ginger & Green Onions",
      cuisine: "Asian / Continental",
      prepTime: "15 mins",
      cookTime: "40 mins",
      calories: "450 kcal per serving",
      macros: { protein: "42g", carbs: "48g", fiber: "4g", fat: "10g" },
      seasonalTip: "Simmered rice porridge infused with fresh ginger provides ultimate digestive warmth and hydration.",
      ingredients: [
        "500g halal boneless chicken breast or thigh, diced small",
        "200g jasmine or basmati rice, rinsed",
        "1.5 l low-sodium chicken broth or water",
        "25g fresh ginger root, peeled and julienned (matchsticks)",
        "15g garlic, minced (1 tbsp)",
        "15ml sesame or canola oil (1 tbsp)",
        "50g green onions (scallions), finely sliced",
        "15ml low-sodium soy sauce (1 tbsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. In a large heavy soup pot, heat 15ml oil over medium heat. Sauté 15g minced garlic and half of the julienned ginger for 2 minutes until fragrant.",
        "2. Add 500g diced chicken and sauté for 4–5 minutes until the outside turns white.",
        "3. Add 200g rinsed rice and stir for 1 minute to coat in the aromatics.",
        "4. Pour in 1.5 liters of broth or water and bring to a rolling boil.",
        "5. Reduce heat to low, cover partially, and simmer for 35–40 minutes, stirring occasionally, until the rice breaks down into a thick, silky porridge.",
        "6. Season with 15ml low-sodium soy sauce and salt to taste.",
        "7. Ladle into 5 warm bowls and top generously with fresh green onions and the remaining fresh ginger matchsticks."
      ]
    }
  },
  {
    day: 14,
    breakfast: {
      id: "d14-b",
      title: "Shakshuka with Chickpeas & Whole Grain Pita Bread",
      cuisine: "Middle Eastern",
      prepTime: "15 mins",
      cookTime: "20 mins",
      calories: "390 kcal per serving",
      macros: { protein: "23g", carbs: "44g", fiber: "10g", fat: "14g" },
      seasonalTip: "Adding chickpeas to traditional shakshuka boosts complex carbohydrates and keeps morning hunger at bay for hours.",
      ingredients: [
        "5 large eggs (250g)",
        "250g cooked chickpeas (1 can, rinsed and drained)",
        "600g crushed tomatoes or passata",
        "150g bell peppers, sliced",
        "100g onions, chopped",
        "15g garlic paste (1 tbsp)",
        "15ml olive oil (1 tbsp)",
        "5g cumin (1 tsp)",
        "5g paprika (1 tsp)",
        "5 whole grain pita breads"
      ],
      instructions: [
        "1. Heat 15ml olive oil in a deep skillet over medium heat.",
        "2. Sauté 100g onions and 150g bell peppers for 6 minutes until softened.",
        "3. Stir in 15g garlic paste, 5g cumin, and 5g paprika; cook for 1 minute.",
        "4. Pour in 600g crushed tomatoes and 250g rinsed chickpeas; simmer gently for 10 minutes until thick and flavorful.",
        "5. Make 5 indentations in the sauce and crack 1 egg into each well.",
        "6. Cover with a lid and simmer on low for 6–8 minutes until egg whites are cooked and yolks are tender.",
        "7. Warm the 5 whole grain pitas and serve immediately with the warm chickpea shakshuka."
      ]
    },
    lunch: {
      id: "d14-l",
      title: "Pakistani Mutton Pulao with Spiced Raita & Fresh Salad",
      cuisine: "Pakistani",
      prepTime: "25 mins",
      cookTime: "45 mins",
      calories: "540 kcal per serving",
      macros: { protein: "44g", carbs: "56g", fiber: "6g", fat: "16g" },
      seasonalTip: "Cooked with whole aromatic spices (yakhni style) which extracts deep marrow nutrients without heavy spices.",
      ingredients: [
        "500g halal lean mutton cubes (leg or shoulder)",
        "300g basmati rice, washed and soaked for 20 mins",
        "700ml water (for broth)",
        "150g onions, sliced",
        "15g ginger-garlic paste (1 tbsp)",
        "10g pulao whole spices (cinnamon stick, black cardamom, cloves, cumin seeds)",
        "15ml oil or ghee (1 tbsp)",
        "300g plain yogurt mixed with cumin and mint (for raita)",
        "200g cucumber and tomato salad"
      ],
      instructions: [
        "1. In a pot or pressure cooker, combine 500g mutton cubes, 700ml water, 15g ginger-garlic paste, and whole spices. Cook until mutton is tender (approx 35 mins, or 15 mins in pressure cooker). Separate mutton from the broth (yakhni), reserving exactly 600ml of broth.",
        "2. In a heavy-bottomed pot, heat 15ml oil over medium heat and sauté 150g sliced onions until golden brown.",
        "3. Add the tender boiled mutton cubes to the onions and sear for 3 minutes.",
        "4. Pour in the reserved 600ml mutton broth and bring to a rolling boil.",
        "5. Add 300g drained basmati rice, stir gently, and cook uncovered on medium-high heat until 80% of the broth is absorbed.",
        "6. Cover tightly, reduce heat to the lowest setting (dum), and steam for 15 minutes until rice is fluffy and fragrant.",
        "7. Serve hot mutton pulao with cooling spiced cumin raita and fresh salad."
      ]
    },
    dinner: {
      id: "d14-d",
      title: "Mediterranean Grilled Chicken Salad with Quinoa, Olives & Feta",
      cuisine: "Mediterranean",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "38g", fiber: "7g", fat: "15g" },
      seasonalTip: "Crisp, hydrating cucumbers and leafy greens provide instant refreshment and lightness.",
      ingredients: [
        "500g halal chicken breast fillets, grilled and sliced",
        "200g cooked quinoa (chilled or warm)",
        "300g crisp romaine lettuce or mixed salad greens, chopped",
        "200g cucumbers, diced",
        "200g cherry tomatoes, halved",
        "50g kalamata olives, pitted and halved",
        "50g feta cheese, crumbled",
        "30ml extra virgin olive oil (2 tbsp)",
        "30ml fresh lemon juice (2 tbsp)",
        "5g dried oregano (1 tsp)"
      ],
      instructions: [
        "1. Season 500g chicken breasts with salt, pepper, and oregano; grill over medium-high heat for 6–7 minutes per side until juicy and cooked through; slice into strips.",
        "2. In a large salad bowl, whisk together 30ml extra virgin olive oil, 30ml fresh lemon juice, and 5g oregano to create a zesty dressing.",
        "3. Add 300g chopped romaine greens, 200g cooked quinoa, 200g diced cucumbers, 200g cherry tomatoes, and 50g olives to the salad bowl.",
        "4. Toss gently until all vegetables and grains are coated in the lemon dressing.",
        "5. Divide the Mediterranean quinoa salad among 5 large dinner bowls.",
        "6. Top each bowl with warm sliced grilled chicken strips and sprinkle with 10g crumbled feta cheese per bowl.",
        "7. Serve immediately for a refreshing, high-protein evening meal."
      ]
    }
  },
  {
    day: 15,
    breakfast: {
      id: "d15-b",
      title: "Banana & Spinach Green Power Smoothie Bowl with Granola Crunch",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "0 mins (No Cook)",
      calories: "350 kcal per serving",
      macros: { protein: "16g", carbs: "54g", fiber: "9g", fat: "9g" },
      seasonalTip: "Hidden baby spinach blends completely tasteless into sweet banana and yogurt, providing effortless iron and folate.",
      ingredients: [
        "4 medium ripe frozen bananas (approx 400g)",
        "200g fresh baby spinach (washed)",
        "500ml low-fat milk or almond milk",
        "300g plain Greek yogurt",
        "30g chia seeds or flaxseeds (2 tbsp)",
        "150g whole grain granola (for topping)",
        "100g fresh blueberries or strawberry slices (for topping)"
      ],
      instructions: [
        "1. In a high-speed blender, combine 500ml milk, 300g Greek yogurt, and 200g fresh baby spinach.",
        "2. Blend on high for 45 seconds until completely smooth and vibrant green with no spinach bits remaining.",
        "3. Add 4 frozen bananas and 30g chia seeds to the blender.",
        "4. Blend again until thick, creamy, and velvety (similar to soft-serve ice cream consistency).",
        "5. Pour the thick smoothie into 5 breakfast bowls.",
        "6. Top each bowl neatly with 30g whole grain granola and fresh berries.",
        "7. Enjoy immediately with a spoon while cold and refreshing!"
      ]
    },
    lunch: {
      id: "d15-l",
      title: "Moroccan Spiced Baked Fish with Chermoula Herb Sauce & Couscous",
      cuisine: "Moroccan / North African",
      prepTime: "20 mins",
      cookTime: "20 mins",
      calories: "490 kcal per serving",
      macros: { protein: "40g", carbs: "50g", fiber: "7g", fat: "14g" },
      seasonalTip: "Chermoula sauce uses fresh coriander, parsley, garlic, and lemon juice for intense flavor without heaviness.",
      ingredients: [
        "600g halal white fish fillets (seabass, snapper, or cod)",
        "250g whole wheat couscous",
        "350ml boiling vegetable broth",
        "50g fresh coriander and parsley mix, finely chopped",
        "15g garlic paste (1 tbsp)",
        "30ml olive oil (2 tbsp)",
        "30ml fresh lemon juice (2 tbsp)",
        "5g ground cumin (1 tsp)",
        "5g sweet paprika (1 tsp)",
        "300g roasted cherry tomatoes and zucchini (for side)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and line a baking tray with parchment paper.",
        "2. Prepare Chermoula sauce: in a bowl, mix 50g chopped herbs, 15g garlic, 30ml olive oil, 30ml lemon juice, 5g cumin, 5g paprika, and half tsp salt.",
        "3. Place 600g fish fillets on the baking tray and spoon two-thirds of the vibrant green Chermoula sauce over top.",
        "4. Bake fish for 15–18 minutes until flaky and cooked through.",
        "5. Meanwhile, place 250g whole wheat couscous in a bowl, pour 350ml boiling broth over it, cover, and let steam for 5 minutes.",
        "6. Fluff couscous with a fork and stir in the remaining third of the Chermoula herb dressing for incredible flavor.",
        "7. Serve flaky baked Moroccan fish over herbed couscous accompanied by roasted cherry tomatoes and zucchini."
      ]
    },
    dinner: {
      id: "d15-d",
      title: "Traditional Pakistani Mutton Haleem (Slow-Cooked Lentil & Meat Stew)",
      cuisine: "Pakistani",
      prepTime: "30 mins",
      cookTime: "60 mins",
      calories: "530 kcal per serving",
      macros: { protein: "45g", carbs: "52g", fiber: "12g", fat: "15g" },
      macrosTip: "An absolute powerhouse of dietary fiber and complex protein from 4 types of lentils, wheat, and tender mutton.",
      ingredients: [
        "500g halal boneless lean mutton cubes",
        "200g mixed lentils and grains (wheat/daliya, barley, chana dal, moong dal, masoor dal mix), soaked for 4 hours",
        "1.5 l water",
        "150g onions, thinly sliced and golden-browned",
        "15g ginger-garlic paste (1 tbsp)",
        "10g haleem spice masala (turmeric, coriander, cumin, mild chili)",
        "15ml oil (1 tbsp)",
        "20g fresh ginger julienne, coriander, and lemon wedges (for garnish)"
      ],
      instructions: [
        "1. In a pressure cooker or large heavy pot, heat 15ml oil and sear 500g mutton cubes with 15g ginger-garlic paste for 5 minutes.",
        "2. Add 200g soaked mixed lentils/grains, 10g haleem spices, and 1.5 liters of water.",
        "3. Pressure cook for 35 minutes (or simmer covered for 1.5 hours) until mutton and grains break down completely.",
        "4. Using a wooden masher (ghotna) or immersion blender, pulse and mash the stew over low heat for 10 minutes until it turns into a thick, sticky, fibrous consistency where meat fibers blend into the lentils.",
        "5. Simmer gently for another 5 minutes, adjusting salt to taste.",
        "6. Ladle warm, comforting Haleem into 5 deep bowls.",
        "7. Garnish each bowl with golden caramelized onions, fresh ginger matchsticks, chopped coriander, and a squeeze of fresh lemon juice."
      ]
    }
  },
  {
    day: 16,
    breakfast: {
      id: "d16-b",
      title: "Toasted English Muffins with Poached Eggs, Avocado & Baby Spinach",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "360 kcal per serving",
      macros: { protein: "20g", carbs: "38g", fiber: "7g", fat: "14g" },
      seasonalTip: "Poached eggs require zero cooking oil while providing tender, velvety yolks.",
      ingredients: [
        "5 whole wheat English muffins, split in half",
        "5 large fresh eggs (250g)",
        "1 medium ripe avocado (150g), mashed with 5ml lemon juice and pinch of salt",
        "150g fresh baby spinach leaves",
        "15ml vinegar (1 tbsp - for poaching water)",
        "2g black pepper (1/2 tsp)",
        "100g cherry tomatoes, halved (for side)"
      ],
      instructions: [
        "1. Bring a wide saucepan of water to a gentle simmer over medium heat and stir in 15ml vinegar.",
        "2. Toast the 10 English muffin halves until golden and crisp.",
        "3. Spread mashed avocado evenly across 5 of the toasted muffin bottom halves.",
        "4. Layer fresh baby spinach leaves generously over the avocado.",
        "5. Crack each egg into a small cup, create a gentle whirlpool in the simmering water, and slide eggs in one by one; poach for 3 minutes until whites are firm and yolks are creamy.",
        "6. Using a slotted spoon, lift poached eggs, drain slightly on paper towel, and place neatly onto the spinach layer.",
        "7. Top with black pepper and muffin tops; serve immediately with fresh cherry tomatoes."
      ]
    },
    lunch: {
      id: "d16-l",
      title: "Middle Eastern Chicken Shawarma Rice Bowls with Garlic Yogurt & Pickled Cucumber",
      cuisine: "Middle Eastern",
      prepTime: "25 mins",
      cookTime: "20 mins",
      calories: "530 kcal per serving",
      macros: { protein: "46g", carbs: "54g", fiber: "6g", fat: "14g" },
      seasonalTip: "Warm shawarma spices paired with cooling garlic yogurt create the perfect flavor balance.",
      ingredients: [
        "600g halal boneless chicken thighs or breasts, sliced into thin strips",
        "300g yellow turmeric basmati rice, cooked with 600ml water",
        "15ml olive oil (1 tbsp)",
        "10g shawarma spice mix (cumin, coriander, paprika, turmeric, garlic powder)",
        "30ml lemon juice (2 tbsp)",
        "200g plain low-fat yogurt mixed with 1 minced garlic clove (for garlic sauce)",
        "200g cucumbers, sliced",
        "150g tomatoes, diced",
        "50g pickled cucumbers or turnips, sliced"
      ],
      instructions: [
        "1. In a bowl, toss 600g chicken strips with 15ml olive oil, 30ml lemon juice, and 10g shawarma spice mix; marinate for 15 minutes.",
        "2. Heat a large non-stick skillet over medium-high heat.",
        "3. Add seasoned chicken strips in a single layer and sear for 8–10 minutes, stirring occasionally, until browned and slightly crispy on the edges.",
        "4. Divide warm yellow turmeric basmati rice into 5 serving bowls.",
        "5. Top each bowl with a generous portion of spiced chicken shawarma.",
        "6. Arrange fresh diced cucumbers, tomatoes, and tangy pickled slices around the bowl.",
        "7. Drizzle 40g of creamy garlic yogurt sauce over each bowl and serve."
      ]
    },
    dinner: {
      id: "d16-d",
      title: "Italian Baked Minced Beef & Lentil Bolognese with Whole Wheat Penne",
      cuisine: "Italian",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "490 kcal per serving",
      macros: { protein: "42g", carbs: "56g", fiber: "11g", fat: "12g" },
      seasonalTip: "Stirring half a cup of cooked red lentils into beef bolognese doubles the fiber while enriching the meat sauce.",
      ingredients: [
        "400g halal lean minced beef",
        "150g cooked red or brown lentils",
        "300g whole wheat penne pasta",
        "700g tomato passata or crushed tomatoes",
        "150g onions, finely diced",
        "150g carrots, finely grated",
        "15g garlic paste (1 tbsp)",
        "15ml olive oil (1 tbsp)",
        "10g Italian herbs (oregano, basil)",
        "3g salt (1/2 tsp)",
        "20g parmesan or cheddar, grated (optional garnish)"
      ],
      instructions: [
        "1. In a large saucepan, bring salted water to a boil and cook 300g whole wheat penne for 10 minutes until al dente; drain.",
        "2. In a deep skillet, heat 15ml olive oil over medium heat. Sauté 150g diced onions and 150g grated carrots for 6 minutes until tender.",
        "3. Add 400g lean minced beef and 15g garlic; cook for 6 minutes until browned.",
        "4. Stir in 150g cooked lentils, 700g tomato passata, 10g Italian herbs, and salt.",
        "5. Bring to a simmer, reduce heat to low, cover, and cook for 15 minutes so flavors meld into a rich ragu.",
        "6. Toss the cooked whole wheat penne directly into the beef and lentil bolognese sauce.",
        "7. Divide among 5 warm pasta bowls and sprinkle lightly with grated cheese and fresh herbs."
      ]
    }
  },
  {
    day: 17,
    breakfast: {
      id: "d17-b",
      title: "Fluffy Apple Blueberry Baked Oatmeal Squares with Yogurt Spoonful",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "360 kcal per serving",
      macros: { protein: "14g", carbs: "58g", fiber: "8g", fat: "8g" },
      seasonalTip: "Bake a batch on the weekend; slices reheat in 30 seconds for warm morning comfort.",
      ingredients: [
        "250g rolled oats",
        "500ml low-fat milk or almond milk",
        "2 large eggs (100g)",
        "200g sweet apples, diced small",
        "150g fresh or frozen blueberries",
        "30ml pure maple syrup or honey (2 tbsp)",
        "5g baking powder (1 tsp)",
        "5g cinnamon (1 tsp)",
        "200g plain Greek yogurt (for serving)"
      ],
      instructions: [
        "1. Preheat oven to 180°C (350°F) and line an 8x8 inch baking dish with parchment paper.",
        "2. In a large bowl, whisk together 2 eggs, 500ml milk, 30ml maple syrup, 5g cinnamon, and 5g baking powder.",
        "3. Stir in 250g rolled oats, 200g diced apples, and 100g blueberries until well combined.",
        "4. Pour the mixture evenly into the prepared baking dish and scatter remaining 50g blueberries over top.",
        "5. Bake for 25–30 minutes until the center is set and golden brown.",
        "6. Let cool for 10 minutes, then slice into 5 neat squares.",
        "7. Serve each warm oatmeal square topped with a cool, creamy dollop of plain Greek yogurt."
      ]
    },
    lunch: {
      id: "d17-l",
      title: "Southeast Asian Lemongrass Chicken Bowl with Steamed Broccoli & Brown Rice",
      cuisine: "Southeast Asian / Vietnamese",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "500 kcal per serving",
      macros: { protein: "45g", carbs: "52g", fiber: "7g", fat: "12g" },
      seasonalTip: "Lemongrass and ginger stimulate digestion naturally while leaving a clean, citrus aftertaste.",
      ingredients: [
        "600g halal boneless chicken thigh or breast, sliced into strips",
        "250g brown rice, cooked with 500ml water",
        "500g fresh broccoli florets",
        "20g lemongrass paste (or 2 fresh stalks finely minced - 2 tbsp)",
        "15g ginger-garlic paste (1 tbsp)",
        "15ml low-sodium soy sauce (1 tbsp)",
        "10ml honey (2 tsp)",
        "15ml sesame or canola oil (1 tbsp)",
        "20g green onions, chopped"
      ],
      instructions: [
        "1. In a bowl, marinate 600g chicken strips with 20g lemongrass, 15g ginger-garlic paste, 15ml soy sauce, and 10ml honey for 15 minutes.",
        "2. Steam 500g broccoli florets over boiling water for 5 minutes until vibrant green and tender; set aside.",
        "3. In a wok or large frying pan, heat 15ml oil over medium-high heat.",
        "4. Add the marinated lemongrass chicken strips and stir-fry for 7–8 minutes until caramelized, fragrant, and fully cooked.",
        "5. Divide warm cooked brown rice among 5 serving bowls.",
        "6. Arrange the fragrant lemongrass chicken and steamed green broccoli over the rice.",
        "7. Garnish with chopped green onions and serve hot."
      ]
    },
    dinner: {
      id: "d17-d",
      title: "Turkish Minced Mutton Kebab Meatballs with Bulgur Pilaf & Sumac Onion Salad",
      cuisine: "Turkish",
      prepTime: "25 mins",
      cookTime: "20 mins",
      calories: "530 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "8g", fat: "16g" },
      seasonalTip: "Sumac onions offer a tangy, refreshing crunch that cuts through rich mutton flavors.",
      ingredients: [
        "500g halal lean minced mutton",
        "100g grated onion (moisture squeezed)",
        "15g fresh parsley, minced (1 tbsp)",
        "5g cumin (1 tsp)",
        "5g coriander powder (1 tsp)",
        "3g salt (1/2 tsp)",
        "250g coarse bulgur wheat, cooked in 500ml broth",
        "200g red onions, thinly sliced",
        "15g fresh parsley, chopped (for salad)",
        "5g ground sumac (1 tsp - for salad)",
        "10ml lemon juice (2 tsp)"
      ],
      instructions: [
        "1. In a bowl, combine 500g minced mutton, 100g grated onion, 15g minced parsley, cumin, coriander, and salt; knead well.",
        "2. Roll into 15 equal round meatballs or oval patties.",
        "3. Heat a non-stick skillet over medium-high heat brushed with 10ml oil.",
        "4. Cook mutton meatballs for 10–12 minutes, turning occasionally, until golden brown and cooked through (internal temp 75°C/165°F).",
        "5. Meanwhile, prepare sumac onion salad: toss 200g sliced red onions, 15g parsley, 5g sumac powder, and 10ml lemon juice in a bowl.",
        "6. Fluff the warm cooked bulgur pilaf and divide among 5 plates.",
        "7. Serve the hot mutton kebab meatballs over bulgur accompanied by tangy sumac onion salad."
      ]
    }
  },
  {
    day: 18,
    breakfast: {
      id: "d18-b",
      title: "Mediterranean Labneh & Za'atar Flatbread Pizza with Cucumber Slices",
      cuisine: "Middle Eastern / Mediterranean",
      prepTime: "10 mins",
      cookTime: "8 mins",
      calories: "350 kcal per serving",
      macros: { protein: "16g", carbs: "46g", fiber: "6g", fat: "11g" },
      seasonalTip: "Za'atar herb blend mixed with olive oil is a classic Mediterranean morning brain booster.",
      ingredients: [
        "5 whole wheat pitas or flatbreads",
        "250g low-fat labneh (strained yogurt cheese)",
        "30ml extra virgin olive oil (2 tbsp)",
        "15g za'atar herb blend (thyme, sesame seeds, sumac - 2 tbsp)",
        "300g fresh cucumbers, sliced into rounds",
        "150g cherry tomatoes, halved",
        "50g kalamata olives, pitted and sliced"
      ],
      instructions: [
        "1. Preheat oven or toaster oven to 190°C (375°F).",
        "2. Place 5 whole wheat flatbreads on a baking tray and bake for 4–5 minutes until warm and slightly toasted.",
        "3. In a small bowl, whisk together 30ml olive oil and 15g za'atar herb blend.",
        "4. Spread 50g of creamy labneh evenly over each warm toasted flatbread.",
        "5. Drizzle the za'atar olive oil mixture over the labneh layer.",
        "6. Scatter halved cherry tomatoes and sliced kalamata olives over top.",
        "7. Serve immediately with a generous side of crisp, hydrating cucumber rounds."
      ]
    },
    lunch: {
      id: "d18-l",
      title: "Indian Spiced Mutton & Lentil Curry (Dal Gosht) with Steamed Basmati Rice",
      cuisine: "Indian / Pakistani",
      prepTime: "25 mins",
      cookTime: "50 mins",
      calories: "540 kcal per serving",
      macros: { protein: "46g", carbs: "54g", fiber: "10g", fat: "15g" },
      seasonalTip: "Combining lean mutton with yellow lentils creates an earthy, high-fiber gravy that satisfies deeply.",
      ingredients: [
        "500g halal lean mutton cubes",
        "200g yellow lentils (toor or moong dal), rinsed",
        "300g basmati rice, cooked with 600ml water",
        "150g onions, sliced",
        "200g tomatoes, chopped",
        "15g ginger-garlic paste (1 tbsp)",
        "15ml oil (1 tbsp)",
        "5g turmeric powder (1 tsp)",
        "5g coriander powder (1 tsp)",
        "5g garam masala (1 tsp)",
        "3g salt (1/2 tsp)",
        "20g fresh coriander, chopped"
      ],
      instructions: [
        "1. In a pressure cooker or pot, boil 200g lentils with 600ml water and half the turmeric until soft and creamy (20 mins); set aside.",
        "2. In a heavy pot, heat 15ml oil over medium heat and sauté 150g sliced onions until golden brown.",
        "3. Add 15g ginger-garlic paste and 500g lean mutton cubes; sear for 5 minutes until browned.",
        "4. Add 200g chopped tomatoes, remaining turmeric, coriander powder, and salt with 300ml water.",
        "5. Cover and simmer on low for 40 minutes (or 15 mins in pressure cooker) until mutton is exceptionally tender.",
        "6. Pour the cooked creamy lentils into the mutton pot, stir well, add 5g garam masala, and simmer together for 5 minutes.",
        "7. Garnish with chopped fresh coriander and serve over steaming fluffy basmati rice."
      ]
    },
    dinner: {
      id: "d18-d",
      title: "Lemon Garlic Grilled Chicken Breast with Sweet Potato Mash & Asparagus",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "45g", fiber: "7g", fat: "11g" },
      seasonalTip: "Sweet potato mash provides complex carbohydrates and beta-carotene for overnight cellular repair.",
      ingredients: [
        "600g halal chicken breast fillets",
        "600g orange sweet potatoes, peeled and cubed",
        "400g fresh asparagus spears (or green beans), tough ends trimmed",
        "30ml olive oil (2 tbsp)",
        "30ml fresh lemon juice (2 tbsp)",
        "15g garlic paste (1 tbsp)",
        "10g dried thyme (2 tsp)",
        "3g sea salt (1/2 tsp)",
        "50ml warm low-fat milk (for mash)"
      ],
      instructions: [
        "1. Boil 600g sweet potato cubes in salted water for 15–18 minutes until fork-tender; drain thoroughly and mash with 50ml warm milk and a pinch of salt until velvety smooth.",
        "2. Meanwhile, whisk 30ml olive oil, 30ml lemon juice, 15g garlic paste, thyme, and salt in a bowl.",
        "3. Coat 600g chicken breasts in half the lemon garlic dressing; grill or pan-sear over medium-high heat for 6–7 minutes per side until cooked through (internal temp 75°C/165°F).",
        "4. In the same skillet or grill pan, add 400g trimmed asparagus spears with remaining dressing and sauté for 4–5 minutes until tender-crisp and bright green.",
        "5. Divide the vibrant sweet potato mash among 5 plates.",
        "6. Slice the juicy lemon garlic chicken breasts and arrange alongside the mash.",
        "7. Serve with a generous portion of sautéed garlic asparagus."
      ]
    }
  },
  {
    day: 19,
    breakfast: {
      id: "d19-b",
      title: "Savory Turkish Eggs (Cilbir) with Garlic Yogurt & Whole Grain Toast",
      cuisine: "Turkish",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "360 kcal per serving",
      macros: { protein: "22g", carbs: "34g", fiber: "6g", fat: "15g" },
      seasonalTip: "Warm spiced paprika butter over cool garlic yogurt creates an unforgettable contrast.",
      ingredients: [
        "5 large fresh eggs (250g)",
        "400g plain low-fat Greek yogurt or labneh",
        "10g fresh garlic, finely minced (2 cloves)",
        "20ml olive oil or butter (4 tsp)",
        "5g Aleppo pepper or sweet paprika (1 tsp)",
        "15ml vinegar (1 tbsp - for poaching water)",
        "3g sea salt (1/2 tsp)",
        "5 slices whole grain artisan bread, toasted",
        "15g fresh dill or parsley, chopped"
      ],
      instructions: [
        "1. In a mixing bowl, combine 400g Greek yogurt with 10g minced garlic and salt; whisk until smooth and divide at room temperature among 5 shallow serving bowls.",
        "2. Bring a saucepan of water to a simmer with 15ml vinegar.",
        "3. Poach the 5 eggs one by one for 3 minutes until whites are cooked but yolks remain runny and warm.",
        "4. Gently place 1 warm poached egg over the garlic yogurt in each bowl.",
        "5. In a small pan, warm 20ml olive oil/butter over low heat, stir in 5g paprika or Aleppo pepper for 30 seconds until fragrant and red.",
        "6. Drizzle the warm spiced oil over the eggs and yogurt.",
        "7. Garnish with chopped fresh dill and serve immediately with toasted whole grain bread for dipping."
      ]
    },
    lunch: {
      id: "d19-l",
      title: "Mediterranean Grilled White Fish Bowls with Herb Couscous & Greek Salad",
      cuisine: "Mediterranean",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "480 kcal per serving",
      macros: { protein: "38g", carbs: "48g", fiber: "7g", fat: "14g" },
      seasonalTip: "Flaky grilled white fish feels weightless and energetic, ideal for a productive afternoon.",
      ingredients: [
        "600g halal white fish fillets (seabass, cod, or tilapia)",
        "250g whole wheat couscous, steamed with 350ml broth",
        "300g cucumbers, diced",
        "300g tomatoes, diced",
        "100g red onions, thinly sliced",
        "50g kalamata olives, pitted",
        "30ml extra virgin olive oil (2 tbsp)",
        "30ml lemon juice (2 tbsp)",
        "10g dried oregano (2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. Season 600g fish fillets with 15ml olive oil, 15ml lemon juice, 5g oregano, and salt.",
        "2. Heat a non-stick grill pan or skillet over medium-high heat.",
        "3. Sear fish fillets for 4–5 minutes per side until a golden crust forms and fish flakes easily.",
        "4. Meanwhile, prepare Greek salad: toss 300g diced cucumbers, 300g tomatoes, 100g sliced onions, and 50g olives with remaining olive oil, lemon juice, and oregano.",
        "5. Fluff the warm steamed whole wheat couscous and divide among 5 bowls.",
        "6. Top each bowl with flaky grilled white fish fillets.",
        "7. Serve with a generous side of crunchy, hydrating Greek salad."
      ]
    },
    dinner: {
      id: "d19-d",
      title: "Mexican Chicken & Black Bean Enchilada Casserole with Brown Rice",
      cuisine: "Mexican",
      prepTime: "20 mins",
      cookTime: "25 mins",
      calories: "520 kcal per serving",
      macros: { protein: "45g", carbs: "54g", fiber: "11g", fat: "13g" },
      seasonalTip: "Layering whole wheat tortillas with black beans and lean chicken creates a satisfying bake without excess cheese.",
      ingredients: [
        "500g halal chicken breast strips, cooked and shredded",
        "250g cooked black beans (1 can, rinsed)",
        "500g mild enchilada tomato sauce",
        "5 whole wheat tortillas, cut into quarters or strips",
        "150g sweet corn kernels",
        "100g bell peppers, diced",
        "60g cheddar or mozzarella cheese, grated (low sodium)",
        "250g brown rice, cooked (for serving)",
        "15g fresh coriander, chopped"
      ],
      instructions: [
        "1. Preheat oven to 190°C (375°F) and grease a rectangular baking dish.",
        "2. In a bowl, toss 500g shredded cooked chicken with 250g rinsed black beans, 150g corn kernels, 100g diced bell peppers, and 200ml of enchilada sauce.",
        "3. In the baking dish, spread a thin layer of enchilada sauce on the bottom.",
        "4. Layer half of the whole wheat tortilla strips across the dish.",
        "5. Spread the chicken and black bean mixture evenly over the tortillas, then cover with remaining tortilla strips.",
        "6. Pour the remaining enchilada sauce over top and sprinkle with 60g grated cheese.",
        "7. Bake for 20 minutes until bubbling and golden; garnish with fresh coriander and serve with a side of brown rice."
      ]
    }
  },
  {
    day: 20,
    breakfast: {
      id: "d20-b",
      title: "Warm Cinnamon Pear & Walnut Oatmeal Bowl",
      cuisine: "Continental",
      prepTime: "5 mins",
      cookTime: "12 mins",
      calories: "360 kcal per serving",
      macros: { protein: "13g", carbs: "58g", fiber: "9g", fat: "9g" },
      seasonalTip: "Sweet ripe pears soften beautifully when simmered with oats, releasing natural juices.",
      ingredients: [
        "250g rolled oats",
        "800ml low-fat milk or almond milk",
        "200ml water",
        "300g ripe sweet pears, cored and diced",
        "40g crushed walnuts",
        "30ml maple syrup or honey (2 tbsp)",
        "5g ground cinnamon (1 tsp)",
        "2ml vanilla extract (1/2 tsp)"
      ],
      instructions: [
        "1. In a medium pot, combine 800ml milk and 200ml water; bring to a gentle simmer over medium heat.",
        "2. Stir in 250g rolled oats, 300g diced pears, and 5g cinnamon; reduce heat to medium-low.",
        "3. Cook for 10–12 minutes, stirring occasionally, until oats are creamy and pears are soft and tender.",
        "4. Remove from heat and stir in 2ml vanilla extract and 30ml maple syrup.",
        "5. Let stand covered for 2 minutes to thicken.",
        "6. Spoon into 5 serving bowls.",
        "7. Sprinkle evenly with 40g crushed walnuts and an extra pinch of cinnamon before serving."
      ]
    },
    lunch: {
      id: "d20-l",
      title: "Pakistani Chicken Karahi (Lightened Up) with Whole Wheat Roti & Salad",
      cuisine: "Pakistani",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "510 kcal per serving",
      macros: { protein: "46g", carbs: "46g", fiber: "7g", fat: "14g" },
      seasonalTip: "Cooked in fresh tomato juices with ginger and green chilies, avoiding excess oil or ghee while preserving authentic wok flavor.",
      ingredients: [
        "600g halal chicken curry pieces (bone-in or boneless breast/thigh)",
        "600g ripe red tomatoes, halved",
        "15g garlic paste (1 tbsp)",
        "15g fresh ginger julienne (matchsticks)",
        "15ml canola or olive oil (1 tbsp)",
        "5g crushed black pepper (1 tsp)",
        "5g roasted cumin seeds, crushed (1 tsp)",
        "5g coriander powder (1 tsp)",
        "3g salt (1/2 tsp)",
        "2 fresh green chilies, slit lengthwise",
        "5 whole wheat rotis or chapatis",
        "200g cucumber tomato kachumber salad"
      ],
      instructions: [
        "1. In a wok or karahi, heat 15ml oil over medium-high heat. Add 600g chicken pieces and 15g garlic paste; sear for 5 minutes until chicken changes color.",
        "2. Place 600g halved tomatoes cut-side down directly over the chicken, cover with lid, and cook on medium-low heat for 8 minutes until tomato skins loosen.",
        "3. Using tongs, peel off and discard the tomato skins.",
        "4. Turn heat back to medium-high and mash the softened tomatoes into the chicken using the back of your wooden spoon.",
        "5. Stir in 5g crushed black pepper, 5g cumin, 5g coriander powder, and salt; stir-fry vigorously for 10 minutes until tomato moisture reduces into a thick, clinging masala.",
        "6. Fold in fresh green chilies and half of the ginger julienne; simmer for 2 minutes.",
        "7. Garnish with remaining ginger matchsticks and serve sizzling hot with warm whole wheat roti and fresh kachumber salad."
      ]
    },
    dinner: {
      id: "d20-d",
      title: "Arabic Lentil & Vegetable Soup (Shorbat Adas) with Grilled Chicken Strips",
      cuisine: "Arabic / Middle Eastern",
      prepTime: "15 mins",
      cookTime: "30 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "11g", fat: "10g" },
      seasonalTip: "Smooth golden red lentil soup flavored with cumin and lemon; incredibly soothing and hydrating.",
      ingredients: [
        "400g halal chicken breast strips, seasoned and grilled",
        "250g red lentils, rinsed",
        "1.2 l water or vegetable broth",
        "150g carrots, diced",
        "150g onions, chopped",
        "100g potatoes, peeled and diced",
        "15ml olive oil (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "3g turmeric (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "30ml fresh lemon juice (2 tbsp - stirred in at end)"
      ],
      instructions: [
        "1. In a large pot, heat 15ml olive oil over medium heat. Sauté 150g onions, 150g carrots, and 100g potatoes for 5 minutes.",
        "2. Add 250g red lentils, 5g cumin, 3g turmeric, and 1.2 liters of broth. Bring to a boil.",
        "3. Reduce heat to low, cover, and simmer for 25 minutes until lentils and vegetables are completely tender.",
        "4. Using an immersion blender (or transferring in batches to a blender), purée the soup until silky smooth and golden.",
        "5. Stir in 30ml fresh lemon juice and adjust salt to taste.",
        "6. Meanwhile, grill 400g seasoned chicken breast strips for 6 minutes per side until juicy and golden.",
        "7. Ladle warm Shorbat Adas into bowls and serve with sliced grilled chicken strips and extra lemon wedges."
      ]
    }
  },
  {
    day: 21,
    breakfast: {
      id: "d21-b",
      title: "Greek Yogurt Bowl with Sliced Figs, Honey & Toasted Pecans",
      cuisine: "Mediterranean",
      prepTime: "10 mins",
      cookTime: "0 mins (No Cook)",
      calories: "340 kcal per serving",
      macros: { protein: "22g", carbs: "42g", fiber: "7g", fat: "10g" },
      seasonalTip: "Fresh or dried figs are packed with natural dietary fiber and calcium for bone strength.",
      ingredients: [
        "750g low-fat plain Greek yogurt",
        "300g fresh figs, quartered (or 150g soft dried figs, sliced)",
        "50g toasted pecans or walnuts, chopped",
        "30ml pure honey or maple syrup (2 tbsp)",
        "5ml vanilla extract (1 tsp - stirred into yogurt)",
        "15g chia seeds (1 tbsp)"
      ],
      instructions: [
        "1. Whisk 5ml vanilla extract and 30ml honey into 750g plain Greek yogurt until velvety smooth.",
        "2. Divide the flavored Greek yogurt into 5 serving bowls.",
        "3. Arrange quartered figs decoratively over the yogurt in each bowl.",
        "4. Sprinkle 50g toasted pecans and 15g chia seeds evenly across the bowls.",
        "5. Drizzle a tiny extra drop of honey over the figs if desired.",
        "6. Serve chilled for a refreshing, nutrient-dense breakfast."
      ]
    },
    lunch: {
      id: "d21-l",
      title: "Persian Herbed Meatballs (Kofteh Tabrizi Style) in Tomato Broth with Rice",
      cuisine: "Persian",
      prepTime: "25 mins",
      cookTime: "35 mins",
      calories: "520 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "7g", fat: "16g" },
      seasonalTip: "Simmering meatballs in an aromatic tomato broth keeps them juicy without frying in deep oil.",
      ingredients: [
        "500g halal lean minced beef or mutton",
        "50g cooked split yellow peas (split chickpea dal), mashed",
        "30g cooked basmati rice (for binding inside meatballs)",
        "100g grated onion (moisture squeezed)",
        "30g fresh herbs (tarragon, parsley, coriander), minced",
        "700g tomato passata or crushed tomatoes",
        "500ml water or broth",
        "15ml olive oil (1 tbsp)",
        "5g turmeric (1 tsp)",
        "3g salt (1/2 tsp)",
        "250g basmati rice, cooked (for serving)"
      ],
      instructions: [
        "1. In a mixing bowl, combine 500g minced beef, 50g mashed yellow peas, 30g cooked rice, grated onion, minced herbs, half the turmeric, and salt. Knead vigorously for 5 minutes until sticky.",
        "2. Form the mixture into 10 large, firm round meatballs.",
        "3. In a large wide pot or Dutch oven, heat 15ml olive oil over medium heat. Sauté 1 diced onion and remaining turmeric for 3 minutes.",
        "4. Pour in 700g tomato passata and 500ml broth; bring to a gentle simmer.",
        "5. Carefully place the meatballs into the simmering tomato broth one by one.",
        "6. Cover partially and simmer on low heat for 30–35 minutes, basting occasionally, until meatballs are cooked through and broth thickens into a rich gravy.",
        "7. Serve the tender herbed meatballs and tomato gravy over freshly steamed basmati rice."
      ]
    },
    dinner: {
      id: "d21-d",
      title: "Baked Chicken Tenders with Sweet Potato Fries & Roasted Zucchini",
      cuisine: "Continental / American",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "470 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "7g", fat: "11g" },
      seasonalTip: "Oven-baking sweet potato fries with a mist of olive oil provides crispy satisfaction with zero deep frying.",
      ingredients: [
        "600g halal chicken breast strips (tenders)",
        "600g sweet potatoes, cut into thick fries or wedges",
        "400g fresh zucchini, cut into fingers or spears",
        "30ml olive oil (2 tbsp)",
        "10g garlic powder (2 tsp)",
        "10g smoked paprika (2 tsp)",
        "5g dried oregano (1 tsp)",
        "3g sea salt (1/2 tsp)",
        "100g yogurt herb dip (for serving)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and line two large baking sheets with parchment paper.",
        "2. On one baking sheet, spread 600g sweet potato fries and 400g zucchini spears. Drizzle with 15ml olive oil, half the garlic powder, paprika, and salt.",
        "3. On the second baking sheet, arrange 600g chicken strips. Drizzle with remaining 15ml olive oil, garlic powder, paprika, oregano, and salt.",
        "4. Place both sheets in the oven and bake for 22–25 minutes.",
        "5. Halfway through cooking, flip the sweet potato fries and chicken strips to ensure even golden browning.",
        "6. Remove when chicken is juicy and cooked through and sweet potato wedges are tender inside with crisp edges.",
        "7. Serve hot baked chicken tenders with golden sweet potato fries, roasted zucchini spears, and yogurt herb dip."
      ]
    }
  },
  {
    day: 22,
    breakfast: {
      id: "d22-b",
      title: "High-Protein Spinach & Mushroom Egg Frittata with Whole Wheat Toast",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "15 mins",
      calories: "360 kcal per serving",
      macros: { protein: "24g", carbs: "32g", fiber: "6g", fat: "15g" },
      seasonalTip: "Eggs provide choline and complete amino acids essential for daily vitality.",
      ingredients: [
        "6 large fresh eggs (300g)",
        "100ml low-fat milk",
        "200g fresh mushrooms, sliced",
        "150g fresh baby spinach",
        "100g onions, finely diced",
        "15ml olive oil (1 tbsp)",
        "3g sea salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)",
        "5 slices whole wheat bread, toasted"
      ],
      instructions: [
        "1. In a bowl, whisk together 6 eggs, 100ml milk, salt, and black pepper.",
        "2. Heat 15ml olive oil in an oven-safe non-stick skillet over medium heat.",
        "3. Add 100g diced onions and 200g sliced mushrooms; sauté for 6 minutes until mushrooms are golden.",
        "4. Add 150g fresh baby spinach and stir for 1 minute until wilted.",
        "5. Pour the egg mixture evenly over the vegetables in the skillet.",
        "6. Cook on low heat on the stovetop for 8–10 minutes (or bake in a 180°C/350°F oven for 10 mins) until eggs are puffed, firm, and golden.",
        "7. Slice into wedges and serve warm with toasted whole wheat bread."
      ]
    },
    lunch: {
      id: "d22-l",
      title: "Turkish Grilled Mutton Kofta with Hummus, Tabouleh & Pita",
      cuisine: "Turkish / Middle Eastern",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "530 kcal per serving",
      macros: { protein: "42g", carbs: "48g", fiber: "9g", fat: "18g" },
      seasonalTip: "Tabouleh salad made with fresh parsley and bulgur wheat provides extraordinary digestive enzymes and vitamin C.",
      ingredients: [
        "500g halal lean minced mutton",
        "100g grated onion (moisture squeezed)",
        "15g fresh parsley, minced (1 tbsp)",
        "5g cumin (1 tsp)",
        "5g coriander (1 tsp)",
        "3g salt (1/2 tsp)",
        "5 whole wheat pitas",
        "200g prepared low-sodium hummus",
        "300g fresh tabouleh salad (finely chopped parsley, tomatoes, bulgur, lemon juice, olive oil)"
      ],
      instructions: [
        "1. In a bowl, combine 500g minced mutton, grated onion, minced parsley, cumin, coriander, and salt. Knead well.",
        "2. Shape into 10 oblong kofta patties or skewers.",
        "3. Heat a grill pan or outdoor grill over medium-high heat brushed lightly with oil.",
        "4. Grill koftas for 5–6 minutes per side until beautifully browned and fully cooked through.",
        "5. Warm the 5 whole wheat pitas on a dry skillet for 20 seconds.",
        "6. Prepare plates with a scoop of hummus (40g per person) spread smoothly with the back of a spoon.",
        "7. Arrange 2 hot grilled mutton koftas over the hummus and serve with warm pita and vibrant green tabouleh salad."
      ]
    },
    dinner: {
      id: "d22-d",
      title: "Pakistani Chicken Handi (Creamy Tomato & Yogurt Curry) with Brown Rice",
      cuisine: "Pakistani",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "500 kcal per serving",
      macros: { protein: "44g", carbs: "50g", fiber: "6g", fat: "14g" },
      seasonalTip: "Using whisked low-fat yogurt instead of heavy cream creates a traditional silky gravy that is easy on the heart.",
      ingredients: [
        "600g halal boneless chicken breast, cubed",
        "300g brown basmati rice, cooked with 600ml water",
        "400g tomato puree or crushed tomatoes",
        "150g onions, finely chopped",
        "15g ginger-garlic paste (1 tbsp)",
        "150ml low-fat plain yogurt, whisked smooth",
        "15ml canola or olive oil (1 tbsp)",
        "5g cumin powder (1 tsp)",
        "5g coriander powder (1 tsp)",
        "3g kasuri methi (dried fenugreek leaves - 1/2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. In a deep pan or clay pot (handi), heat 15ml oil over medium heat and sauté 150g chopped onions for 6 minutes until golden.",
        "2. Add 15g ginger-garlic paste and 600g chicken cubes; sear for 5 minutes until chicken turns white.",
        "3. Stir in 400g tomato puree, 5g cumin, 5g coriander, and salt; simmer for 10 minutes until sauce thickens.",
        "4. Turn heat down to low and slowly stir in 150ml whisked smooth yogurt.",
        "5. Simmer gently uncovered for 10 minutes, stirring occasionally, until the gravy turns creamy, rich, and velvety without curdling.",
        "6. Crush 3g kasuri methi between your palms and sprinkle over the handi for unmistakable traditional aroma.",
        "7. Serve the creamy chicken handi over steaming bowls of nutty brown basmati rice."
      ]
    }
  },
  {
    day: 23,
    breakfast: {
      id: "d23-b",
      title: "Mediterranean Omelette Wrap with Feta, Spinach & Sun-Dried Tomatoes",
      cuisine: "Mediterranean",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "370 kcal per serving",
      macros: { protein: "22g", carbs: "35g", fiber: "6g", fat: "15g" },
      seasonalTip: "A fast, protein-rich wrap that fuels morning productivity with zero sugar crash.",
      ingredients: [
        "6 large fresh eggs (300g)",
        "80ml low-fat milk",
        "150g baby spinach leaves",
        "50g sun-dried tomatoes, chopped",
        "60g crumbled feta cheese",
        "5 whole wheat tortillas or wraps",
        "10ml olive oil (2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Whisk 6 eggs with 80ml milk and black pepper in a bowl.",
        "2. Heat 10ml olive oil in a non-stick skillet over medium heat.",
        "3. Sauté 150g spinach and 50g sun-dried tomatoes for 2 minutes until spinach is wilted.",
        "4. Pour whisked eggs over the greens and cook into an omelette scramble.",
        "5. Sprinkle 60g crumbled feta cheese over top just as eggs finish cooking.",
        "6. Warm the 5 whole wheat tortillas on a dry skillet for 15 seconds.",
        "7. Divide the Mediterranean scramble among the wraps, roll tightly into burritos, and serve warm."
      ]
    },
    lunch: {
      id: "d23-l",
      title: "Thai Red Curry Beef with Bamboo Shoots, Bell Peppers & Jasmine Rice",
      cuisine: "Southeast Asian / Thai",
      prepTime: "20 mins",
      cookTime: "25 mins",
      calories: "520 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "6g", fat: "16g" },
      seasonalTip: "Simmered beef strips in light coconut milk infused with lemongrass and red curry aromatics.",
      ingredients: [
        "500g halal lean beef strips (rump or sirloin)",
        "400ml light coconut milk (1 can)",
        "30g Thai red curry paste (2 tbsp)",
        "150g bamboo shoots (canned, drained)",
        "150g red and green bell peppers, sliced into strips",
        "100g zucchini, sliced",
        "250g jasmine rice, cooked with 500ml water",
        "15ml soy sauce or fish sauce (1 tbsp)",
        "10ml honey or brown sugar (2 tsp)",
        "15g fresh basil leaves"
      ],
      instructions: [
        "1. In a deep skillet or wok, heat 100ml light coconut milk over medium heat until bubbling.",
        "2. Stir in 30g red curry paste and sauté for 2 minutes until fragrant and bright red.",
        "3. Add 500g beef strips and sauté for 5 minutes until sealed and coated in curry spices.",
        "4. Pour in remaining 300ml coconut milk, 15ml soy sauce, and 10ml honey; bring to a gentle simmer.",
        "5. Add 150g bamboo shoots, 150g bell peppers, and 100g zucchini; simmer uncovered for 12–15 minutes until vegetables are tender.",
        "6. Turn off heat and stir in 15g fresh basil leaves.",
        "7. Serve the fragrant red curry beef over steaming bowls of jasmine rice."
      ]
    },
    dinner: {
      id: "d23-d",
      title: "Gentle Lentil & Vegetable Soup with Baked Chicken Tenders",
      cuisine: "Continental",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "12g", fat: "10g" },
      seasonalTip: "Warm lentil broth soothes the stomach and ensures sound, restorative sleep.",
      ingredients: [
        "400g halal chicken breast tenders, seasoned and baked",
        "200g brown or green lentils, rinsed",
        "1.2 l broth or water",
        "200g carrots, diced",
        "200g celery, diced",
        "150g onions, chopped",
        "15ml olive oil (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "3g thyme (1 tsp)",
        "3g salt (1/2 tsp)",
        "10ml fresh lemon juice (2 tsp)"
      ],
      instructions: [
        "1. Heat 15ml olive oil in a soup pot over medium heat. Sauté 150g onions, 200g carrots, and 200g celery for 6 minutes.",
        "2. Add 200g rinsed lentils, 5g cumin, 3g thyme, and 1.2 liters broth; bring to a boil.",
        "3. Reduce heat to low, cover, and simmer for 25–30 minutes until lentils and vegetables are completely tender.",
        "4. Meanwhile, bake 400g seasoned chicken tenders at 190°C (375°F) for 15–18 minutes until golden and juicy.",
        "5. Stir 10ml lemon juice into the finished lentil soup.",
        "6. Ladle warm lentil soup into 5 bowls.",
        "7. Serve accompanied by golden baked chicken tenders."
      ]
    }
  },
  {
    day: 24,
    breakfast: {
      id: "d24-b",
      title: "Warm Apple Cinnamon Oatmeal with Crushed Walnuts & Honey",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "15 mins",
      calories: "360 kcal per serving",
      macros: { protein: "14g", carbs: "58g", fiber: "9g", fat: "10g" },
      seasonalTip: "Oats provide soluble beta-glucan fiber which supports healthy cholesterol and steady morning energy.",
      ingredients: [
        "250g rolled oats",
        "800ml low-fat milk",
        "200ml water",
        "300g sweet apples, diced",
        "50g crushed walnuts",
        "30ml honey (2 tbsp)",
        "5g ground cinnamon (1 tsp)",
        "2ml vanilla extract (1/2 tsp)"
      ],
      instructions: [
        "1. Combine 800ml milk and 200ml water in a saucepan over medium heat.",
        "2. Stir in 250g rolled oats and 300g diced apples; reduce heat to low.",
        "3. Simmer for 10–12 minutes, stirring occasionally, until oats are creamy and apples are tender.",
        "4. Remove from heat and stir in 5g cinnamon, 2ml vanilla extract, and 30ml honey.",
        "5. Let stand covered for 2 minutes.",
        "6. Spoon into 5 serving bowls.",
        "7. Top evenly with 50g crushed walnuts and serve warm."
      ]
    },
    lunch: {
      id: "d24-l",
      title: "Lebanese Grilled Chicken Kofta Bowls with Hummus & Cucumber Tomato Salad",
      cuisine: "Middle Eastern / Lebanese",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "510 kcal per serving",
      macros: { protein: "44g", carbs: "46g", fiber: "8g", fat: "15g" },
      seasonalTip: "Minced chicken seasoned with cumin and parsley grills quickly into juicy, protein-dense skewers.",
      ingredients: [
        "600g halal lean minced chicken",
        "100g grated onion (moisture squeezed)",
        "15g fresh parsley, minced (1 tbsp)",
        "5g cumin (1 tsp)",
        "5g coriander (1 tsp)",
        "3g salt (1/2 tsp)",
        "5 whole wheat pitas",
        "200g prepared hummus",
        "300g cucumbers, diced",
        "300g tomatoes, diced",
        "15ml lemon juice (1 tbsp)"
      ],
      instructions: [
        "1. Combine 600g minced chicken, grated onion, minced parsley, cumin, coriander, and salt in a bowl; knead well.",
        "2. Shape into 10 oblong kofta patties or skewers; chill for 10 minutes.",
        "3. Grill koftas over medium-high heat on an oiled grill pan for 6–8 minutes, turning occasionally, until cooked through and golden.",
        "4. Toss 300g diced cucumbers and 300g diced tomatoes with 15ml fresh lemon juice in a bowl.",
        "5. Warm the 5 whole wheat pitas on a dry skillet.",
        "6. Spread 40g hummus onto each plate.",
        "7. Arrange 2 grilled chicken koftas over the hummus and serve with fresh cucumber tomato salad and warm pita."
      ]
    },
    dinner: {
      id: "d24-d",
      title: "Gentle Slow-Cooked Mutton & Spinach Stew (Palak Gosht) with Brown Rice",
      cuisine: "Pakistani",
      prepTime: "20 mins",
      cookTime: "50 mins",
      calories: "530 kcal per serving",
      macros: { protein: "45g", carbs: "46g", fiber: "9g", fat: "18g" },
      seasonalTip: "Spinach cooked with tender mutton provides natural bioavailable iron and digestive fiber.",
      ingredients: [
        "500g halal lean mutton cubes",
        "500g fresh spinach, chopped",
        "150g onions, chopped",
        "150g tomatoes, diced",
        "15g garlic paste (1 tbsp)",
        "10g ginger paste (2 tsp)",
        "15ml oil (1 tbsp)",
        "5g coriander powder (1 tsp)",
        "3g turmeric (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "250g brown basmati rice, cooked with 600ml water"
      ],
      instructions: [
        "1. In a pot, cook 250g brown rice with 600ml water for 35 minutes until tender; fluff and set aside.",
        "2. In a pressure cooker or heavy pot, heat 15ml oil and sauté 150g chopped onions until golden.",
        "3. Add garlic paste, ginger paste, and 500g mutton cubes; sear for 5 minutes.",
        "4. Stir in 150g diced tomatoes, coriander powder, turmeric, salt, and 200ml water.",
        "5. Simmer covered on low for 40 minutes (or 15 mins in pressure cooker) until mutton is fork-tender.",
        "6. Add 500g chopped spinach and cook uncovered for 8–10 minutes until spinach wilts into a rich green gravy.",
        "7. Serve hot spinach mutton stew over steamed fluffy brown basmati rice."
      ]
    }
  },
  {
    day: 25,
    breakfast: {
      id: "d25-b",
      title: "Fluffy Spinach & Mushroom Egg Frittata with Sweet Potato Hash",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "20 mins",
      calories: "390 kcal per serving",
      macros: { protein: "24g", carbs: "38g", fiber: "7g", fat: "15g" },
      seasonalTip: "Sweet potato hash provides complex carbs that digest slowly, keeping energy high all morning.",
      ingredients: [
        "6 large eggs (300g)",
        "100ml low-fat milk",
        "200g mushrooms, sliced",
        "150g baby spinach",
        "400g sweet potatoes, peeled and diced small",
        "100g onions, diced",
        "20ml olive oil (4 tsp)",
        "3g garlic powder (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Heat 10ml olive oil in a non-stick skillet over medium heat.",
        "2. Sauté 400g diced sweet potatoes and 100g diced onions for 10–12 minutes until sweet potatoes are golden and fork-tender; remove to a plate.",
        "3. Add remaining 10ml oil to the skillet and sauté 200g sliced mushrooms for 4 minutes until golden.",
        "4. Add 150g spinach and cook for 1 minute until wilted; return sweet potatoes to the skillet.",
        "5. Whisk 6 eggs with 100ml milk, garlic powder, salt, and pepper in a bowl; pour evenly over vegetables.",
        "6. Cover and cook on low heat for 8–10 minutes until eggs are set, fluffy, and golden.",
        "7. Slice into wedges and serve warm."
      ]
    },
    lunch: {
      id: "d25-l",
      title: "Lebanese Grilled Beef Kafta Bowls with Hummus & Cucumber Tomato Salad",
      cuisine: "Middle Eastern",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "520 kcal per serving",
      macros: { protein: "42g", carbs: "45g", fiber: "10g", fat: "18g" },
      seasonalTip: "Allspice and cumin flavor the lean beef kafta without needing excess fat or oil.",
      ingredients: [
        "500g halal lean minced beef",
        "100g grated onion",
        "20g fresh parsley, minced",
        "5g allspice (1 tsp)",
        "5g cumin (1 tsp)",
        "3g salt (1/2 tsp)",
        "5 whole wheat pitas",
        "200g prepared hummus",
        "300g cucumbers, diced",
        "300g tomatoes, diced",
        "15ml lemon juice (1 tbsp)"
      ],
      instructions: [
        "1. Combine 500g minced beef, grated onion, minced parsley, allspice, cumin, and salt in a bowl; knead well.",
        "2. Form into 10 small oval kafta patties or skewers.",
        "3. Cook kaftas over medium-high heat on a lightly greased grill pan for 4–5 minutes per side until browned and cooked through.",
        "4. Toss 300g diced cucumbers and 300g diced tomatoes with 15ml fresh lemon juice.",
        "5. Warm the 5 whole wheat pitas on a dry skillet.",
        "6. Assemble bowls with 2 beef kaftas, a scoop of hummus (40g per person), fresh cucumber tomato salad, and warm pita.",
        "7. Serve immediately while kaftas are warm and juicy."
      ]
    },
    dinner: {
      id: "d25-d",
      title: "Soothing Lentil & Veggie Soup with Baked Chicken Tenders",
      cuisine: "Continental",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: "460 kcal per serving",
      macros: { protein: "44g", carbs: "48g", fiber: "12g", fat: "10g" },
      seasonalTip: "Lentil soup provides calming warmth and fiber for digestive ease before bed.",
      ingredients: [
        "400g halal chicken breast tenders",
        "200g brown or green lentils, rinsed",
        "1.2 l broth or water",
        "200g carrots, diced",
        "200g celery, diced",
        "150g onions, chopped",
        "15ml olive oil (1 tbsp)",
        "5g cumin (1 tsp)",
        "3g thyme (1 tsp)",
        "3g salt (1/2 tsp)",
        "10ml lemon juice (2 tsp)"
      ],
      instructions: [
        "1. Heat 15ml olive oil in a soup pot over medium heat. Sauté 150g onions, 200g carrots, and 200g celery for 6 minutes.",
        "2. Add 200g rinsed lentils, 5g cumin, 3g thyme, and 1.2 liters broth; bring to a boil.",
        "3. Reduce heat to low, cover, and simmer for 25–30 minutes until lentils and vegetables are tender.",
        "4. Meanwhile, season 400g chicken tenders with salt, pepper, and garlic powder; bake at 190°C (375°F) for 15–18 minutes until juicy and cooked through.",
        "5. Stir 10ml fresh lemon juice into the finished lentil soup.",
        "6. Ladle warm soup into 5 bowls.",
        "7. Serve with golden baked chicken tenders on the side."
      ]
    }
  },
  {
    day: 26,
    breakfast: {
      id: "d26-b",
      title: "Protein-Packed Greek Yogurt Parfait with Mixed Berries & Chia Seeds",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "0 mins (No Cook)",
      calories: "340 kcal per serving",
      macros: { protein: "24g", carbs: "42g", fiber: "9g", fat: "8g" },
      seasonalTip: "No cooking required; berries provide vital antioxidants and natural sweetness.",
      ingredients: [
        "750g low-fat plain Greek yogurt",
        "400g blueberries and strawberries, sliced",
        "150g whole grain granola",
        "30g chia seeds (2 tbsp)",
        "30ml honey (2 tbsp)",
        "5ml vanilla extract (1 tsp)"
      ],
      instructions: [
        "1. Stir 5ml vanilla extract and 30ml honey into 750g Greek yogurt until smooth.",
        "2. Set out 5 serving glasses or bowls.",
        "3. Layer half of the flavored yogurt into the bottom of each glass.",
        "4. Add a layer of mixed berries and sprinkle with half the chia seeds.",
        "5. Repeat with remaining yogurt, berries, and chia seeds.",
        "6. Right before serving, top each parfait with 30g whole grain granola for a delightful crunch.",
        "7. Serve chilled immediately."
      ]
    },
    lunch: {
      id: "d26-l",
      title: "Persian Saffron Chicken with Barberry Rice (Zereshk Polo)",
      cuisine: "Persian",
      prepTime: "20 mins",
      cookTime: "35 mins",
      calories: "510 kcal per serving",
      macros: { protein: "40g", carbs: "56g", fiber: "6g", fat: "13g" },
      seasonalTip: "Tangy barberries stimulate healthy digestion while saffron adds festive golden aroma.",
      ingredients: [
        "600g halal boneless chicken chunks",
        "300g basmati rice, soaked for 20 mins",
        "700ml water",
        "150g onions, sliced",
        "50g dried barberries (zereshk), rinsed",
        "15ml olive oil (1 tbsp)",
        "15g butter (1 tbsp)",
        "1g saffron steeped in 30ml warm water",
        "5g turmeric (1 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. Cook 300g soaked basmati rice in 700ml water with a pinch of salt on low heat covered for 18 minutes until fluffy.",
        "2. Heat 15ml olive oil in a skillet over medium heat and sauté 150g sliced onions for 5 minutes until translucent.",
        "3. Add 600g chicken chunks and 5g turmeric; sauté for 6–8 minutes until seared on all sides.",
        "4. Pour half of the saffron water over the chicken, cover, and simmer on low for 15 minutes until juicy and tender.",
        "5. In a small pan, melt 15g butter over low heat, add 50g rinsed barberries and 1 tsp sugar/honey; sauté gently for 1 minute until plump.",
        "6. Fluff cooked rice and drizzle remaining saffron water over the top layer.",
        "7. Serve saffron rice topped with sautéed barberries alongside tender Persian chicken."
      ]
    },
    dinner: {
      id: "d26-d",
      title: "Baked Halal Beef Meatballs in Rustic Tomato Herb Gravy with Zucchini Noodles",
      cuisine: "Italian",
      prepTime: "25 mins",
      cookTime: "25 mins",
      calories: "470 kcal per serving",
      macros: { protein: "42g", carbs: "32g", fiber: "8g", fat: "18g" },
      seasonalTip: "Zucchini noodles keep this Italian evening dinner light and low in calorie density.",
      ingredients: [
        "500g halal lean minced beef",
        "50g whole wheat breadcrumbs",
        "1 large egg (50g)",
        "15g garlic paste (1 tbsp)",
        "10g Italian herbs (oregano, basil, thyme)",
        "600g crushed tomatoes",
        "400g zucchini, spiralized into noodles",
        "150g whole wheat spaghetti",
        "15ml olive oil (1 tbsp)",
        "3g sea salt (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 190°C (375°F) and line a baking sheet with parchment paper.",
        "2. Combine 500g minced beef, 50g breadcrumbs, 1 egg, half the garlic paste, 5g herbs, and salt in a bowl; roll into 15 meatballs.",
        "3. Place meatballs on the baking sheet and bake for 18–20 minutes until golden and cooked through.",
        "4. Boil 150g whole wheat pasta in salted water for 10 minutes until al dente; drain.",
        "5. Heat 15ml olive oil in a skillet, add remaining garlic paste and 600g crushed tomatoes with 5g herbs; simmer for 10 minutes into a rich sauce.",
        "6. Add baked meatballs and 400g spiralized zucchini noodles into the warm tomato gravy; simmer for 3 minutes so zucchini stays slightly crisp.",
        "7. Divide whole wheat pasta among 5 bowls and top with meatballs, zucchini noodles, and tomato sauce."
      ]
    }
  },
  {
    day: 27,
    breakfast: {
      id: "d27-b",
      title: "Golden Turmeric Veggie Scramble with Avocado & Whole Wheat Tortilla",
      cuisine: "Mexican / Continental",
      prepTime: "15 mins",
      cookTime: "10 mins",
      calories: "370 kcal per serving",
      macros: { protein: "20g", carbs: "36g", fiber: "9g", fat: "16g" },
      seasonalTip: "Turmeric adds warm color and anti-inflammatory benefits naturally.",
      ingredients: [
        "6 large fresh eggs (300g)",
        "100ml low-fat milk",
        "150g red bell peppers, diced",
        "150g baby spinach, chopped",
        "100g red onions, diced",
        "1 medium ripe avocado (150g), sliced",
        "5 whole wheat tortillas",
        "15ml olive oil (1 tbsp)",
        "3g turmeric powder (1/2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. Whisk 6 eggs, 100ml milk, 3g turmeric, and 3g salt in a bowl until bright golden.",
        "2. Heat 15ml olive oil in a non-stick skillet over medium heat.",
        "3. Sauté 100g diced onions and 150g diced bell peppers for 4–5 minutes until tender.",
        "4. Add 150g chopped spinach and stir for 1 minute until wilted.",
        "5. Pour golden egg mixture over vegetables and turn heat to medium-low.",
        "6. Scramble gently with a spatula for 3–4 minutes until soft, fluffy curds form.",
        "7. Warm the 5 whole wheat tortillas, divide scramble evenly, and top each with fresh avocado slices."
      ]
    },
    lunch: {
      id: "d27-l",
      title: "Malaysian Grilled Chicken Satay with Peanut Lime Sauce & Cucumber Rice",
      cuisine: "Southeast Asian",
      prepTime: "25 mins",
      cookTime: "15 mins",
      calories: "520 kcal per serving",
      macros: { protein: "44g", carbs: "50g", fiber: "7g", fat: "16g" },
      seasonalTip: "Peanut lime dipping sauce offers rich flavor with healthy fats and citrus freshness.",
      ingredients: [
        "600g halal boneless chicken breast strips",
        "250g jasmine rice",
        "500ml water",
        "15g lemongrass or ginger paste (1 tbsp)",
        "15ml soy sauce (low sodium)",
        "10g turmeric and coriander mix",
        "80g natural creamy peanut butter",
        "100ml warm water or light coconut milk",
        "15ml lime juice (1 tbsp)",
        "5g honey (1 tsp)",
        "200g fresh cucumber, diced"
      ],
      instructions: [
        "1. Marinate 600g chicken strips with 15g lemongrass paste, 15ml soy sauce, and 10g spice mix for 15 minutes.",
        "2. Cook 250g rice in 500ml water covered on low heat for 15 minutes until tender; fluff and fold in 200g diced cucumber.",
        "3. Thread marinated chicken strips onto skewers.",
        "4. Grill skewers over medium-high heat on an oiled grill pan for 5–6 minutes per side until charred and juicy.",
        "5. Whisk 80g peanut butter, 100ml warm water/coconut milk, 15ml lime juice, and 5g honey in a bowl into a smooth satay sauce.",
        "6. Arrange hot chicken satay skewers over refreshing cucumber rice.",
        "7. Serve with peanut lime dipping sauce on the side."
      ]
    },
    dinner: {
      id: "d27-d",
      title: "One-Pot Moroccan Mutton Tagine with Chickpeas, Carrots & Couscous",
      cuisine: "Moroccan / North African",
      prepTime: "20 mins",
      cookTime: "45 mins",
      calories: "540 kcal per serving",
      macros: { protein: "42g", carbs: "58g", fiber: "11g", fat: "15g" },
      seasonalTip: "Simmered chickpeas and carrots provide complex carbohydrates and dietary fiber for overnight satiety.",
      ingredients: [
        "500g halal lean mutton cubes",
        "250g cooked chickpeas (1 can, rinsed)",
        "300g carrots, sliced into rounds",
        "150g onions, chopped",
        "400g canned diced tomatoes",
        "15ml olive oil (1 tbsp)",
        "5g ground cumin (1 tsp)",
        "5g cinnamon (1 tsp)",
        "3g turmeric (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "250g whole wheat couscous",
        "300ml boiling broth or water"
      ],
      instructions: [
        "1. Heat 15ml olive oil in a pot over medium heat. Brown 500g mutton cubes for 5 minutes.",
        "2. Add 150g chopped onions, 5g cumin, 5g cinnamon, and 3g turmeric; sauté for 3 minutes.",
        "3. Stir in 400g diced tomatoes, 300g sliced carrots, and 300ml water. Cover and simmer on low for 35 minutes until mutton is tender.",
        "4. Stir in 250g rinsed chickpeas and simmer for an additional 10 minutes so flavors blend into a rich stew.",
        "5. Meanwhile, pour 300ml boiling broth over 250g whole wheat couscous in a bowl, cover, and let stand for 5 minutes.",
        "6. Fluff couscous with a fork until light and airy.",
        "7. Ladle aromatic mutton and chickpea tagine generously over warm whole wheat couscous."
      ]
    }
  },
  {
    day: 28,
    breakfast: {
      id: "d28-b",
      title: "Savory Vegetable Besan Cheela (Chickpea Flour Pancakes) with Mint Chutney",
      cuisine: "Pakistani / Indian",
      prepTime: "15 mins",
      cookTime: "15 mins",
      calories: "330 kcal per serving",
      macros: { protein: "18g", carbs: "44g", fiber: "9g", fat: "9g" },
      seasonalTip: "Chickpea flour pancakes are naturally gluten-free and packed with plant protein.",
      ingredients: [
        "250g besan (chickpea flour)",
        "350ml water",
        "100g grated carrots",
        "100g chopped tomatoes",
        "50g chopped coriander leaves",
        "50g chopped onions",
        "5g cumin seeds (1 tsp)",
        "3g turmeric (1/2 tsp)",
        "3g salt (1/2 tsp)",
        "15ml oil (for brushing pan)",
        "150g yogurt mint chutney (for serving)"
      ],
      instructions: [
        "1. Whisk 250g chickpea flour, 5g cumin seeds, 3g turmeric, and 3g salt in a mixing bowl.",
        "2. Gradually pour in 350ml water while whisking to create a smooth, lump-free batter.",
        "3. Fold in 100g grated carrots, 100g chopped tomatoes, 50g onions, and 50g fresh coriander.",
        "4. Heat a non-stick frying pan or tawa over medium heat and brush lightly with oil.",
        "5. Pour a ladleful of batter (approx 80ml) onto the center of the pan and spread into a 6-inch circle.",
        "6. Cook for 2–3 minutes until bottom is golden brown, flip, and cook the other side for 2 minutes.",
        "7. Repeat to make 10 savory pancakes (2 per serving) and serve warm with yogurt mint chutney."
      ]
    },
    lunch: {
      id: "d28-l",
      title: "Greek Chicken Souvlaki Skewers with Tzatziki & Warm Flatbread",
      cuisine: "Mediterranean / Greek",
      prepTime: "20 mins",
      cookTime: "15 mins",
      calories: "500 kcal per serving",
      macros: { protein: "46g", carbs: "44g", fiber: "6g", fat: "14g" },
      seasonalTip: "Tzatziki sauce made with cucumber and Greek yogurt provides instant digestive coolness.",
      ingredients: [
        "600g halal chicken breast cubes",
        "30ml olive oil (2 tbsp)",
        "30ml lemon juice (2 tbsp)",
        "15g minced garlic (1 tbsp)",
        "10g dried oregano (2 tsp)",
        "3g sea salt (1/2 tsp)",
        "5 whole wheat flatbreads or pitas",
        "250g Greek yogurt tzatziki sauce",
        "200g cherry tomatoes, halved",
        "150g cucumber slices"
      ],
      instructions: [
        "1. Toss 600g chicken cubes with 30ml olive oil, 30ml lemon juice, 15g garlic, 10g oregano, and salt in a bowl; marinate for 15 minutes.",
        "2. Thread seasoned chicken cubes onto 10 skewers.",
        "3. Heat a grill pan or outdoor grill over medium-high heat.",
        "4. Grill chicken skewers for 6–7 minutes per side until beautifully browned and cooked through (internal temp 75°C/165°F).",
        "5. Warm the 5 flatbreads on a dry skillet for 30 seconds until soft.",
        "6. Arrange plates with 2 chicken skewers, warm flatbread, cherry tomatoes, and cucumber slices.",
        "7. Serve with creamy Greek tzatziki dipping sauce on the side."
      ]
    },
    dinner: {
      id: "d28-d",
      title: "Comforting Beef & Vegetable Shepherd's Pie with Mashed Cauliflower-Potato Top",
      cuisine: "Continental / British",
      prepTime: "25 mins",
      cookTime: "30 mins",
      calories: "480 kcal per serving",
      macros: { protein: "40g", carbs: "38g", fiber: "9g", fat: "16g" },
      seasonalTip: "Cauliflower blended into mashed potatoes lowers carbs while keeping the crust rich and comforting.",
      ingredients: [
        "500g halal lean minced beef",
        "300g potatoes, peeled and cubed",
        "300g cauliflower florets",
        "200g carrots, diced",
        "150g green peas (fresh or frozen)",
        "150g onions, chopped",
        "200ml beef broth",
        "15ml tomato paste (1 tbsp)",
        "15ml olive oil (1 tbsp)",
        "50ml low-fat milk (for mash)",
        "3g garlic powder (1/2 tsp)",
        "3g salt (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F).",
        "2. Boil 300g potato cubes and 300g cauliflower florets in salted water for 15 minutes until fork-tender; drain well.",
        "3. Mash potato and cauliflower together with 50ml milk, garlic powder, and a pinch of salt until smooth and creamy.",
        "4. Heat 15ml olive oil in a skillet over medium heat. Sauté 150g onions and 200g carrots for 5 minutes.",
        "5. Add 500g lean minced beef and cook for 6 minutes until browned.",
        "6. Stir in 15ml tomato paste, 200ml broth, 150g peas, and salt; simmer for 8 minutes until gravy thickens slightly.",
        "7. Transfer beef mixture into a baking dish, spread creamy cauliflower-potato mash over top, and bake for 20 minutes until crust is golden."
      ]
    }
  },
  {
    day: 29,
    breakfast: {
      id: "d29-b",
      title: "Toasted Whole Grain Bagels with Smoked Salmon, Labneh & Cucumber",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "5 mins",
      calories: "390 kcal per serving",
      macros: { protein: "26g", carbs: "45g", fiber: "7g", fat: "12g" },
      seasonalTip: "Smoked salmon offers premium omega-3 fatty acids with zero stove cooking required.",
      ingredients: [
        "5 whole grain bagels, halved",
        "250g halal smoked salmon slices",
        "200g low-fat labneh or cream cheese",
        "200g cucumber, thinly sliced into ribbons",
        "15g fresh dill or chives, chopped",
        "5ml lemon juice (1 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Toast the 10 bagel halves until lightly crisp and warm.",
        "2. Mix 200g labneh with 5ml lemon juice and 15g chopped dill in a small bowl.",
        "3. Spread 20g of herbed labneh evenly over each toasted bagel half.",
        "4. Layer thin cucumber ribbons over the labneh.",
        "5. Drape 25g smoked salmon over the cucumber on each bagel.",
        "6. Sprinkle lightly with freshly cracked black pepper.",
        "7. Serve immediately while bagels are warm and toppings are cool."
      ]
    },
    lunch: {
      id: "d29-l",
      title: "Hyderabadi Chicken Dum Biryani with Cucumber Onion Raita",
      cuisine: "Pakistani / Indian",
      prepTime: "30 mins",
      cookTime: "35 mins",
      calories: "550 kcal per serving",
      macros: { protein: "44g", carbs: "62g", fiber: "6g", fat: "14g" },
      seasonalTip: "Dum cooking seals in all aromas and steam, creating tender chicken without excess fat.",
      ingredients: [
        "600g halal chicken pieces (bone-in or boneless), skinned",
        "300g basmati rice, soaked for 30 mins",
        "200g plain yogurt",
        "150g onions, sliced and caramelized",
        "15g ginger-garlic paste (1 tbsp)",
        "10g biryani masala powder (2 tsp)",
        "15ml oil or ghee (1 tbsp)",
        "15g fresh mint and coriander leaves, chopped",
        "1g saffron soaked in 30ml warm milk",
        "300g cucumber onion raita (for serving)"
      ],
      instructions: [
        "1. Marinate 600g chicken with 200g yogurt, 15g ginger-garlic paste, 10g biryani masala, half the caramelized onions, and chopped mint/coriander in a bowl for 20 minutes.",
        "2. Boil 300g soaked basmati rice in salted water for 6–7 minutes until 70% cooked; drain thoroughly.",
        "3. Heat 15ml oil in a heavy pot and place marinated chicken in an even layer at the bottom.",
        "4. Spread semi-cooked basmati rice evenly over the chicken layer.",
        "5. Drizzle saffron milk and remaining caramelized onions over the rice.",
        "6. Cover pot tightly with foil and lid (dum). Cook on medium heat for 8 minutes, then reduce heat to lowest setting and simmer for 20 minutes.",
        "7. Gently fluff aromatic layers together and serve hot with cooling cucumber onion raita."
      ]
    },
    dinner: {
      id: "d29-d",
      title: "Zesty Mexican Chicken Fajita Bowls with Black Beans, Corn & Brown Rice",
      cuisine: "Mexican",
      prepTime: "20 mins",
      cookTime: "20 mins",
      calories: "510 kcal per serving",
      macros: { protein: "45g", carbs: "56g", fiber: "11g", fat: "12g" },
      seasonalTip: "Black beans and corn add vibrant color, dietary fiber, and natural plant sweetness.",
      ingredients: [
        "500g halal chicken breast strips",
        "250g cooked black beans (1 can, rinsed)",
        "150g sweet corn kernels",
        "250g bell peppers (red and green), sliced into strips",
        "150g onions, sliced into strips",
        "250g brown rice, cooked",
        "15ml olive oil (1 tbsp)",
        "10g fajita spice mix (cumin, paprika, oregano, chili powder)",
        "30ml lime juice (2 tbsp)",
        "100g fresh tomato salsa"
      ],
      instructions: [
        "1. Toss 500g chicken strips with 10g fajita spice mix and 15ml lime juice in a bowl.",
        "2. Heat 15ml olive oil in a large skillet over medium-high heat.",
        "3. Add seasoned chicken strips and sauté for 6–8 minutes until browned and cooked through; remove to a plate.",
        "4. In the same skillet, add 150g sliced onions and 250g bell pepper strips; sauté for 5 minutes until tender-crisp with charred edges.",
        "5. Add 250g rinsed black beans and 150g corn kernels; stir for 2 minutes to warm through.",
        "6. Divide warm cooked brown rice into 5 serving bowls.",
        "7. Arrange sautéed chicken, fajita vegetables, beans, and corn over the rice; top each bowl with a spoonful of fresh salsa."
      ]
    }
  },
  {
    day: 30,
    breakfast: {
      id: "d30-b",
      title: "Hearty Banana Almond Butter Oatmeal Bowl with Chia Seeds",
      cuisine: "Continental",
      prepTime: "5 mins",
      cookTime: "12 mins",
      calories: "380 kcal per serving",
      macros: { protein: "15g", carbs: "56g", fiber: "10g", fat: "12g" },
      seasonalTip: "Almond butter provides sustained morning energy and rich flavor without dairy cream.",
      ingredients: [
        "250g rolled oats",
        "900ml low-fat milk or water",
        "3 medium ripe bananas (300g), sliced",
        "60g natural almond butter (4 tbsp)",
        "20g chia seeds (2 tbsp)",
        "5g ground cinnamon (1 tsp)",
        "15ml maple syrup or honey (1 tbsp)"
      ],
      instructions: [
        "1. Bring 900ml milk or water to a gentle boil in a pot over medium heat.",
        "2. Stir in 250g rolled oats and 5g cinnamon; reduce heat to low.",
        "3. Simmer for 10 minutes, stirring frequently, until oats are thick and creamy.",
        "4. Stir in half of the sliced bananas and 20g chia seeds; cook for 2 more minutes until bananas melt into porridge.",
        "5. Remove from heat and stir in 15ml maple syrup.",
        "6. Spoon oatmeal into 5 bowls.",
        "7. Top each bowl with a dollop of almond butter (approx 12g per bowl) and remaining banana slices."
      ]
    },
    lunch: {
      id: "d30-l",
      title: "Arabic Spiced Mutton Majboos (Kabsa) with Fresh Tomato Salsa (Daqqus)",
      cuisine: "Arabic / Middle Eastern",
      prepTime: "25 mins",
      cookTime: "50 mins",
      calories: "540 kcal per serving",
      macros: { protein: "44g", carbs: "58g", fiber: "7g", fat: "16g" },
      seasonalTip: "One-pot cooking allows basmati rice to absorb aromatic mutton broth and cardamom spices.",
      ingredients: [
        "500g halal lean mutton cubes",
        "300g basmati rice, soaked for 20 mins",
        "700ml water or stock",
        "150g onions, chopped",
        "200g tomatoes, chopped",
        "15g garlic-ginger paste (1 tbsp)",
        "15ml olive oil (1 tbsp)",
        "10g kabsa/majboos spice mix",
        "1 dried black lime (loomi), pierced",
        "200g fresh tomato daqqus salsa"
      ],
      instructions: [
        "1. Heat 15ml oil in a heavy pot over medium heat and brown 500g mutton cubes for 6 minutes.",
        "2. Add 150g chopped onions and 15g garlic-ginger paste; sauté for 4 minutes until aromatic.",
        "3. Stir in 200g chopped tomatoes, 10g kabsa spice mix, and pierced dried black lime.",
        "4. Pour in 700ml water, cover, and cook on low for 40 minutes (or 18 mins in pressure cooker) until mutton is fork-tender.",
        "5. Add 300g drained basmati rice directly into the boiling mutton broth.",
        "6. Cover tightly and cook on low for 18 minutes until rice absorbs all liquid and is fluffy.",
        "7. Serve fragrant majboos on a platter accompanied by spicy, tangy tomato daqqus salsa."
      ]
    },
    dinner: {
      id: "d30-d",
      title: "Lemon Herb Baked Chicken Breasts with Steamed Broccoli & Quinoa",
      cuisine: "Continental",
      prepTime: "15 mins",
      cookTime: "25 mins",
      calories: "450 kcal per serving",
      macros: { protein: "46g", carbs: "42g", fiber: "8g", fat: "11g" },
      seasonalTip: "Clean, lean protein paired with steamed green broccoli ensures a light, restful evening.",
      ingredients: [
        "600g halal chicken breast fillets",
        "250g dry quinoa, rinsed",
        "500ml water",
        "500g fresh broccoli florets",
        "30ml olive oil (2 tbsp)",
        "30ml lemon juice (2 tbsp)",
        "10g dried thyme and rosemary mix",
        "10g garlic powder (2 tsp)",
        "3g salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)"
      ],
      instructions: [
        "1. Preheat oven to 200°C (400°F) and lightly oil a baking dish.",
        "2. Whisk 30ml olive oil, 30ml lemon juice, 10g herb mix, garlic powder, salt, and pepper in a bowl.",
        "3. Place 600g chicken breast fillets in the baking dish and pour half the herb dressing over them.",
        "4. Bake chicken for 22–25 minutes until golden and juices run clear (internal temp 75°C/165°F).",
        "5. Meanwhile, cook 250g quinoa in 500ml water in a covered saucepan for 15 minutes until fluffy.",
        "6. Steam 500g broccoli florets over boiling water for 5–6 minutes until tender-crisp; toss with remaining dressing.",
        "7. Slice baked chicken and serve over fluffy quinoa with a generous portion of lemon-steamed broccoli."
      ]
    }
  },
  {
    day: 31,
    breakfast: {
      id: "d31-b",
      title: "Creamy Mushroom & Herb Scrambled Eggs on Sprouted Wheat Toast",
      cuisine: "Continental",
      prepTime: "10 mins",
      cookTime: "10 mins",
      calories: "360 kcal per serving",
      macros: { protein: "22g", carbs: "34g", fiber: "7g", fat: "15g" },
      seasonalTip: "Sautéed mushrooms bring earthy umami and natural B-vitamins to scrambled eggs.",
      ingredients: [
        "6 large eggs (300g)",
        "80ml low-fat milk",
        "250g fresh mushrooms, sliced",
        "100g onions, diced",
        "15ml olive oil (1 tbsp)",
        "15g fresh chives or parsley, chopped",
        "3g sea salt (1/2 tsp)",
        "2g black pepper (1/2 tsp)",
        "5 slices sprouted wheat bread, toasted"
      ],
      instructions: [
        "1. Beat 6 eggs with 80ml milk, salt, and pepper in a bowl.",
        "2. Heat 15ml olive oil in a non-stick frying pan over medium heat.",
        "3. Add 100g diced onions and 250g sliced mushrooms; sauté for 6–7 minutes until golden brown.",
        "4. Turn heat down to low and pour egg mixture over sautéed mushrooms.",
        "5. Stir gently with a silicone spatula, folding eggs continuously for 3 minutes until soft curds form.",
        "6. Remove from heat immediately and stir in 15g fresh chives.",
        "7. Toast the 5 slices of sprouted wheat bread and top generously with creamy mushroom scrambled eggs."
      ]
    },
    lunch: {
      id: "d31-l",
      title: "Thai Green Curry Chicken with Bamboo Shoots, Eggplant & Jasmine Rice",
      cuisine: "Southeast Asian / Thai",
      prepTime: "20 mins",
      cookTime: "25 mins",
      calories: "510 kcal per serving",
      macros: { protein: "42g", carbs: "52g", fiber: "7g", fat: "15g" },
      seasonalTip: "Light coconut milk offers traditional Thai creaminess with significantly fewer calories.",
      ingredients: [
        "500g halal chicken breast cubes",
        "400ml light coconut milk (1 can)",
        "30g Thai green curry paste (2 tbsp)",
        "250g eggplant, cubed",
        "150g bamboo shoots (canned, drained)",
        "100g green bell peppers, sliced",
        "250g jasmine rice, cooked with 500ml water",
        "15ml soy sauce or fish sauce (1 tbsp)",
        "10g honey or brown sugar (2 tsp)",
        "15g fresh basil leaves"
      ],
      instructions: [
        "1. Heat 100ml light coconut milk in a deep skillet or wok over medium heat until bubbling.",
        "2. Stir in 30g green curry paste and sauté for 2–3 minutes until fragrant.",
        "3. Add 500g chicken cubes and cook for 5 minutes until sealed and coated in curry spices.",
        "4. Pour in remaining 300ml coconut milk, 15ml soy sauce, and 10g honey; bring to a gentle simmer.",
        "5. Add 250g cubed eggplant, 150g bamboo shoots, and 100g bell peppers; simmer uncovered for 12–15 minutes until vegetables are tender.",
        "6. Turn off heat and fold in 15g fresh basil leaves so they wilt gently into the sauce.",
        "7. Serve fragrant green curry chicken over steaming bowls of fluffy jasmine rice."
      ]
    },
    dinner: {
      id: "d31-d",
      title: "Traditional Pakistani Beef Shami Kebabs with Mint Chutney & Whole Wheat Roti",
      cuisine: "Pakistani",
      prepTime: "30 mins",
      cookTime: "30 mins",
      calories: "490 kcal per serving",
      macros: { protein: "44g", carbs: "46g", fiber: "10g", fat: "14g" },
      seasonalTip: "Combining lean beef with chana dal creates high-fiber patties that pan-toast crispy with minimal oil.",
      ingredients: [
        "500g halal lean beef (boneless cubes or mince)",
        "150g chana dal (split yellow gram), soaked for 2 hours",
        "500ml water",
        "15g ginger-garlic paste (1 tbsp)",
        "10g shami kebab whole spice mix",
        "1 medium egg (50g - for binding)",
        "50g chopped onions",
        "20g fresh mint and coriander leaves, chopped",
        "15ml oil (for shallow pan-toasting)",
        "5 whole wheat rotis",
        "150g yogurt mint chutney"
      ],
      instructions: [
        "1. Combine 500g beef, 150g soaked chana dal, 15g ginger-garlic paste, 10g whole spices, and 500ml water in a saucepan or pressure cooker.",
        "2. Boil until beef and dal are completely tender and all water is evaporated (approx 30 mins, or 12 mins in pressure cooker); let cool.",
        "3. Grind or process mixture into a smooth, fibrous dough.",
        "4. Fold in 1 egg, 50g chopped onions, and 20g fresh mint/coriander; knead well.",
        "5. Shape into 10 round, smooth shami kebab patties.",
        "6. Toast kebabs in a non-stick frying pan brushed with 15ml oil over medium heat for 3–4 minutes per side until crisp and golden brown.",
        "7. Serve 2 warm shami kebabs per person with fresh whole wheat roti and cooling yogurt mint chutney."
      ]
    }
  }
];


// Const & Var

let prodSets = [
  {
    "name": "the-ordinary",
    "setTitle": "The Ordinary top hits",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Natural Moisturizing Factors + HA",
        "brand": "The Ordinary",
        "size": "1 OZ / 30 ML",
        "price": 5.80,
        "desc": "Natural Moisturizing Factors from The Ordinary is a surface hydration formula with hydration formula with hyaluronic acid, triglycerides, ceramides, and other components. This lightweight, non-greasy cream is great for those looking for a solutionfor signs of dehydration.",
        "promo": "promo-item-2",
        "rating": 4.9,
        "pic": "the-ordinary.jpeg"
      },
      {
        "prodTitle": "Eye Base Essential",
        "brand": "Trish McEvoy",
        "size": "3.54 ML / 0.12 OZ",
        "price": 35,
        "desc": "A color correcting upper-eyelid brightener and shadow primer. Corrects darkness and discoloration  of the eyelid, instantly creating a more vibrant, bright-eyed look while locking shadow in place for crease-proof, all-day wear.",
        "promo": null,
        "rating": 4.6,
        "pic": "trish-mcevoy.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": "promo-item-1",
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "rating": 4.5,
        "promo": "promo-item-3",
        "pic": "new-cc.jpeg"
      }
    ]
  },
  {
    "name": "new-cc",
    "setTitle": "New CC Cream from It!",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "new-cc.jpeg"
      },
      {
        "prodTitle": "Lip Tints Trio",
        "brand": "Benefit",
        "size": "3-piece set",
        "price": 32,
        "desc": "Get 3 full-size lip and cheeks stains, including NEW Playtint, in juicy, smooch-proof colors that last all day. Wear them alone for a hint of tint or mix and match together for different looks.",
        "promo": "promo-item-3",
        "rating": 4.6,
        "pic": "benefit.jpeg"
      },
      {
        "prodTitle": "Naked Reloaded Eyeshadow Palette",
        "brand": "Urban Decay",
        "size": "0,49 OZ",
        "price": 44,
        "desc": "Rethink neutral with eyeshadow designed to flatter every eye shape, eye color, skin tone, age and gender. From silky mattes and metallics to iridescent micro-shimmers, every shade is made with our signature Naked formula for velvety texture, rich color payoff, and extreme blendability.",
        "promo": null,
        "rating": 4.8,
        "pic": "naked-reloaded.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-2",
        "rating": 4.9,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "urban-decay",
    "setTitle": "Loving the latest Urban Decay",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Naked Reloaded Eyeshadow Palette",
        "brand": "Urban Decay",
        "size": "0,49 OZ",
        "price": 44,
        "desc": "Rethink neutral with eyeshadow designed to flatter every eye shape, eye color, skin tone, age and gender. From silky mattes and metallics to iridescent micro-shimmers, every shade is made with our signature Naked formula for velvety texture, rich color payoff, and extreme blendability.",
        "promo": "promo-item-2",
        "rating": 4.7,
        "pic": "naked-reloaded.jpeg"
      },
      {
        "prodTitle": "Eye Base Essential",
        "brand": "Trish McEvoy",
        "size": "3.54 ML / 0.12 OZ",
        "price": 35,
        "desc": "A color correcting upper-eyelid brightener and shadow primer. Corrects darkness and discoloration  of the eyelid, instantly creating a more vibrant, bright-eyed look while locking shadow in place for crease-proof, all-day wear.",
        "promo": "promo-item-1",
        "rating": 4.6,
        "pic": "trish-mcevoy.jpeg"
      },
      {
        "prodTitle": "Retinol Youth Renewal",
        "brand": "Murad",
        "size": "3-piece set",
        "price": 229.50,
        "desc": "Supercharged 3-part Retinol regimen for quicker, visible, sustained results. Gentle yet effective Retinol Tri-Active Technology targets the most frustrating signs of aging including wrinkles, crow's feet, loss of firmmess, and rough texture. No matter your age, your skin will get a revitalizing boost from this power trio.",
        "promo": "promo-item-3",
        "rating": 4.6,
        "pic": "murad.jpeg"
      },
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "promo": null,
        "rating": 4.5,
        "pic": "new-cc.jpeg"
      }
    ]
  },
  {
    "name": "ana-luisa",
    "setTitle": "Ana Luisa new collection",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "14K Gold Padlock Necklace",
        "brand": "Ana Luisa",
        "size": "14K Gold",
        "price": 59,
        "desc": "This beautifully-crafted gold padlock necklace holds the key to a bold fashion statement. Dipped in 14K gold this necklace adds a contemporary edge to your style. Wear this gold padlock necklace alone or stacked with other chain necklacesfor a statement layered look.",
        "promo": "promo-item-2",
        "rating": 4.8,
        "pic": "ana-luisa.jpeg"
      },
      {
        "prodTitle": "Lip Tints Trio",
        "brand": "Benefit",
        "size": "3-piece set",
        "price": 32,
        "desc": "Get 3 full-size lip and cheeks stains, including NEW Playtint, in juicy, smooch-proof colors that last all day. Wear them alone for a hint of tint or mix and match together for different looks. ",
        "promo": null,
        "rating": 4.6,
        "pic": "benefit.jpeg"
      },
      {
        "prodTitle": "Naked Reloaded Eyeshadow Palette",
        "brand": "Urban Decay",
        "size": "0,49 OZ",
        "price": 44,
        "desc": "Rethink neutral with eyeshadow designed to flatter every eye shape, eye color, skin tone, age and gender. From silky mattes and metallics to iridescent micro-shimmers, every shade is made with our signature Naked formula for velvety texture, rich color payoff, and extreme blendability.",
        "promo": "promo-item-1",
        "rating": 4.8,
        "pic": "naked-reloaded.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-3",
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "jessica",
    "setTitle": "Jessica Honest",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Natural Moisturizing Factors + HA",
        "brand": "The Ordinary",
        "size": "1 OZ / 30 ML",
        "price": 5.80,
        "desc": "Natural Moisturizing Factors from The Ordinary is a surface hydration formula with hydration formula with hyaluronic acid, triglycerides, ceramides, and other components. This lightweight, non-greasy cream is great for those looking for a solutionfor signs of dehydration.",
        "promo": "promo-item-2",
        "rating": 4.9,
        "pic": "the-ordinary.jpeg"
      },
      {
        "prodTitle": "Vinoperfect Radiance Serum",
        "brand": "Caudalie",
        "size": "30 ML",
        "price": 79,
        "desc": "Millions of women have already been convinced by Caudalie's cult product, the Vinperfect Radiance Serum Complexion Correction. In 2021 it has been reinvented: more effecive, cleaner & more natural. This serum reduces the appearance of dark spots and evens the complexion, making it brighter.",
        "promo": null,
        "rating": 4.8,
        "pic": "caudalie.jpeg"
      },
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "new-cc.jpeg"
      }
    ]
  },
  {
    "name": "lizzy",
    "setTitle": "Weekly skincare with Lizzy",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Retinol Youth Renewal",
        "brand": "Murad",
        "size": "3-piece set",
        "price": 229.50,
        "desc": "Supercharged 3-part Retinol regimen for quicker, visible, sustained results. Gentle yet effective Retinol Tri-Active Technology targets the most frustrating signs of aging including wrinkles, crow's feet, loss of firmmess, and rough texture. No matter your age, your skin will get a revitalizing boost from this power trio.",
        "promo": "promo-item-2",
        "rating": 4.6,
        "pic": "murad.jpeg"
      },
      {
        "prodTitle": "Eye Base Essential",
        "brand": "Trish McEvoy",
        "size": "3.54 ML / 0.12 OZ",
        "price": 35,
        "desc": "A color correcting upper-eyelid brightener and shadow primer. Corrects darkness and discoloration  of the eyelid, instantly creating a more vibrant, bright-eyed look while locking shadow in place for crease-proof, all-day wear.",
        "promo": "promo-item-1",
        "rating": 4.6,
        "pic": "trish-mcevoy.jpeg"
      },
      {
        "prodTitle": "Naked Reloaded Eyeshadow Palette",
        "brand": "Urban Decay",
        "size": "0,49 OZ",
        "price": 44,
        "desc": "Rethink neutral with eyeshadow designed to flatter every eye shape, eye color, skin tone, age and gender. From silky mattes and metallics to iridescent micro-shimmers, every shade is made with our signature Naked formula for velvety texture, rich color payoff, and extreme blendability.",
        "promo": null,
        "rating": 4.8,
        "pic": "naked-reloaded.jpeg"
      },
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "promo": "promo-item-3",
        "rating": 4.5,
        "pic": "new-cc.jpeg"
      }
    ]
  },
  {
    "name": "trish",
    "setTitle": "Gotta love this Trish set",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Eye Base Essential",
        "brand": "Trish McEvoy",
        "size": "3.54 ML / 0.12 OZ",
        "price": 35,
        "desc": "A color correcting upper-eyelid brightener and shadow primer. Corrects darkness and discoloration  of the eyelid, instantly creating a more vibrant, bright-eyed look while locking shadow in place for crease-proof, all-day wear.",
        "promo": "promo-item-1",
        "rating": 4.6,
        "pic": "trish-mcevoy.jpeg"
      },
      {
        "prodTitle": "Lip Tints Trio",
        "brand": "Benefit",
        "size": "3-piece set",
        "price": 32,
        "desc": "Get 3 full-size lip and cheeks stains, including NEW Playtint, in juicy, smooch-proof colors that last all day. Wear them alone for a hint of tint or mix and match together for different looks. ",
        "promo": null,
        "rating": 4.6,
        "pic": "benefit.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-2",
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "indie-lee",
    "setTitle": "The new Indie Less is in!",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "CoQ-10 Toner",
        "brand": "Indie Lee",
        "size": "125 ML",
        "price": 34,
        "desc": "Balance and refresh your skin with this hydrating toning mist. Alcohol-free and formulated with anitoxidant powerhouse CoQ-10, Aloe Vera and Cucumber, this non-drying skin spritzer primes and softens skin exposed to environmental aggressors.",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "indie-lee.jpeg"
      },
      {
        "prodTitle": "Natural Moisturizing Factors + HA",
        "brand": "The Ordinary",
        "size": "1 OZ / 30 ML",
        "price": 5.80,
        "desc": "Natural Moisturizing Factors from The Ordinary is a surface hydration formula with hydration formula with hyaluronic acid, triglycerides, ceramides, and other components. This lightweight, non-greasy cream is great for those looking for a solutionfor signs of dehydration.",
        "promo": "promo-item-3",
        "rating": 4.9,
        "pic": "the-ordinary.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": "promo-item-2",
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": null,
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "caudalie",
    "setTitle": "The Newest Caudalie",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Vinoperfect Radiance Serum",
        "brand": "Caudalie",
        "size": "30 ML",
        "price": 79,
        "desc": "Millions of women have already been convinced by Caudalie's cult product, the Vinperfect Radiance Serum Complexion Correction. In 2021 it has been reinvented: more effecive, cleaner & more natural. This serum reduces the appearance of dark spots and evens the complexion, making it brighter.",
        "promo": "promo-item-1",
        "rating": 4.8,
        "pic": "caudalie.jpeg"
      },
      {
        "prodTitle": "Studio Radiance Sheer Foundation",
        "brand": "MAC",
        "size": "1,7 OZ",
        "price": 35,
        "desc": "M-A-C's Studio  Radiance Face And Body  Radiant Sheer Foundation is an ultra-light, waterproof foundation that provides a sheer buildable weil of coverage with a natural, radiant glow. Long beloved on red carpets around the world, M-A-C's  perennial Artist favourite foundation will reveal the best you.",
        "promo": null,
        "rating": "4,4",
        "pic": "mac.jpeg"
      },
      {
        "prodTitle": "Retinol Youth Renewal",
        "brand": "Murad",
        "size": "3-piece set",
        "price": 229.50,
        "desc": "Supercharged 3-part Retinol regimen for quicker, visible, sustained results. Gentle yet effective Retinol Tri-Active Technology targets the most frustrating signs of aging including wrinkles, crow's feet, loss of firmmess, and rough texture. No matter your age, your skin will get a revitalizing boost from this power trio.",
        "promo": null,
        "rating": 4.6,
        "pic": "murad.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-3",
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "fall-fashion",
    "setTitle": "Fall fashion",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Mens Cordury Harem Pants",
        "brand": "New chic",
        "size": "Large",
        "price": 119,
        "desc": "Sophisticated with an old-school appeal. Extra soft italian fabric with a bit of stretch.",
        "promo": "promo-item-1",
        "rating": 4.1,
        "pic": "pants.jpeg"
      },
      {
        "prodTitle": "Women Sandals Casual Comfort",
        "brand": "Noracora",
        "size": "7",
        "price": 71.50,
        "desc": "These sandals are the most comfortable, soft and supportive footwear from Noracora. They will help your feet recover from walking miles, and are comfortable to wear walking and standing on hardwood floors and ceramic tile.",
        "promo": "promo-item-2",
        "rating": 4.9,
        "pic": "sandals.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": null,
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-3",
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "john-hardy",
    "setTitle": "John Hardy",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Women Sandals Casual Comfort",
        "brand": "Noracora",
        "size": "7",
        "price": 71.50,
        "desc": "These sandals are the most comfortable, soft and supportive footwear from Noracora. They will help your feet recover from walking miles, and are comfortable to wear walking and standing on hardwood floors and ceramic tile.",
        "promo": "promo-item-1",
        "rating": 4.9,
        "pic": "sandals.jpeg"
      },
      {
        "prodTitle": "14K Gold Padlock Necklace",
        "brand": "Ana Luisa",
        "size": "14K Gold",
        "price": 59,
        "desc": "This beautifully-crafted gold padlock necklace holds the key to a bold fashion statement. Dipped in 14K gold this necklace adds a contemporary edge to your style. Wear this gold padlock necklace alone or stacked with other chain necklacesfor a statement layered look.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "ana-luisa.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": null,
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Clear Skin Kit",
        "brand": "Averr",
        "size": "4-piece set",
        "price": 149,
        "desc": "Born from the frustration of skincare products that just won't work and breakouts that just won't fight, this system contains four powerhouse products that use gentle aggression to fight your current breakouts and prevent new ones from forming. Filled with over 40 all-natural ingredients.",
        "promo": "promo-item-2",
        "rating": 4.7,
        "pic": "averr.jpeg"
      }
    ]
  },
  {
    "name": "user-cx",
    "setTitle": "First time user CX",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "California Dreaming Layering Set",
        "brand": "Gorjana",
        "size": "17 in",
        "price": 98,
        "desc": "Layering options are endless, but we've combined our most-loved pieces that are perfect for stacking! Channel your inner beach goddess in the Sunset Necklace and Shorebreak Necklace, a combo that will take you from beach to street, and that you'll want to layer on daily!",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "california-dreaming.jpeg"
      },
      {
        "prodTitle": "Women Sandals Casual Comfort",
        "brand": "Noracora",
        "size": "7",
        "price": 71.50,
        "desc": "These sandals are the most comfortable, soft and supportive footwear from Noracora. They will help your feet recover from walking miles, and are comfortable to wear walking and standing on hardwood floors and ceramic tile.",
        "promo": null,
        "rating": 4.9,
        "pic": "sandals.jpeg"
      },
      {
        "prodTitle": "Retinol Youth Renewal",
        "brand": "Murad",
        "size": "3-piece set",
        "price": 229.50,
        "desc": "Supercharged 3-part Retinol regimen for quicker, visible, sustained results. Gentle yet effective Retinol Tri-Active Technology targets the most frustrating signs of aging including wrinkles, crow's feet, loss of firmmess, and rough texture. No matter your age, your skin will get a revitalizing boost from this power trio.",
        "promo": "promo-item-2",
        "rating": 4.6,
        "pic": "murad.jpeg"
      },
      {
        "prodTitle": "14K Gold Padlock Necklace",
        "brand": "Ana Luisa",
        "size": "14K Gold",
        "price": 59,
        "desc": "This beautifully-crafted gold padlock necklace holds the key to a bold fashion statement. Dipped in 14K gold this necklace adds a contemporary edge to your style. Wear this gold padlock necklace alone or stacked with other chain necklacesfor a statement layered look.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "ana-luisa.jpeg"
      }
    ]
  },
  {
    "name": "product-video",
    "setTitle": "Product Video",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Magic Extension 5mm Fibre Mascara",
        "brand": "MAC",
        "size": "0,37 FL OZ / 11 ML",
        "price": 35,
        "desc": "Like lash extensions in a bottle! Lengthen your fringe to unreal faux levels. This mascara boasts extreme 5mm-long fibres for an extravagant false-lash look. The formula is enriched with a Crystal Elixir Powder that intensifies its carbon-black colour, while an olive oil derivative and natural waxes condition lashes.  What…",
        "promo": "promo-item-1",
        "rating": 4.8,
        "pic": "mascara.jpeg"
      },
      {
        "prodTitle": "Studio Radiance Sheer Foundation",
        "brand": "MAC",
        "size": "1,7 OZ",
        "price": 35,
        "desc": "M-A-C's Studio  Radiance Face And Body  Radiant Sheer Foundation is an ultra-light, waterproof foundation that provides a sheer buildable weil of coverage with a natural, radiant glow. Long beloved on red carpets around the world, M-A-C's  perennial Artist favourite foundation will reveal the best you.",
        "promo": "promo-item-3",
        "rating": 4.4,
        "pic": "mac.jpeg"
      },
      {
        "prodTitle": "Naked Reloaded Eyeshadow Palette",
        "brand": "Urban Decay",
        "size": "0,49 OZ",
        "price": 44,
        "desc": "Rethink neutral with eyeshadow designed to flatter every eye shape, eye color, skin tone, age and gender. From silky mattes and metallics to iridescent micro-shimmers, every shade is made with our signature Naked formula for velvety texture, rich color payoff, and extreme blendability.",
        "promo": null,
        "rating": 4.7,
        "pic": "naked-reloaded.jpeg"
      },
      {
        "prodTitle": "CC+ Cream SPF50",
        "brand": "It Cosmetics",
        "size": "1.08 OZ",
        "price": 39.50,
        "desc": "It Cosmetics CC+ Cream Illumination with SPF 50+ mineral sunscreen features the same multitasking face makeup and skincare benefits as the No. 1 best-selling color-correcting cream - plus light-reflecting pigments to give glowing skin without glitter or shimmer!",
        "promo": "promo-item-2",
        "rating": 4.5,
        "pic": "new-cc.jpeg"
      }
    ]
  },
  {
    "name": "live-shopping",
    "setTitle": "Live Shopping",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "Women Sandals Casual Comfort",
        "brand": "Noracora",
        "size": "7",
        "price": 71.50,
        "desc": "These sandals are the most comfortable, soft and supportive footwear from Noracora. They will help your feet recover from walking miles, and are comfortable to wear walking and standing on hardwood floors and ceramic tile.",
        "promo": null,
        "rating": 4.9,
        "pic": "sandals.jpeg"
      },
      {
        "prodTitle": "California Dreaming Layering Set",
        "brand": "Gorjana",
        "size": "17 in",
        "price": 98,
        "desc": "Layering options are endless, but we've combined our most-loved pieces that are perfect for stacking! Channel your inner beach goddess in the Sunset Necklace and Shorebreak Necklace, a combo that will take you from beach to street, and that you'll want to layer on daily!",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "california-dreaming.jpeg"
      },
      {
        "prodTitle": "Complete Calm Kit",
        "brand": "The Honest Company",
        "size": "4-piece set",
        "price": 86.99,
        "desc": "Keep calm and glow on with Honest's 4-piece step fragrance-free, dermatologist approved, vegan daily skincare routine. Includes serum formulated with a marine-derived amino acid, vitamin-fortified face mist, and lightweight daily moisturizer.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "honest.jpeg"
      },
      {
        "prodTitle": "Vinoperfect Radiance Serum",
        "brand": "Caudalie",
        "size": "30 ML",
        "price": 79,
        "desc": "Millions of women have already been convinced by Caudalie's cult product, the Vinperfect Radiance Serum Complexion Correction. In 2021 it has been reinvented: more effecive, cleaner & more natural. This serum reduces the appearance of dark spots and evens the complexion, making it brighter.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "caudalie.jpeg"
      }
    ]
  },
  {
    "name": "street",
    "setTitle": "Street Inspiration",
    "prodTotal": 4,
    "products": [
      {
        "prodTitle": "California Dreaming Layering Set",
        "brand": "Gorjana",
        "size": "17 in",
        "price": 98,
        "desc": "Layering options are endless, but we've combined our most-loved pieces that are perfect for stacking! Channel your inner beach goddess in the Sunset Necklace and Shorebreak Necklace, a combo that will take you from beach to street, and that you'll want to layer on daily!",
        "promo": "promo-item-1",
        "rating": 4.5,
        "pic": "california-dreaming.jpeg"
      },
      {
        "prodTitle": "Women Sandals Casual Comfort",
        "brand": "Noracora",
        "size": "7",
        "price": 71.50,
        "desc": "These sandals are the most comfortable, soft and supportive footwear from Noracora. They will help your feet recover from walking miles, and are comfortable to wear walking and standing on hardwood floors and ceramic tile.",
        "promo": null,
        "rating": 4.9,
        "pic": "sandals.jpeg"
      },
      {
        "prodTitle": "14K Gold Padlock Necklace",
        "brand": "Ana Luisa",
        "size": "14K Gold",
        "price": 59,
        "desc": "This beautifully-crafted gold padlock necklace holds the key to a bold fashion statement. Dipped in 14K gold this necklace adds a contemporary edge to your style. Wear this gold padlock necklace alone or stacked with other chain necklacesfor a statement layered look.",
        "promo": "promo-item-3",
        "rating": 4.8,
        "pic": "ana-luisa.jpeg"
      },
      {
        "prodTitle": "Mens Cordury Harem Pants",
        "brand": "New chic",
        "size": "Large",
        "price": 119,
        "desc": "Sophisticated with an old-school appeal. Extra soft italian fabric with a bit of stretch.",
        "promo": "promo-item-2",
        "rating": 4.1,
        "pic": "pants.jpeg"
      }
    ]
  }
]
let promos = [
  {
    "name": "promo-item-1",
    "text": "Get 20%<br/>OFF"
  },
  {
    "name": "promo-item-2",
    "text": "Buy it now<br/>Get 7$ Credit"
  },
  {
    "name": "promo-item-3",
    "text": "Buy one<br/>Get one Free"
  }
]

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [ h, s, l ];
}

function refreshLive() {
  // Randomize LIVE
  let liveAlert = Math.random();
  $('.live-alert').addClass('noshow');
  if (liveAlert < .1) {
    $('.live-alert').removeClass('noshow');
  }
}

function refreshSet() {
  // Populate the products items
  let videoElement = document.getElementById('video');
  prodItem = videoElement.getAttribute('data-source');
  let prodItemInfo = prodSets.find(obj => {
    return obj.name === prodItem
  });
  for (let i = 0, len = prodItemInfo.prodTotal; i < len; i++) {
    let prodBlock='';
    let trimDesc = prodItemInfo.products[i].desc.substring(0, 35);
    trimDesc = trimDesc.substr(0, Math.min(trimDesc.length, trimDesc.lastIndexOf(" ")));
    let brandAndProdTitle = prodItemInfo.products[i].brand + ' ' + prodItemInfo.products[i].prodTitle;
    brandAndProdTitle = brandAndProdTitle.substring(0, 24);
    brandAndProdTitle = brandAndProdTitle.substr(0, Math.min(brandAndProdTitle.length, brandAndProdTitle.lastIndexOf(" ")));
    let formattedPrice = (Math.round(prodItemInfo.products[i].price * 100) / 100).toFixed(2);

    prodBlock += '<a class="order-call" data-destination="context-my-order" id="prodItem-' + i + '"><div class="prod-preview-box">'
          + '<div><img src="../media/' + prodItemInfo.products[i].pic + '" /></div>'
          + '<div class="prod-ad-box"><div class="prod-ad-box-wrapper">'
          + ' <div class="prodbox-brand-title">' + brandAndProdTitle + '</div>'
          + '<div class="prodbox-desc">' + trimDesc + ' ...</div>'
          + '<div class=prod-lower-info><div class="prodbox-rating"><i class="fas fa-star"></i>' + prodItemInfo.products[i].rating + '</div>'
          + '<div class="prodbox-price">$' + formattedPrice + '</div></div></div></div></div></a>'
    
    let prodList = document.getElementById('prodList');
    if (typeof(prodItemInfo.products[i].promo) != 'undefined' && prodItemInfo.products[i].promo != null) {
      prodList.children[i].setAttribute("data-promo",prodItemInfo.products[i].promo);
    }
    prodList.children[i].innerHTML = prodBlock;
  }
  // Limpia la accion de Follow
  document.getElementById('product-follow').classList.remove('following');

  // Randomiza LIVE
  refreshLive();

}

(function () {

let videoElement = document.getElementById('video');
let car_ul = $('#chat-carousel-ul');

// Methods

// Populate the video data-source with a default value
function defaultInit() {
  videoElement.setAttribute("data-source",getCookie('videoTarget'));
  if (videoElement.getAttribute('data-source') == '') {
    videoElement.setAttribute("data-source","product-video");
  }
}

function refreshCheckOut(el) {
  prodItem = videoElement.getAttribute('data-source');
  let prodItemInfo = prodSets.find(obj => {
    return obj.name === prodItem
  });
  let prodRef = ($(el).attr('id')).substring(9,10);
  let formattedPrice = (Math.round(prodItemInfo.products[prodRef].price * 100) / 100).toFixed(2);

  document.getElementById('prodTitle').innerText = prodItemInfo.products[prodRef].prodTitle;
  document.getElementById('prodTitleConfirmation').innerText = prodItemInfo.products[prodRef].prodTitle;
  document.getElementById('prodDesc').innerText = prodItemInfo.products[prodRef].desc;
  document.getElementById('prodPrice').innerText = formattedPrice;
  document.getElementById('prodPriceConfirmation').innerText = formattedPrice;
  document.getElementById('prodSize').innerText = prodItemInfo.products[prodRef].size;
  document.getElementById('prodBrand').innerText = prodItemInfo.products[prodRef].brand;
  document.getElementById('prodPic').src="../media/" + prodItemInfo.products[prodRef].pic;

  let selectedPromo = prodItemInfo.products[prodRef].promo;
  if (selectedPromo != 'undefined' && selectedPromo != null) {
    let promoInfo = promos.find(obj => {
      return obj.name === selectedPromo
    });
    document.getElementById('prodPromo').innerHTML = promoInfo.text;
    document.getElementById('prodPromoBox').classList.add('show');
  }
  else {
    document.getElementById('prodPromoBox').classList.remove('show');
  }
}

// Click columns while browsing
$('.column').click(function() {
  if ($(this).hasClass('carousel-item')) {
    var $slide = $('.active-column').width() + parseFloat($('.active-column').css('margin-left'));
    if ($(this).hasClass('next-column')) {
      $(this).parent().stop(false, true).animate({
        left: '-=' + $slide
      },200);
    } else if ($(this).hasClass('prev-column')) {
      $(this).parent().stop(false, true).animate({
        left: '+=' + $slide
      },200);
    }
  }
  $(this).parent().children().removeClass('prev-column active-column next-column');
  $(this).addClass('active-column');
  $(this).prev().addClass('prev-column');
  $(this).next().addClass('next-column');

  if ($(this).hasClass('carousel-item')) {
    updatePromoPic();
  }
});

// Click rows while browsing
$('.row').click(function() {
  if ($(this).hasClass('next-row') && $(this).hasClass('row-carousel')) {
    $(this).toggleClass('up')
  } else if ($(this).hasClass('prev-row') && $(this).next().hasClass('row-carousel')) {
    $(this).next().toggleClass('up')
  }
  $(this).parent().find('.carousel-wrapper').animate({left: 0});
  $(this).parent().children().removeClass('prev-row active-row next-row');
  $(this).addClass('active-row');
  $(this).prev('.row').addClass('prev-row');
  $(this).next('.row').addClass('next-row');

  $('.row .column').removeClass('prev-column active-column next-column');
  $(this).find('.column').first().addClass('active-column').next().addClass('next-column');

  $('.deployable #product-share.active-column').siblings('.sub').addClass('show');
  $(".deployable #product-share:not('.active-column')").siblings('.sub').removeClass('show');
  
  updatePromoPic();
});

// Click events to place order
function orderCall(el) {
  let destination = $(el).attr('data-destination');
  if (destination === "context-my-order") {
    refreshCheckOut(el);
  }
  $('.prev-row, .active-row, .next-row, .prev-column, .active-column, .next-column').removeClass('prev-row active-row next-row prev-column active-column next-column');
  $('.carousel-wrapper').animate({left: 0});

  if (destination === "context-confirmation") {
    $('#' + destination).removeClass('hidden');
    $('#' + destination).addClass('slide');
    $('.slide').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      $('.context-area-secondary').addClass('hidden');
      $('.slide').removeClass('slide');
      $('#context-main .row').last().addClass('active-row').children('.column').addClass('active-column');
      $('#context-main .row').last().prev().addClass('prev-row');
    });

  } else {
    $('#' + destination).removeClass('hidden');
  }
  if ($('#' + destination  + ' .row').length) {
    $('#' + destination  + ' .row').last().addClass('active-row').children('.column').addClass('active-column');
    $('#' + destination + ' .row').last().prev().addClass('prev-row');
  }
}

// Click ESC
function escAction() {
  if ($('.context-area.context-area-secondary').length !== $('.context-area-secondary.hidden').length) {
    var destination = 'context-main';
    if ($('#product-page #context-edit-details:not(.hidden)').length) {
      var destination = 'context-my-order';
    }
    $('.context-area:not(#context-main)').addClass('hidden');
    $('#' + destination).removeClass('hidden');
    if ($('#' + destination  + ' .row').length) {
      $('.prev-row, .active-row, .next-row, .prev-column, .active-column, .next-column').removeClass('prev-row active-row next-row prev-column active-column next-column');
      $('#' + destination  + ' .row').last().addClass('active-row').find('.column').first().addClass('active-column').next().addClass('next-column');
      $('#' + destination + ' .row').last().prev().addClass('prev-row');
    }
  }
}

// Click Space
function spaceAction() {
  if ($('.context-area.context-area-secondary').length === $('.context-area-secondary.hidden').length) {
    window.location.href = "catalog.html";  }
  else {
    escAction();
  }
}

function updatePromoPic() {
  $('.promo-item').addClass('hidden');
  var attr = $('.active-column').attr('data-promo');
  if (typeof attr !== 'undefined' && attr !== false) {
    $('#' + $('.active-column').attr('data-promo')).removeClass('hidden');
  }
}

// Running chat
function chatCarousel() {
  $( '#chat-carousel-ul:not(:animated)' ).animate({
      'top': parseInt(car_ul.css('top')) - car_ul.find('li').outerHeight()
  }, 500, function () {
      var cars = car_ul.find( 'li' );
      var loque = cars.first().next().outerHeight();
      car_ul.css( { 'top': '-' + loque + 'px' } );
      cars.last().after( cars.first() );
  });
}

// Event Listeners


$(document).ready(function() {
  $(window).trigger('resize');

  defaultInit();
  refreshSet();

  $('body').on("keydown", function(event) {    
    switch (event.key) {
      case "ArrowDown":
        $('.active-row').next().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-row').next().trigger('click');
        break;
      case "ArrowUp":
        $('.active-row').prev().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-row').prev().trigger('click');
        break;
      case "ArrowLeft":
        $('.active-column').prev().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-column').prev().trigger('click');
        break;
      case "ArrowRight":
        $('.active-column').next().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-column').next().trigger('click');
        break;
      case "Enter":
        if ($('.active-column .order-call').length) {
          orderCall('.active-column .order-call');
        } else {
          $('.active-column a').get(0).click();
        }
        break;
      case "Escape":
        escAction();
        break;
      case " ":
        spaceAction();
        break;
      default:
        return;
    }
  });

  // Firs user CX
  if (getCookie('videoTarget') === 'user-cx') {
    $('.prod-shipping.prod-info-block').hide();
    $('#context-edit-details .not-first-time').hide();
    $('#context-edit-details .first-time').show();
    $('.order-call.buy-btn').attr('data-destination','context-edit-details');
  }

  // Chat on
  car_ul.find('li').first().before(car_ul.find('li').last());  
  var interval_id = setInterval(function () {
    chatCarousel();
  }, 3000);
  
  // Follow action
  $('#product-follow').click(function(){
    $(this).toggleClass('following');
  });

  refreshLive();

});

})();
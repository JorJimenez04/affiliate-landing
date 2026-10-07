export interface ProductRecommendation {
  id: string;
  name: string;
  description: string;
  priceEstimate?: string;
  rating?: number;
  affiliateUrl: string;
  badge?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  image: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  recommendations: ProductRecommendation[];
}

export const ARTICLES: Article[] = [
  {
    slug: "5-natural-herbal-teas-better-sleep",
    title: "Can't Switch Your Brain Off at Night? These 5 Teas Changed My Evenings",
    excerpt: "I used to lie awake scrolling until 1am. Here are the five herbal teas that actually got me off my phone and into bed earlier — no melatonin gummies required.",
    category: "Nighttime Rituals 🌙",
    readTime: "5 min read",
    publishedAt: "October 2026",
    author: {
      name: "Sophia Vance",
      role: "Holistic Living & Botanical Enthusiast",
      bio: "I've been obsessed with herbal remedies since my grandmother's kitchen smelled like chamomile every winter. These days I test a new sleep ritual every month so you don't have to — consider me your overly caffeinated (ironic, I know) guinea pig."
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Real talk: are you also someone who lies in bed \"just checking one more thing\" on your phone until it's suddenly 1am? Same. For years my evenings were a mess of blue light and racing thoughts, until I started leaning on a handful of herbal teas my grandmother swore by. Turns out, nature had this figured out long before sleep apps existed.",
      sections: [
        {
          heading: "1. Chamomile & Lavender: My Non-Negotiable Nightly Duo 🌙",
          body: [
            "This is the pairing I reach for on nights when my brain just won't quiet down. Chamomile and lavender together feel like a weighted blanket for your nervous system — it genuinely melts the tension I didn't even notice I was holding in my shoulders.",
            "I make mine about 30 minutes before I want to actually be asleep (not just in bed — big difference), and I skip the honey on the rough nights since sugar tends to perk me right back up."
          ],
          tip: "Cover your mug while it steeps for 5 minutes — I lost years not knowing the good stuff was escaping with the steam!"
        },
        {
          heading: "2. Valerian Root & Passionflower: For the Really Wired Nights",
          body: [
            "I'll be honest, the smell took some getting used to. But when my mind is in full spiral mode, this combo is the one that actually taps my body on the shoulder and says \"hey, it's time to wind down.\""
          ]
        },
        {
          heading: "3. Lemon Balm (Melissa): The Gentle One I Didn't Expect to Love",
          body: [
            "This was a surprise favorite. Beyond smelling lovely, it quietly settles my stomach after a heavy dinner, which — turns out — was half of why I couldn't fall asleep in the first place."
          ]
        }
      ],
      conclusion: "None of this is a magic fix, and some nights still get away from me. But swapping even three nights a week of scrolling for a warm cup and five quiet minutes has genuinely changed how I feel in the mornings. Small ritual, bigger difference than I expected."
    },
    recommendations: [
      {
        id: "rec-1",
        name: "Organic Botanical Herbal Tea Selection (Premium Kit)",
        description: "This is the exact variety pack sitting on my kitchen shelf right now. I rotate through it depending on my mood, and the packaging actually keeps the aroma locked in — a small detail that matters more than I expected.",
        priceEstimate: "$24.99",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE1?tag=your-affiliate-tag-20",
        badge: "My Top Pick"
      },
      {
        id: "rec-2",
        name: "Precision Temperature Control Electric Kettle",
        description: "I was skeptical a kettle could \"change the game,\" but water that's too hot genuinely scorches delicate herbs and ruins the flavor. This one saved my tea from tasting bitter, and I use it daily now.",
        priceEstimate: "$39.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE2?tag=your-affiliate-tag-20",
        badge: "Worth Every Penny"
      }
    ]
  },
  {
    slug: "morning-hydration-habits-boost-energy",
    title: "I Stopped Reaching for Coffee First Thing — Here's What I Drink Instead",
    excerpt: "Four ridiculously simple morning hydration habits that cleared my brain fog faster than my old three-cups-of-coffee routine ever did.",
    category: "Morning Energy ☕",
    readTime: "4 min read",
    publishedAt: "October 2026",
    author: {
      name: "Liam Carter",
      role: "Mindful Living & Routine Strategist",
      bio: "Recovering caffeine-before-water addict. I spent a month tracking how I actually felt each morning depending on what I drank first — this is the routine that stuck, and the one my friends are tired of hearing me talk about."
    },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Quick question: what's the very first thing you drink after waking up? For years, mine was coffee, straight away, no exceptions. Then I learned that after 7-8 hours asleep your body is basically mildly dehydrated already — and coffee on top of that was quietly spiking my stress hormones every single morning. So I tried something embarrassingly simple instead.",
      sections: [
        {
          heading: "1. Room Temperature Water with Fresh Lemon 🍋",
          body: [
            "I know, I know — it sounds like the most basic wellness advice ever. But a big glass of this before anything else genuinely wakes up my digestion, and I feel less foggy by the time I sit down at my desk."
          ],
          tip: "Skip the ice-cold water first thing — I noticed my body seemed to work harder just processing the temperature instead of actually hydrating."
        },
        {
          heading: "2. A Pinch of Pink Himalayan Salt and Trace Minerals",
          body: [
            "This one felt silly the first time I tried it, but a tiny pinch stirred in genuinely helps the water actually absorb instead of running straight through you. My 10am energy crash got noticeably smaller."
          ]
        }
      ],
      conclusion: "I'm not saying ditch coffee forever (I definitely didn't). But giving your body real hydration in those first 15 minutes before anything else has made my mornings feel less like damage control and more like I'm actually starting the day ahead."
    },
    recommendations: [
      {
        id: "rec-3",
        name: "Insulated Stainless Steel Glass Water Bottle",
        description: "This has lived on my nightstand for months now. It keeps my lemon water tasting clean instead of plasticky, and honestly just seeing it there reminds me to actually drink it.",
        priceEstimate: "$21.99",
        rating: 4.9,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE3?tag=your-affiliate-tag-20",
        badge: "Lives On My Nightstand"
      }
    ]
  },
  {
    slug: "natural-ways-to-create-a-calm-workspace",
    title: "My Home Desk Was Stressing Me Out — So I Rebuilt It With Nature in Mind",
    excerpt: "A few small, mostly-free changes that took my cluttered, screen-glare-filled desk from draining to genuinely calming to sit at every day.",
    category: "Calm Workspace 🌿",
    readTime: "6 min read",
    publishedAt: "September 2026",
    author: {
      name: "Maya Lin",
      role: "Workspace Ergonomics & Biophilic Design Writer",
      bio: "I write at this desk for a living, so when it started making me dread sitting down, I treated the redesign like an experiment on myself. Here's what actually moved the needle, minus the Pinterest-perfect fluff."
    },
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Ever notice how some rooms just drain you, and others feel like you can breathe? I didn't think much about it until I realized I was dreading sitting at my own desk every morning. Turns out my environment was doing a lot more to my focus than I gave it credit for — so I started changing it, one small thing at a time.",
      sections: [
        {
          heading: "1. A Low-Maintenance Plant (Even I Couldn't Kill It) 🌱",
          body: [
            "I have murdered many plants. Snake plants and pothos are the first ones that actually survived on my desk, and having something green in my eyeline softens the harsh glare of my monitor more than I expected."
          ],
          tip: "Put it somewhere you'll actually look at during the day — mine sits right beside my second monitor so my eyes get a little break every time I glance over."
        },
        {
          heading: "2. Chasing Natural Light Instead of Fighting It",
          body: [
            "Moving my desk perpendicular to the window (instead of facing it) killed the glare on my screen and still let in enough daylight to keep me from feeling like a vampire by 3pm."
          ]
        }
      ],
      conclusion: "None of this cost much, and I didn't do it all in one weekend. But piece by piece, my desk went from a place I avoided to the spot in my apartment I actually enjoy working from. If your space is draining you too, start with just one plant."
    },
    recommendations: [
      {
        id: "rec-4",
        name: "Ergonomic Bamboo Laptop Stand with Desk Organizer",
        description: "I grabbed this mostly for the clutter, but my neck pain quietly disappeared a few weeks in too. Now I notice it when I travel and don't have it.",
        priceEstimate: "$29.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE4?tag=your-affiliate-tag-20",
        badge: "Unexpected MVP"
      }
    ]
  },
  {
    slug: "turmeric-ginger-immunity-tonic-recipe",
    title: "The 5-Minute Turmeric-Ginger Tonic I Make Every Single Morning",
    excerpt: "A simple root-and-spice tonic rooted in traditional herbal medicine, plus the one practical science tweak that actually makes it work better.",
    category: "Plant-Based Recipes 🍲",
    readTime: "4 min read",
    publishedAt: "October 2026",
    author: {
      name: "Elena Ross",
      role: "Herbalist & Recipe Developer",
      bio: "Trained in traditional phytotherapy, but I live in a real kitchen with a real blender, not an apothecary. My rule: if a remedy takes more than five minutes or six ingredients, I won't actually make it twice — so that's the bar for everything I publish."
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Turmeric and ginger have been paired in traditional herbal medicine for centuries, long before \"anti-inflammatory\" was a wellness buzzword. I started making this tonic during a particularly rough cold season, and it's quietly become the one ritual I never skip — mostly because it takes less time than waiting for my coffee to brew.",
      sections: [
        {
          heading: "1. The Base: Fresh Root, Not Just Powder 🌱",
          body: [
            "I use a thumb-sized piece of fresh turmeric root and a similar amount of ginger, grated straight into a small pot of water. Powder works in a pinch, but fresh root gives a noticeably brighter, less dusty flavor — and it's what traditional preparations actually call for.",
            "I let it simmer gently for about 8-10 minutes. Any longer and the ginger turns bitter; any shorter and it tastes like warm water with regrets."
          ],
          tip: "Add a crack of black pepper at the end — the piperine in it measurably increases how much curcumin (turmeric's active compound) your body actually absorbs. This single tweak is the difference between 'nice tea' and the tonic actually doing something."
        },
        {
          heading: "2. A Spoon of Raw Honey, Off the Heat",
          body: [
            "I stir honey in only after straining and removing the pot from heat — boiling honey breaks down some of its natural enzymes, so adding it at the end keeps more of its soothing properties intact for sore throats.",
          ]
        },
        {
          heading: "3. Batch It Once, Drink It All Week",
          body: [
            "On Sundays I make a concentrated version — double the root, half the water — and keep it in the fridge. Each morning I just dilute a splash with hot water instead of grating everything from scratch daily."
          ]
        }
      ],
      conclusion: "This isn't a cure for anything, and I'm not pretending it replaces a real diet or sleep. But as a five-minute ritual rooted in genuinely old herbal practice, it's earned a permanent spot on my stove — and my immune system hasn't complained either."
    },
    recommendations: [
      {
        id: "rec-5",
        name: "Organic Fresh Turmeric & Ginger Root Combo Pack",
        description: "Having both roots on hand without a weekly produce-aisle hunt is the only reason I still make this consistently. Keeps well in the fridge for the whole batch-cooking week.",
        priceEstimate: "$18.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE5?tag=your-affiliate-tag-20",
        badge: "Weekly Staple"
      },
      {
        id: "rec-6",
        name: "Fine Microplane Grater for Roots & Spices",
        description: "A regular grater turned this into a 15-minute chore. This one shreds the root in seconds and is genuinely dishwasher-safe, which matters more than I expected on a Monday morning.",
        priceEstimate: "$14.50",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE6?tag=your-affiliate-tag-20"
      }
    ]
  },
  {
    slug: "natural-post-workout-recovery-herbs",
    title: "I Swapped My Ibuprofen Habit for These 3 Plant-Based Recovery Tricks",
    excerpt: "Three practical, low-effort swaps rooted in traditional phytotherapy that actually changed how sore I feel the day after training.",
    category: "Active Recovery 🏃",
    readTime: "5 min read",
    publishedAt: "October 2026",
    author: {
      name: "Marcus Oyelaran",
      role: "Strength Coach & Natural Recovery Writer",
      bio: "I coach lifters for a living and used to reach for ibuprofen like it was a pre-workout supplement. A nagging stomach issue forced me to find other ways to manage soreness — these are the three that actually stuck, backed by both old herbal practice and the newer research on them."
    },
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Popping ibuprofen after every leg day felt normal for years, until it wasn't doing my stomach any favors. Turns out a few plant-based tools — some used in traditional medicine for centuries, now with actual research behind them — cover a surprising amount of what I was using painkillers for.",
      sections: [
        {
          heading: "1. Topical Arnica Montana Gel for Localized Soreness",
          body: [
            "Arnica has been used topically in European folk medicine for bruising and muscle pain for generations. I rub it into whatever muscle group took the worst beating within an hour of training, and the next-day stiffness is noticeably less sharp — especially on heavy lower-body days."
          ],
          tip: "Never take arnica orally unless it's a diluted homeopathic prep made for that — the raw plant is for topical use only."
        },
        {
          heading: "2. Tart Cherry Extract the Night Before a Hard Session",
          body: [
            "Tart cherries are naturally high in anthocyanins, and a concentrate taken the evening before an intense session has made my soreness the following day feel noticeably more manageable — this is one of the few folk remedies with a decent stack of actual sports-science studies behind it."
          ]
        },
        {
          heading: "3. A Warm Magnesium & Lavender Soak",
          body: [
            "Twenty minutes in a warm bath with magnesium flakes and a few drops of lavender oil has become my non-negotiable Sunday ritual after a heavy training week. Whether it's the magnesium, the warmth, or just forcing myself to sit still for once, my legs feel distinctly less wrecked by Monday."
          ]
        }
      ],
      conclusion: "None of this replaces proper programming, sleep, or a doctor's advice if something actually hurts versus just feeling worked. But trading my reflexive ibuprofen habit for these three plant-based tools has made recovery feel like something I'm actively doing, not just waiting out."
    },
    recommendations: [
      {
        id: "rec-7",
        name: "Topical Arnica Montana Recovery Gel",
        description: "This is the exact tube in my gym bag. A little goes a long way, and it doesn't leave the greasy residue some of the cheaper balms do.",
        priceEstimate: "$12.99",
        rating: 4.6,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE7?tag=your-affiliate-tag-20",
        badge: "Gym Bag Staple"
      },
      {
        id: "rec-8",
        name: "Concentrated Tart Cherry Extract Capsules",
        description: "I take two of these the night before a heavy session. Easier to keep consistent than brewing tart cherry juice from concentrate every time.",
        priceEstimate: "$22.00",
        rating: 4.5,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE8?tag=your-affiliate-tag-20"
      }
    ]
  }
];

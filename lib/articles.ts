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
  }
];

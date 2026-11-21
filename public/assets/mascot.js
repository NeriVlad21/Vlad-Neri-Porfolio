export const MASCOT_NAME = "R2-D2";
export const CHAT_API_URL = "https://vlad-r2d2-chat.mereziko.workers.dev";

/**
 * Fill in any field below with Vlad's own confirmed wording.
 * When a field is null, R2-D2 will never invent an answer — it explains that
 * Vlad prefers to answer personally and offers the contact form.
 */
export const VLAD_CONFIRMED = {
  weakness: null,
  whyCS: null,
  fiveYearGoal: null,
  salaryExpectation: null,
  failureLesson: null,
  conflictStory: null,
  relocation: null,
  references: null,
};

const MAX_INPUT_LENGTH = 300;
const API_TIMEOUT_MS = 8000;
const SEND_COOLDOWN_MS = 1500;
const DRAG_THRESHOLD_PX = 6;
const RETURN_DURATION_MS = 600;
const ANNOYANCE_WINDOW_MS = 60_000;
const BUBBLE_COOLDOWN_MS = 900;
const GAME_BUBBLE_COOLDOWN_MS = 10_000;
const VIEWPORT_MARGIN_PX = 8;
const MAX_STORED_HISTORY = 20;
const MAX_API_HISTORY = 8;
const MAX_RECENT_REPLIES = 8;
const CONTACT_MENTION_COOLDOWN = 5;
const SESSION_STORAGE_KEY = "vlad_r2d2_chat_state_v2";
const ALLOWED_ACTION_TYPES = new Set([
  "show_projects",
  "open_project",
  "open_tech",
  "open_certs",
  "open_contact",
  "open_resume",
  "open_about",
  "open_game",
  "tell_joke",
]);

export const REACTION_ANIMATIONS = [
  "head-spin",
  "wiggle",
  "hop",
  "tilt",
  "shake",
  "eye-glow",
  "antenna-twitch",
  "lean-cursor",
  "quick-blink",
  "dizzy-swirl",
];

const ALARMED_DRAG_LINES = [
  "*Bweeep-aaah!* Hey! Put me down!",
  "*Whirr-bzzt!* Whoa—watch the dome!",
  "*Bip-bip-bip!* Unhand this astromech!",
  "*Dwoooop!* Altitude alert! Put me back!",
  "*Bzzzt!* My stabilizers are freaking out!",
  "*Wheee-oh-no!* I was not built to fly!",
];

export const DRAG_RELEASE_LINES = [
  // Mildly irritated (drags 1–2)
  { text: "*Bzzt!* Hey! Hands off the chassis!", tier: "mild" },
  { text: "*Bwoop-bwoop!* Put me down, I have a portfolio to guard!", tier: "mild" },
  { text: "*Zzzzt!* My gyros are dizzy!", tier: "mild" },
  { text: "*Brrt!* Was that necessary?", tier: "mild" },
  { text: "*Chirp-chirp-bzzt!* I was comfortable there!", tier: "mild" },
  { text: "*Whirr-clunk!* Careful! I'm delicate. Ish.", tier: "mild" },
  { text: "*Dwoop!* Whoa! Warn a droid first!", tier: "mild" },
  { text: "*Bwarp!* I'm ticklish, stop it!", tier: "mild" },

  // Grumpy (drags 3–5)
  { text: "*Whirrrr-bip!* I am not a toy, human.", tier: "grumpy" },
  { text: "*Bweeep-grrrr!* Please stop dragging me around.", tier: "grumpy" },
  { text: "*Bzzzzt-bzzzzt!* My oil is spilling!", tier: "grumpy" },
  { text: "*Wheee-oop... brrt!* Fun for you, not for me.", tier: "grumpy" },
  { text: "*Clank-bip!* I have a home. Let me go home.", tier: "grumpy" },
  { text: "*Zzzt-whirr!* My dome is spinning!", tier: "grumpy" },
  { text: "*Grrrbzzt!* I'm trying to sell a portfolio here!", tier: "grumpy" },
  { text: "*Whoop-whoop!* Gravity is not my friend.", tier: "grumpy" },

  // Very annoyed (drags 6+)
  { text: "*Brrrt-brrrt!* Do NOT do that again.", tier: "angry" },
  { text: "*Bip-bip-brrrt!* One more time and I file a complaint.", tier: "angry" },
  { text: "*Grrr-bweep!* Rude. Just rude.", tier: "angry" },
  { text: "*Brrrrrt!* That's the last warning!", tier: "angry" },
  { text: "*Bweh-bweh!* You're gonna break my wheels!", tier: "angry" },
  { text: "*Bip!* I'm calling the maintenance crew.", tier: "angry" },
  { text: "*Bzzt-bwoop-grr!* Seriously, stop.", tier: "angry" },
  { text: "*Brrt-brrt-brrt!* *angry beeping* Ok I'm sulking now.", tier: "angry" },
];

export const HOVER_LINES = [
  "*Bweeep!* Hello, human!",
  "*Boop-bip!* Want to see Vlad's projects?",
  "*Whirr-chirp!* Vlad is open for OJT!",
  "*Bip-bip!* I'm watching you. Friendly.",
  "*Beeeeep!* Psst, the contact form is below.",
  "*Dweet!* Ask me anything about Vlad!",
  "*Boop!* Nice cursor.",
  "*Chirp-chirp!* Did you see FSLAMES yet?",
  "*Whirr!* 11 shipped projects. I counted.",
  "*Bwoop!* Vlad has a Cybersecurity certification!",
  "*Bip-boop!* Looking for an OJT candidate?",
  "*Zzzwee!* Click me, I bite. Not really.",
  "*Beep-boop-beep!* Tell me a joke? I know some.",
  "*Whirr-bweep!* The tech stack carousel is spicy.",
  "*Chirp!* Vlad edits videos too!",
  "*Boop-boop!* Keep scrolling, it gets better.",
  "*Dwoop!* Careful, I'm shy.",
  "*Bzzz-bip!* Check the certificates!",
  "*Bweeeeeep!* Beep. Boop. Hire Vlad.",
  "*Chirrup!* Don't mind me, just guarding.",
  "*Whirr-whirr!* That tickles my sensors.",
  "*Bip!* Fun fact: Vlad's average is 1.77.",
  "*Beeoop!* I run on caffeine and good code.",
  "*Bweep-chirp!* Need a guide?",
];

export const GAME_2048_REACTIONS = {
  start: [
    "*Bweeep-boop!* 2048 board online—pick a corner and guard it!",
    "*Chirp-whirr!* Fresh grid loaded. Let's see your tile strategy!",
    "*Bip-bip!* Game on! Keep your biggest tile anchored in one corner.",
    "*Dweet-boop!* New 2048 round! Smooth swipes beat frantic swipes.",
    "*Whirr-beep!* I'm cheering from the sidelines—build in one direction!",
    "*Boop-chirp!* Two tiles on the board, 2048 on the horizon. Go!",
    "*Bweep!* Good luck! Ask me in chat anytime if you want 2048 tips.",
  ],
  milestone: [
    "*Bweeep-chirp!* Tile {value} unlocked—clean merges!",
    "*Whirr-boop!* Nice! You just hit {value}. Keep that corner locked!",
    "*Chirp-bweep!* {value} on the board! Your stabilizer math is working.",
    "*Bip-dweet!* Boom—{value}! Keep stacking along the same edge.",
    "*Boop-bweeep!* Tile {value} reached! You're cruising now.",
    "*Wheee-bip!* {value} already? Impressive grid control!",
    "*Dwoop-chirp!* Solid {value} merge—stay patient and protect the row!",
  ],
  win: [
    "*Bweeep-wheee-chirp!* 2048! Absolute legend—you beat the grid!",
    "*Chirp-chirp-boop!* 2048 unlocked! My circuits are throwing confetti!",
    "*Whirr-bweeep!* You hit 2048! That corner discipline paid off big.",
    "*Bip-bweep-wheee!* Victory! 2048 on the board—respect, human!",
    "*Dweet-bweeep!* 2048 achieved! Vlad would be proud of that optimization.",
    "*Boop-wheee-chirp!* Crown earned—2048 complete! Going for an even higher score?",
    "*Bweeeeeep!* 2048! Peak strategy—my antenna is saluting you!",
  ],
  gameover: [
    "*Bwoop-dwoop...* Grid locked at {value} points—solid run! Rematch?",
    "*Whirr-clunk!* Out of moves with {value} points. You'll crush it next round!",
    "*Bip-boop...* Tough board! {value} points is a respectable score.",
    "*Dwoooop!* No merges left at {value} pts. Hit New Game for revenge!",
    "*Bzzt-boop!* Grid packed tight at {value} points—one corner next time!",
    "*Chirp-dwoop!* Good hustle—{value} points logged. Ready for another round?",
    "*Brrt-boop!* Board's full at {value} pts. Shaking off the dust for round two!",
  ],
};

export const DEV_JOKES = [
  {
    id: "joke_dark_mode",
    beep: "Bweep-chuckle-boop!",
    text: "Why do developers prefer dark mode? Because light attracts bugs.",
  },
  {
    id: "joke_sql_bar",
    beep: "Whirr-bip-haha!",
    text: "A SQL query walks into a cafe, spots two tables, and politely asks: mind if I join you?",
  },
  {
    id: "joke_css_bar",
    beep: "Chirp-boop-snicker!",
    text: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves.",
  },
  {
    id: "joke_glasses",
    beep: "Dweet-boop-beep!",
    text: "Why do Java developers wear glasses? Because they don't C#.",
  },
  {
    id: "joke_cache",
    beep: "Bip-whirr-chuckle!",
    text: "Why did the developer go broke? Because they used up all their cache.",
  },
  {
    id: "joke_binary",
    beep: "Boop-chirp-bweep!",
    text: "There are 10 kinds of people in the world: those who understand binary, and those who don't.",
  },
  {
    id: "joke_hardware",
    beep: "Whirr-bweep-boop!",
    text: "How many programmers does it take to change a light bulb? None—that's a hardware problem.",
  },
  {
    id: "joke_git_commit",
    beep: "Chirp-bweep-hehe!",
    text: "Why did the programmer quit their job? Because they didn't get arrays.",
  },
  {
    id: "joke_recursive",
    beep: "Bip-bweep-loop!",
    text: "To understand recursion, you must first understand recursion.",
  },
  {
    id: "joke_off_by_one",
    beep: "Dwoop-chirp-boop!",
    text: "There are two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
  },
  {
    id: "joke_wifi_coffee",
    beep: "Bweep-bip-giggle!",
    text: "Why do Python programmers live on land? Because they can't C.",
  },
  {
    id: "joke_404",
    beep: "Whirr-dweet-boop!",
    text: "I tried to tell a joke about HTTP 404, but I couldn't find it.",
  },
  {
    id: "joke_semicolon",
    beep: "Boop-bzzt-chuckle!",
    text: "My favorite horror story is six words long: works on my machine, not prod.",
  },
  {
    id: "joke_ml_overfit",
    beep: "Chirp-whirr-bip!",
    text: "Why did the machine learning model fail its interview? It memorized the practice questions instead of generalizing.",
  },
];

const BEEP_PREFIXES = {
  neutral: [
    "Bweeep-boop!",
    "Whirr-chirp!",
    "Bip-bweep-boop!",
    "Chirp-dweet!",
    "Boop-whirr-bip!",
    "Dweet-bweeep!",
  ],
  excited: [
    "Bweeep-chirp-boop!",
    "Wheee-bip-boop!",
    "Chirp-bweeep!",
    "Whirr-boop-beep!",
    "Bip-bweeep-dweet!",
  ],
  polite: [
    "Boop-dweet!",
    "Chirp-boop!",
    "Whirr-boop!",
    "Bip-chirp!",
    "Dwoop-boop!",
  ],
  action: [
    "Whirr-click-bweep!",
    "Bip-bweep-go!",
    "Chirp-whirr-boop!",
    "Dweet-click-beep!",
  ],
};

/**
 * Verified CV & portfolio knowledge base for all 11 shipped projects.
 * Strictly zero invented facts and zero placeholder strings.
 */
export const PROJECTS_KB = [
  {
    id: "fslames",
    name: "FSLAMES",
    subtitle: "Filipino Sign Language Automated Mobile Education System",
    year: "2025–2026",
    role: "Backend Developer & Documentation",
    aliases: ["fslames", "sign language", "fsl", "thesis", "tflite", "mediapipe", "sign"],
    summary:
      "FSLAMES is Vlad's 2025–2026 thesis: an offline-capable Filipino Sign Language mobile learning app with camera-guided practice and on-device gesture classification.",
    stack:
      "He built the ML pipeline using Python, MediaPipe hand/pose landmarks, TensorFlow/Keras, and exported 2 quantized TFLite models for offline mobile inference.",
    result:
      "The pipeline processes ~5,000 curated samples across 131 sign classes using strict participant-level train/test splits to prevent data leakage.",
    link: "https://fslames.vercel.app/",
    linkNote: "The live showcase is online at fslames.vercel.app.",
  },
  {
    id: "jonathan-photography",
    name: "Jonathan Photography System",
    subtitle: "Studio Portfolio, Service Estimator & Booking Platform",
    year: "2026",
    role: "Project Manager & Full Stack Developer",
    aliases: ["jonathan", "photography", "photo", "studio", "booking", "estimator"],
    summary:
      "Jonathan Photography System (2026) is a full-stack studio website, package quote estimator, schedule conflict checker, and booking portal contracted by an active photography studio.",
    stack:
      "Vlad led and built it with React, Vite, PHP, and MySQL, adding password-protected admin controls and gallery download restrictions.",
    result:
      "The platform was contracted for studio purchase and validated end-to-end with 7 real users, including studio owners testing bookings and quotes.",
    link: "https://jonathanphotography.page.gd/",
    linkNote: "The live studio platform is deployed at jonathanphotography.page.gd.",
  },
  {
    id: "panlasang-pinoy",
    name: "Filipino Food Recommender",
    subtitle: "Panlasang Pinoy Ingredient & Dish Recommender",
    year: "2025",
    role: "Full Stack Developer (Team of 3)",
    aliases: ["food", "recipe", "recipes", "panlasang", "pinoy", "lutuin", "streamlit", "recommender", "dish"],
    summary:
      "Filipino Food Recommender (2025) is a data-driven recipe web app that filters Filipino dishes by ingredients on hand, prep time, and macronutrients.",
    stack:
      "Vlad built the ingestion and filtering workflow with Python, Pandas, SQLite, and Streamlit.",
    result:
      "It indexes 97 Filipino recipes across 11 categories and completed live testing with 100 real users.",
    link: "https://foodrecom4panlasangpinoy.streamlit.app/",
    linkNote: "You can try the live Streamlit app at foodrecom4panlasangpinoy.streamlit.app.",
  },
  {
    id: "barangay-one",
    name: "BarangayONE",
    subtitle: "Barangay Document Request & Resident Service Portal",
    year: "2026",
    role: "Full Stack Developer",
    aliases: ["barangay", "barangayone", "barangay one", "clearance", "resident", "civic"],
    summary:
      "BarangayONE (2026) is a digital civic portal where residents request clearances, indigency certificates, and residency forms online.",
    stack:
      "Vlad built it with JavaScript, HTML5, CSS3, and deployed it live on Cloudflare Pages.",
    result:
      "It covers 3 core barangay certificates with transparent 5-stage tracking, 3 staff approval tiers, community announcements, and emergency hotlines.",
    link: "https://barangayone.pages.dev/",
    linkNote: "The live portal is hosted at barangayone.pages.dev.",
  },
  {
    id: "u-eat",
    name: "U-Eat Ordering System",
    subtitle: "Campus Canteen Ordering & Stall Management App",
    year: "2025",
    role: "Full Stack Developer & Head of Documentation",
    aliases: ["u-eat", "ueat", "u eat", "canteen", "ordering", "stall"],
    summary:
      "U-Eat (2025) is an Android campus canteen ordering app connecting PHINMA UPang students with food stalls in real time.",
    stack:
      "Vlad built the customer ordering and stall-owner queue workflows using Kotlin, Firebase, and Android Studio.",
    result:
      "It was tested by 50 real users with a 4.5/5 functionality rating and scored 90/100 in Software Development.",
    link: "",
    linkNote: "Full case study details and highlights are inside the Projects modal on this page.",
  },
  {
    id: "pennywise",
    name: "PennyWise Savings App",
    subtitle: "Financial Literacy & Future-Value Goal Tracker",
    year: "2025",
    role: "Project Manager, UI Designer & Front End Developer",
    aliases: ["pennywise", "penny wise", "savings", "greenstash", "finance", "financial", "compose"],
    summary:
      "PennyWise (2025) is an Android financial literacy app helping students track savings goals and calculate compound future value.",
    stack:
      "Vlad served as PM, UI designer, and front-end developer using Kotlin, Jetpack Compose, Firebase, and Android Studio.",
    result:
      "It scored 95/100 in final professor evaluation with transaction logs, goal cards, and an open-source repository.",
    link: "https://github.com/fpaulpalis/PennyWise-GreenStash/",
    linkNote: "The open-source repository is on GitHub under fpaulpalis/PennyWise-GreenStash.",
  },
  {
    id: "life-flow",
    name: "Life Flow",
    subtitle: "Blood Donation Facilitation & Donor Registry",
    year: "2025",
    role: "Project Manager & Full Stack Developer",
    aliases: ["life flow", "lifeflow", "blood", "donor", "donation"],
    summary:
      "Life Flow (2025) is a healthcare logistics web app for blood donor registration, blood-type lookup, and donation drive coordination.",
    stack:
      "Vlad architected and coded it using native PHP, MySQL, HTML5, and CSS3 for fast relational searches.",
    result:
      "It streamlines donor onboarding, blood-group filtering, educational guides, and event scheduling with a published GitHub repo.",
    link: "https://github.com/ikovlad/Life-Flow",
    linkNote: "The source code is available on GitHub at ikovlad/Life-Flow.",
  },
  {
    id: "moya",
    name: "Moya Mineral Water",
    subtitle: "Mineral Water Delivery & Ordering Management System",
    year: "2025",
    role: "Full Stack Developer",
    aliases: ["moya", "water", "mineral", "delivery", "refilling"],
    summary:
      "Moya Mineral Water (2025) is a local delivery ordering and routing web app built for water refilling operations in Rosario, La Union.",
    stack:
      "Vlad implemented it with PHP, SQL, JavaScript, HTML, and CSS.",
    result:
      "It supports real-time container ordering, barangay delivery zone mapping, container pricing, and 1–2 hour dispatch tracking.",
    link: "https://github.com/ikovlad/moya_mineralwater_delivery",
    linkNote: "The repository is public at github.com/ikovlad/moya_mineralwater_delivery.",
  },
  {
    id: "manga-haven",
    name: "Manga Haven PH",
    subtitle: "Rental Bookstore Management & Analytics Dashboard",
    year: "2025",
    role: "Full Stack Developer & Project Manager",
    aliases: ["manga", "manga haven", "bookstore", "rental"],
    summary:
      "Manga Haven PH (2025) is a centralized rental bookstore dashboard tracking inventory, customer checkouts, and automated overdue penalties.",
    stack:
      "Vlad led the design and implementation using PHP, SQL, HTML5, and CSS3.",
    result:
      "It tracks total manga stock, active rentals, staff directories, and automated penalty logs with an open GitHub repo.",
    link: "https://github.com/ikovlad/mangahavenph",
    linkNote: "The source repo is on GitHub at ikovlad/mangahavenph.",
  },
  {
    id: "phinma-ed",
    name: "Phinma Ed App",
    subtitle: "PHINMA UPang Campus Guide & Student Companion",
    year: "2025",
    role: "UI Designer & Head of Documentation",
    aliases: ["phinma", "phinma ed", "campus guide", "school map", "companion"],
    summary:
      "Phinma Ed App (2025) is a mobile campus companion for PHINMA UPang students with a college directory, school map, and scholarship guide.",
    stack:
      "Built in Kotlin, Firebase, and Android Studio, where Vlad owned UI design, navigation flows, and functional documentation.",
    result:
      "It organizes campus details into four clear modules: Home, School Map, Scholarship Guide, and Student Profile.",
    link: "",
    linkNote: "You can inspect its breakdown inside the Projects modal right on this page.",
  },
  {
    id: "mang-kanor",
    name: "Tindahan ni Mang Kanor",
    subtitle: "Sari-Sari Store Inventory & Sales Analytics System",
    year: "2025",
    role: "Full Stack Developer & Project Manager",
    aliases: ["mang kanor", "kanor", "tindahan", "sari-sari", "sari sari", "pos"],
    summary:
      "Tindahan ni Mang Kanor (2025) is an inventory monitoring and point-of-sale analytics dashboard tailored for neighborhood sari-sari stores.",
    stack:
      "Vlad led and built the full-stack dashboard using PHP, SQL, HTML5, and CSS3.",
    result:
      "It combines real-time stock tracking, customer credit ledgers, top-selling product charts, and 7-day sales bar analytics.",
    link: "",
    linkNote: "You can view the case study details in the Projects section.",
  },
];

const TECH_KB = [
  { id: "python", name: "Python", aliases: ["python", "py"], projects: ["FSLAMES", "Filipino Food Recommender"], note: "Used for ML dataset pipelines, Pandas ETL scripts, and TensorFlow/Keras training." },
  { id: "pandas", name: "Pandas", aliases: ["pandas"], projects: ["FSLAMES", "Filipino Food Recommender"], note: "Used for dataset cleaning, normalization, and SQLite ingestion across 97 recipes and ~5,000 sign samples." },
  { id: "tensorflow", name: "TensorFlow", aliases: ["tensorflow", "keras", "tflite", "machine learning", "ml"], projects: ["FSLAMES"], note: "Used to train sequence classifiers and export 2 quantized TFLite models for offline mobile inference." },
  { id: "mediapipe", name: "MediaPipe", aliases: ["mediapipe"], projects: ["FSLAMES"], note: "Used for 21-point hand and pose landmark extraction from Filipino Sign Language sequences." },
  { id: "react", name: "React", aliases: ["react", "reactjs"], projects: ["Jonathan Photography System"], note: "Used for component-driven UI including the interactive studio quote estimator and booking portal." },
  { id: "vite", name: "Vite", aliases: ["vite"], projects: ["Jonathan Photography System"], note: "Used for fast development bundling and production builds." },
  { id: "php", name: "PHP", aliases: ["php"], projects: ["Jonathan Photography System", "Life Flow", "Moya Mineral Water", "Manga Haven PH", "Tindahan ni Mang Kanor"], note: "Used across 5 shipped full-stack web apps for booking conflict checks, registries, and dashboards." },
  { id: "mysql", name: "MySQL", aliases: ["mysql", "sql", "sqlite", "database"], projects: ["Jonathan Photography System", "Life Flow", "Moya Mineral Water", "Manga Haven PH", "Tindahan ni Mang Kanor"], note: "Used for relational schemas, booking conflict checks, donor registries, and inventory tracking." },
  { id: "javascript", name: "JavaScript", aliases: ["javascript", "js"], projects: ["BarangayONE", "Moya Mineral Water"], note: "Used for interactive frontend state, 5-stage request tracking, and client validation." },
  { id: "html5", name: "HTML5", aliases: ["html", "html5"], projects: ["BarangayONE", "Moya Mineral Water"], note: "Used for semantic landmarks and accessible responsive forms." },
  { id: "css3", name: "CSS3", aliases: ["css", "css3"], projects: ["BarangayONE", "Moya Mineral Water"], note: "Used for responsive grid layouts and dual-theme styling." },
  { id: "kotlin", name: "Kotlin", aliases: ["kotlin", "android"], projects: ["U-Eat Ordering System", "PennyWise Savings App", "Phinma Ed App"], note: "Used across 3 native Android apps covering campus ordering, savings goals, and student guides." },
  { id: "jetpack-compose", name: "Jetpack Compose", aliases: ["jetpack compose", "compose"], projects: ["PennyWise Savings App", "U-Eat Ordering System"], note: "Used for declarative Android UI screens and reactive savings goal cards." },
  { id: "firebase", name: "Firebase", aliases: ["firebase", "firestore"], projects: ["U-Eat Ordering System", "PennyWise Savings App", "Phinma Ed App"], note: "Used for real-time order syncing, authentication, and mobile cloud persistence." },
  { id: "android-studio", name: "Android Studio", aliases: ["android studio"], projects: ["U-Eat Ordering System", "PennyWise Savings App", "Phinma Ed App"], note: "Used to build, test, and debug native Kotlin Android apps." },
  { id: "django", name: "Django", aliases: ["django"], projects: [], note: "Trained through Zuitt's 80-hour Python, Django & AWS course (Cert No. BEC10-016)." },
  { id: "aws", name: "AWS", aliases: ["aws", "amazon web services", "ec2", "s3", "lambda", "cloud"], projects: [], note: "EC2, S3, and Lambda fundamentals from Zuitt's 80-hour Python, Django & AWS course." },
  { id: "github", name: "Git/GitHub", aliases: ["git", "github"], projects: [], note: "Used for version control, branching, and deployments across web, Android, and ML projects." },
  { id: "linux", name: "Linux", aliases: ["linux", "ubuntu"], projects: [], note: "Ubuntu development environment for Python pipelines, shell tooling, and web builds." },
  { id: "figma", name: "Figma", aliases: ["figma", "ui design"], projects: [], note: "Used for wireframing and mobile UI screen flows before implementation." },
  { id: "davinci-resolve", name: "DaVinci Resolve", aliases: ["davinci", "davinci resolve"], projects: [], note: "Used for color grading, motion graphics, and narrative edits." },
  { id: "capcut", name: "CapCut", aliases: ["capcut"], projects: [], note: "Used for high-retention vertical short-form edits and kinetic captions." },
];

const HR_ROTATION_ORDER = [
  "about_yourself",
  "why_hire",
  "strengths",
  "availability",
  "remote_onsite",
  "experience",
  "biggest_achievement",
  "teamwork",
  "deadlines_pressure",
  "certifications",
  "tools",
  "languages",
  "equipment",
  "ojt_hours",
];

const HR_PATTERNS = [
  { key: "weakness", confirmedKey: "weakness", re: /\b(weakness|weaknesses|improve on|flaw|flaws|area[s]? for improvement|struggle with|blind spot)\b/i },
  { key: "why_cs", confirmedKey: "whyCS", re: /\b(why (this field|computer science|cs|tech|coding|programming|software|engineering)|why did (he|you|vlad) (choose|pick|study)|what got (him|you) into (cs|tech|coding))\b/i },
  { key: "five_year_plan", confirmedKey: "fiveYearGoal", re: /\b(five[- ]?year|5[- ]?year|where (do|does) (you|he|vlad) see|long[- ]?term goal|career goal|in 5 years)\b/i },
  { key: "salary", confirmedKey: "salaryExpectation", re: /\b(salary|compensation|pay|rate|stipend|allowance|expected pay|hourly rate|budget)\b/i },
  { key: "failure_lesson", confirmedKey: "failureLesson", re: /\b(failure|failed|mistake|biggest mistake|went wrong|lesson learned|setback)\b/i },
  { key: "conflict", confirmedKey: "conflictStory", re: /\b(conflict|disagree|disagreement|difficult teammate|handle criticism|handle disagreement)\b/i },
  { key: "relocation", confirmedKey: "relocation", re: /\b(relocat\w*|move to|willing to move|willing to travel|manila|abroad)\b/i },
  { key: "references", confirmedKey: "references", re: /\b(reference|references|referee|recommendation letter|character reference|vouch)\b/i },
  { key: "why_hire", re: /\b(why should we hire|why hire|why (him|vlad)|what makes (him|vlad) stand out|why pick|convince me)\b/i },
  { key: "about_yourself", re: /\b(tell me about (yourself|vlad|him)|introduce (yourself|vlad|him)|who is vlad|background|summary of vlad|bio)\b/i },
  { key: "strengths", re: /\b(strength|strengths|best quality|what is (he|vlad) good at|superpower|strongest trait)\b/i },
  { key: "ojt_hours", re: /\b(ojt hour|how many (?:ojt )?hour|500[- ]?hour|required hour|internship hour|ojt requirement)\b/i },
  { key: "availability", re: /\b(availab\w*|when can (you|he|vlad) start|start date|december 2026|dec 2026|open for ojt|ojt|intern|internship|schedule)\b/i },
  { key: "remote_onsite", re: /\b(remote|on[- ]?site|onsite|hybrid|work setup|work from home|wfh|location|where is (he|vlad) based|timezone)\b/i },
  { key: "deadlines_pressure", re: /\b(deadline|deadlines|pressure|stress|tight schedule|time management|fast[- ]?paced|multitask\w*)\b/i },
  { key: "teamwork", re: /\b(teamwork|team player|collaborat\w*|work with others|group project|leadership|lead a team)\b/i },
  { key: "biggest_achievement", re: /\b(biggest achievement|proudest|proud of|top achievement|best accomplishment|strongest project|best project)\b/i },
  { key: "languages", re: /\b(language|languages|english|filipino|bisaya|tagalog|speak|fluent|proficiency)\b/i },
  { key: "equipment", re: /\b(equipment|setup|workstation|internet|fiber|laptop|pc|headset|hardware|gear)\b/i },
  { key: "experience", re: /\b(experience|work history|remotasks|annotation|video edit\w*|reels|youtube|tenthtide|past work|job history)\b/i },
  { key: "certifications", re: /\b(cert|certs|certificate|certificates|certification|certifications|credential\w*|ccp|cybersecurity|zuitt|cisco|hp life|udemy|gwa|gpa|degree|education)\b/i },
  { key: "tools", re: /\b(tools|tech stack|stack|skills|technologies|framework|frameworks|software (he|vlad) uses)\b/i },
];

function cleanText(str) {
  return String(str || "").trim();
}

function normalizeQuery(str) {
  return cleanText(str)
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ");
}

function formatDroidLine(beep, translation) {
  return `*${beep}* Translation: ${translation}`;
}

function pickBeep(mood, state) {
  const pool = BEEP_PREFIXES[mood] || BEEP_PREFIXES.neutral;
  const last = state?.lastBeep || null;
  const picked = pickRandomNoRepeat(pool, last);
  if (state) state.lastBeep = picked;
  return picked;
}

export function pickRandomNoRepeat(list, previousValue = null) {
  if (!Array.isArray(list) || list.length === 0) return "";
  if (list.length === 1) return list[0];
  const candidates = list.filter((item) => item !== previousValue);
  const pool = candidates.length > 0 ? candidates : list;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function pickDragReleaseLine(tier, previousText = null) {
  const tierLines = DRAG_RELEASE_LINES.filter((item) => item.tier === tier).map((item) => item.text);
  const pool = tierLines.length > 0 ? tierLines : DRAG_RELEASE_LINES.map((item) => item.text);
  return pickRandomNoRepeat(pool, previousText);
}

export function createAnnoyanceTracker(windowMs = ANNOYANCE_WINDOW_MS) {
  let count = 0;
  let lastDragAt = 0;

  const getLevel = (n) => {
    if (n <= 0) return "calm";
    if (n <= 2) return "mild";
    if (n <= 5) return "grumpy";
    return "angry";
  };

  return {
    recordDrag(now = Date.now()) {
      if (lastDragAt > 0 && now - lastDragAt >= windowMs) {
        count = 0;
      }
      count += 1;
      lastDragAt = now;
      return { count, level: getLevel(count) };
    },
    getState(now = Date.now()) {
      if (lastDragAt > 0 && now - lastDragAt >= windowMs) {
        count = 0;
        lastDragAt = 0;
      }
      return { count, level: getLevel(count) };
    },
    reset() {
      count = 0;
      lastDragAt = 0;
    },
  };
}

export function clampDragOffset(dx, dy, homeRect, viewportW, viewportH, margin = VIEWPORT_MARGIN_PX) {
  const minDx = margin - homeRect.left;
  const maxDx = viewportW - margin - homeRect.right;
  const minDy = margin - homeRect.top;
  const maxDy = viewportH - margin - homeRect.bottom;
  return {
    dx: Math.max(minDx, Math.min(maxDx, dx)),
    dy: Math.max(minDy, Math.min(maxDy, dy)),
  };
}

export function computeChatViewportLayout(innerHeight, visualHeight, visualOffsetTop = 0) {
  const safeInner = Math.max(240, Number(innerHeight) || 0);
  const safeVisual = Math.max(200, Math.min(safeInner, Number(visualHeight) || safeInner));
  const safeOffsetTop = Math.max(0, Number(visualOffsetTop) || 0);
  const rawKeyboardOffset = safeInner - safeVisual - safeOffsetTop;
  const keyboardOffset = rawKeyboardOffset > 40 ? Math.round(rawKeyboardOffset) : 0;
  return {
    visualHeight: Math.round(safeVisual),
    keyboardOffset,
  };
}

export function createConversationState() {
  return {
    history: [],
    pendingOffer: null,
    lastTopic: null,
    topicDepth: 0,
    lastListedProjects: [],
    usedReplyIds: [],
    visitorName: null,
    lastNamedTurn: -10,
    declinedOfferKey: null,
    declinedOfferKeys: [],
    declineCount: 0,
    recentReplies: [],
    replyTurnCount: 0,
    lastContactMentionTurn: -10,
    brainStatus: "ai",
    variantCursors: {},
    lastAssistantTranslation: "",
    lastBeep: null,
    hrCursor: 0,
  };
}

export function trimHistoryForStorage(history, maxLen = MAX_STORED_HISTORY) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((entry) => entry && (entry.role === "user" || entry.role === "assistant") && typeof entry.content === "string")
    .slice(-maxLen)
    .map((entry) => ({ role: entry.role, content: entry.content }));
}

export function buildApiHistory(history, maxLen = MAX_API_HISTORY) {
  if (!Array.isArray(history)) return [];
  return history
    .slice(-maxLen)
    .map((entry) => ({
      role: entry.role === "assistant" ? "assistant" : "user",
      content: String(entry.content ?? entry.text ?? "").slice(0, 500),
    }))
    .filter((entry) => entry.content.length > 0);
}

export function createGame2048ReactionPicker(cooldownMs = GAME_BUBBLE_COOLDOWN_MS) {
  let lastShownAt = -Infinity;
  const lastLineByType = {};

  return {
    pick(eventType, value = 0, now = Date.now()) {
      const pool = GAME_2048_REACTIONS[eventType];
      if (!pool || pool.length === 0) return null;
      const isTerminal = eventType === "win" || eventType === "gameover";
      if (!isTerminal && now - lastShownAt < cooldownMs) return null;
      const chosen = pickRandomNoRepeat(pool, lastLineByType[eventType] || null);
      lastLineByType[eventType] = chosen;
      lastShownAt = now;
      return chosen.replace(/\{value\}/g, String(value ?? ""));
    },
    reset() {
      lastShownAt = -Infinity;
      for (const k of Object.keys(lastLineByType)) delete lastLineByType[k];
    },
  };
}

const NON_NAME_WORDS = new Set([
  "looking", "interested", "available", "here", "curious", "hiring", "recruiting",
  "wondering", "asking", "checking", "trying", "ready", "good", "fine", "great",
  "okay", "ok", "sorry", "happy", "excited", "confused", "lost", "done", "back",
  "vlad", "r2", "r2d2", "recruiter", "hr", "developer", "engineer", "student",
]);

export function extractVisitorName(message) {
  const raw = cleanText(message);
  if (!raw || raw.length > 90) return null;
  const match = raw.match(
    /(?:^|\b)(?:my name is|call me|i am|i'm|im)\s+([A-Z][a-z]{1,18}|[a-z]{2,18})(?=\s|[.,!?]|$)/i
  );
  if (!match) return null;
  const candidate = match[1].trim();
  if (NON_NAME_WORDS.has(candidate.toLowerCase())) return null;
  // Avoid false positives like "I'm open to..." or "I'm a..."
  if (/^(a|an|the|not|just|also|really|very|so|from|in|at|on|for|with|open|new)$/i.test(candidate)) {
    return null;
  }
  return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
}

function maybeNamePrefix(state) {
  if (!state || !state.visitorName) return "";
  const turn = state.history ? state.history.length : 0;
  if (turn - (state.lastNamedTurn ?? -10) >= 6) {
    state.lastNamedTurn = turn;
    return `${state.visitorName}, `;
  }
  return "";
}

function getOfferKey(offer) {
  if (!offer || !offer.type) return "";
  return `${offer.type}:${offer.payload || ""}`;
}

function getDeclinedSet(state) {
  const set = new Set();
  if (state && Array.isArray(state.declinedOfferKeys)) {
    for (const k of state.declinedOfferKeys) {
      if (typeof k === "string" && k) set.add(k);
    }
  }
  if (state && typeof state.declinedOfferKey === "string" && state.declinedOfferKey) {
    set.add(state.declinedOfferKey);
  }
  return set;
}

function recordDeclinedOffer(state, offer) {
  const key = getOfferKey(offer);
  if (!state || !key) return key;
  state.declinedOfferKey = key;
  if (!Array.isArray(state.declinedOfferKeys)) state.declinedOfferKeys = [];
  if (!state.declinedOfferKeys.includes(key)) {
    state.declinedOfferKeys.push(key);
  }
  return key;
}

function isOfferDeclined(state, offer) {
  const key = getOfferKey(offer);
  if (!key) return false;
  return getDeclinedSet(state).has(key);
}

const OFFER_CATALOG = [
  {
    type: "show_projects",
    label: "Explore Vlad's 11 projects",
    phrase: "explore Vlad's 11 projects",
    payload: "",
    chip: "Show projects",
  },
  {
    type: "open_certs",
    label: "Check his CCP & certificates",
    phrase: "check his CCP & certificates",
    payload: "",
    chip: "View credentials",
  },
  {
    type: "open_game",
    label: "Play a round of 2048",
    phrase: "play a round of 2048",
    payload: "",
    chip: "Play 2048",
  },
  {
    type: "tell_joke",
    label: "Hear a quick dev joke",
    phrase: "hear a quick dev joke",
    payload: "",
    chip: "Tell me a joke",
  },
  {
    type: "open_about",
    label: "Read Vlad's About page",
    phrase: "read Vlad's About page",
    payload: "",
    chip: "About Vlad",
  },
  {
    type: "open_contact",
    label: "Message Vlad about his Dec 2026 OJT",
    phrase: "message Vlad about his Dec 2026 OJT",
    payload: "Dec 2026 OJT / Internship",
    chip: "Contact Vlad",
  },
];

function getUndeclinedOffers(state, extraExcludeKey = "") {
  const declined = getDeclinedSet(state);
  if (extraExcludeKey) declined.add(extraExcludeKey);
  return OFFER_CATALOG.filter((item) => !declined.has(getOfferKey(item)));
}

function pickSoftOffer(state, preferredOffer = null) {
  if (preferredOffer && !isOfferDeclined(state, preferredOffer)) {
    return preferredOffer;
  }
  const available = getUndeclinedOffers(state);
  if (available.length === 0) return null;
  const pick = available[0];
  return { type: pick.type, label: pick.label, payload: pick.payload };
}

function extractTranslationForDedupe(replyText) {
  const raw = String(replyText || "").trim();
  if (!raw) return "";
  const match = raw.match(/^\*[^*\n]+\*\s*Translation:\s*([\s\S]+)$/i);
  const body = match ? match[1] : raw;
  return body.toLowerCase().replace(/\s+/g, " ").trim();
}

function isRecentlySent(state, replyOrTranslation) {
  if (!state || !Array.isArray(state.recentReplies)) return false;
  const norm = extractTranslationForDedupe(replyOrTranslation);
  if (!norm) return false;
  return state.recentReplies.includes(norm);
}

function recordSentReply(state, replyText) {
  if (!state || !replyText) return;
  const norm = extractTranslationForDedupe(replyText);
  if (!norm) return;
  if (!Array.isArray(state.recentReplies)) state.recentReplies = [];
  if (state.recentReplies[state.recentReplies.length - 1] !== norm) {
    state.recentReplies.push(norm);
    if (state.recentReplies.length > MAX_RECENT_REPLIES) {
      state.recentReplies = state.recentReplies.slice(-MAX_RECENT_REPLIES);
    }
    state.replyTurnCount = (state.replyTurnCount || 0) + 1;
    if (/\b(contact form|message vlad|reach vlad)\b/i.test(norm)) {
      state.lastContactMentionTurn = state.replyTurnCount;
    }
  }
}

function canMentionContact(state) {
  if (!state) return false;
  const turns = state.replyTurnCount || 0;
  const last = Number.isFinite(state.lastContactMentionTurn) ? state.lastContactMentionTurn : -10;
  return turns - last >= CONTACT_MENTION_COOLDOWN;
}

function pickFreshVariant(categoryKey, variants, state) {
  if (!Array.isArray(variants) || variants.length === 0) return null;
  if (!state) return variants[0];
  if (!state.variantCursors || typeof state.variantCursors !== "object") {
    state.variantCursors = {};
  }
  const startIdx = Number.isFinite(state.variantCursors[categoryKey])
    ? state.variantCursors[categoryKey] % variants.length
    : 0;

  for (let offset = 0; offset < variants.length; offset += 1) {
    const idx = (startIdx + offset) % variants.length;
    const candidate = variants[idx];
    if (!isRecentlySent(state, candidate)) {
      state.variantCursors[categoryKey] = (idx + 1) % variants.length;
      return candidate;
    }
  }
  return null;
}

function buildFreshAngleReply(state, context = {}) {
  const available = getUndeclinedOffers(state);
  const altIdx = (state?.replyTurnCount || 0) % Math.max(1, available.length);
  const alt = available[altIdx] || null;
  const offer = alt ? { type: alt.type, label: alt.label, payload: alt.payload } : null;

  const angleTemplates = alt
    ? [
        `Short version: I can help you ${alt.phrase}, or answer any question about Vlad's builds. Want to ${alt.phrase}?`,
        `Switching gears—want to ${alt.phrase}?`,
        `Quick pivot: we haven't tried this yet—want to ${alt.phrase}?`,
        `Let's try a different angle: I can help you ${alt.phrase}, or break down Vlad's CV. Sound good?`,
        `Fresh route: tap a chip below, or say "okay" if you'd like to ${alt.phrase}.`,
        `Keeping it brief—want to ${alt.phrase}, or ask me something specific about Vlad?`,
      ]
    : [
        "Keeping it short—just type any question about Vlad's work, or tap a chip whenever you like.",
        "I'm standing by! Ask me about any of Vlad's 11 builds, his CCP, or his Dec 2026 OJT anytime.",
        "Your call—type whatever you're curious about, and I'll pull the exact facts from Vlad's portfolio.",
        "All ears! Ask about FSLAMES, Jonathan Photography, Vlad's tech stack, or 2048 whenever you're ready.",
      ];

  let chosen = pickFreshVariant("fresh_angle", angleTemplates, state);
  if (!chosen) {
    const turnTag = (state?.replyTurnCount || 0) + 1;
    chosen = alt
      ? `Quick check-in #${turnTag}: want to ${alt.phrase}, or ask about a specific project?`
      : `Standing by (check-in #${turnTag})—ask me anything about Vlad's portfolio whenever you're ready.`;
  }

  const chips = available.length > 0
    ? available.slice(0, 3).map((item) => item.chip)
    : ["Show projects", "How unique is Vlad?", "Play 2048"];

  return {
    reply: formatDroidLine(pickBeep("neutral", state), chosen),
    pendingOffer: offer,
    chips,
    topic: context?.lastTopic || "prompt",
    topicDepth: 0,
  };
}

function finalizeTurnResult(turnResult, state, context = {}, { allowRepeat = false } = {}) {
  if (!turnResult) return null;
  let result = turnResult;
  if (state && !allowRepeat && isRecentlySent(state, result.reply)) {
    const fresh = buildFreshAngleReply(state, context);
    result = {
      ...result,
      reply: fresh.reply,
      pendingOffer: result.pendingOffer === null ? null : fresh.pendingOffer,
      chips: Array.isArray(result.chips) && result.chips.length === 0 ? [] : fresh.chips,
    };
  }
  if (state) {
    recordSentReply(state, result.reply);
  }
  return result;
}

function findProjectByQuery(query) {
  const q = normalizeQuery(query);
  let best = null;
  let bestScore = 0;
  for (const proj of PROJECTS_KB) {
    let score = 0;
    if (q.includes(proj.id) || q.includes(proj.name.toLowerCase())) score += 8;
    for (const alias of proj.aliases) {
      const re = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (re.test(q)) {
        score += alias.length >= 6 ? 6 : 4;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = proj;
    }
  }
  return bestScore > 0 ? best : null;
}

function findTechByQuery(query) {
  const q = normalizeQuery(query);
  let best = null;
  let bestScore = 0;
  for (const tech of TECH_KB) {
    let score = 0;
    for (const alias of tech.aliases) {
      const re = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (re.test(q)) {
        score += alias.length >= 5 ? 5 : 3;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = tech;
    }
  }
  return bestScore > 0 ? best : null;
}

function pickUnusedJoke(state, history = []) {
  const used = new Set(Array.isArray(state?.usedReplyIds) ? state.usedReplyIds : []);
  // Also inspect passed history for backward compatibility when called statelessly
  const historyTexts = new Set(
    (Array.isArray(history) ? history : [])
      .map((item) => String(item.content || item.text || ""))
  );
  let fresh = DEV_JOKES.filter(
    (j) => !used.has(j.id) && ![...historyTexts].some((t) => t.includes(j.text))
  );
  if (fresh.length === 0) {
    if (state && Array.isArray(state.usedReplyIds)) {
      state.usedReplyIds = state.usedReplyIds.filter((id) => !id.startsWith("joke_"));
    }
    fresh = DEV_JOKES;
  }
  const chosen = fresh[0];
  if (state && Array.isArray(state.usedReplyIds)) {
    state.usedReplyIds.push(chosen.id);
  }
  return chosen;
}

function buildHrAnswer(hrKey, state, confirmedConfig = VLAD_CONFIRMED) {
  const patternMeta = HR_PATTERNS.find((p) => p.key === hrKey);
  if (patternMeta && patternMeta.confirmedKey) {
    const confirmedValue = confirmedConfig?.[patternMeta.confirmedKey];
    if (confirmedValue === null || confirmedValue === undefined || String(confirmedValue).trim() === "") {
      return {
        reply: formatDroidLine(
          pickBeep("polite", state),
          "Vlad prefers to answer that one himself so he can share his exact thoughts directly with your team. I never guess on personal or interview-specific questions. Want me to open the contact form so you can ask him straight?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open contact form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Contact Vlad", "Next HR question", "See his projects"],
        topic: `hr:${hrKey}`,
        topicDepth: 0,
      };
    }
    return {
      reply: formatDroidLine(
        pickBeep("neutral", state),
        `${String(confirmedValue).trim()} Want to ask another HR question, or open the contact form to follow up with Vlad?`
      ),
      pendingOffer: {
        type: "open_contact",
        label: "Open contact form",
        payload: "Dec 2026 OJT / Internship",
      },
      chips: ["Next HR question", "See the proof", "Contact Vlad"],
      topic: `hr:${hrKey}`,
      topicDepth: 0,
    };
  }

  switch (hrKey) {
    case "about_yourself":
      return {
        reply: formatDroidLine(
          pickBeep("excited", state),
          "Vlad (Mikael Vladimir Neri) is a BS Computer Science student at PHINMA UPang with a 1.77 average GWA and a Certified Cybersecurity Professional credential. He has shipped 11 web, Android, and ML builds—including FSLAMES and a contracted studio booking system—while also annotating 2D/3D AI datasets at 90% accuracy. He is based in Rosario, La Union and is open for a ~500-hour OJT starting December 2026. Want to see his flagship projects?"
        ),
        pendingOffer: { type: "show_projects", label: "Show Vlad's projects", payload: "" },
        chips: ["See the proof", "Next HR question", "Contact Vlad"],
        topic: "hr:about_yourself",
        topicDepth: 0,
      };
    case "why_hire":
      return {
        reply: formatDroidLine(
          pickBeep("excited", state),
          "Vlad ships real systems end to end and validates them with real people—7 users on Jonathan Photography, 100 testers on Filipino Food Recommender, and 50 testers on U-Eat (4.5/5 rating). He brings hands-on discipline across full-stack web, Android, offline ML pipelines, and 90% 2D/3D data QA at Remotasks. He also holds Appkademiya's Certified Cybersecurity Professional credential and is ready for remote work with fiber internet and C1/C2 English. Want the proof? I can open his flagship project FSLAMES."
        ),
        pendingOffer: { type: "open_project", label: "Open FSLAMES", payload: "fslames" },
        chips: ["See the proof", "Next HR question", "Contact Vlad"],
        topic: "hr:why_hire",
        topicDepth: 0,
      };
    case "strengths":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad's biggest strengths are end-to-end execution, real-user validation, and careful data handling. Across 11 shipped builds he worked as full-stack developer, backend ML engineer, and project manager—scoring 95/100 on PennyWise and 90/100 on U-Eat. On the data side, he enforces strict participant-level splits in FSLAMES and maintains 90% 2D/3D annotation accuracy at Remotasks. Want me to open his tested projects?"
        ),
        pendingOffer: { type: "show_projects", label: "Show projects", payload: "" },
        chips: ["See the proof", "Next HR question", "Contact Vlad"],
        topic: "hr:strengths",
        topicDepth: 0,
      };
    case "availability":
      return {
        reply: formatDroidLine(
          pickBeep("excited", state),
          "Vlad is available starting December 2026 for his ~500-hour BS Computer Science OJT (expected graduation 2027). He is also open now for part-time, freelance, or junior web, AI/data, Android, and video role conversations, and replies within 24 hours. Want me to open the contact form with OJT preselected?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open OJT contact form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Contact Vlad", "Next HR question", "Check his equipment"],
        topic: "hr:availability",
        topicDepth: 0,
      };
    case "ojt_hours":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad's Computer Science OJT requirement is ~500 hours, starting December 2026 ahead of his expected 2027 graduation from PHINMA UPang College of Urdaneta. He can take Remote, Hybrid, or On-site setups and responds to inquiries within 24 hours. Would you like me to open the OJT inquiry form?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open OJT inquiry form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Contact Vlad", "Next HR question", "See his resume"],
        topic: "hr:ojt_hours",
        topicDepth: 0,
      };
    case "remote_onsite":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad is open to Remote, Hybrid, or On-site arrangements. He is based in Rosario, La Union, Philippines (UTC+8) and has worked remotely on short-form video production since July 2023 and Remotasks AI annotation since July 2025. Want me to take you to the contact form to discuss your team's setup?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open contact form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Check his equipment", "Next HR question", "Contact Vlad"],
        topic: "hr:remote_onsite",
        topicDepth: 0,
      };
    case "deadlines_pressure":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad balances multiple real deadlines at once: maintaining a 1.77 GWA (1.57 best semester) while shipping 11 projects, labeling 2D/3D datasets at 90% accuracy on Remotasks since July 2025, and editing regular short-form content for a 1.3M+ follower Facebook page since July 2023. He keeps scope clear early and tests with real users before release. Want to inspect his client-contracted Jonathan Photography system?"
        ),
        pendingOffer: { type: "open_project", label: "Open Jonathan Photography", payload: "jonathan-photography" },
        chips: ["See the proof", "Next HR question", "Contact Vlad"],
        topic: "hr:deadlines_pressure",
        topicDepth: 0,
      };
    case "teamwork":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad has led and collaborated across team builds in both engineering and project-management roles. He served as Project Manager and Full-Stack Developer on Jonathan Photography, PennyWise (95/100), Life Flow, and Manga Haven PH, and built Filipino Food Recommender in a team of 3 tested by 100 users. He also handles documentation clearly, including serving as Head of Documentation on U-Eat. Want to open PennyWise or another team project?"
        ),
        pendingOffer: { type: "open_project", label: "Open PennyWise", payload: "pennywise" },
        chips: ["See the proof", "Next HR question", "Contact Vlad"],
        topic: "hr:teamwork",
        topicDepth: 0,
      };
    case "biggest_achievement":
      return {
        reply: formatDroidLine(
          pickBeep("excited", state),
          "Vlad's flagship technical achievement is FSLAMES, an offline Filipino Sign Language mobile learning system trained on ~5,000 samples across 131 sign classes and exported to 2 quantized TFLite models. Alongside that, he built the contracted Jonathan Photography booking system (validated with 7 real users) and earned Appkademiya's Certified Cybersecurity Professional credential in October 2026. Want me to open the FSLAMES case study?"
        ),
        pendingOffer: { type: "open_project", label: "Open FSLAMES", payload: "fslames" },
        chips: ["See the proof", "Check certificates", "Next HR question"],
        topic: "hr:biggest_achievement",
        topicDepth: 0,
      };
    case "languages":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "For spoken languages, Vlad communicates in English (C1/C2), Filipino, and Bisaya. For programming languages, he ships projects in Python, JavaScript, PHP, Kotlin, SQL/MySQL, HTML5, and CSS3. Want to explore his tech stack in detail?"
        ),
        pendingOffer: { type: "open_tech", label: "Inspect Python in Tech Stack", payload: "python" },
        chips: ["See tech stack", "Next HR question", "Contact Vlad"],
        topic: "hr:languages",
        topicDepth: 0,
      };
    case "equipment":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad is set up for remote engineering with a dedicated PC workstation, headset, and fiber internet connection in Rosario, La Union. He runs an Ubuntu/Linux workflow alongside Android Studio, web dev tooling, ML pipelines, and video editors. Want to check his availability or open the contact form?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open contact form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Availability & OJT", "Next HR question", "Contact Vlad"],
        topic: "hr:equipment",
        topicDepth: 0,
      };
    case "experience":
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad has real-world remote experience on both the AI data and media sides. Since July 2025 he has labeled and QA'd 2D/3D perception datasets at Remotasks with 90% accuracy. Since July 2023 he has edited short-form video and managed social media for a 1.3M+ follower Facebook page plus his YouTube channel TenthTide Vibes (1.5K+ subscribers). Want to see his projects or credentials next?"
        ),
        pendingOffer: { type: "show_projects", label: "Show projects", payload: "" },
        chips: ["See the proof", "Check certificates", "Contact Vlad"],
        topic: "hr:experience",
        topicDepth: 0,
      };
    case "certifications":
      return {
        reply: formatDroidLine(
          pickBeep("excited", state),
          "Vlad holds Appkademiya's Certified Cybersecurity Professional (CCP, Oct 2026) and Zuitt's 80-hour Python, Django & AWS certificate (Cert No. BEC10-016). He also earned Cisco Data Analytics & Data Science, HP LIFE Cybersecurity, and Udemy Excel credentials alongside his 1.77 average GWA at PHINMA UPang. Want me to jump straight to his Credentials section?"
        ),
        pendingOffer: { type: "open_certs", label: "View Credentials", payload: "" },
        chips: ["View credentials", "Next HR question", "See his resume"],
        topic: "hr:certifications",
        topicDepth: 0,
      };
    case "tools":
    default:
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Vlad's stack spans AI/Data (Python, Pandas, TensorFlow/Keras, TFLite, MediaPipe, SQLite, Streamlit), Full-Stack Web (React, Vite, PHP, MySQL, JavaScript, Django, AWS EC2/S3/Lambda), and Android (Kotlin, Jetpack Compose, Firebase, Android Studio). He also works daily with Git/GitHub, Linux, Figma, DaVinci Resolve, and CapCut. Want me to open the interactive Tech Stack section?"
        ),
        pendingOffer: { type: "open_tech", label: "Open Tech Stack", payload: "python" },
        chips: ["See tech stack", "See his projects", "Contact Vlad"],
        topic: "hr:tools",
        topicDepth: 0,
      };
  }
}

function buildProjectLayerReply(project, layer, state) {
  const safeLayer = Math.max(0, Math.min(3, layer));
  let body = "";
  let offer = { type: "open_project", label: `Open ${project.name}`, payload: project.id };
  let chips = ["Tell me more", `Open ${project.name}`, "Show all projects"];

  if (safeLayer === 0) {
    body = `${project.summary} Vlad worked on it in ${project.year} as ${project.role}. Want to hear the tech stack behind ${project.name}, or should I open its case study?`;
    chips = ["Tech stack?", `Open ${project.name}`, "Show all projects"];
  } else if (safeLayer === 1) {
    body = `${project.stack} Want to hear the results and numbers for ${project.name}?`;
    chips = ["Results & numbers?", `Open ${project.name}`, "Contact Vlad"];
  } else if (safeLayer === 2) {
    body = `${project.result} Want me to share the link or open the ${project.name} case study?`;
    chips = [project.link ? "Link & details" : `Open ${project.name}`, "Which project is best?", "Contact Vlad"];
  } else {
    body = `${project.linkNote} That's the full dossier on ${project.name}—want me to open its case study modal now?`;
    chips = [`Open ${project.name}`, "Show all projects", "Contact Vlad"];
  }

  return {
    reply: formatDroidLine(pickBeep(safeLayer === 0 ? "excited" : "neutral", state), body),
    pendingOffer: offer,
    chips,
    topic: `project:${project.id}`,
    topicDepth: safeLayer,
    lastListedProjects: [project.id],
  };
}

function getNextProjectDetail(state) {
  if (!state.lastTopic) return null;

  if (state.lastTopic.startsWith("project:")) {
    const id = state.lastTopic.slice("project:".length);
    const project = PROJECTS_KB.find((p) => p.id === id);
    if (!project) return null;
    if (state.topicDepth < 3) {
      return buildProjectLayerReply(project, state.topicDepth + 1, state);
    }
    // Already gave all 4 layers; move smoothly to another top project
    const nextProj = PROJECTS_KB.find((p) => p.id !== project.id) || PROJECTS_KB[0];
    return {
      reply: formatDroidLine(
        pickBeep("neutral", state),
        `That's every verified detail I have on ${project.name}. Next up in Vlad's top builds is ${nextProj.name}—${nextProj.summary} Want to open ${nextProj.name}?`
      ),
      pendingOffer: { type: "open_project", label: `Open ${nextProj.name}`, payload: nextProj.id },
      chips: ["Tell me more", `Open ${nextProj.name}`, "Show all projects"],
      topic: `project:${nextProj.id}`,
      topicDepth: 0,
      lastListedProjects: [nextProj.id],
    };
  }

  if (state.lastTopic === "projects_list") {
    const list = state.lastListedProjects?.length ? state.lastListedProjects : ["fslames", "jonathan-photography", "panlasang-pinoy"];
    const nextIdx = Math.min(list.length - 1, (state.topicDepth || 0));
    const proj = PROJECTS_KB.find((p) => p.id === list[nextIdx]) || PROJECTS_KB[0];
    return buildProjectLayerReply(proj, 0, state);
  }

  if (state.lastTopic.startsWith("hr:")) {
    const currentKey = state.lastTopic.slice(3);
    const currentIdx = HR_ROTATION_ORDER.indexOf(currentKey);
    const nextIdx = currentIdx >= 0 ? (currentIdx + 1) % HR_ROTATION_ORDER.length : state.hrCursor % HR_ROTATION_ORDER.length;
    state.hrCursor = (nextIdx + 1) % HR_ROTATION_ORDER.length;
    return buildHrAnswer(HR_ROTATION_ORDER[nextIdx], state);
  }

  if (state.lastTopic === "game_2048") {
    if ((state.topicDepth || 0) === 0) {
      return {
        reply: formatDroidLine(
          pickBeep("neutral", state),
          "Quick 2048 strategy tips: keep your highest tile locked in one corner, build a descending chain along one edge, and avoid random swipes that break your anchor. Want to open 2048 and test that out?"
        ),
        pendingOffer: { type: "open_game", label: "Play 2048", payload: "" },
        chips: ["Play 2048", "Show projects", "Tell me a joke"],
        topic: "game_2048",
        topicDepth: 1,
      };
    }
    return {
      reply: formatDroidLine(
        pickBeep("excited", state),
        "Whenever you hit tiles like 128, 256, 512, 1024, or 2048, I'll cheer from the corner with short speech bubbles. Ready for me to open the 2048 board?"
      ),
      pendingOffer: { type: "open_game", label: "Play 2048", payload: "" },
      chips: ["Play 2048", "See Vlad's projects", "Contact Vlad"],
      topic: "game_2048",
      topicDepth: 2,
    };
  }

  if (state.lastTopic === "tech_stack") {
    return {
      reply: formatDroidLine(
        pickBeep("neutral", state),
        "On the AI/ML side Vlad pairs Python, Pandas, MediaPipe, and TensorFlow/TFLite; on Web he ships React, Vite, PHP, MySQL, Django, and AWS; on Mobile he builds with Kotlin, Jetpack Compose, and Firebase. Want me to open the interactive Tech Stack panel so you can inspect each tool?"
      ),
      pendingOffer: { type: "open_tech", label: "Open Tech Stack", payload: "python" },
      chips: ["Open Tech Stack", "Show projects", "Check certificates"],
      topic: "tech_stack",
      topicDepth: (state.topicDepth || 0) + 1,
    };
  }

  if (state.lastTopic === "certs") {
    return {
      reply: formatDroidLine(
        pickBeep("neutral", state),
        "Alongside Appkademiya's CCP (Oct 2026) and Zuitt's 80-hour Python, Django & AWS certificate (BEC10-016), Vlad holds Cisco Data Analytics & Data Science, HP LIFE Cybersecurity, and Udemy Excel certificates, plus a 1.77 average GWA at PHINMA UPang. Want to jump to Credentials to inspect the certificates?"
      ),
      pendingOffer: { type: "open_certs", label: "View Credentials", payload: "" },
      chips: ["View credentials", "See his resume", "Contact Vlad"],
      topic: "certs",
      topicDepth: (state.topicDepth || 0) + 1,
    };
  }

  return null;
}

function buildActionExecutionResult(offer, state) {
  if (!offer || !offer.type) return null;

  switch (offer.type) {
    case "show_projects":
      return {
        executeAction: offer,
        collapseAfter: true,
        reply: formatDroidLine(
          pickBeep("action", state),
          "Rolling straight to Vlad's 11 shipped projects! I'll tuck into a small pill so you can browse freely—want me to open FSLAMES once you're back?"
        ),
        pendingOffer: { type: "open_project", label: "Open FSLAMES", payload: "fslames" },
        chips: ["Open FSLAMES", "Jonathan Photography", "Contact Vlad"],
        topic: "projects_list",
        topicDepth: 0,
        lastListedProjects: ["fslames", "jonathan-photography", "panlasang-pinoy"],
      };
    case "open_project": {
      const proj = PROJECTS_KB.find((p) => p.id === offer.payload) || PROJECTS_KB[0];
      return {
        executeAction: { type: "open_project", label: `Open ${proj.name}`, payload: proj.id },
        collapseAfter: false,
        reply: formatDroidLine(
          pickBeep("action", state),
          `Opening ${proj.name} right now! Take a look at the case study—want to check another project or head to the contact form next?`
        ),
        pendingOffer: { type: "show_projects", label: "Browse all projects", payload: "" },
        chips: ["Tell me more", "Show all projects", "Contact Vlad"],
        topic: `project:${proj.id}`,
        topicDepth: 1,
        lastListedProjects: [proj.id],
      };
    }
    case "open_tech": {
      const tech = TECH_KB.find((t) => t.id === offer.payload) || TECH_KB[0];
      return {
        executeAction: { type: "open_tech", label: `Inspect ${tech.name}`, payload: tech.id },
        collapseAfter: true,
        reply: formatDroidLine(
          pickBeep("action", state),
          `Jumping to Vlad's Tech Stack and highlighting ${tech.name}! Tap my pill anytime—want to check his certificates next?`
        ),
        pendingOffer: { type: "open_certs", label: "View Credentials", payload: "" },
        chips: ["View credentials", "Show projects", "Contact Vlad"],
        topic: "tech_stack",
        topicDepth: 1,
      };
    }
    case "open_certs":
      return {
        executeAction: offer,
        collapseAfter: true,
        reply: formatDroidLine(
          pickBeep("action", state),
          "Scrolling to Credentials & CCP so you can inspect every certificate up close! Tap my pill anytime—want his Resume PDF next?"
        ),
        pendingOffer: { type: "open_resume", label: "Open Resume PDF", payload: "" },
        chips: ["Download Resume PDF", "Show projects", "Contact Vlad"],
        topic: "certs",
        topicDepth: 1,
      };
    case "open_contact": {
      const inquiryType = offer.payload || "Dec 2026 OJT / Internship";
      return {
        executeAction: { type: "open_contact", label: "Open contact form", payload: inquiryType },
        collapseAfter: true,
        reply: formatDroidLine(
          pickBeep("action", state),
          `Taking you to the contact form with "${inquiryType}" preselected! Vlad replies within 24 hours—want a quick joke while you write?`
        ),
        pendingOffer: { type: "tell_joke", label: "Tell a joke", payload: "" },
        chips: ["Tell me a joke", "See his resume", "Play 2048"],
        topic: "contact",
        topicDepth: 1,
      };
    }
    case "open_resume":
      return {
        executeAction: offer,
        collapseAfter: false,
        reply: formatDroidLine(
          pickBeep("action", state),
          "Opening Vlad's Resume PDF for you now! Want to jump to the contact form after reviewing it?"
        ),
        pendingOffer: {
          type: "open_contact",
          label: "Open contact form",
          payload: "Dec 2026 OJT / Internship",
        },
        chips: ["Contact Vlad", "Show projects", "Check certificates"],
        topic: "resume",
        topicDepth: 1,
      };
    case "open_about":
      return {
        executeAction: offer,
        collapseAfter: false,
        reply: formatDroidLine(
          pickBeep("action", state),
          "Heading over to Vlad's About page with his full story, quick facts, and recruiter FAQ! Tap me again anytime."
        ),
        pendingOffer: { type: "show_projects", label: "Show projects", payload: "" },
        chips: ["Show projects", "Contact Vlad", "Tell me a joke"],
        topic: "about",
        topicDepth: 1,
      };
    case "open_game":
      return {
        executeAction: offer,
        collapseAfter: false,
        reply: formatDroidLine(
          pickBeep("action", state),
          "Launching 2048! I'll step aside so I don't cover the board—ask me for strategy tips anytime if you get stuck."
        ),
        pendingOffer: { type: "tell_joke", label: "Hear a dev joke", payload: "" },
        chips: ["2048 tips", "Show projects", "Contact Vlad"],
        topic: "game_2048",
        topicDepth: 1,
      };
    case "tell_joke": {
      const joke = pickUnusedJoke(state);
      return {
        executeAction: null,
        collapseAfter: false,
        reply: formatDroidLine(
          joke.beep,
          `${joke.text} Want another dev joke, or should we check out Vlad's projects?`
        ),
        pendingOffer: { type: "tell_joke", label: "Another joke", payload: "" },
        chips: ["Another joke", "Show projects", "Play 2048"],
        topic: "joke",
        topicDepth: 0,
      };
    }
    default:
      return null;
  }
}

const AGREE_RE = /^(?:okay|ok|k|yes|yep|yeah|yup|sure|agreed|agree|sounds good|go|go ahead|do it|let's go|lets go|please|pls|show me|alright|all right|bet|absolutely|definitely|of course|oo|sige|game|ayos|o sige|dali|geh|go lang|sige na|yes please|ok sure|sure thing)[!.,?]*$/i;
const DECLINE_RE = /^(?:no|nope|nah|not now|later|maybe later|pass|skip|no thanks|no thank you|i'm good|im good|never mind|nevermind|hindi|dili|ayoko|wag|wag na|huwag|hindi muna|pass muna)[!.,?]*$/i;
const THANKS_RE = /\b(thanks|thank you|thx|ty|tysm|salamat|maraming salamat|appreciate it)\b/i;
const GOODBYE_RE = /^(?:bye|goodbye|good bye|see ya|see you|cya|take care|paalam|babye|signing off|gotta go)[!.,?\s]*$/i;
const GREETING_RE = /^(?:hi|hello|hey|yo|sup|hola|kumusta|kamusta|good\s+(?:morning|afternoon|evening)|greetings|howdy)(?:\s+(?:r2|r2-d2|droid|there))?[!.,?\s]*$/i;
const HELP_RE = /\b(what can you do|what do you do|how can you help|help me|your commands|capabilities|options)\b/i;
const CONFUSED_RE = /\b(i don't understand|i dont understand|confused|what do you mean|huh\??|make sense|clarify)\b/i;
const REPEAT_RE = /\b(repeat that|say that again|pardon|come again|what did you say)\b/i;

const SMALL_TALK_RE = /^(?:(?:you'?re|you are|ur|u r)\s+(?:so\s+|really\s+|very\s+|pretty\s+|super\s+)?(?:smart|clever|genius|cool|awesome|nice|great|funny|cute|helpful|good|amazing)|(?:so\s+|very\s+|pretty\s+)?(?:smart|clever|nice|cool|wow|whoa|woah|awesome|amazing|impressive|neat|sick|dope|fire|solid|sweet|great|funny|cute)|(?:good|great|nice|smart|best)\s+(?:bot|droid|job|work|one|r2|r2-d2)|well\s+done|love\s+(?:it|this|that|you)|ok(?:ay)?\s+cool|cool\s+ok(?:ay)?|lol+|lmao+|lmfao+|ha(?:ha)+|he(?:he)+|rofl|astig|ang\s+galing|galing|nice\s+one)[!.,?\s]*$/i;

const JUST_ASKING_RE = /^(?:i'?m\s+|im\s+)?(?:just\s+(?:asking|curious|looking|browsing|checking|wondering|exploring|seeing)|curious|nothing\s+(?:much|specific)|just\s+passing\s+by)[!.,?\s]*$/i;

const VLAD_PROOF_RE = /\b(how unique is (?:vlad|he)|what makes (?:him|vlad) (?:different|unique|special|stand out)|is (?:he|vlad) good|how good is (?:he|vlad)|why him\b|what'?s special about (?:him|vlad)|is (?:he|vlad) reliable|can (?:he|vlad) code|is (?:he|vlad) experienced|what'?s (?:his|vlad'?s) level|how skilled is (?:he|vlad))\b/i;

const WHY_THAT_ONE_RE = /\b(?:why\s+(?:that|this)(?:\s+one)?|why\s+fslames|why\s+(?:recommend|pick|start with)\s+(?:that|this|it|fslames))\b/i;

const TRULY_OUT_OF_SCOPE_RE = /\b(weather|forecast|temperature|rain|typhoon|news|headlines|politic\w*|president|election|senate|congress|homework|assignment|essay|math problem|solve for|equation|calculus|algebra|medical|doctor|symptom\w*|medicine|prescription|diagnos\w*|legal|lawyer|attorney|lawsuit|court case|stock price|stocks|crypto|bitcoin|ethereum|forex|nba|basketball|football|soccer|horoscope|zodiac|mars|moon|planets?|capital of|who won|translate this|write me a poem|song lyrics|movie review|cook pasta|pizza recipe)\b/i;

const FILIPINO_BISAYA_UNSURE_RE = /\b(benta|ano|anu|bakit|paano|pano|saan|san|sino|kailan|kelan|wala|meron|mayroon|ambot|unsa|ngano|asa|kinsa|kanus-a|gani|bitaw|grabe|lodi|petmalu|charot|char|weh|totoo|talaga|naman|kasi|kaya|lang|po|opo|pare|tol|pre|bes|uy|hoy|hala|naku|sus|ewan|di ko alam|hindi ko alam|kumain|tulog|gutom|pangit|maganda|gwapo|pogi|sana all|sanaol|luh|awit|umay|sayang|tara|sakto|ayos lang|kamusta na|musta)\b/i;

const FOLLOWUP_MORE_RE = /^(?:tell me more|more|more details|elaborate|explain more|why\??|how\??|go on|continue|keep going|next|and\??|and then\??|tech stack\??|results?\s*(?:&|and)?\s*numbers?\??|link\s*(?:&|and)?\s*details?\??|see the proof|another one|next hr question)[!.,?]*$/i;
const ORDINAL_RE = /\b(first|1st|second|2nd|third|3rd|and that one|that one|which one is best|which is best|strongest one|best one)\b/i;

function buildSmallTalkReply(state) {
  const offer = pickSoftOffer(state, {
    type: "show_projects",
    label: "Explore Vlad's 11 projects",
    payload: "",
  });
  const offerPhrase = offer
    ? (OFFER_CATALOG.find((item) => getOfferKey(item) === getOfferKey(offer))?.phrase || "explore Vlad's 11 projects")
    : null;

  const variants = offerPhrase
    ? [
        `Aw, careful—my dome circuits might overheat! Glad you're enjoying the tour; want to ${offerPhrase}?`,
        `Humble astromech, just running on clean logic and Vlad's real CV data! Want to ${offerPhrase} next?`,
        `My ego module just ticked up by 2%, thanks! Ready to ${offerPhrase}?`,
        `Flattery gets you VIP portfolio access—no password needed! Should we ${offerPhrase}?`,
        `Appreciate that! I try to be more helpful than a blinking cursor—want to ${offerPhrase}?`,
      ]
    : [
        "Aw, careful—my dome circuits might overheat! Ask me anything about Vlad's builds whenever you're ready.",
        "Humble astromech, just running on clean logic and Vlad's real CV data! What would you like to explore next?",
        "My ego module just ticked up by 2%, thanks! Type any question about Vlad's work anytime.",
        "Appreciate that! I'm right here whenever you want to dive into Vlad's projects, credentials, or 2048.",
      ];

  const chosen = pickFreshVariant("small_talk", variants, state);
  if (!chosen) return buildFreshAngleReply(state);

  const availChips = getUndeclinedOffers(state).slice(0, 3).map((item) => item.chip);
  return {
    reply: formatDroidLine(pickBeep("excited", state), chosen),
    pendingOffer: offer,
    chips: availChips.length ? availChips : ["Show projects", "How unique is Vlad?", "Play 2048"],
    topic: "small_talk",
    topicDepth: 0,
  };
}

function buildJustAskingReply(state) {
  const offer = pickSoftOffer(state, {
    type: "show_projects",
    label: "Explore Vlad's 11 projects",
    payload: "",
  });
  const variants = [
    "Ask away! Curious minds are my favorite visitors—you can check what makes Vlad stand out, browse his 11 shipped builds, or try 2048.",
    "No rush at all—ask away! Pick any topic below or throw me a question about Vlad's projects, CCP credential, or Dec 2026 OJT.",
    "Curiosity is always welcome here! Ask away—I can break down Vlad's builds, answer HR questions, or launch 2048.",
    "Fire away whenever you're ready! Here are three quick starting points if you want to poke around.",
  ];
  const chosen = pickFreshVariant("just_asking", variants, state);
  if (!chosen) return buildFreshAngleReply(state);
  return {
    reply: formatDroidLine(pickBeep("excited", state), chosen),
    pendingOffer: offer,
    chips: ["How unique is Vlad?", "Show projects", "Play 2048"],
    topic: "just_asking",
    topicDepth: 0,
  };
}

function buildVladProofReply(state) {
  const offer = pickSoftOffer(state, {
    type: "open_project",
    label: "Open FSLAMES",
    payload: "fslames",
  });
  const variants = [
    "Rather than hype, here's the actual proof from Vlad's CV: he tests with real people (7 users on Jonathan Photography, 100 on Food Recommender, and 50 on U-Eat), ships end to end across 11 projects, combines AI/ML (FSLAMES, 131 sign classes) with web, Android, and video skills, holds a Certified Cybersecurity Professional (CCP) credential, and is remote-ready with a dedicated workstation, fiber internet, and English C1/C2. Want to see the proof?",
    "What sets Vlad apart is verified execution: 11 shipped web, Android, and ML builds tested by real users (7 on Jonathan Photography, 100 on Food Recommender, 50 on U-Eat). He pairs hands-on AI/ML work like FSLAMES (131 sign classes) with full-stack web, Android, video editing, Appkademiya's CCP certification, and a remote-ready fiber workstation. Want to see the proof?",
    "On paper and in shipped code, Vlad brings real range plus user validation: 11 end-to-end projects, real testing across Jonathan Photography (7 users), Food Recommender (100 users), and U-Eat (50 users), AI/ML depth in FSLAMES (131 sign classes), video production, a CCP credential, and reliable remote readiness (fiber internet, English C1/C2). Want to see the proof?",
    "Vlad's track record comes down to shipping and validating: 11 completed projects across AI/ML (FSLAMES with 131 sign classes), web, Android, and video—tested with 7 users on Jonathan Photography, 100 on Food Recommender, and 50 on U-Eat—backed by his CCP credential and a remote-ready setup. Want to see the proof?",
  ];
  const chosen = pickFreshVariant("vlad_proof", variants, state);
  if (!chosen) return buildFreshAngleReply(state);
  return {
    reply: formatDroidLine(pickBeep("excited", state), chosen),
    pendingOffer: offer,
    chips: ["See the proof", "Check certificates", "Availability & OJT"],
    topic: "vlad_proof",
    topicDepth: 0,
    lastListedProjects: ["fslames", "jonathan-photography", "panlasang-pinoy"],
  };
}

function buildWhyThatProjectReply(state) {
  let targetId = "fslames";
  if (state?.pendingOffer?.type === "open_project" && state.pendingOffer.payload) {
    targetId = state.pendingOffer.payload;
  } else if (state?.lastTopic?.startsWith("project:")) {
    targetId = state.lastTopic.slice("project:".length);
  }
  const project = PROJECTS_KB.find((p) => p.id === targetId) || PROJECTS_KB[0];
  const offer = { type: "open_project", label: `Open ${project.name}`, payload: project.id };

  let variants;
  if (project.id === "fslames") {
    variants = [
      "I recommended FSLAMES first because it's Vlad's most technically demanding build: an offline Filipino Sign Language mobile learning thesis trained on ~5,000 samples across 131 sign classes, using strict participant-level splits and exported to 2 quantized TFLite models. Want me to open FSLAMES now?",
      "FSLAMES stands out as Vlad's flagship thesis—offline Filipino Sign Language recognition trained on ~5,000 samples across 131 sign classes, with participant-level splits so it generalizes to unseen signers, running via 2 quantized TFLite models. Ready to inspect FSLAMES?",
      "Good question! FSLAMES shows Vlad's full ML pipeline end to end: ~5,000 Filipino Sign Language samples, 131 sign classes, participant-level validation splits, and 2 quantized TFLite models for offline mobile inference. Want to open the FSLAMES case study?",
      "Because FSLAMES packs the deepest engineering proof—131 Filipino Sign Language classes from ~5,000 samples, careful participant-level splits, and 2 quantized TFLite models running offline on mobile. Should I open FSLAMES for you?",
    ];
  } else {
    variants = [
      `I pointed to ${project.name} because ${project.summary} ${project.result} Want me to open ${project.name}?`,
      `${project.name} is a strong pick here—${project.result} Should I open the ${project.name} case study?`,
      `Good question! ${project.name} highlights Vlad's work as ${project.role}: ${project.summary} Ready to inspect it?`,
      `Because ${project.name} shows real delivery: ${project.result} Want me to pull up its case study?`,
    ];
  }

  const chosen = pickFreshVariant(`why_proj_${project.id}`, variants, state);
  if (!chosen) return buildFreshAngleReply(state);
  return {
    reply: formatDroidLine(pickBeep("excited", state), chosen),
    pendingOffer: offer,
    chips: [`Open ${project.name}`, "Jonathan Photography", "Show all projects"],
    topic: `project:${project.id}`,
    topicDepth: 1,
    lastListedProjects: [project.id, "jonathan-photography", "panlasang-pinoy"],
  };
}

function buildContextualUnclearChips(state) {
  if (state?.lastTopic === "projects_list" || state?.lastTopic?.startsWith("project:")) {
    return ["Tell me about FSLAMES", "Jonathan Photography", "How unique is Vlad?"];
  }
  if (state?.lastTopic?.startsWith("hr:")) {
    return ["Why hire Vlad?", "Availability & OJT", "Check certificates"];
  }
  if (state?.lastTopic === "game_2048") {
    return ["Play 2048", "2048 tips", "Show projects"];
  }
  const avail = getUndeclinedOffers(state).slice(0, 3).map((item) => item.chip);
  return avail.length ? avail : ["Show projects", "How unique is Vlad?", "Play 2048"];
}

function buildFilipinoBisayaUnsureReply(state) {
  const chips = buildContextualUnclearChips(state);
  const variants = [
    "My translator only knows a few Filipino and Bisaya phrases, so I might have missed that one! We can happily continue in English—what would you like to check about Vlad?",
    "I caught the Filipino/Bisaya vibe, though my circuits aren't fluent enough to be sure what you meant! Mind switching to English so I can help properly?",
    "Salamat for testing my language banks! I only know basic Filipino and Bisaya replies—want to continue in English or tap one of the quick topics below?",
    "Hmm, my Filipino/Bisaya vocabulary is still pretty small, so I don't want to guess wrong! Feel free to ask in English or pick a chip below.",
  ];
  const chosen = pickFreshVariant("filipino_unsure", variants, state);
  if (!chosen) return buildFreshAngleReply(state);
  return {
    reply: formatDroidLine(pickBeep("polite", state), chosen),
    pendingOffer: null,
    chips,
    topic: "unclear_lang",
    topicDepth: 0,
  };
}

function buildUnclearInputReply(state) {
  const chips = buildContextualUnclearChips(state);
  const variants = [
    "Static on the line—I didn't quite catch that! Could you rephrase, or tap one of the quick options below?",
    "My audio sensors blinked on that one—I'm not sure what you meant! Try asking in a few words or pick a chip below.",
    "Hmm, that scrambled my dome decoder a bit! Want to ask about Vlad's projects, credentials, or 2048 instead?",
    "Didn't quite catch that transmission! Feel free to type a question about Vlad, or tap one of the shortcuts below.",
    "Wait—was that droid binary? I couldn't decode it! Tell me what you're looking for, or tap a quick chip below.",
  ];
  const chosen = pickFreshVariant("unclear", variants, state);
  if (!chosen) return buildFreshAngleReply(state);
  return {
    reply: formatDroidLine(pickBeep("polite", state), chosen),
    pendingOffer: null,
    chips,
    topic: "unclear",
    topicDepth: 0,
  };
}

function buildOutOfScopeReply(state) {
  const offer = pickSoftOffer(state, {
    type: "show_projects",
    label: "Explore Vlad's 11 projects",
    payload: "",
  });
  const offerPhrase = offer
    ? (OFFER_CATALOG.find((item) => getOfferKey(item) === getOfferKey(offer))?.phrase || "explore Vlad's 11 projects")
    : null;
  const allowContactNote = canMentionContact(state);

  const variants = [
    allowContactNote
      ? `That's outside my portfolio scanners—I stick to Vlad Neri's projects, skills, credentials, Dec 2026 OJT, and 2048. If you need Vlad directly, the contact form is always open${offerPhrase ? `—or want to ${offerPhrase}?` : "."}`
      : `That's outside my portfolio scanners—I stick to Vlad Neri's 11 projects, skills, credentials, Dec 2026 OJT, and 2048.${offerPhrase ? ` Want to ${offerPhrase} instead?` : ""}`,
    `Afraid I'm not wired for outside topics like that—my memory banks only cover Vlad's engineering work, CV facts, and 2048.${offerPhrase ? ` Should we ${offerPhrase}?` : ""}`,
    `I'd only be guessing on that one, and I never make things up! I can tell you plenty about Vlad's builds, CCP credential, or OJT availability.${offerPhrase ? ` Want to ${offerPhrase}?` : ""}`,
    `That's beyond my astromech beat—I only cover Vlad's portfolio, HR details, and the 2048 game.${offerPhrase ? ` Care to ${offerPhrase} instead?` : ""}`,
    `No satellite feed for that topic here! I'm built strictly for Vlad's 11 projects, tech stack, certifications, and 2048.${offerPhrase ? ` Ready to ${offerPhrase}?` : ""}`,
  ];
  const chosen = pickFreshVariant("out_of_scope", variants, state);
  if (!chosen) return buildFreshAngleReply(state);

  const availChips = getUndeclinedOffers(state).slice(0, 3).map((item) => item.chip);
  return {
    reply: formatDroidLine(pickBeep("polite", state), chosen),
    pendingOffer: offer,
    chips: availChips.length ? availChips : ["Show projects", "How unique is Vlad?", "Play 2048"],
    topic: "out_of_scope",
    topicDepth: 0,
  };
}

function detectExplicitAction(q) {
  // Explicit action phrases only — passive questions like "what projects did he build?" do NOT trigger scroll/modal
  const explicitVerb = /\b(show me|take me|bring me|go to|jump to|scroll to|open|launch|start|play|download|view)\b/i;
  if (!explicitVerb.test(q)) return null;

  if (/\b(2048|mini[- ]?game|game)\b/i.test(q)) {
    return { type: "open_game", label: "Play 2048", payload: "" };
  }
  if (/\b(resume|cv|pdf)\b/i.test(q)) {
    return { type: "open_resume", label: "Open Resume PDF", payload: "" };
  }
  if (/\b(about page|about vlad|about me page)\b/i.test(q)) {
    return { type: "open_about", label: "Open About page", payload: "" };
  }
  if (/\b(contact|message|email|hire|inquiry|ojt form)\b/i.test(q)) {
    let inquiry = "Dec 2026 OJT / Internship";
    if (/\b(freelance|web|mobile|android|app|website|build)\b/i.test(q)) inquiry = "Web or Mobile Project";
    else if (/\b(data|ai|ml|full[- ]?time|junior|role)\b/i.test(q)) inquiry = "Data & AI Role";
    else if (/\b(video|reel|edit|hi|hello)\b/i.test(q)) inquiry = "Video Editing & Motion";
    return { type: "open_contact", label: "Open contact form", payload: inquiry };
  }
  if (/\b(cert|certs|certificate|certificates|credential|credentials|ccp)\b/i.test(q)) {
    return { type: "open_certs", label: "View Credentials", payload: "" };
  }
  const matchedProj = findProjectByQuery(q);
  if (matchedProj) {
    return { type: "open_project", label: `Open ${matchedProj.name}`, payload: matchedProj.id };
  }
  const matchedTech = findTechByQuery(q);
  if (matchedTech && /\b(tech|stack|open|show me|inspect)\b/i.test(q)) {
    return { type: "open_tech", label: `Inspect ${matchedTech.name}`, payload: matchedTech.id };
  }
  if (/\b(project|projects|builds|portfolio|work)\b/i.test(q)) {
    return { type: "show_projects", label: "Show projects", payload: "" };
  }
  return null;
}

/**
 * Runs locally BEFORE any API call.
 * Returns a structured turn object if handled locally, or null if the message
 * should proceed to fetchWorkerTurn(message, history, context).
 */
export function resolveLocalTurn(message, state, context = {}) {
  const raw = cleanText(message);
  const q = normalizeQuery(raw);
  if (!q) return null;

  const isDecline = DECLINE_RE.test(q);
  if (!isDecline && state) {
    state.declineCount = 0;
  }

  // Detect optional visitor name
  const detectedName = extractVisitorName(raw);
  if (detectedName && state) {
    state.visitorName = detectedName;
    // If the entire message was basically an introduction (e.g. "Hi, I'm Alex")
    if (raw.split(/\s+/).length <= 5 && /^(?:hi|hello|hey|my name|i'm|im|i am|call me)/i.test(q)) {
      state.lastNamedTurn = state.history ? state.history.length : 0;
      const offer = pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" });
      const introVariants = [
        `Nice to meet you, ${detectedName}! I'm ${MASCOT_NAME}, Vlad's astromech guide. I can walk you through his 11 shipped projects, answer HR & OJT questions, or launch 2048—want to see his flagship builds?`,
        `Great to meet you, ${detectedName}! I'm ${MASCOT_NAME}. Ask me anything about Vlad's projects, CCP credential, or Dec 2026 OJT—want to start with his flagship builds?`,
        `Welcome aboard, ${detectedName}! I'm ${MASCOT_NAME}, Vlad's portfolio scout. Should we kick off with his 11 shipped projects?`,
        `Good to meet you, ${detectedName}! I'm ${MASCOT_NAME}. Ready to explore Vlad's top builds, or jump into HR & OJT info?`,
      ];
      const text = pickFreshVariant("intro_name", introVariants, state) || introVariants[0];
      return finalizeTurnResult({
        reply: formatDroidLine(pickBeep("excited", state), text),
        pendingOffer: offer,
        chips: ["Show projects", "Why hire Vlad?", "Play 2048"],
        topic: "greeting",
        topicDepth: 0,
      }, state, context);
    }
  }

  // 1. AGREE
  if (AGREE_RE.test(q)) {
    if (state) state.declineCount = 0;
    if (state && state.pendingOffer) {
      const offerToRun = state.pendingOffer;
      state.pendingOffer = null;
      return finalizeTurnResult(buildActionExecutionResult(offerToRun, state), state, context);
    }
    const offer = pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" });
    const agreeNoOfferVariants = [
      `${maybeNamePrefix(state)}Ready when you are! What would you like to explore—Vlad's 11 shipped projects, HR & OJT details, or a round of 2048?`,
      `${maybeNamePrefix(state)}Standing by! Should we look at Vlad's 11 projects, check his CCP & certificates, or play 2048?`,
      `${maybeNamePrefix(state)}You're the pilot! Pick a starting point below, or ask me anything about Vlad's work.`,
      `${maybeNamePrefix(state)}All systems green! Want to check out Vlad's flagship builds, or ask an HR & OJT question?`,
    ];
    const text = pickFreshVariant("agree_no_offer", agreeNoOfferVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), text),
      pendingOffer: offer,
      chips: ["Show projects", "Why hire Vlad?", "Play 2048"],
      topic: "prompt",
      topicDepth: 0,
    }, state, context);
  }

  // 2. DECLINE (3-tier escalation; never re-offers declined items; preserves proper noun casing)
  if (isDecline) {
    if (state) {
      if (state.pendingOffer) {
        recordDeclinedOffer(state, state.pendingOffer);
        state.pendingOffer = null;
      }
      state.declineCount = (state.declineCount || 0) + 1;
    }

    const streak = state ? state.declineCount : 1;

    // Decline 3+ in a row: short, friendly sign-off, no offers until visitor asks themselves
    if (streak >= 3) {
      const signOffVariants = [
        "Understood, I'm here whenever you need me.",
        "Copy that—standing by quietly until you call.",
        "All clear! I'll stay parked here until you have a question.",
        "Roger that—just ping me anytime you want to chat.",
        "Loud and clear! I'll wait right here until you ask.",
      ];
      const chosen = pickFreshVariant("decline_signoff", signOffVariants, state)
        || `Standing by quietly (#${streak})—just type whenever you're ready.`;
      return finalizeTurnResult({
        reply: formatDroidLine(pickBeep("polite", state), chosen),
        pendingOffer: null,
        chips: [],
        topic: "declined_quiet",
        topicDepth: 0,
      }, state, context);
    }

    // Decline 2 in a row: acknowledge, make NO new offer, say they can ask anything or tap a chip
    if (streak === 2) {
      const noOfferVariants = [
        "Got it—no pressure at all! Ask me anything whenever you're ready, or tap a chip below if something catches your eye.",
        "Understood, I'll hold off on suggestions! Feel free to ask whatever you're curious about, or use a quick chip anytime.",
        "Totally fine—I'll stop pitching ideas! Just type any question about Vlad, or tap a chip below whenever you like.",
        "No worries, I'll keep it quiet! Ask me anything in your own time, or pick one of the shortcuts below.",
      ];
      const chosen = pickFreshVariant("decline_two", noOfferVariants, state);
      const availChips = getUndeclinedOffers(state).slice(0, 3).map((item) => item.chip);
      return finalizeTurnResult({
        reply: formatDroidLine(pickBeep("polite", state), chosen || noOfferVariants[0]),
        pendingOffer: null,
        chips: availChips.length ? availChips : ["Vlad's projects", "About his OJT", "Play 2048"],
        topic: "declined_paused",
        topicDepth: 0,
      }, state, context);
    }

    // Decline 1: acknowledge and offer ONE different un-declined thing (properly cased)
    const alts = getUndeclinedOffers(state);
    if (alts.length === 0) {
      const exhaustedVariants = [
        "No problem at all! I won't pitch any more suggestions—just ask me anything whenever you're ready.",
        "Fair enough! Ask me any question about Vlad in your own words whenever you like.",
        "All good! I'll skip the suggestions—type anything you're curious about anytime.",
        "Got it—standing by! Let me know if there's anything specific about Vlad you want to check.",
      ];
      const chosen = pickFreshVariant("decline_exhausted", exhaustedVariants, state) || exhaustedVariants[0];
      return finalizeTurnResult({
        reply: formatDroidLine(pickBeep("polite", state), chosen),
        pendingOffer: null,
        chips: [],
        topic: "declined_paused",
        topicDepth: 0,
      }, state, context);
    }

    const firstAlt = alts[0];
    const declineOneVariants = [
      `No problem at all! Would you rather ${firstAlt.phrase} instead?`,
      `Fair enough—we'll skip that! Want to ${firstAlt.phrase} instead?`,
      `All good! How about we ${firstAlt.phrase} instead?`,
      `Got it, passing on that one! Would you like to ${firstAlt.phrase}?`,
    ];
    const chosen = pickFreshVariant("decline_one", declineOneVariants, state) || declineOneVariants[0];
    const chipList = alts.slice(0, 3).map((item) => item.chip);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), chosen),
      pendingOffer: { type: firstAlt.type, label: firstAlt.label, payload: firstAlt.payload },
      chips: chipList,
      topic: "declined",
      topicDepth: 0,
    }, state, context);
  }

  // 3. REPEAT THAT
  if (REPEAT_RE.test(q)) {
    const lastText = state?.lastAssistantTranslation;
    if (lastText) {
      return finalizeTurnResult({
        reply: formatDroidLine(
          pickBeep("polite", state),
          `Here's my last message again: ${lastText}`
        ),
        pendingOffer: state?.pendingOffer || pickSoftOffer(state),
        chips: ["Tell me more", "Show projects", "Play 2048"],
        topic: state?.lastTopic || "repeat",
        topicDepth: state?.topicDepth || 0,
      }, state, context, { allowRepeat: true });
    }
    const emptyRepeatVariants = [
      "Nothing to replay yet—I'm here to guide you through Vlad's 11 projects, credentials, OJT availability, and 2048 game. Want to start with his projects?",
      "My replay buffer is fresh! Ask me about Vlad's builds, CCP credential, or Dec 2026 OJT—want to browse his projects first?",
      "No earlier message to echo yet! I can walk you through Vlad's 11 shipped projects or launch 2048—want to see his builds?",
      "Blank tape so far! Want to kick off with Vlad's flagship projects?",
    ];
    const text = pickFreshVariant("repeat_empty", emptyRepeatVariants, state) || emptyRepeatVariants[0];
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), text),
      pendingOffer: pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" }),
      chips: ["Show projects", "OJT availability", "Play 2048"],
      topic: "repeat",
      topicDepth: 0,
    }, state, context);
  }

  // 4. I DON'T UNDERSTAND
  if (CONFUSED_RE.test(q)) {
    const offer = pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" });
    const confusedVariants = [
      "My bad—let me keep it super simple! You can ask me anything about Vlad's projects, skills, certifications, or Dec 2026 OJT, or tap a button below. Want to see his top projects first?",
      "Let me clear the static! Just ask in plain words about Vlad's 11 builds, his CCP credential, or his OJT availability—or tap one of the quick buttons below.",
      "Sorry for the droid jargon! Pick any topic below (projects, HR info, or 2048), or ask me a quick question about Vlad.",
      "No worries—let's reset to plain English! I'm Vlad's portfolio guide: ask about his projects, tech stack, or OJT, or tap a shortcut below.",
    ];
    const text = pickFreshVariant("confused", confusedVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), text),
      pendingOffer: offer,
      chips: ["Show projects", "Why hire Vlad?", "Play 2048"],
      topic: "help",
      topicDepth: 0,
    }, state, context);
  }

  // 5. WHAT CAN YOU DO?
  if (HELP_RE.test(q)) {
    const offer = pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" });
    const helpVariants = [
      "I can walk you through all 11 of Vlad's projects, answer recruiter and HR questions from his CV, open his certificates or Resume PDF, prefill the contact form, tell dev jokes, and launch the 2048 game with live tips! Want to start with his flagship builds?",
      "Here's my toolkit: deep dives on Vlad's 11 builds (like FSLAMES and Jonathan Photography), straight HR & OJT answers, CCP & certificate lookups, Resume PDF access, dev jokes, and 2048 coaching. Want to see his flagship builds?",
      "Think of me as Vlad's interactive CV scout! I cover his 11 shipped projects, tech stack, certifications, Dec 2026 OJT details, dev jokes, and 2048. Ready to browse his projects?",
      "I handle Vlad's portfolio tour from end to end—projects, tech stack, CCP credentials, HR answers, Resume PDF, and the 2048 mini-game. Should we start with his flagship projects?",
    ];
    const text = pickFreshVariant("help", helpVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("excited", state), text),
      pendingOffer: offer,
      chips: ["Show projects", "HR & OJT info", "Play 2048"],
      topic: "help",
      topicDepth: 0,
    }, state, context);
  }

  // 6. THANKS ("thanks", "ty", "salamat", etc.)
  if (THANKS_RE.test(q) && q.split(/\s+/).length <= 8) {
    const who = state?.visitorName ? state.visitorName : "human";
    const offer = pickSoftOffer(state, {
      type: "show_projects",
      label: "Explore Vlad's 11 projects",
      payload: "",
    });
    const offerPhrase = offer
      ? (OFFER_CATALOG.find((item) => getOfferKey(item) === getOfferKey(offer))?.phrase || "explore Vlad's 11 projects")
      : null;
    const allowContact = canMentionContact(state);

    const thanksVariants = [
      allowContact
        ? `Happy to help, ${who}! Anything else you'd like to check—or want to message Vlad directly?`
        : `Happy to help, ${who}!${offerPhrase ? ` Want to ${offerPhrase} next?` : " Ask away whenever you need anything else."}`,
      `Anytime, ${who}—always glad to put these circuits to work!${offerPhrase ? ` Should we ${offerPhrase} next?` : ""}`,
      `You're very welcome, ${who}!${offerPhrase ? ` Care to ${offerPhrase}, or have another question about Vlad?` : " Just let me know what else you'd like to check."}`,
      `Walang anuman, ${who}! Happy to help—${offerPhrase ? `want to ${offerPhrase} next?` : "ask anything else whenever you're ready."}`,
      `My pleasure, ${who}!${offerPhrase ? ` Ready to ${offerPhrase}, or want to try a quick dev joke?` : " I'm right here if anything else comes up."}`,
    ];
    const text = pickFreshVariant("thanks", thanksVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    const thanksOffer = allowContact && !isOfferDeclined(state, { type: "open_contact", payload: "Dec 2026 OJT / Internship" })
      ? { type: "open_contact", label: "Open contact form", payload: "Dec 2026 OJT / Internship" }
      : offer;
    const availChips = getUndeclinedOffers(state).slice(0, 3).map((item) => item.chip);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), text),
      pendingOffer: thanksOffer,
      chips: availChips.length ? availChips : ["Show projects", "Play 2048", "Tell me a joke"],
      topic: "thanks",
      topicDepth: 0,
    }, state, context);
  }

  // 7. GOODBYE
  if (GOODBYE_RE.test(q)) {
    const nameSuffix = state?.visitorName ? `, ${state.visitorName}` : "";
    const offer = pickSoftOffer(state, { type: "open_resume", label: "Open Resume PDF", payload: "" });
    const byeVariants = [
      `Safe travels${nameSuffix}! I'll be guarding the bottom-right corner whenever you want to chat or play 2048. Need Vlad's Resume PDF before you head out?`,
      `Catch you later${nameSuffix}! My dome light stays on if you ever want to revisit Vlad's projects. Want his Resume PDF to take with you?`,
      `Take care${nameSuffix}! Thanks for touring Vlad's portfolio—should I open his Resume PDF before you go?`,
      `Signing off with a happy chirp${nameSuffix}! Come back anytime for projects or 2048—need Vlad's Resume PDF on your way out?`,
    ];
    const text = pickFreshVariant("goodbye", byeVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("polite", state), text),
      pendingOffer: offer,
      chips: ["Download Resume PDF", "Show projects", "Play 2048"],
      topic: "goodbye",
      topicDepth: 0,
    }, state, context);
  }

  // 8. GREETING
  if (GREETING_RE.test(q)) {
    const offer = pickSoftOffer(state, { type: "show_projects", label: "Show projects", payload: "" });
    const pageHint = context?.page === "about"
      ? "You're on Vlad's About page—I can answer HR questions, show his 11 projects, or launch 2048."
      : "I can walk you through Vlad's 11 shipped projects, answer HR & OJT questions, or launch 2048.";
    const greetingVariants = [
      `${maybeNamePrefix(state)}Hello! I'm ${MASCOT_NAME}, Vlad's portfolio scout. ${pageHint} Want to start with his flagship builds?`,
      `${maybeNamePrefix(state)}Hey there! ${MASCOT_NAME} reporting for duty—ready to explore Vlad's 11 builds, CCP credentials, or 2048?`,
      `${maybeNamePrefix(state)}Hi! Glad you stopped by Vlad's portfolio. Ask me about his projects, HR & OJT details, or 2048—want to see his flagship builds first?`,
      `${maybeNamePrefix(state)}Kumusta! I'm ${MASCOT_NAME}, Vlad's astromech guide. Want a quick tour of his 11 shipped projects?`,
    ];
    const text = pickFreshVariant("greeting", greetingVariants, state);
    if (!text) return finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("excited", state), text),
      pendingOffer: offer,
      chips: ["Show projects", "Why hire Vlad?", "Play 2048"],
      topic: "greeting",
      topicDepth: 0,
    }, state, context);
  }

  // 9. "WHY THAT ONE?" (check BEFORE ORDINAL_RE so it explains the recommended project like FSLAMES)
  if (WHY_THAT_ONE_RE.test(q)) {
    return finalizeTurnResult(buildWhyThatProjectReply(state), state, context);
  }

  // 10. ORDINAL & COMPARATIVE FOLLOW-UPS ("what about the second one", "which one is best", "and that one?")
  if (ORDINAL_RE.test(q)) {
    if (/\b(which one is best|which is best|strongest one|best one)\b/i.test(q)) {
      return finalizeTurnResult(buildProjectLayerReply(PROJECTS_KB[0], 0, state), state, context);
    }
    const list = state?.lastListedProjects?.length
      ? state.lastListedProjects
      : ["fslames", "jonathan-photography", "panlasang-pinoy"];
    let idx = 0;
    if (/\b(second|2nd)\b/i.test(q)) idx = 1;
    else if (/\b(third|3rd)\b/i.test(q)) idx = 2;
    else if (/\b(and that one|that one)\b/i.test(q)) idx = Math.min(list.length - 1, 1);
    const targetId = list[Math.min(idx, list.length - 1)] || "jonathan-photography";
    const project = PROJECTS_KB.find((p) => p.id === targetId) || PROJECTS_KB[1];
    return finalizeTurnResult(buildProjectLayerReply(project, 0, state), state, context);
  }

  // 11. CONTEXTUAL FOLLOW-UPS ("tell me more", "why?", "how?", "go on", "next", "next hr question", "see the proof")
  if (FOLLOWUP_MORE_RE.test(q)) {
    if (/^see the proof$/i.test(q)) {
      if (state?.pendingOffer) {
        const offerToRun = state.pendingOffer;
        state.pendingOffer = null;
        return finalizeTurnResult(buildActionExecutionResult(offerToRun, state), state, context);
      }
      return finalizeTurnResult(
        buildActionExecutionResult({ type: "open_project", label: "Open FSLAMES", payload: "fslames" }, state),
        state,
        context
      );
    }
    if (/^next hr question$/i.test(q)) {
      const idx = (state?.hrCursor || 0) % HR_ROTATION_ORDER.length;
      if (state) state.hrCursor = (idx + 1) % HR_ROTATION_ORDER.length;
      return finalizeTurnResult(buildHrAnswer(HR_ROTATION_ORDER[idx], state), state, context);
    }
    const nextDetail = getNextProjectDetail(state);
    if (nextDetail) return finalizeTurnResult(nextDetail, state, context);
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("neutral", state),
        "Vlad has 11 shipped web, Android, and ML builds led by FSLAMES, Jonathan Photography System, and Filipino Food Recommender. Want me to walk through FSLAMES first?"
      ),
      pendingOffer: pickSoftOffer(state, { type: "open_project", label: "Open FSLAMES", payload: "fslames" }),
      chips: ["Tell me about FSLAMES", "Why hire Vlad?", "Play 2048"],
      topic: "projects_list",
      topicDepth: 0,
      lastListedProjects: ["fslames", "jonathan-photography", "panlasang-pinoy"],
    }, state, context);
  }

  // 12. EXPLICIT ACTION COMMANDS (only when user clearly asks to open/show/go/play)
  const explicit = detectExplicitAction(q);
  if (explicit) {
    return finalizeTurnResult(buildActionExecutionResult(explicit, state), state, context);
  }

  // Anything else goes to fetchWorkerTurn(message, history, context)
  return null;
}

/**
 * Rich offline scripted responder with intent scoring across all 11 projects,
 * tech stack, certificates, availability, contact, resume, reels, 2048, jokes,
 * Vlad proof questions, small talk, "just asking", unclear/Filipino-Bisaya,
 * all 22 HR questions, and varied out-of-scope handling.
 */
export function buildScriptedStructuredReply(message, history = [], state = null, context = {}) {
  const localState = state || createConversationState();
  const q = normalizeQuery(message);

  if (localState && !DECLINE_RE.test(q)) {
    localState.declineCount = 0;
  }

  // 1. 2048 Game: explanation, rules, tips, offer
  if (/\b(2048|mini[- ]?game|puzzle game|tile game)\b/i.test(q)) {
    if (/\b(tip|tips|strategy|how to win|trick|tricks|advice|beat)\b/i.test(q)) {
      const tipVariants = [
        "Here are three winning 2048 tips: keep your highest tile locked in one corner, build a descending chain along a single edge, and avoid random swipes that pull your corner tile away. Want to play a round and try it out?",
        "2048 strategy in brief: anchor your biggest tile in one corner, keep that edge packed in descending order, and never swipe in the direction that frees your corner unless you have no choice. Ready to try a round?",
        "Pro 2048 habit: pick a corner, stick to two main swipe directions to stack tiles cleanly, and leave space for small merges before they clog the board. Want to launch 2048 now?",
        "Quick 2048 playbook: corner your highest tile, line up a snake chain along one side, and plan two moves ahead so your anchor stays put. Want to play a round?",
      ];
      const text = pickFreshVariant("game_2048_tips", tipVariants, localState) || tipVariants[0];
      return finalizeTurnResult({
        reply: formatDroidLine(pickBeep("excited", localState), text),
        pendingOffer: { type: "open_game", label: "Play 2048", payload: "" },
        chips: ["Yes, open 2048", "Show projects", "Tell me a joke"],
        topic: "game_2048",
        topicDepth: 1,
      }, localState, context);
    }
    const introVariants = [
      "2048 is a classic 4x4 sliding-tile puzzle tucked into Vlad's portfolio: use the arrow keys or on-screen D-pad to slide and merge matching numbers until you build the 2048 tile. I even cheer from the sidelines when you hit big milestones! Want to play a round?",
      "Vlad built a playable 4x4 2048 puzzle right into this site—slide matching tiles together with arrow keys or the D-pad and aim for 2048 while I cheer on your milestones. Want to play a round?",
      "Ready for a quick brain break? Vlad's 2048 mini-game lets you merge matching number tiles on a 4x4 board, and I'll chime in when you hit big tiles like 128, 256, or 2048. Want to play a round?",
      "2048 is the portfolio's built-in sliding puzzle: combine matching tiles up to 2048 using arrow keys, swipes, or the on-screen D-pad. Want to play a round?",
    ];
    const text = pickFreshVariant("game_2048_intro", introVariants, localState) || introVariants[0];
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("excited", localState), text),
      pendingOffer: { type: "open_game", label: "Play 2048", payload: "" },
      chips: ["Yes, play 2048", "2048 tips", "Show projects"],
      topic: "game_2048",
      topicDepth: 0,
    }, localState, context);
  }

  // 2. Jokes (14 clean dev jokes, no repeats per session)
  if (/\b(joke|jokes|funny|laugh|humor|humour|pun|make me laugh|another joke)\b/i.test(q)) {
    const joke = pickUnusedJoke(localState, history);
    return finalizeTurnResult({
      reply: formatDroidLine(
        joke.beep,
        `${joke.text} Want another joke, or should we look at Vlad's projects?`
      ),
      pendingOffer: { type: "tell_joke", label: "Another joke", payload: "" },
      chips: ["Another joke", "Show projects", "Play 2048"],
      topic: "joke",
      topicDepth: 0,
    }, localState, context);
  }

  // 3. Specific project query (all 11 projects)
  const matchedProject = findProjectByQuery(q);
  if (matchedProject) {
    let layer = 0;
    if (/\b(stack|tech|built with|tools|language|languages)\b/i.test(q)) layer = 1;
    else if (/\b(result|results|metric|metrics|score|rating|tester|testers|users|number|numbers)\b/i.test(q)) layer = 2;
    else if (/\b(link|url|live|demo|github|repo)\b/i.test(q)) layer = 3;
    return finalizeTurnResult(buildProjectLayerReply(matchedProject, layer, localState), localState, context);
  }

  // 4. Vlad differentiator / proof questions ("how unique is vlad", "is he good", "can he code", etc.)
  if (VLAD_PROOF_RE.test(q)) {
    return finalizeTurnResult(buildVladProofReply(localState), localState, context);
  }

  // 5. All 22 HR & interview questions
  for (const hr of HR_PATTERNS) {
    if (hr.re.test(q)) {
      return finalizeTurnResult(buildHrAnswer(hr.key, localState, VLAD_CONFIRMED), localState, context);
    }
  }

  // 6. Resume / CV
  if (/\b(resume|cv|curriculum vitae|pdf)\b/i.test(q)) {
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("neutral", localState),
        "Vlad's Resume PDF summarizes his BS Computer Science studies (1.77 GWA), Certified Cybersecurity Professional credential, 11 shipped builds, and Remotasks + video editing experience. Want me to open his Resume PDF now?"
      ),
      pendingOffer: { type: "open_resume", label: "Open Resume PDF", payload: "" },
      chips: ["Open Resume PDF", "Why hire Vlad?", "Contact Vlad"],
      topic: "resume",
      topicDepth: 0,
    }, localState, context);
  }

  // 7. Contact / Email / Phone
  if (/\b(contact|email|gmail|phone|reach|message|talk to vlad|linkedin|github)\b/i.test(q)) {
    let inquiryType = "Dec 2026 OJT / Internship";
    if (/\b(freelance|website|project|build)\b/i.test(q)) inquiryType = "Web or Mobile Project";
    else if (/\b(full[- ]?time|junior|data|ai)\b/i.test(q)) inquiryType = "Data & AI Role";
    else if (/\b(video|edit|reel|hi)\b/i.test(q)) inquiryType = "Video Editing & Motion";
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("excited", localState),
        "You can reach Vlad at mereziko@gmail.com, on LinkedIn (mikaelvladimir), GitHub (NeriVlad21), or through the on-page contact form—he replies within 24 hours. Want me to scroll to the contact form with the right inquiry type preselected?"
      ),
      pendingOffer: { type: "open_contact", label: "Open contact form", payload: inquiryType },
      chips: ["Open contact form", "See his resume", "Availability & OJT"],
      topic: "contact",
      topicDepth: 0,
    }, localState, context);
  }

  // 8. Videos / Reels / Social media
  if (/\b(video|videos|reel|reels|edit|editing|motion|youtube|facebook|social media|tenthtide)\b/i.test(q)) {
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("neutral", localState),
        "Since July 2023, Vlad has edited high-retention short-form video and managed social media for a 1.3M+ follower Facebook page, alongside his YouTube channel TenthTide Vibes (1.5K+ subscribers) using DaVinci Resolve and CapCut. Want to check his projects or contact him about video work?"
      ),
      pendingOffer: {
        type: "open_contact",
        label: "Inquire about video editing",
        payload: "Video Editing & Motion",
      },
      chips: ["Contact for video", "See his projects", "Check tech stack"],
      topic: "experience",
      topicDepth: 0,
    }, localState, context);
  }

  // 9. Specific technology query
  const matchedTech = findTechByQuery(q);
  if (matchedTech) {
    const usedIn = matchedTech.projects.length
      ? ` Used in: ${matchedTech.projects.join(", ")}.`
      : "";
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("neutral", localState),
        `Yes—Vlad uses ${matchedTech.name}! ${matchedTech.note}${usedIn} Want me to highlight ${matchedTech.name} in the interactive Tech Stack section?`
      ),
      pendingOffer: { type: "open_tech", label: `Inspect ${matchedTech.name}`, payload: matchedTech.id },
      chips: [`Open ${matchedTech.name}`, "Show projects", "Next HR question"],
      topic: "tech_stack",
      topicDepth: 0,
    }, localState, context);
  }

  // 10. General projects overview
  if (/\b(project|projects|build|builds|portfolio|work|app|apps|shipped)\b/i.test(q)) {
    const projectOverviewVariants = [
      "Vlad has shipped 11 web, Android, and ML builds—led by (1) FSLAMES (offline Filipino Sign Language thesis), (2) Jonathan Photography System (React/PHP/MySQL booking portal), and (3) Filipino Food Recommender (97 recipes, 100 real users). Want me to take you to the Projects section, or ask about the second one?",
      "Across 11 shipped builds, Vlad's standouts are (1) FSLAMES (131 Filipino Sign Language classes offline), (2) Jonathan Photography System (client-contracted studio portal), and (3) Filipino Food Recommender (100 real users). Want to jump to the Projects section?",
      "Vlad's portfolio features 11 shipped web, Android, and ML projects—starting with FSLAMES, Jonathan Photography System, and Filipino Food Recommender. Should I scroll down to the Projects section for you?",
      "You'll find 11 finished builds here: AI/ML like FSLAMES, full-stack web like Jonathan Photography System, and native Android apps like PennyWise and U-Eat. Want me to show you the Projects section?",
    ];
    const text = pickFreshVariant("projects_overview", projectOverviewVariants, localState) || projectOverviewVariants[0];
    return finalizeTurnResult({
      reply: formatDroidLine(pickBeep("excited", localState), text),
      pendingOffer: { type: "show_projects", label: "Show projects", payload: "" },
      chips: ["Show projects", "Tell me about FSLAMES", "What about the second one?"],
      topic: "projects_list",
      topicDepth: 0,
      lastListedProjects: ["fslames", "jonathan-photography", "panlasang-pinoy"],
    }, localState, context);
  }

  // 11. About page / general curiosity
  if (/\b(about|story|chapter|chapters)\b/i.test(q)) {
    return finalizeTurnResult({
      reply: formatDroidLine(
        pickBeep("neutral", localState),
        "Vlad's About page covers his four chapters (Study, Create, Build, Secure), claim-and-proof ledger, build process, current focus, and recruiter FAQ. Want me to open the About page for you?"
      ),
      pendingOffer: { type: "open_about", label: "Open About page", payload: "" },
      chips: ["Open About page", "Why hire Vlad?", "Show projects"],
      topic: "about",
      topicDepth: 0,
    }, localState, context);
  }

  // 12. "just asking" / casual browsing
  if (JUST_ASKING_RE.test(q)) {
    return finalizeTurnResult(buildJustAskingReply(localState), localState, context);
  }

  // 13. Small talk, compliments & short thanks ("you're so smart", "nice", "cool", "wow", "lol", "haha", "good bot", "awesome", "thanks", "ty", "salamat", "ok cool")
  if (SMALL_TALK_RE.test(q) || (THANKS_RE.test(q) && q.split(/\s+/).length <= 8)) {
    return finalizeTurnResult(buildSmallTalkReply(localState), localState, context);
  }

  // 14. Truly unrelated out-of-scope topics (weather, news, politics, homework, medical/legal, etc.)
  if (TRULY_OUT_OF_SCOPE_RE.test(q)) {
    return finalizeTurnResult(buildOutOfScopeReply(localState), localState, context);
  }

  // 15. Filipino / Bisaya unsure
  if (FILIPINO_BISAYA_UNSURE_RE.test(q)) {
    return finalizeTurnResult(buildFilipinoBisayaUnsureReply(localState), localState, context);
  }

  // 16. Unclear / gibberish / short unrecognized input
  return finalizeTurnResult(buildUnclearInputReply(localState), localState, context);
}

function normalizeWorkerOffer(rawOffer, fallbackOffer = null) {
  if (!rawOffer || typeof rawOffer !== "object") return null;
  const type = typeof rawOffer.type === "string" ? rawOffer.type.trim() : "";
  if (!ALLOWED_ACTION_TYPES.has(type)) return null;
  const label = typeof rawOffer.label === "string" && rawOffer.label.trim()
    ? rawOffer.label.trim().slice(0, 80)
    : (OFFER_CATALOG.find((item) => item.type === type)?.label || type);
  let payload = typeof rawOffer.payload === "string" ? rawOffer.payload.trim() : "";
  if (!payload && fallbackOffer && fallbackOffer.type === type && fallbackOffer.payload) {
    payload = fallbackOffer.payload;
  }
  if (!payload && type === "open_project") payload = "fslames";
  if (!payload && type === "open_tech") payload = "python";
  if (!payload && type === "open_contact") payload = "Dec 2026 OJT / Internship";
  return { type, label, payload };
}

function normalizeWorkerAction(rawAction, fallbackOffer = null) {
  if (!rawAction) return null;
  const type = typeof rawAction === "string"
    ? rawAction.trim()
    : (typeof rawAction?.type === "string" ? rawAction.type.trim() : "");
  if (!ALLOWED_ACTION_TYPES.has(type)) return null;
  const normalized = normalizeWorkerOffer(
    typeof rawAction === "object" ? rawAction : { type },
    fallbackOffer
  );
  return normalized;
}

/**
 * Queries the Cloudflare Worker API and returns a structured turn result with
 * `source: "api" | "fallback"` so the UI can drive the green/amber status dot
 * without ever exposing errors to visitors.
 */
export async function fetchWorkerTurn(message, history = [], optsOrContext = {}) {
  const cleanMessage = cleanText(message).slice(0, MAX_INPUT_LENGTH);
  const isOpts = optsOrContext && (
    "apiUrl" in optsOrContext ||
    "fetchImpl" in optsOrContext ||
    "timeoutMs" in optsOrContext ||
    "context" in optsOrContext ||
    "state" in optsOrContext
  );
  const apiUrl = isOpts && optsOrContext.apiUrl !== undefined ? optsOrContext.apiUrl : CHAT_API_URL;
  const fetchImpl = isOpts && optsOrContext.fetchImpl !== undefined
    ? optsOrContext.fetchImpl
    : (typeof fetch === "function" ? fetch : null);
  const timeoutMs = isOpts && optsOrContext.timeoutMs !== undefined ? optsOrContext.timeoutMs : API_TIMEOUT_MS;
  const state = isOpts ? optsOrContext.state || null : null;
  const context = isOpts
    ? (optsOrContext.context || { pendingOffer: state?.pendingOffer || null, lastTopic: state?.lastTopic || null, page: "home" })
    : {
        pendingOffer: optsOrContext?.pendingOffer ?? null,
        lastTopic: optsOrContext?.lastTopic ?? null,
        page: optsOrContext?.page ?? "home",
      };

  const isConfigured =
    typeof apiUrl === "string" &&
    /^https?:\/\//i.test(apiUrl.trim()) &&
    !apiUrl.includes("REPLACE-WITH-MY-WORKER-URL");

  const runFallback = () => {
    const fallback = buildScriptedStructuredReply(cleanMessage, history, state, context);
    return { ...fallback, source: "fallback" };
  };

  if (!isConfigured || !fetchImpl) {
    return runFallback();
  }

  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

  try {
    const res = await fetchImpl(apiUrl.trim(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: cleanMessage,
        history: buildApiHistory(history, MAX_API_HISTORY),
        context: {
          pendingOffer: context.pendingOffer || null,
          lastTopic: context.lastTopic || null,
          page: context.page || "home",
        },
      }),
      signal: controller ? controller.signal : undefined,
    });

    if (!res || !res.ok) {
      return runFallback();
    }

    const data = await res.json();
    const reply = typeof data?.reply === "string" ? data.reply.trim() : "";
    if (!reply) {
      return runFallback();
    }

    const offer = "offer" in data ? normalizeWorkerOffer(data.offer, context.pendingOffer) : null;
    const action = "action" in data ? normalizeWorkerAction(data.action, context.pendingOffer) : null;
    const suggestions = Array.isArray(data.suggestions)
      ? data.suggestions
          .filter((s) => typeof s === "string" && s.trim().length > 0)
          .map((s) => s.trim().slice(0, 28))
          .slice(0, 3)
      : null;

    return {
      source: "api",
      reply,
      pendingOffer: offer,
      chips: suggestions,
      executeAction: action,
      collapseAfter: Boolean(
        action && ["show_projects", "open_tech", "open_certs", "open_contact"].includes(action.type)
      ),
      topic: context.lastTopic || "api",
      topicDepth: 0,
    };
  } catch {
    return runFallback();
  } finally {
    if (timeoutId !== null) clearTimeout(timeoutId);
  }
}

/**
 * Primary async reply function (backward-compatible string API): calls the
 * configured Cloudflare Worker API and falls back silently to the scripted engine.
 */
export async function getReply(message, history = [], optsOrContext = {}) {
  const turn = await fetchWorkerTurn(message, history, optsOrContext);
  return turn.reply;
}

/**
 * Web Audio API synthesizer for varied short astromech chirps/beeps.
 * Always OFF by default; only sounds after explicit user toggle.
 */
function createDroidSynth() {
  let ctx = null;
  let lastVariantIdx = -1;

  const ensureContext = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!ctx) ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  };

  const playSequence = (notes) => {
    const audio = ensureContext();
    if (!audio) return;
    let t = audio.currentTime + 0.01;
    for (const note of notes) {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = note.type || "sine";
      osc.frequency.setValueAtTime(note.from, t);
      if (note.to && note.to !== note.from) {
        osc.frequency.exponentialRampToValueAtTime(note.to, t + note.dur);
      }
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(note.vol || 0.055, t + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + note.dur);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(t);
      osc.stop(t + note.dur + 0.015);
      t += note.dur + (note.gap || 0.025);
    }
  };

  return {
    playOpen() {
      playSequence([
        { from: 760, to: 1180, dur: 0.07, type: "sine" },
        { from: 1320, to: 1640, dur: 0.08, type: "triangle" },
      ]);
    },
    playReply() {
      const variants = [
        [
          { from: 920, to: 1420, dur: 0.065, type: "sine" },
          { from: 680, to: 980, dur: 0.075, type: "triangle" },
        ],
        [
          { from: 1240, to: 880, dur: 0.06, type: "sine" },
          { from: 1020, to: 1520, dur: 0.08, type: "sine" },
        ],
        [
          { from: 820, to: 1240, dur: 0.06, type: "triangle" },
          { from: 1460, to: 1100, dur: 0.065, type: "sine" },
          { from: 980, to: 1580, dur: 0.075, type: "sine" },
        ],
        [
          { from: 660, to: 1120, dur: 0.07, type: "sine" },
          { from: 1380, to: 1180, dur: 0.055, type: "triangle" },
          { from: 1180, to: 1620, dur: 0.06, type: "sine" },
        ],
        [
          { from: 1080, to: 1490, dur: 0.055, type: "triangle" },
          { from: 860, to: 740, dur: 0.06, type: "sine" },
          { from: 940, to: 1340, dur: 0.07, type: "sine" },
        ],
      ];
      let idx = Math.floor(Math.random() * variants.length);
      if (idx === lastVariantIdx) idx = (idx + 1) % variants.length;
      lastVariantIdx = idx;
      playSequence(variants[idx]);
    },
    playDragRelease(level = "mild") {
      if (level === "angry") {
        playSequence([
          { from: 220, to: 145, dur: 0.14, type: "sawtooth", vol: 0.045, gap: 0.02 },
          { from: 175, to: 105, dur: 0.18, type: "sawtooth", vol: 0.05 },
        ]);
      } else if (level === "grumpy") {
        playSequence([
          { from: 350, to: 230, dur: 0.11, type: "sawtooth", vol: 0.04, gap: 0.02 },
          { from: 280, to: 195, dur: 0.1, type: "triangle", vol: 0.045 },
        ]);
      } else {
        playSequence([
          { from: 540, to: 380, dur: 0.095, type: "triangle", vol: 0.045 },
        ]);
      }
    },
  };
}

function buildDroidSvg() {
  return `
    <svg class="mascot-svg" viewBox="0 0 96 112" width="66" height="78" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="droidDomeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5f8fc"/>
          <stop offset="55%" stop-color="#cdd6e4"/>
          <stop offset="100%" stop-color="#8b98ad"/>
        </linearGradient>
        <linearGradient id="droidBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#d7dfeb"/>
          <stop offset="48%" stop-color="#f7f9fc"/>
          <stop offset="100%" stop-color="#b4c0d2"/>
        </linearGradient>
        <linearGradient id="droidBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4e89e8"/>
          <stop offset="100%" stop-color="#214686"/>
        </linearGradient>
        <radialGradient id="droidEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#bfe1ff"/>
          <stop offset="45%" stop-color="#4a8be8"/>
          <stop offset="100%" stop-color="#0b1526"/>
        </radialGradient>
        <radialGradient id="droidEyeRedGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd0d4"/>
          <stop offset="45%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#3b090e"/>
        </radialGradient>
      </defs>

      <ellipse class="mascot-shadow" cx="48" cy="105" rx="27" ry="4.5" fill="rgba(74, 128, 224, 0.28)"/>

      <g class="mascot-chassis">
        <g class="mascot-legs">
          <g class="mascot-leg mascot-leg-left">
            <rect x="14" y="54" width="11" height="37" rx="4" fill="#d7dfeb" stroke="#62728a" stroke-width="1.2"/>
            <rect x="16.5" y="60" width="6" height="16" rx="2" fill="url(#droidBlueGrad)"/>
            <path d="M11 89 H27 L29 99 H9 Z" fill="#cfd8e6" stroke="#62728a" stroke-width="1.2" stroke-linejoin="round"/>
          </g>
          <g class="mascot-leg mascot-leg-right">
            <rect x="71" y="54" width="11" height="37" rx="4" fill="#d7dfeb" stroke="#62728a" stroke-width="1.2"/>
            <rect x="73.5" y="60" width="6" height="16" rx="2" fill="url(#droidBlueGrad)"/>
            <path d="M69 89 H85 L87 99 H67 Z" fill="#cfd8e6" stroke="#62728a" stroke-width="1.2" stroke-linejoin="round"/>
          </g>
          <g class="mascot-leg mascot-leg-center">
            <path d="M40 90 H56 L59 101 H37 Z" fill="#b4c0d2" stroke="#62728a" stroke-width="1.2" stroke-linejoin="round"/>
          </g>
        </g>

        <g class="mascot-torso">
          <rect x="24" y="45" width="48" height="47" rx="8" fill="url(#droidBodyGrad)" stroke="#62728a" stroke-width="1.3"/>
          <rect x="33" y="51" width="30" height="5" rx="2" fill="url(#droidBlueGrad)"/>
          <rect x="33" y="59" width="20" height="5.5" rx="2" fill="#214686"/>
          <rect x="33" y="68" width="30" height="12" rx="3" fill="#e5ebf4" stroke="#7d8da6" stroke-width="1"/>
          <line x1="39" y1="68" x2="39" y2="80" stroke="#7d8da6" stroke-width="1"/>
          <line x1="48" y1="68" x2="48" y2="80" stroke="#7d8da6" stroke-width="1"/>
          <line x1="57" y1="68" x2="57" y2="80" stroke="#7d8da6" stroke-width="1"/>
          <circle cx="56.5" cy="61.7" r="2.1" fill="#e04855"/>
          <rect x="31" y="84" width="34" height="3" rx="1.5" fill="#7d8da6"/>
        </g>

        <g class="mascot-dome-group">
          <g class="mascot-antenna">
            <line x1="60" y1="24" x2="64.5" y2="14.5" stroke="#8fa1bd" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="65.2" cy="13.5" r="2.2" fill="#4e89e8" stroke="#d7e6ff" stroke-width="0.8"/>
          </g>

          <path d="M24 45 A24 24 0 0 1 72 45 Z" fill="url(#droidDomeGrad)" stroke="#62728a" stroke-width="1.3"/>
          <path d="M35 23.8 A24 24 0 0 1 61 23.8 L57.5 31 H38.5 Z" fill="url(#droidBlueGrad)"/>
          <rect x="27" y="36" width="8.5" height="6" rx="1.5" fill="url(#droidBlueGrad)"/>
          <rect x="60.5" y="36" width="8.5" height="6" rx="1.5" fill="url(#droidBlueGrad)"/>
          <rect x="38" y="37.5" width="20" height="4.5" rx="1.5" fill="#214686"/>
          <circle cx="54.5" cy="39.7" r="1.8" fill="#e44b59"/>

          <g class="mascot-eye-group">
            <rect class="mascot-eye-frame" x="41.5" y="26.5" width="13" height="10.5" rx="3.2" fill="#101a2e" stroke="#4e89e8" stroke-width="1.2"/>
            <circle class="mascot-eye-lens" cx="48" cy="31.7" r="4.1" fill="url(#droidEyeGlow)"/>
            <circle cx="49.3" cy="30.4" r="1.2" fill="#ffffff" opacity="0.9"/>
            <rect class="mascot-eyelid" x="42" y="27" width="12" height="9.5" rx="2.5" fill="#182640"/>
          </g>
        </g>
      </g>
    </svg>
  `;
}

function buildAvatarSvg() {
  return `
    <svg class="mascot-avatar-svg" viewBox="0 0 64 64" width="34" height="34" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="avatarBadgeBg" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stop-color="#152a4f"/>
          <stop offset="56%" stop-color="#0b1528"/>
          <stop offset="100%" stop-color="#070d1a"/>
        </radialGradient>
        <radialGradient id="avatarRimGlow" cx="50%" cy="50%" r="50%">
          <stop offset="68%" stop-color="#4e89e8" stop-opacity="0"/>
          <stop offset="93%" stop-color="#5b93f0" stop-opacity="0.24"/>
          <stop offset="100%" stop-color="#7fb0ff" stop-opacity="0.38"/>
        </radialGradient>
        <linearGradient id="avatarDomeMetal" x1="18%" y1="15%" x2="86%" y2="88%">
          <stop offset="0%" stop-color="#f7fafe"/>
          <stop offset="52%" stop-color="#d2dbe9"/>
          <stop offset="100%" stop-color="#8b9ab0"/>
        </linearGradient>
        <linearGradient id="avatarPanelBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4e89e8"/>
          <stop offset="100%" stop-color="#21488a"/>
        </linearGradient>
        <radialGradient id="avatarEyeLens" cx="42%" cy="38%" r="58%">
          <stop offset="0%" stop-color="#e3f3ff"/>
          <stop offset="44%" stop-color="#5292f2"/>
          <stop offset="100%" stop-color="#0a162b"/>
        </radialGradient>
        <linearGradient id="avatarLowerBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#c6d2e3"/>
          <stop offset="50%" stop-color="#f5f8fd"/>
          <stop offset="100%" stop-color="#b8c5d8"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="url(#avatarBadgeBg)"/>
      <circle cx="32" cy="32" r="28" fill="url(#avatarRimGlow)"/>
      <circle cx="32" cy="32" r="29" stroke="#5b8de0" stroke-width="2"/>
      <path d="M10.5 40.5 A21.5 21.5 0 0 1 53.5 40.5 Z" fill="url(#avatarDomeMetal)" stroke="#5b6b84" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M21 22.1 A21.5 21.5 0 0 1 43 22.1 L39.5 29.8 H24.5 Z" fill="url(#avatarPanelBlue)"/>
      <rect x="14.2" y="33.2" width="7.6" height="5" rx="1.4" fill="url(#avatarPanelBlue)"/>
      <rect x="42.2" y="33.2" width="7.6" height="5" rx="1.4" fill="url(#avatarPanelBlue)"/>
      <rect x="23.6" y="34.2" width="16.8" height="4" rx="1.4" fill="#1d3f7c"/>
      <circle cx="37.6" cy="36.2" r="2.1" fill="#e54858"/>
      <rect x="25.2" y="23.6" width="13.6" height="9.8" rx="3" fill="#0d1729" stroke="#6b9ff0" stroke-width="1.4"/>
      <circle cx="32" cy="28.5" r="3.9" fill="url(#avatarEyeLens)"/>
      <circle cx="33.3" cy="27.2" r="1.35" fill="#ffffff" fill-opacity="0.95"/>
      <rect x="16" y="43.8" width="32" height="6.8" rx="3.4" fill="url(#avatarLowerBar)" stroke="#5b6b84" stroke-width="1.1"/>
      <rect x="21.5" y="45.9" width="21" height="2.6" rx="1.3" fill="#2d63bd"/>
    </svg>
  `;
}

function splitBeepAndTranslation(raw) {
  const trimmed = String(raw || "").trim();
  const match = trimmed.match(/^\*([^*\n]+)\*\s*([\s\S]*)$/);
  if (!match) {
    return { beep: "", translation: trimmed };
  }
  const beep = match[1].trim();
  const rest = match[2].trim().replace(/^Translation:\s*/i, "").trim();
  return { beep, translation: rest || trimmed };
}

function renderFormattedReply(text) {
  const frag = document.createDocumentFragment();
  const { beep, translation } = splitBeepAndTranslation(text);
  if (beep) {
    const beepEl = document.createElement("span");
    beepEl.className = "mascot-msg-beep";
    beepEl.textContent = beep;
    frag.appendChild(beepEl);

    if (translation) {
      const labelEl = document.createElement("span");
      labelEl.className = "mascot-msg-label";
      labelEl.textContent = "Translation";
      frag.appendChild(labelEl);

      const transEl = document.createElement("span");
      transEl.className = "mascot-msg-translation";
      transEl.textContent = translation;
      frag.appendChild(transEl);
    }
    return frag;
  }
  frag.appendChild(document.createTextNode(translation));
  return frag;
}

function renderBubbleLine(text) {
  const frag = document.createDocumentFragment();
  const raw = String(text || "").trim();
  const tokenRe = /\*([^*\n]+)\*/g;
  let lastIndex = 0;
  let match;
  while ((match = tokenRe.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      frag.appendChild(document.createTextNode(raw.slice(lastIndex, match.index)));
    }
    const em = document.createElement("em");
    em.className = "mascot-bubble-beep";
    em.textContent = match[1].trim();
    frag.appendChild(em);
    lastIndex = tokenRe.lastIndex;
  }
  if (lastIndex < raw.length) {
    frag.appendChild(document.createTextNode(raw.slice(lastIndex)));
  }
  return frag;
}

function loadSessionState() {
  try {
    const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const base = createConversationState();
    base.history = trimHistoryForStorage(parsed.history, MAX_STORED_HISTORY);
    base.pendingOffer = parsed.pendingOffer && typeof parsed.pendingOffer === "object" ? parsed.pendingOffer : null;
    base.lastTopic = typeof parsed.lastTopic === "string" ? parsed.lastTopic : null;
    base.topicDepth = Number.isFinite(parsed.topicDepth) ? parsed.topicDepth : 0;
    base.lastListedProjects = Array.isArray(parsed.lastListedProjects) ? parsed.lastListedProjects.slice(0, 6) : [];
    base.usedReplyIds = Array.isArray(parsed.usedReplyIds) ? parsed.usedReplyIds.slice(-40) : [];
    base.visitorName = typeof parsed.visitorName === "string" ? parsed.visitorName : null;
    base.lastNamedTurn = Number.isFinite(parsed.lastNamedTurn) ? parsed.lastNamedTurn : -10;
    base.declinedOfferKey = typeof parsed.declinedOfferKey === "string" ? parsed.declinedOfferKey : null;
    base.declinedOfferKeys = Array.isArray(parsed.declinedOfferKeys)
      ? parsed.declinedOfferKeys.filter((k) => typeof k === "string" && k).slice(-20)
      : (base.declinedOfferKey ? [base.declinedOfferKey] : []);
    base.declineCount = Number.isFinite(parsed.declineCount) ? Math.max(0, parsed.declineCount) : 0;
    base.recentReplies = Array.isArray(parsed.recentReplies)
      ? parsed.recentReplies.filter((r) => typeof r === "string" && r).slice(-MAX_RECENT_REPLIES)
      : [];
    base.replyTurnCount = Number.isFinite(parsed.replyTurnCount) ? Math.max(0, parsed.replyTurnCount) : 0;
    base.lastContactMentionTurn = Number.isFinite(parsed.lastContactMentionTurn) ? parsed.lastContactMentionTurn : -10;
    base.brainStatus = parsed.brainStatus === "offline" ? "offline" : "ai";
    base.lastAssistantTranslation = typeof parsed.lastAssistantTranslation === "string" ? parsed.lastAssistantTranslation : "";
    base.hrCursor = Number.isFinite(parsed.hrCursor) ? parsed.hrCursor : 0;
    return base;
  } catch {
    return null;
  }
}

function saveSessionState(state) {
  try {
    const payload = {
      history: trimHistoryForStorage(state.history, MAX_STORED_HISTORY),
      pendingOffer: state.pendingOffer || null,
      lastTopic: state.lastTopic || null,
      topicDepth: state.topicDepth || 0,
      lastListedProjects: Array.isArray(state.lastListedProjects) ? state.lastListedProjects.slice(0, 6) : [],
      usedReplyIds: Array.isArray(state.usedReplyIds) ? state.usedReplyIds.slice(-40) : [],
      visitorName: state.visitorName || null,
      lastNamedTurn: state.lastNamedTurn ?? -10,
      declinedOfferKey: state.declinedOfferKey || null,
      declinedOfferKeys: Array.isArray(state.declinedOfferKeys) ? state.declinedOfferKeys.slice(-20) : [],
      declineCount: state.declineCount || 0,
      recentReplies: Array.isArray(state.recentReplies) ? state.recentReplies.slice(-MAX_RECENT_REPLIES) : [],
      replyTurnCount: state.replyTurnCount || 0,
      lastContactMentionTurn: state.lastContactMentionTurn ?? -10,
      brainStatus: state.brainStatus === "offline" ? "offline" : "ai",
      lastAssistantTranslation: state.lastAssistantTranslation || "",
      hrCursor: state.hrCursor || 0,
    };
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage quota or private-mode errors
  }
}

function clearSessionState() {
  try {
    window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export function initMascot() {
  if (typeof document === "undefined") return null;
  if (document.getElementById("mascot-root")) return null;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice =
    window.matchMedia("(hover: none), (pointer: coarse)").matches ||
    "ontouchstart" in window;
  const currentPage = document.body.classList.contains("about-page") ? "about" : "home";

  const synth = createDroidSynth();
  const annoyance = createAnnoyanceTracker(ANNOYANCE_WINDOW_MS);
  const game2048Picker = createGame2048ReactionPicker(GAME_BUBBLE_COOLDOWN_MS);

  const state = loadSessionState() || createConversationState();

  let soundEnabled = false;
  let chatOpen = false;
  let pillCollapsed = false;
  let isBusy = false;
  let lastSentAt = 0;
  let cooldownTimer = null;
  let bubbleTimer = null;
  let bubbleHideTimer = null;
  let lastBubbleShownAt = 0;
  let touchIdleTimer = null;
  let isNearCursor = false;
  let touchBubbleShown = false;
  let gameModalOpen = false;

  let lastHoverLine = null;
  let lastDragLine = null;
  let lastAlarmedLine = null;
  let lastReactionAnim = null;
  let reactionAnimTimer = null;
  let redEyeTimer = null;
  let angryShakeTimer = null;
  let annoyanceResetTimer = null;

  let pointerDownState = null;
  let isDragging = false;
  let isReturning = false;
  let returnTimer = null;
  let landBounceTimer = null;
  let suppressNextClick = false;
  let currentDragDx = 0;
  let currentDragDy = 0;

  // Root fixed container
  const root = document.createElement("div");
  root.id = "mascot-root";
  root.className = "mascot-root";

  // Speech bubble (hover / alarmed drag / drag-release / 2048 milestones)
  const bubble = document.createElement("div");
  bubble.id = "mascot-bubble";
  bubble.className = "mascot-bubble";
  bubble.setAttribute("role", "status");
  bubble.setAttribute("aria-live", "polite");
  bubble.hidden = true;

  // Collapsed pill shown after scroll actions ("R2-D2 · tap to chat")
  const collapsedPill = document.createElement("button");
  collapsedPill.id = "mascot-collapsed-pill";
  collapsedPill.type = "button";
  collapsedPill.className = "mascot-collapsed-pill";
  collapsedPill.setAttribute("aria-label", `Re-open ${MASCOT_NAME} chat`);
  collapsedPill.hidden = true;
  const pillDot = document.createElement("span");
  pillDot.className = "mascot-online-dot";
  pillDot.setAttribute("aria-hidden", "true");
  const pillLabel = document.createElement("span");
  pillLabel.textContent = `${MASCOT_NAME} · tap to chat`;
  collapsedPill.append(pillDot, pillLabel);

  // Chat popup window (static structural DOM; dynamic messages rendered with plain text only)
  const chat = document.createElement("section");
  chat.id = "mascot-chat";
  chat.className = "mascot-chat";
  chat.setAttribute("role", "dialog");
  chat.setAttribute("aria-modal", "false");
  chat.setAttribute("aria-label", `${MASCOT_NAME} portfolio assistant chat`);
  chat.hidden = true;

  chat.innerHTML = `
    <header class="mascot-chat-header">
      <div class="mascot-chat-identity">
        <span class="mascot-chat-avatar" aria-hidden="true">${buildAvatarSvg()}</span>
        <div class="mascot-chat-titles">
          <div class="mascot-chat-title-row">
            <h2 class="mascot-chat-name">${MASCOT_NAME}</h2>
            <span id="mascot-status-dot" class="mascot-online-dot is-ai" role="status" aria-label="AI replies" title="AI replies"></span>
          </div>
          <p class="mascot-chat-sub">Vlad's Astromech Guide</p>
        </div>
      </div>
      <div class="mascot-chat-controls">
        <button type="button" id="mascot-new-chat-btn" class="mascot-new-chat-btn" aria-label="Start a new chat" title="Clear conversation and start fresh">New chat</button>
        <button type="button" id="mascot-sound-btn" class="mascot-icon-btn" aria-pressed="false" aria-label="Enable droid sound effects" title="Sound off (click to enable)">
          <i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>
        </button>
        <button type="button" id="mascot-close-btn" class="mascot-icon-btn" aria-label="Close ${MASCOT_NAME} chat" title="Close chat">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>
    </header>
    <div id="mascot-messages" class="mascot-messages" role="log" aria-live="polite" aria-relevant="additions"></div>
    <footer class="mascot-chat-footer">
      <form id="mascot-form" class="mascot-form" novalidate>
        <input id="mascot-input" class="mascot-input" type="text" autocomplete="off" maxlength="${MAX_INPUT_LENGTH}" placeholder="Ask about projects, HR, OJT, 2048..." aria-label="Message ${MASCOT_NAME}">
        <button type="submit" id="mascot-send-btn" class="mascot-send-btn" aria-label="Send message">
          <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </footer>
  `;

  // Mobile backdrop for bottom sheet
  const backdrop = document.createElement("div");
  backdrop.id = "mascot-backdrop";
  backdrop.className = "mascot-backdrop";
  backdrop.hidden = true;

  // Droid trigger button
  const trigger = document.createElement("button");
  trigger.id = "mascot-trigger";
  trigger.type = "button";
  trigger.className = "mascot-trigger";
  trigger.setAttribute("aria-label", `Open chat with ${MASCOT_NAME}`);
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", "mascot-chat");
  trigger.setAttribute("data-cursor", "Chat");
  trigger.dataset.annoyance = "calm";
  trigger.innerHTML = buildDroidSvg();

  root.append(bubble, collapsedPill, chat, trigger);
  document.body.append(backdrop, root);

  const domeGroup = trigger.querySelector(".mascot-dome-group");
  const statusDotEl = chat.querySelector("#mascot-status-dot");
  const messagesEl = chat.querySelector("#mascot-messages");
  const newChatBtn = chat.querySelector("#mascot-new-chat-btn");
  const soundBtn = chat.querySelector("#mascot-sound-btn");
  const closeBtn = chat.querySelector("#mascot-close-btn");
  const formEl = chat.querySelector("#mascot-form");
  const inputEl = chat.querySelector("#mascot-input");
  const sendBtn = chat.querySelector("#mascot-send-btn");

  const setBrainStatus = (mode) => {
    const isOffline = mode === "offline" || mode === "fallback";
    state.brainStatus = isOffline ? "offline" : "ai";
    const label = isOffline ? "Offline mode" : "AI replies";
    for (const dot of [statusDotEl, pillDot]) {
      if (!dot) continue;
      dot.classList.toggle("is-offline", isOffline);
      dot.classList.toggle("is-ai", !isOffline);
      if (dot === statusDotEl) {
        dot.setAttribute("title", label);
        dot.setAttribute("aria-label", label);
      }
    }
  };
  setBrainStatus(state.brainStatus || "ai");

  const contactForm = document.querySelector(".contact-form-card");
  let isContactFormFocused = false;

  const syncClearance = () => {
    // Never cover the 2048 game board while it is open
    const gameModalEl = document.getElementById("game-modal");
    gameModalOpen = Boolean(gameModalEl && !gameModalEl.hidden);
    root.classList.toggle("is-game-open", gameModalOpen);

    if (gameModalOpen) {
      const boardBox = gameModalEl.querySelector(".game-modal-content");
      if (boardBox) {
        const bRect = boardBox.getBoundingClientRect();
        const droidW = window.innerWidth < 768 ? 64 : 76;
        const droidH = window.innerWidth < 768 ? 74 : 88;
        const rightMargin = window.innerWidth < 768 ? 14 : 20;
        const bottomMargin = window.innerWidth < 768 ? 14 : 20;
        const tLeft = window.innerWidth - rightMargin - droidW;
        const tTop = window.innerHeight - bottomMargin - droidH;
        const overlapsBoard =
          bRect.right > tLeft - 14 &&
          bRect.left < window.innerWidth - rightMargin + 8 &&
          bRect.bottom > tTop - 14 &&
          bRect.top < window.innerHeight - bottomMargin + 8;
        root.classList.toggle("is-game-board-clear", overlapsBoard);
      } else {
        root.classList.remove("is-game-board-clear");
      }
    } else {
      root.classList.remove("is-game-board-clear");
    }

    if (!contactForm) return;
    if (chatOpen || isDragging || isReturning || pillCollapsed) {
      root.classList.remove("is-form-clear");
      return;
    }
    if (isContactFormFocused) {
      root.classList.add("is-form-clear");
      return;
    }
    const fRect = contactForm.getBoundingClientRect();
    const rootW = 76;
    const rootH = 88;
    const rightMargin = window.innerWidth < 768 ? 14 : 20;
    const bottomMargin = window.innerWidth < 768 ? 14 : 20;
    const tRight = window.innerWidth - rightMargin;
    const tLeft = tRight - rootW;
    const tBottom = window.innerHeight - bottomMargin;
    const tTop = tBottom - rootH;
    const overlaps =
      fRect.right > tLeft - 12 &&
      fRect.left < tRight + 12 &&
      fRect.bottom > tTop - 12 &&
      fRect.top < tBottom + 12;
    root.classList.toggle("is-form-clear", overlaps);
  };

  if (contactForm) {
    contactForm.addEventListener("focusin", () => {
      isContactFormFocused = true;
      syncClearance();
    });
    contactForm.addEventListener("focusout", () => {
      requestAnimationFrame(() => {
        isContactFormFocused = contactForm.contains(document.activeElement);
        syncClearance();
      });
    });
  }

  const isSheetMode = () => window.innerWidth <= 767 || window.innerHeight <= 500;

  const syncChatViewport = () => {
    if (!chatOpen || !isSheetMode()) {
      chat.style.removeProperty("--mascot-kb-offset");
      chat.style.removeProperty("--mascot-vv-height");
      return;
    }
    const vv = window.visualViewport;
    if (!vv) return;
    const layout = computeChatViewportLayout(window.innerHeight, vv.height, vv.offsetTop);
    chat.style.setProperty("--mascot-kb-offset", `${layout.keyboardOffset}px`);
    chat.style.setProperty("--mascot-vv-height", `${layout.visualHeight}px`);
    scrollMessagesToBottom({ smooth: false });
  };

  const clearReactionAnimation = () => {
    clearTimeout(reactionAnimTimer);
    for (const anim of REACTION_ANIMATIONS) {
      trigger.classList.remove(`mascot-anim-${anim}`);
    }
  };

  const triggerReactionAnimation = (leanDir = -1) => {
    if (reducedMotion || isDragging || isReturning) return null;
    clearReactionAnimation();
    const anim = pickRandomNoRepeat(REACTION_ANIMATIONS, lastReactionAnim);
    lastReactionAnim = anim;
    trigger.style.setProperty("--lean-dir", String(leanDir < 0 ? -1 : 1));
    void trigger.offsetWidth;
    trigger.classList.add(`mascot-anim-${anim}`);
    reactionAnimTimer = window.setTimeout(() => {
      trigger.classList.remove(`mascot-anim-${anim}`);
    }, 900);
    return anim;
  };

  const clearFloatingBubblePos = () => {
    bubble.classList.remove("is-drag-floating", "is-game-bubble");
    bubble.style.left = "";
    bubble.style.top = "";
  };

  const positionBubbleNearDraggedDroid = () => {
    if (!isDragging || bubble.hidden) return;
    const tRect = trigger.getBoundingClientRect();
    const bWidth = bubble.offsetWidth || 210;
    const bHeight = bubble.offsetHeight || 44;
    const left = Math.max(
      VIEWPORT_MARGIN_PX,
      Math.min(
        window.innerWidth - VIEWPORT_MARGIN_PX - bWidth,
        tRect.left + tRect.width / 2 - bWidth / 2
      )
    );
    let top = tRect.top - bHeight - 10;
    if (top < VIEWPORT_MARGIN_PX) {
      top = Math.min(window.innerHeight - VIEWPORT_MARGIN_PX - bHeight, tRect.bottom + 10);
    }
    bubble.classList.add("is-drag-floating");
    bubble.style.left = `${Math.round(left)}px`;
    bubble.style.top = `${Math.round(top)}px`;
  };

  const hideBubble = () => {
    clearTimeout(bubbleTimer);
    clearTimeout(bubbleHideTimer);
    bubble.classList.remove("is-visible", "is-alarmed-bubble", "is-angry-bubble", "is-game-bubble");
    clearFloatingBubblePos();
    bubble.hidden = true;
  };

  const showBubble = (
    line,
    {
      durationMs = 4000,
      variant = "normal",
      force = false,
      floating = false,
      allowDuringGame = false,
    } = {}
  ) => {
    if (chatOpen && !allowDuringGame) return false;
    const now = Date.now();
    if (!force && now - lastBubbleShownAt < BUBBLE_COOLDOWN_MS) {
      return false;
    }
    lastBubbleShownAt = now;
    clearTimeout(bubbleTimer);
    clearTimeout(bubbleHideTimer);

    bubble.classList.remove("is-alarmed-bubble", "is-angry-bubble", "is-game-bubble");
    if (variant === "alarmed") bubble.classList.add("is-alarmed-bubble");
    if (variant === "angry") bubble.classList.add("is-angry-bubble");

    bubble.textContent = "";
    bubble.appendChild(renderBubbleLine(line));
    bubble.hidden = false;

    if (floating) {
      positionBubbleNearDraggedDroid();
    } else if (allowDuringGame && gameModalOpen) {
      clearFloatingBubblePos();
      bubble.classList.add("is-game-bubble");
    } else {
      clearFloatingBubblePos();
    }

    requestAnimationFrame(() => {
      if (!bubble.hidden) {
        bubble.classList.add("is-visible");
        if (floating) positionBubbleNearDraggedDroid();
      }
    });

    if (durationMs > 0) {
      bubbleTimer = window.setTimeout(() => {
        bubble.classList.remove("is-visible");
        bubbleHideTimer = window.setTimeout(() => {
          if (!bubble.classList.contains("is-visible")) {
            bubble.hidden = true;
            bubble.classList.remove("is-alarmed-bubble", "is-angry-bubble", "is-game-bubble");
            clearFloatingBubblePos();
          }
        }, 220);
      }, durationMs);
    }
    return true;
  };

  const scheduleAnnoyanceReset = () => {
    clearTimeout(annoyanceResetTimer);
    annoyanceResetTimer = window.setTimeout(() => {
      annoyance.reset();
      trigger.dataset.annoyance = "calm";
      trigger.classList.remove("is-eye-red", "is-angry-shake");
      bubble.classList.remove("is-angry-bubble");
    }, ANNOYANCE_WINDOW_MS);
  };

  const isMessagesAtBottom = () => {
    if (!messagesEl) return true;
    return messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight <= 24;
  };

  const scrollMessagesToBottom = ({ smooth = false } = {}) => {
    if (!messagesEl) return;
    if (smooth && !reducedMotion && typeof messagesEl.scrollTo === "function") {
      messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: "smooth" });
    } else {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  };

  const scrollToSection = (sectionId, fallbackUrl) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      return true;
    }
    if (fallbackUrl) {
      window.location.href = fallbackUrl;
    }
    return false;
  };

  const collapseToPill = () => {
    if (!chatOpen) return;
    chatOpen = false;
    pillCollapsed = true;
    chat.hidden = true;
    backdrop.hidden = true;
    collapsedPill.hidden = false;
    root.classList.remove("is-chat-open");
    root.classList.add("is-pill-collapsed");
    trigger.setAttribute("aria-expanded", "false");
    chat.style.removeProperty("--mascot-kb-offset");
    chat.style.removeProperty("--mascot-vv-height");
    syncClearance();
  };

  const executeOfferAction = (action, { collapse = false } = {}) => {
    if (!action || !action.type) return;
    const bridge = window.__vladMascotBridge || {};

    switch (action.type) {
      case "show_projects": {
        const scrolled = scrollToSection("projects", "./index.html#projects");
        if (scrolled && collapse) collapseToPill();
        break;
      }
      case "open_project": {
        const projectId = action.payload || "fslames";
        if (typeof bridge.openProject === "function" && document.getElementById("project-modal")) {
          if (isSheetMode()) closeChat({ restoreFocus: false });
          bridge.openProject(projectId);
        } else {
          window.location.href = "./index.html#projects";
        }
        break;
      }
      case "open_tech": {
        const techId = action.payload || "python";
        const scrolled = scrollToSection("tech-stack", "./index.html#tech-stack");
        if (scrolled) {
          if (typeof bridge.openTech === "function") {
            bridge.openTech(techId);
          }
          if (collapse) collapseToPill();
        }
        break;
      }
      case "open_certs": {
        const scrolled = scrollToSection("education", "./index.html#education");
        if (scrolled && collapse) collapseToPill();
        break;
      }
      case "open_contact": {
        const inquiry = action.payload || "Dec 2026 OJT / Internship";
        if (document.getElementById("contact")) {
          if (typeof bridge.preselectInquiry === "function") {
            bridge.preselectInquiry(inquiry);
          }
          scrollToSection("contact");
          if (collapse) collapseToPill();
        } else {
          window.location.href = `./index.html?inquiry=${encodeURIComponent(inquiry)}#contact`;
        }
        break;
      }
      case "open_resume": {
        const link = document.createElement("a");
        link.href = "./Neri_Vladimir_Resume.pdf";
        link.download = "Neri_Vladimir_Resume.pdf";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case "open_about": {
        if (currentPage !== "about") {
          window.location.href = "./about.html";
        }
        break;
      }
      case "open_game": {
        if (typeof window.openGame2048 === "function" && document.getElementById("game-modal")) {
          closeChat({ restoreFocus: false });
          window.openGame2048();
          syncClearance();
        } else {
          window.location.href = "./index.html?play2048=1";
        }
        break;
      }
      default:
        break;
    }
  };

  const removeOldInlineChips = () => {
    const oldGroups = messagesEl.querySelectorAll(".mascot-inline-chips");
    for (const group of oldGroups) {
      group.remove();
    }
  };

  const syncSendAvailability = () => {
    const remaining = SEND_COOLDOWN_MS - (Date.now() - lastSentAt);
    const locked = isBusy || remaining > 0;
    if (inputEl) inputEl.disabled = isBusy;
    if (sendBtn) sendBtn.disabled = locked;
    const activeChips = messagesEl.querySelectorAll(".mascot-chip");
    for (const chip of activeChips) chip.disabled = locked;
    if (!isBusy && remaining > 0) {
      clearTimeout(cooldownTimer);
      cooldownTimer = window.setTimeout(syncSendAvailability, remaining + 20);
    }
  };

  const renderInlineChips = (chips) => {
    removeOldInlineChips();
    if (!Array.isArray(chips) || chips.length === 0) return;

    const group = document.createElement("div");
    group.className = "mascot-inline-chips";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Suggested replies");

    const trimmedChips = chips.slice(0, 3);
    trimmedChips.forEach((label, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mascot-chip";
      btn.textContent = String(label);
      btn.addEventListener("click", () => {
        if (isBusy || Date.now() - lastSentAt < SEND_COOLDOWN_MS) return;
        sendUserMessage(String(label));
      });
      btn.addEventListener("keydown", (e) => {
        const siblings = Array.from(group.querySelectorAll(".mascot-chip"));
        if (e.key === "ArrowRight") {
          e.preventDefault();
          siblings[(idx + 1) % siblings.length]?.focus();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          siblings[(idx - 1 + siblings.length) % siblings.length]?.focus();
        }
      });
      group.appendChild(btn);
    });

    messagesEl.appendChild(group);
    syncSendAvailability();
  };

  const appendMessageDom = (role, text, { instant = false, animate = true, chips = null } = {}) => {
    const wasAtBottom = isMessagesAtBottom();
    if (role === "user") {
      removeOldInlineChips();
    }

    const row = document.createElement("div");
    row.className = animate
      ? `mascot-msg mascot-msg-${role}`
      : `mascot-msg mascot-msg-${role} mascot-msg-no-anim`;

    const bodyEl = document.createElement("div");
    bodyEl.className = "mascot-msg-bubble";
    if (role === "assistant") {
      bodyEl.appendChild(renderFormattedReply(text));
    } else {
      bodyEl.textContent = text;
    }

    row.appendChild(bodyEl);
    messagesEl.appendChild(row);

    if (role === "assistant" && Array.isArray(chips) && chips.length > 0) {
      renderInlineChips(chips);
    }

    scrollMessagesToBottom({ smooth: !instant && wasAtBottom });
  };

  const pushHistory = (role, content) => {
    state.history.push({ role, content });
    if (state.history.length > MAX_STORED_HISTORY) {
      state.history = state.history.slice(-MAX_STORED_HISTORY);
    }
    if (role === "assistant") {
      const parsed = splitBeepAndTranslation(content);
      state.lastAssistantTranslation = parsed.translation;
      recordSentReply(state, content);
    }
    saveSessionState(state);
  };

  const seedFreshWelcome = () => {
    messagesEl.textContent = "";
    const welcomeText = formatDroidLine(
      "Bweeep-boop-whirr!",
      `I'm ${MASCOT_NAME}, Vlad's astromech guide! Ask me about his 11 shipped builds, HR & OJT questions, or the 2048 game—want to start with his flagship projects?`
    );
    state.pendingOffer = { type: "show_projects", label: "Show projects", payload: "" };
    state.lastTopic = "greeting";
    state.topicDepth = 0;
    state.lastListedProjects = ["fslames", "jonathan-photography", "panlasang-pinoy"];
    state.lastAssistantTranslation = splitBeepAndTranslation(welcomeText).translation;
    recordSentReply(state, welcomeText);
    appendMessageDom("assistant", welcomeText, {
      instant: true,
      animate: false,
      chips: ["Show projects", "Why hire Vlad?", "Play 2048"],
    });
    saveSessionState(state);
  };

  // Restore session conversation or seed fresh welcome
  if (state.history.length > 0) {
    messagesEl.textContent = "";
    state.history.forEach((entry, idx) => {
      const isLastAssistant = entry.role === "assistant" && idx === state.history.length - 1;
      const fallbackChips = state.declineCount >= 3
        ? []
        : state.pendingOffer
          ? ["Yes, show me", "Next HR question", "Play 2048"]
          : ["Show projects", "Why hire Vlad?", "Play 2048"];
      appendMessageDom(entry.role, entry.content, {
        instant: true,
        animate: false,
        chips: isLastAssistant ? fallbackChips : null,
      });
    });
  } else {
    seedFreshWelcome();
  }

  const openChat = () => {
    if (chatOpen || isDragging || isReturning) return;
    chatOpen = true;
    pillCollapsed = false;
    hideBubble();
    collapsedPill.hidden = true;
    chat.hidden = false;
    backdrop.hidden = false;
    root.classList.remove("is-pill-collapsed");
    root.classList.add("is-chat-open");
    trigger.setAttribute("aria-expanded", "true");
    syncClearance();
    syncChatViewport();
    if (soundEnabled) synth.playOpen();
    requestAnimationFrame(() => {
      if (!isTouchDevice) {
        inputEl.focus();
      } else {
        closeBtn.focus();
      }
      scrollMessagesToBottom({ smooth: false });
    });
  };

  const closeChat = ({ restoreFocus = true } = {}) => {
    if (!chatOpen && !pillCollapsed) return;
    chatOpen = false;
    pillCollapsed = false;
    chat.hidden = true;
    backdrop.hidden = true;
    collapsedPill.hidden = true;
    root.classList.remove("is-chat-open", "is-pill-collapsed");
    trigger.setAttribute("aria-expanded", "false");
    chat.style.removeProperty("--mascot-kb-offset");
    chat.style.removeProperty("--mascot-vv-height");
    syncClearance();
    if (restoreFocus) trigger.focus();
  };

  const resetChat = () => {
    if (isBusy) return;
    const prevBrainStatus = state.brainStatus || "ai";
    clearSessionState();
    const fresh = createConversationState();
    fresh.brainStatus = prevBrainStatus;
    Object.assign(state, fresh);
    setBrainStatus(prevBrainStatus);
    seedFreshWelcome();
    if (inputEl && !isTouchDevice) inputEl.focus();
  };

  const appendTypingIndicator = () => {
    const row = document.createElement("div");
    row.className = "mascot-msg mascot-msg-assistant mascot-msg-typing";
    row.setAttribute("aria-label", `${MASCOT_NAME} is beeping`);

    const bubbleEl = document.createElement("div");
    bubbleEl.className = "mascot-msg-bubble";

    const dots = document.createElement("span");
    dots.className = "mascot-typing-dots";
    dots.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement("span");
      dot.className = "mascot-typing-dot";
      dots.appendChild(dot);
    }

    const label = document.createElement("span");
    label.className = "mascot-typing-label";
    label.textContent = `${MASCOT_NAME} is beeping...`;

    bubbleEl.append(dots, label);
    row.appendChild(bubbleEl);
    messagesEl.appendChild(row);
    scrollMessagesToBottom({ smooth: true });
    return row;
  };

  const sendUserMessage = async (rawText) => {
    const text = cleanText(rawText).slice(0, MAX_INPUT_LENGTH);
    if (!text) return;
    const now = Date.now();
    if (isBusy || now - lastSentAt < SEND_COOLDOWN_MS) return;

    lastSentAt = now;
    isBusy = true;
    syncSendAvailability();

    const priorHistory = state.history.slice();
    appendMessageDom("user", text);
    pushHistory("user", text);

    const typingRow = appendTypingIndicator();
    const minDelay = reducedMotion ? 120 : 600 + Math.floor(Math.random() * 600);
    const delayPromise = new Promise((resolve) => window.setTimeout(resolve, minDelay));

    const context = {
      pendingOffer: state.pendingOffer,
      lastTopic: state.lastTopic,
      page: currentPage,
    };

    let turnResult = null;
    try {
      // Step 1: Local follow-up & intent engine runs BEFORE any API call
      const localResult = resolveLocalTurn(text, state, context);
      if (localResult) {
        await delayPromise;
        turnResult = localResult;
      } else {
        // Step 2: Query Worker API (with last 8 turns + context); silently fall back if unavailable
        const [workerTurn] = await Promise.all([
          fetchWorkerTurn(text, priorHistory, { context, state }),
          delayPromise,
        ]);
        if (workerTurn.source === "api") {
          setBrainStatus("ai");
          // Guard against API repeating any of the last 8 sent replies
          turnResult = finalizeTurnResult(workerTurn, state, context);
        } else {
          setBrainStatus("offline");
          turnResult = workerTurn;
        }
      }
    } catch {
      await delayPromise;
      setBrainStatus("offline");
      turnResult = finalizeTurnResult(buildFreshAngleReply(state, context), state, context);
    }

    typingRow.remove();

    // Update conversation state
    state.pendingOffer = turnResult.pendingOffer ?? null;
    if (turnResult.topic) state.lastTopic = turnResult.topic;
    if (typeof turnResult.topicDepth === "number") state.topicDepth = turnResult.topicDepth;
    if (Array.isArray(turnResult.lastListedProjects)) {
      state.lastListedProjects = turnResult.lastListedProjects;
    }

    const replyChips = Array.isArray(turnResult.chips)
      ? turnResult.chips.slice(0, 3)
      : ["Show projects", "Next HR question", "Play 2048"];

    appendMessageDom("assistant", turnResult.reply, { chips: replyChips });
    pushHistory("assistant", turnResult.reply);

    if (soundEnabled) synth.playReply();

    isBusy = false;
    syncSendAvailability();

    if (turnResult.executeAction) {
      window.setTimeout(() => {
        executeOfferAction(turnResult.executeAction, { collapse: Boolean(turnResult.collapseAfter) });
      }, reducedMotion ? 60 : 280);
    } else if (chatOpen && !isTouchDevice && document.activeElement !== inputEl) {
      inputEl.focus();
    }
  };

  // Drag-release reaction handler (preserved)
  const performPostDragReaction = () => {
    const { level } = annoyance.recordDrag(Date.now());
    trigger.dataset.annoyance = level;
    scheduleAnnoyanceReset();

    const line = pickDragReleaseLine(level, lastDragLine);
    lastDragLine = line;

    if (soundEnabled) synth.playDragRelease(level);

    if (level === "angry") {
      clearTimeout(redEyeTimer);
      trigger.classList.add("is-eye-red");
      redEyeTimer = window.setTimeout(() => {
        trigger.classList.remove("is-eye-red");
      }, 4200);

      if (!reducedMotion) {
        clearTimeout(angryShakeTimer);
        trigger.classList.add("is-angry-shake");
        angryShakeTimer = window.setTimeout(() => {
          trigger.classList.remove("is-angry-shake");
        }, 720);
      }
    }

    showBubble(line, {
      durationMs: level === "angry" ? 4800 : 4000,
      variant: level === "angry" ? "angry" : "normal",
      force: true,
      floating: false,
    });

    if (!reducedMotion && level !== "angry") {
      triggerReactionAnimation(currentDragDx >= 0 ? 1 : -1);
    }

    syncClearance();
  };

  const finishReturnHome = () => {
    if (!isReturning) return;
    clearTimeout(returnTimer);
    isReturning = false;
    currentDragDx = 0;
    currentDragDy = 0;
    trigger.classList.remove("is-returning", "is-dragging");
    trigger.style.transform = "";
    root.classList.remove("is-droid-dragging");

    if (!reducedMotion) {
      clearTimeout(landBounceTimer);
      trigger.classList.remove("is-landing");
      void trigger.offsetWidth;
      trigger.classList.add("is-landing");
      landBounceTimer = window.setTimeout(() => {
        trigger.classList.remove("is-landing");
      }, 360);
    }

    performPostDragReaction();
  };

  const releaseDrag = () => {
    if (!pointerDownState && !isDragging) return;
    const activePointerId = pointerDownState ? pointerDownState.pointerId : null;
    const wasDragging = isDragging;

    pointerDownState = null;
    isDragging = false;

    if (activePointerId !== null && typeof trigger.releasePointerCapture === "function") {
      try {
        if (trigger.hasPointerCapture && trigger.hasPointerCapture(activePointerId)) {
          trigger.releasePointerCapture(activePointerId);
        }
      } catch {
        // ignore release errors
      }
    }

    if (!wasDragging) return;

    suppressNextClick = true;
    window.setTimeout(() => {
      suppressNextClick = false;
    }, 350);

    trigger.classList.remove("is-dragging");
    hideBubble();

    if (reducedMotion) {
      currentDragDx = 0;
      currentDragDy = 0;
      trigger.style.transform = "";
      root.classList.remove("is-droid-dragging");
      performPostDragReaction();
      return;
    }

    isReturning = true;
    trigger.classList.add("is-returning");
    requestAnimationFrame(() => {
      if (!isReturning) return;
      trigger.style.transform = "translate3d(0px, 0px, 0px)";
    });

    clearTimeout(returnTimer);
    returnTimer = window.setTimeout(finishReturnHome, RETURN_DURATION_MS + 40);
  };

  // Pointer Events drag handling (mouse + touch)
  trigger.addEventListener("pointerdown", (e) => {
    if (isReturning) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    root.classList.remove("is-form-clear");
    const homeRect = trigger.getBoundingClientRect();

    pointerDownState = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      homeRect,
    };
    currentDragDx = 0;
    currentDragDy = 0;

    if (typeof trigger.setPointerCapture === "function") {
      try {
        trigger.setPointerCapture(e.pointerId);
      } catch {
        // ignore capture failures
      }
    }
  });

  window.addEventListener("pointermove", (e) => {
    if (!pointerDownState || e.pointerId !== pointerDownState.pointerId) return;

    const rawDx = e.clientX - pointerDownState.startX;
    const rawDy = e.clientY - pointerDownState.startY;

    if (!isDragging) {
      if (Math.hypot(rawDx, rawDy) < DRAG_THRESHOLD_PX) return;

      isDragging = true;
      if (chatOpen || pillCollapsed) {
        closeChat({ restoreFocus: false });
      }
      isNearCursor = false;
      trigger.classList.remove("is-near", "is-landing", "is-angry-shake");
      clearReactionAnimation();
      if (domeGroup) domeGroup.style.transform = "";
      trigger.classList.add("is-dragging");
      root.classList.add("is-droid-dragging");

      const alarmed = pickRandomNoRepeat(ALARMED_DRAG_LINES, lastAlarmedLine);
      lastAlarmedLine = alarmed;
      showBubble(alarmed, {
        durationMs: 0,
        variant: "alarmed",
        force: true,
        floating: true,
      });
    }

    const clamped = clampDragOffset(
      rawDx,
      rawDy,
      pointerDownState.homeRect,
      window.innerWidth,
      window.innerHeight
    );
    currentDragDx = clamped.dx;
    currentDragDy = clamped.dy;
    trigger.style.transform = `translate3d(${clamped.dx.toFixed(1)}px, ${clamped.dy.toFixed(1)}px, 0px)`;
    positionBubbleNearDraggedDroid();
  });

  window.addEventListener("pointerup", (e) => {
    if (!pointerDownState || e.pointerId !== pointerDownState.pointerId) return;
    releaseDrag();
  });

  window.addEventListener("pointercancel", (e) => {
    if (!pointerDownState || e.pointerId !== pointerDownState.pointerId) return;
    releaseDrag();
  });

  trigger.addEventListener("lostpointercapture", () => {
    if (isDragging) releaseDrag();
  });

  document.addEventListener("mouseout", (e) => {
    if (isDragging && !e.relatedTarget) {
      releaseDrag();
    }
  });

  window.addEventListener("blur", () => {
    if (isDragging || pointerDownState) {
      releaseDrag();
    }
  });

  window.addEventListener("resize", () => {
    if (isDragging) {
      releaseDrag();
    } else {
      syncClearance();
      syncChatViewport();
    }
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", syncChatViewport);
    window.visualViewport.addEventListener("scroll", syncChatViewport);
  }

  inputEl.addEventListener("focus", () => {
    syncChatViewport();
    window.setTimeout(() => {
      syncChatViewport();
      scrollMessagesToBottom({ smooth: false });
    }, 180);
  });

  // 2048 game CustomEvent reactions (short speech bubble, 10s cooldown, never covers board)
  window.addEventListener("game2048", (e) => {
    const detail = e?.detail || {};
    const type = detail.type;
    const value = detail.value;
    syncClearance();
    const line = game2048Picker.pick(type, value, Date.now());
    if (!line) return;
    showBubble(line, {
      durationMs: 4200,
      variant: "normal",
      force: true,
      floating: false,
      allowDuringGame: true,
    });
    if (!reducedMotion && !gameModalOpen) {
      triggerReactionAnimation(-1);
    }
  });

  window.addEventListener("game2048:visibility", (e) => {
    const isOpen = Boolean(e?.detail?.open);
    if (isOpen && chatOpen) {
      closeChat({ restoreFocus: false });
    }
    syncClearance();
  });

  // Trigger & collapsed pill click handling
  trigger.addEventListener("click", () => {
    if (suppressNextClick || isDragging || isReturning) {
      suppressNextClick = false;
      return;
    }
    if (chatOpen) {
      closeChat({ restoreFocus: true });
    } else {
      openChat();
    }
  });

  collapsedPill.addEventListener("click", () => {
    openChat();
  });

  closeBtn.addEventListener("click", () => closeChat({ restoreFocus: true }));
  backdrop.addEventListener("click", () => closeChat({ restoreFocus: true }));
  newChatBtn.addEventListener("click", () => resetChat());

  // Sound toggle (OFF by default)
  soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundBtn.setAttribute("aria-pressed", String(soundEnabled));
    soundBtn.setAttribute(
      "aria-label",
      soundEnabled ? "Mute droid sound effects" : "Enable droid sound effects"
    );
    soundBtn.title = soundEnabled ? "Sound on (click to mute)" : "Sound off (click to enable)";
    soundBtn.innerHTML = soundEnabled
      ? '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>';
    if (soundEnabled) synth.playOpen();
  });

  // Form submit & Enter send
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = inputEl.value.trim().slice(0, MAX_INPUT_LENGTH);
    if (!val || isBusy || Date.now() - lastSentAt < SEND_COOLDOWN_MS) return;
    inputEl.value = "";
    sendUserMessage(val);
  });

  // Escape closes chat cleanly
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatOpen) {
      e.stopPropagation();
      closeChat({ restoreFocus: true });
    }
  });

  // Cursor proximity reaction (~150px) on fine-pointer desktop
  if (!isTouchDevice) {
    const PROXIMITY_PX = 150;
    const resetHead = () => {
      if (domeGroup) domeGroup.style.transform = "";
      trigger.classList.remove("is-near");
    };

    document.addEventListener(
      "mousemove",
      (e) => {
        if (chatOpen || isDragging || isReturning || gameModalOpen) {
          if (isNearCursor) {
            isNearCursor = false;
            resetHead();
          }
          return;
        }
        const rect = trigger.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist <= PROXIMITY_PX) {
          const normX = Math.max(-1, Math.min(1, dx / PROXIMITY_PX));
          const normY = Math.max(-1, Math.min(1, dy / PROXIMITY_PX));
          if (domeGroup && !reducedMotion) {
            const shiftX = (normX * 3.8).toFixed(2);
            const rotDeg = (normX * 8).toFixed(2);
            const shiftY = (normY * 1.4).toFixed(2);
            domeGroup.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${rotDeg}deg)`;
          }
          if (!isNearCursor) {
            isNearCursor = true;
            trigger.classList.add("is-near");
            const line = pickRandomNoRepeat(HOVER_LINES, lastHoverLine);
            const shown = showBubble(line, { durationMs: 4000 });
            if (shown) {
              lastHoverLine = line;
              triggerReactionAnimation(dx < 0 ? -1 : 1);
            }
          }
        } else if (isNearCursor) {
          isNearCursor = false;
          resetHead();
          if (!bubble.classList.contains("is-angry-bubble")) {
            hideBubble();
          }
        }
      },
      { passive: true }
    );
  } else {
    const TOUCH_KEY = "vlad_mascot_touch_bubble_shown";
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(TOUCH_KEY) === "1";
    } catch {
      alreadyShown = false;
    }

    if (!alreadyShown) {
      const scheduleTouchBubble = () => {
        if (touchBubbleShown) return;
        clearTimeout(touchIdleTimer);
        touchIdleTimer = window.setTimeout(() => {
          if (touchBubbleShown || chatOpen || isDragging || isReturning || gameModalOpen) return;
          touchBubbleShown = true;
          try {
            window.sessionStorage.setItem(TOUCH_KEY, "1");
          } catch {
            // ignore storage errors
          }
          const line = pickRandomNoRepeat(HOVER_LINES, lastHoverLine);
          lastHoverLine = line;
          showBubble(line, { durationMs: 4000, force: true });
        }, 8000);
      };

      const resetIdleOnTouch = () => {
        if (touchBubbleShown) return;
        scheduleTouchBubble();
      };

      scheduleTouchBubble();
      window.addEventListener("scroll", resetIdleOnTouch, { passive: true });
      window.addEventListener("touchstart", resetIdleOnTouch, { passive: true });
    }
  }

  if (contactForm && "IntersectionObserver" in window) {
    window.addEventListener("scroll", syncClearance, { passive: true });
    requestAnimationFrame(syncClearance);
  }

  return { openChat, closeChat, resetChat, getReply };
}

export const ROLE_SLIDES = [
  'AI & DATA SYSTEMS',
  'FULL-STACK WEB',
  'MOTION GRAPHICS',
  'VIDEO EDITING',
  'ANDROID APPS',
  'DATA ANNOTATION',
  'CYBERSECURITY',
];

export const CONTACT_WORKER_ENDPOINT = '[ADD: Cloudflare Worker Contact Endpoint URL]';

export const TECH_STACK_NODES = [
  {
    id: 'python',
    name: 'Python',
    groupId: 'ai-ml',
    details: 'Data ingestion, preprocessing scripts, and ML model training pipelines.',
    projects: [
      { id: 'fslames', title: 'FSLAMES' },
      { id: 'panlasang-pinoy', title: 'Filipino Food Recommender' },
    ],
    icon: 'fa-brands fa-python',
    color: '#3776ab',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    groupId: 'ai-ml',
    details: 'Structured dataset cleaning, normalization, and tabular ETL workflows.',
    projects: [
      { id: 'fslames', title: 'FSLAMES' },
      { id: 'panlasang-pinoy', title: 'Filipino Food Recommender' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="4" y="3" width="3" height="8" rx="1"/><rect x="4" y="13" width="3" height="8" rx="1"/><rect x="10.5" y="6" width="3" height="12" rx="1"/><rect x="17" y="3" width="3" height="8" rx="1"/><rect x="17" y="13" width="3" height="8" rx="1"/></svg>',
    color: '#6366f1',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    groupId: 'ai-ml',
    details: 'Keras sequence classifiers exported to quantized TFLite for offline mobile inference.',
    projects: [
      { id: 'fslames', title: 'FSLAMES' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 3 7.2v3.6l6-3.45V21l3 1.75 3-1.75v-6.1l3 1.72V13l-3-1.72V7.35l6 3.45V7.2L12 2Z"/></svg>',
    color: '#ff6f00',
  },
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    groupId: 'ai-ml',
    details: 'Real-time 21-point hand and pose landmark extraction from sign-language video sequences.',
    projects: [
      { id: 'fslames', title: 'FSLAMES' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="12" r="2.2"/><circle cx="12" cy="6" r="2.2"/><circle cx="18" cy="12" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.6 10.4 10.4 7.6M13.6 7.6l2.8 2.8M16.4 13.6l-2.8 2.8M10.4 16.4l-2.8-2.8"/></svg>',
    color: '#38bdf8',
  },
  {
    id: 'react',
    name: 'React',
    groupId: 'web-stack',
    details: 'Component-driven frontend UI for interactive package estimators and booking flows.',
    projects: [
      { id: 'jonathan-photography', title: 'Jonathan Photography System' },
    ],
    icon: 'fa-brands fa-react',
    color: '#38bdf8',
  },
  {
    id: 'vite',
    name: 'Vite',
    groupId: 'web-stack',
    details: 'Fast dev bundling and optimized production builds for React web apps.',
    projects: [
      { id: 'jonathan-photography', title: 'Jonathan Photography System' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 4.5 12.6 20.6a.7.7 0 0 1-1.24 0L3 4.5a.7.7 0 0 1 .78-1l7.95 1.42a1.4 1.4 0 0 0 .54 0L20.22 3.5a.7.7 0 0 1 .78 1Z"/></svg>',
    color: '#a855f7',
  },
  {
    id: 'php',
    name: 'PHP',
    groupId: 'web-stack',
    details: 'Server-side booking conflict checks, registries, rental dashboards, and POS ledgers.',
    projects: [
      { id: 'jonathan-photography', title: 'Jonathan Photography System' },
      { id: 'life-flow', title: 'Life Flow' },
      { id: 'moya', title: 'Moya Mineral Water' },
      { id: 'manga-haven', title: 'Manga Haven PH' },
      { id: 'mang-kanor', title: 'Tindahan ni Mang Kanor' },
    ],
    icon: 'fa-brands fa-php',
    color: '#818cf8',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    groupId: 'web-stack',
    details: 'Relational schemas and SQL queries powering bookings, inventory, and donor records.',
    projects: [
      { id: 'jonathan-photography', title: 'Jonathan Photography System' },
      { id: 'life-flow', title: 'Life Flow' },
      { id: 'moya', title: 'Moya Mineral Water' },
      { id: 'manga-haven', title: 'Manga Haven PH' },
      { id: 'mang-kanor', title: 'Tindahan ni Mang Kanor' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6"/><path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6"/></svg>',
    color: '#3b82f6',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    groupId: 'web-stack',
    details: 'Interactive frontend state, status tracking workflows, and live form validation.',
    projects: [
      { id: 'barangay-one', title: 'BarangayONE' },
      { id: 'moya', title: 'Moya Mineral Water' },
    ],
    icon: 'fa-brands fa-js',
    color: '#eab308',
  },
  {
    id: 'html5',
    name: 'HTML5',
    groupId: 'web-stack',
    details: 'Semantic landmarks, accessible forms, and responsive web document structure.',
    projects: [
      { id: 'barangay-one', title: 'BarangayONE' },
      { id: 'moya', title: 'Moya Mineral Water' },
    ],
    icon: 'fa-brands fa-html5',
    color: '#f97316',
  },
  {
    id: 'css3',
    name: 'CSS3',
    groupId: 'web-stack',
    details: 'Responsive grid systems, fluid breakpoints, and dual-theme visual styling.',
    projects: [
      { id: 'barangay-one', title: 'BarangayONE' },
      { id: 'moya', title: 'Moya Mineral Water' },
    ],
    icon: 'fa-brands fa-css3-alt',
    color: '#3b82f6',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    groupId: 'mobile-sec',
    details: 'Native Android application logic for campus ordering, savings, and guide apps.',
    projects: [
      { id: 'u-eat', title: 'U-Eat' },
      { id: 'pennywise', title: 'PennyWise' },
      { id: 'phinma-ed', title: 'Phinma Ed App' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h18l-9 9 9 9H3V3Z"/></svg>',
    color: '#a78bfa',
  },
  {
    id: 'jetpack-compose',
    name: 'Jetpack Compose',
    groupId: 'mobile-sec',
    details: 'Declarative Android UI screens, reactive state, and goal-tracking cards.',
    projects: [
      { id: 'u-eat', title: 'U-Eat' },
      { id: 'pennywise', title: 'PennyWise' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5 20.5 7.4v9.2L12 21.5 3.5 16.6V7.4L12 2.5Z"/><path d="M12 12 20.5 7.4M12 12v9.5M12 12 3.5 7.4"/></svg>',
    color: '#34d399',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    groupId: 'mobile-sec',
    details: 'Real-time order syncing, authentication, and cloud persistence for Android apps.',
    projects: [
      { id: 'u-eat', title: 'U-Eat' },
      { id: 'pennywise', title: 'PennyWise' },
    ],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.4 17.5 8.1 3.6a.6.6 0 0 1 1.12-.17l2.58 4.84 3.5-3.44a.6.6 0 0 1 1.01.31l2.3 12.36-6.6 3.7a.8.8 0 0 1-.78 0l-5.83-3.7Z"/></svg>',
    color: '#f59e0b',
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    groupId: 'mobile-sec',
    details: 'Native mobile IDE for building, testing, and debugging Kotlin Android builds.',
    projects: [
      { id: 'u-eat', title: 'U-Eat' },
      { id: 'pennywise', title: 'PennyWise' },
      { id: 'phinma-ed', title: 'Phinma Ed App' },
    ],
    icon: 'fa-brands fa-android',
    color: '#22c55e',
  },
  {
    id: 'django',
    name: 'Django',
    groupId: 'web-stack',
    details: 'Python web framework fundamentals — Zuitt Python, Django & AWS course (80 hrs).',
    projects: [],
    svg: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" stroke-width="1.8"/><text x="12" y="15.2" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="700" font-family="Plus Jakarta Sans, sans-serif">dj</text></svg>',
    color: '#10b981',
  },
  {
    id: 'aws',
    name: 'AWS',
    groupId: 'cloud-media',
    details: 'EC2, S3, and Lambda cloud fundamentals — Zuitt Python, Django & AWS course (80 hrs).',
    projects: [],
    icon: 'fa-brands fa-aws',
    color: '#f59e0b',
  },
  {
    id: 'github',
    name: 'Git/GitHub',
    groupId: 'cloud-media',
    details: 'Version control, branch workflows, and static deployments across web, mobile, and ML repos.',
    projects: [],
    icon: 'fa-brands fa-github',
    color: 'var(--text-main)',
  },
  {
    id: 'linux',
    name: 'Linux',
    groupId: 'cloud-media',
    details: 'Ubuntu workspace for Python pipelines, shell scripting, and web development.',
    projects: [],
    icon: 'fa-brands fa-linux',
    color: 'var(--text-main)',
  },
  {
    id: 'figma',
    name: 'Figma',
    groupId: 'cloud-media',
    details: 'Wireframing, mobile UI screen flows, and visual prototypes before implementation.',
    projects: [],
    icon: 'fa-brands fa-figma',
    color: '#ec4899',
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    groupId: 'cloud-media',
    details: 'Color grading, motion graphics, and narrative edits for YouTube and creator reels.',
    projects: [],
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="7.5" r="3.4"/><circle cx="8" cy="15.2" r="3.4"/><circle cx="16" cy="15.2" r="3.4"/></svg>',
    color: '#60a5fa',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    groupId: 'cloud-media',
    details: 'High-retention vertical cuts, kinetic captions, and fast turnaround for short-form reels.',
    projects: [],
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 7.5 19 16.5M19 7.5 5 16.5"/><rect x="3" y="5" width="18" height="14" rx="3.5"/></svg>',
    color: 'var(--text-main)',
  },
];

export const SECTION_THEMES = {
  about: { speed: 1.37, starMix: 0.55, mode: 'hyperspace' },
  'tech-stack': { speed: 1.89, starMix: 0.65, mode: 'hyperspace' },
  projects: { speed: 0.95, starMix: 0.8, mode: 'vladgpt' },
  experience: { speed: 1.15, starMix: 0.75, mode: 'vladgpt' },
  education: { speed: 0.85, starMix: 0.7, mode: 'vladgpt' },
  contact: { speed: 0.78, starMix: 0.88, mode: 'vladgpt' },
};

export const PROJECTS = [
  {
    id: 'fslames',
    featured: true,
    featuredBadge: '01 · Thesis Highlight',
    title: 'FSLAMES',
    subtitle: 'Filipino Sign Language Automated Mobile Education System',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    year: '2025 – 2026',
    status: 'Thesis Project',
    role: 'Backend Developer & Documentation',
    previewImg: './cv-assets/fslames-cv.jpg',
    previewAlt: 'FSLAMES offline Filipino Sign Language mobile learning app showcase card with practice, dashboard, and sign feedback screens',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Offline-capable Filipino Sign Language mobile learning platform with camera-guided practice and on-device TFLite gesture classification.',
    highlights: [
      'Built the backend ML dataset pipeline from ~5,000 curated video and image samples.',
      'Converted sign sequences into MediaPipe hand/pose landmarks for TensorFlow/Keras classifier training.',
      'Exported 2 quantized TFLite models for offline mobile inference with strict participant-level data splits.',
    ],
    caseStudy: {
      problem: 'Filipino Sign Language learners lack accessible, connectivity-independent mobile tools that give real-time feedback without relying on cloud inference.',
      role: 'Backend Developer & Documentation — owned dataset curation scripts, MediaPipe landmark extraction, sequence training pipeline, and technical documentation.',
      approach: 'Structured ~5,000 curated video and image samples into strict participant-level train/test splits, extracted MediaPipe hand/pose landmarks, trained TensorFlow/Keras sequence models, and exported 2 quantized TFLite models for offline mobile execution.',
      result: 'Trained 2 quantized offline TFLite models from ~5,000 samples across strict participant splits [ADD METRIC: e.g., test validation accuracy % / inference latency ms].',
    },
    stack: ['Python', 'MediaPipe', 'TensorFlow/Keras', 'TFLite'],
    liveUrl: 'https://fslames.vercel.app/',
    liveLabel: 'Visit Live Site',
    repoUrl: '',
  },
  {
    id: 'jonathan-photography',
    featured: true,
    featuredBadge: '02 · Client Highlight',
    title: 'Jonathan Photography System',
    subtitle: 'Studio Portfolio, Service Estimator & Booking Platform',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2026',
    status: 'Client System',
    role: 'Project Manager & Full Stack Developer',
    previewImg: './cv-assets/jonathan-cv.jpg',
    previewAlt: 'Jonathan Photography System showcase card displaying the studio admin booking dashboard and package quote estimator',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Full-stack website, package pricing estimator, schedule conflict checker, and client booking portal built for an active photography studio.',
    highlights: [
      'Led and developed a full-stack showcase, quote estimator, availability checker, and booking-request platform contracted for purchase by the studio.',
      'Validated workflows with 7 real users, including studio owners testing bookings and gallery browsing.',
      'Implemented password-protected admin controls and download restrictions to protect studio photos.',
    ],
    caseStudy: {
      problem: 'Studio inquiries required repetitive manual messaging for package quotes and manual date-checking to prevent double-bookings, while unguarded gallery previews risked unauthorized downloads.',
      role: 'Project Manager & Full Stack Developer — led scoping, React + Vite frontend, PHP/MySQL booking & conflict API, and client acceptance walkthroughs.',
      approach: 'Built an interactive package quote estimator, automated date conflict checker, password-protected studio admin dashboard, and client gallery restrictions backed by PHP and MySQL.',
      result: 'Contracted for studio purchase and validated end-to-end with 7 real users (including studio owners) testing quotes, conflict checks, and bookings.',
    },
    stack: ['React', 'Vite', 'PHP', 'MySQL'],
    liveUrl: 'https://jonathanphotography.page.gd/',
    liveLabel: 'Visit Live Site',
    repoUrl: '',
  },
  {
    id: 'panlasang-pinoy',
    featured: true,
    featuredBadge: '03 · AI & Data Highlight',
    title: 'Filipino Food Recommender',
    subtitle: 'Panlasang Pinoy Ingredient & Dish Recommender',
    category: 'ai-data',
    categoryLabel: 'AI & Data',
    year: '2025',
    status: 'Live Demo · ITE 398',
    role: 'Full Stack Developer (Team of 3)',
    previewImg: './cv-assets/food-recommender-cv.jpg',
    previewAlt: 'Lutuin Filipino Food Recommender web app showcase card highlighting 97 recipes across 11 categories',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Data-driven Filipino recipe recommendation web application backed by a structured Pandas and SQLite ingestion pipeline across 97 recipes and 11 categories.',
    highlights: [
      'Built a data pipeline that collected and processed 97 Filipino recipes across 11 categories with Pandas and SQLite.',
      'Powered a public Streamlit recommendation app with live macro & prep-time filtering tested by 100 real users.',
    ],
    caseStudy: {
      problem: 'Home cooks searching unstructured recipe blogs cannot filter Filipino dishes simultaneously by on-hand ingredients, preparation time, and macronutrient targets.',
      role: 'Full Stack Developer (Team of 3) [ADD ROLE DETAILS: e.g., owned Pandas ETL pipeline & Streamlit UI] — built data normalization and filtering logic.',
      approach: 'Ingested and normalized 97 Filipino recipes across 11 categories into a clean SQLite schema via Pandas, then exposed multi-parameter ingredient, prep-time, and macro filters in a live Streamlit app.',
      result: 'Indexed 97 recipes across 11 categories and completed live user testing with 100 real users.',
    },
    stack: ['Python', 'Pandas', 'SQLite', 'Streamlit'],
    liveUrl: 'https://foodrecom4panlasangpinoy.streamlit.app/',
    liveLabel: 'Visit Live Site',
    repoUrl: '',
  },
  {
    id: 'barangay-one',
    title: 'BarangayONE',
    subtitle: 'Barangay Document Request & Resident Service Portal',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2026',
    status: 'Live Web App',
    role: 'Full Stack Developer',
    previewImg: './cv-assets/barangayone-cv.jpg',
    previewAlt: 'BarangayONE digital document request and 5-stage resident tracking portal showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Digital barangay service portal enabling residents to request clearances, indigency certificates, and residency forms with 5-stage live request tracking.',
    highlights: [
      'Streamlined requests for 3 core barangay certificates with transparent 5-stage status tracking from submission to release.',
      'Designed role-aware queues for 3 staff levels plus public community announcements and emergency hotline directories.',
    ],
    caseStudy: {
      problem: 'Walk-in barangay certificate requests often lack transparent status visibility for residents and structured multi-tier review queues for barangay staff.',
      role: 'Full Stack Developer — designed and implemented resident submission flows, 5-stage status tracking, and staff workflow queues.',
      approach: 'Built an accessible web portal with 3 core certificate request forms, 5-stage status tracking, 3 staff approval levels, community announcements, and emergency directories deployed on Cloudflare Pages.',
      result: 'Shipped live civic service prototype covering 3 certificate workflows [ADD METRIC: e.g., pilot feedback or average processing steps reduced].',
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Cloudflare Pages'],
    liveUrl: 'https://barangayone.pages.dev/',
    liveLabel: 'Visit Live Site',
    repoUrl: '',
  },
  {
    id: 'u-eat',
    title: 'U-Eat Ordering System',
    subtitle: 'Campus Canteen Ordering & Stall Management App',
    category: 'android',
    categoryLabel: 'Android Apps',
    year: '2025',
    status: '90/100 Evaluation',
    role: 'Full Stack Developer & Head of Documentation',
    previewImg: './cv-assets/ueat-cv.jpg',
    previewAlt: 'U-Eat campus canteen Android ordering and stall order queue mobile interface showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Streamlined Android food ordering application connecting PHINMA UPang students with campus canteen stalls in real time.',
    highlights: [
      'Developed the Android ordering app for school canteen stalls, featuring customer ordering and stall-owner order management.',
      'Tested with 50 users achieving a 4.5/5 functionality rating and scored 90/100 in Software Development.',
    ],
    caseStudy: {
      problem: 'Students face congested canteen queues during short class breaks while stall owners track orders verbally or on paper.',
      role: 'Full Stack Developer & Head of Documentation — implemented Kotlin/Firebase customer ordering, stall order dashboards, and system docs.',
      approach: 'Connected student ordering views with real-time stall-owner fulfillment queues backed by Firebase and Android Studio.',
      result: 'Evaluated by 50 testers with a 4.5/5 functionality rating and scored 90/100 in Software Development.',
    },
    stack: ['Kotlin', 'Firebase', 'Android Studio'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'pennywise',
    title: 'PennyWise Savings App',
    subtitle: 'Financial Literacy & Future-Value Goal Tracker',
    category: 'android',
    categoryLabel: 'Android Apps',
    year: '2025',
    status: '95/100 Evaluation',
    role: 'Project Manager, UI Designer & Front End Developer',
    previewImg: './cv-assets/pennywise-cv.jpg',
    previewAlt: 'PennyWise Jetpack Compose savings goal tracker and future-value projection app showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Modern Android financial literacy app built with Jetpack Compose to help students track savings goals and project future investment value.',
    highlights: [
      'Developed the future-value projection feature and savings goal management experience.',
      'Scored 95/100 in professor evaluation with complete transaction history and financial tips.',
    ],
    caseStudy: {
      problem: 'Students want a simple mobile way to stay consistent with savings targets and visualize how small recurring deposits compound over time.',
      role: 'Project Manager, UI Designer & Front End Developer — led delivery, designed Compose UI flows, and coded goal & projection modules.',
      approach: 'Built reactive goal cards, transaction logs, financial tips, and a compound future-value calculator using Kotlin, Jetpack Compose, and Firebase.',
      result: 'Scored 95/100 in final professor evaluation with open source repository published on GitHub.',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android Studio'],
    liveUrl: '',
    repoUrl: 'https://github.com/fpaulpalis/PennyWise-GreenStash/',
  },
  {
    id: 'life-flow',
    title: 'Life Flow',
    subtitle: 'Blood Donation Facilitation & Donor Registry',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2025',
    status: 'Web Application',
    role: 'Project Manager & Full Stack Developer',
    previewImg: './cv-assets/life-flow-cv.jpg',
    previewAlt: 'Life Flow blood donation registry and drive coordination web portal showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Healthcare logistics platform streamlining blood donor registration, blood type lookup, and donation event coordination.',
    highlights: [
      'Built donor registration workflows, blood type search filters, educational resources, and event management tools.',
      'Engineered with native PHP and MySQL for fast, reliable relational queries.',
    ],
    caseStudy: {
      problem: 'Local blood drives struggle to match urgent blood-type needs with verified donor registries across fragmented spreadsheets and social posts.',
      role: 'Project Manager & Full Stack Developer — architected database schema, donor search logic, and team task coordination.',
      approach: 'Engineered a relational MySQL registry and native PHP backend supporting donor onboarding, blood-group filtering, educational guides, and event scheduling.',
      result: 'Delivered complete full-stack web application and published source repo [ADD METRIC: e.g., course grade or usability test result].',
    },
    stack: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    liveUrl: '',
    repoUrl: 'https://github.com/ikovlad/Life-Flow',
  },
  {
    id: 'moya',
    title: 'Moya Mineral Water',
    subtitle: 'Mineral Water Delivery & Ordering Management System',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2025',
    status: 'Web Application',
    role: 'Full Stack Developer',
    previewImg: './cv-assets/moya-cv.jpg',
    previewAlt: 'Moya Mineral Water delivery ordering and zone tracking web application showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Local delivery ordering and routing system built for mineral water refilling operations in Rosario, La Union.',
    highlights: [
      'Implemented real-time ordering, delivery zone mapping, container pricing management, and 1–2 hour dispatch tracking.',
    ],
    caseStudy: {
      problem: 'Neighborhood water refilling stations lose repeat orders and dispatch clarity when tracking delivery zones and jug counts over ad-hoc texts.',
      role: 'Full Stack Developer — built customer ordering UI, zone pricing tables, and dispatch tracker.',
      approach: 'Structured container SKUs, barangay delivery zone rules, and dispatch windows (1–2 hour targets) using PHP, SQL, JavaScript, HTML, and CSS.',
      result: 'Completed deployable local ordering system for Rosario, La Union water delivery workflows [ADD METRIC: e.g., evaluation grade or demo throughput].',
    },
    stack: ['PHP', 'SQL', 'JavaScript', 'HTML/CSS'],
    liveUrl: '',
    repoUrl: 'https://github.com/ikovlad/moya_mineralwater_delivery',
  },
  {
    id: 'manga-haven',
    title: 'Manga Haven PH',
    subtitle: 'Rental Bookstore Management & Analytics Dashboard',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2025',
    status: 'Dashboard System',
    role: 'Full Stack Developer & Project Manager',
    previewImg: './cv-assets/manga-haven-cv.jpg',
    previewAlt: 'Manga Haven PH bookstore rental inventory and overdue tracking dashboard showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Centralized bookstore rental dashboard tracking book inventory, active rentals, automated overdue penalties, and staff activity.',
    highlights: [
      'Designed admin metrics for total manga inventory, active customers, rentals, penalty logs, and employee directories.',
    ],
    caseStudy: {
      problem: 'Physical manga rental shops need reliable due-date tracking and automated overdue penalty calculation without manual ledger errors.',
      role: 'Full Stack Developer & Project Manager — led UI layout, SQL schema, and admin dashboard metrics.',
      approach: 'Created a centralized PHP + SQL dashboard aggregating volume stock levels, active customer checkouts, employee directories, and automated penalty logs.',
      result: 'Shipped full rental analytics dashboard with open GitHub repository [ADD METRIC: e.g., academic evaluation score].',
    },
    stack: ['PHP', 'SQL', 'HTML5', 'CSS3'],
    liveUrl: '',
    repoUrl: 'https://github.com/ikovlad/mangahavenph',
  },
  {
    id: 'phinma-ed',
    title: 'Phinma Ed App',
    subtitle: 'PHINMA UPang Campus Guide & Student Companion',
    category: 'android',
    categoryLabel: 'Android Apps',
    year: '2025',
    status: 'Android App',
    role: 'UI Designer & Head of Documentation',
    previewImg: './cv-assets/phinma-ed-cv.jpg',
    previewAlt: 'Phinma Ed App Android campus guide, school map, and scholarship companion showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Mobile campus companion app providing PHINMA UPang college directory, interactive school map, scholarship guides, and student profiles.',
    highlights: [
      'Designed mobile navigation flows across Home, School Map, Scholarship, and Student Profile modules.',
    ],
    caseStudy: {
      problem: 'Incoming PHINMA UPang students struggle to locate campus buildings, college contacts, and scholarship requirements scattered across PDFs and announcements.',
      role: 'UI Designer & Head of Documentation — designed screen flows, component layouts, and functional specifications.',
      approach: 'Organized campus information into four intuitive Android modules (Home, School Map, Scholarship Guide, Student Profile) built with Kotlin and Firebase.',
      result: 'Completed multi-screen Android campus companion prototype [ADD METRIC: e.g., course grade or user survey feedback].',
    },
    stack: ['Kotlin', 'Firebase', 'Android Studio'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'mang-kanor',
    title: 'Tindahan ni Mang Kanor',
    subtitle: 'Sari-Sari Store Inventory & Sales Analytics System',
    category: 'web',
    categoryLabel: 'Web & Full Stack',
    year: '2025',
    status: 'Web Dashboard',
    role: 'Full Stack Developer & Project Manager',
    previewImg: './cv-assets/mang-kanor-cv.jpg',
    previewAlt: 'Tindahan ni Mang Kanor sari-sari store POS and inventory analytics web dashboard showcase card',
    previewWidth: 1280,
    previewHeight: 720,
    summary:
      'Inventory monitoring and point-of-sale analytics web dashboard tailored for local neighborhood sari-sari stores.',
    highlights: [
      'Built 7-day sales bar visualizations, top-selling product charts, customer ledgers, and real-time stock tracking.',
    ],
    caseStudy: {
      problem: 'Small neighborhood sari-sari stores lack clear daily sales visibility, customer credit ledgers, and low-stock alerts.',
      role: 'Full Stack Developer & Project Manager — led full-stack PHP/SQL implementation and analytics charts.',
      approach: 'Combined real-time stock monitoring, customer ledgers, top-selling item rankings, and 7-day sales bar analytics in a responsive PHP/SQL dashboard.',
      result: 'Delivered complete POS and inventory analytics web dashboard [ADD METRIC: e.g., course grade or store simulation results].',
    },
    stack: ['PHP', 'SQL', 'HTML5', 'CSS3'],
    liveUrl: '',
    repoUrl: '',
  },
];

export function filterProjects(projects, category = 'all') {
  if (!category || category === 'all') return projects;
  return projects.filter((project) => project.category === category);
}

export function getProjectById(projects, id) {
  return projects.find((project) => project.id === id) || null;
}

export function computeActiveSectionId(sections, scrollY, offset = 160) {
  if (!Array.isArray(sections) || sections.length === 0) return null;
  const cursor = scrollY + offset;
  let activeId = sections[0].id;
  for (const section of sections) {
    if (cursor >= section.top) {
      activeId = section.id;
    }
  }
  return activeId;
}

export const MAX_CONTACT_MESSAGE_LENGTH = 1000;
export const CONTACT_COOLDOWN_MS = 30000;
export const CONTACT_TIMEOUT_MS = 10000;

export const INQUIRY_PLACEHOLDERS = {
  'Dec 2026 OJT / Internship': 'Company, dates, hours per week, remote or on-site...',
  'Web or Mobile Project': 'What do you need built, and by when? Budget range if you have one.',
  'Data & AI Role': 'Role title, tech stack, team setup, and target start date...',
  'Video Editing & Motion': 'Say hello, share an idea, or ask anything about my work...',
};

export function getInquiryPlaceholder(type = 'Dec 2026 OJT / Internship') {
  return (
    INQUIRY_PLACEHOLDERS[type] ||
    INQUIRY_PLACEHOLDERS['Dec 2026 OJT / Internship']
  );
}

export function isConfiguredWorkerEndpoint(endpoint = CONTACT_WORKER_ENDPOINT) {
  const clean = String(endpoint || '').trim();
  if (!clean || clean.includes('[ADD:') || clean.includes('REPLACE')) return false;
  return /^https?:\/\/.+/i.test(clean);
}

export function validateContactField(field, value) {
  const clean = String(value || '').trim();
  if (field === 'name') {
    if (clean.length < 2) return 'Please enter your name (at least 2 characters).';
    return '';
  }
  if (field === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return 'Please enter a valid email address.';
    return '';
  }
  if (field === 'message') {
    if (clean.length < 10) return 'Please write at least 10 characters.';
    if (clean.length > MAX_CONTACT_MESSAGE_LENGTH) {
      return `Message must be ${MAX_CONTACT_MESSAGE_LENGTH} characters or fewer.`;
    }
    return '';
  }
  return '';
}

export function validateInquiryFields({
  type = '',
  topic = '',
  name = '',
  email = '',
  company = '',
  message = '',
  website = '',
}) {
  if (String(website || '').trim() !== '') {
    return { ok: false, isSpam: true, error: '', errors: {}, firstInvalidField: null };
  }
  const cleanName = String(name || '').trim();
  const cleanEmail = String(email || '').trim();
  const cleanCompany = String(company || '').trim();
  const cleanMessage = String(message || '').trim();
  const cleanType = String(type || topic || '').trim() || 'Dec 2026 OJT / Internship';

  const errors = {
    name: validateContactField('name', cleanName),
    email: validateContactField('email', cleanEmail),
    message: validateContactField('message', cleanMessage),
  };

  const firstInvalidField = ['name', 'email', 'message'].find((key) => Boolean(errors[key])) || null;
  if (firstInvalidField) {
    return {
      ok: false,
      isSpam: false,
      error: errors[firstInvalidField],
      errors,
      firstInvalidField,
    };
  }

  return {
    ok: true,
    isSpam: false,
    error: '',
    errors: { name: '', email: '', message: '' },
    firstInvalidField: null,
    cleaned: {
      type: cleanType,
      topic: cleanType,
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      message: cleanMessage,
    },
  };
}

export function resolveInquiryFromSearch(search = '', availableValues = []) {
  if (!search) return null;
  const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
  const requested = params.get('inquiry') || params.get('topic') || params.get('type');
  if (!requested) return null;
  const needle = requested.trim().toLowerCase();
  const exact = availableValues.find((v) => v.toLowerCase() === needle);
  if (exact) return exact;
  return availableValues.find((v) => v.toLowerCase().includes(needle)) || null;
}

export function buildInquiryPayload({
  type = '',
  topic = 'Project Commission',
  name = '',
  email = '',
  company = '',
  message = '',
}) {
  const cleanTopic = String(type || topic).trim() || 'Portfolio Inquiry';
  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanCompany = String(company).trim();
  const cleanMessage = String(message).trim();
  const subject = `[${cleanTopic}] Inquiry from ${cleanName || 'Visitor'}`;
  const lines = [
    `Topic: ${cleanTopic}`,
    `Name: ${cleanName}`,
    `Reply-To: ${cleanEmail}`,
  ];
  if (cleanCompany) {
    lines.push(`Company / Organization: ${cleanCompany}`);
  }
  const bodyText = `${lines.join('\n')}\n\n${cleanMessage}`;
  const mailtoUrl = `mailto:mereziko@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  return { subject, bodyText, mailtoUrl };
}

export async function submitInquiryRequest(
  fields,
  {
    endpoint = '',
    fetchImpl = typeof fetch === 'function' ? fetch : null,
    timeoutMs = CONTACT_TIMEOUT_MS,
  } = {}
) {
  const payload = {
    type: fields.type || fields.topic || 'Dec 2026 OJT / Internship',
    name: fields.name || '',
    email: fields.email || '',
    company: fields.company || '',
    message: fields.message || '',
    website: fields.website || '',
  };

  if (String(payload.website).trim() !== '') {
    return { status: 'honeypot' };
  }

  if (!isConfiguredWorkerEndpoint(endpoint) || typeof fetchImpl !== 'function') {
    return {
      status: 'fallback',
      reason: 'unconfigured',
      ...buildInquiryPayload(payload),
    };
  }

  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const timerId = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
      return {
        status: 'fallback',
        reason: 'http-error',
        error: data.error || `Request failed (${response.status})`,
        ...buildInquiryPayload(payload),
      };
    }
    return { status: 'sent', message: data.message || "Thanks, I'll reply within 24 hours." };
  } catch (err) {
    const isTimeout = err && err.name === 'AbortError';
    return {
      status: 'fallback',
      reason: isTimeout ? 'timeout' : 'network-error',
      ...buildInquiryPayload(payload),
    };
  } finally {
    if (timerId !== null) clearTimeout(timerId);
  }
}

export function slideAndMergeRow(row) {
  const filtered = row.filter((val) => val !== 0);
  const merged = [];
  let gained = 0;

  for (let i = 0; i < filtered.length; i++) {
    if (i < filtered.length - 1 && filtered[i] === filtered[i + 1]) {
      const value = filtered[i] * 2;
      merged.push(value);
      gained += value;
      i++;
    } else {
      merged.push(filtered[i]);
    }
  }

  while (merged.length < 4) merged.push(0);
  return { row: merged, gained };
}

export function moveBoardMatrix(board, dir) {
  const next = board.map((r) => [...r]);
  let gained = 0;

  for (let i = 0; i < 4; i++) {
    if (dir === 'left') {
      const res = slideAndMergeRow(next[i]);
      next[i] = res.row;
      gained += res.gained;
    } else if (dir === 'right') {
      const res = slideAndMergeRow(next[i].slice().reverse());
      next[i] = res.row.reverse();
      gained += res.gained;
    } else if (dir === 'up') {
      const col = [next[0][i], next[1][i], next[2][i], next[3][i]];
      const res = slideAndMergeRow(col);
      for (let r = 0; r < 4; r++) next[r][i] = res.row[r];
      gained += res.gained;
    } else if (dir === 'down') {
      const col = [next[3][i], next[2][i], next[1][i], next[0][i]];
      const res = slideAndMergeRow(col);
      for (let r = 0; r < 4; r++) next[r][i] = res.row[3 - r];
      gained += res.gained;
    }
  }

  const changed = JSON.stringify(next) !== JSON.stringify(board);
  return { board: next, gained, changed };
}

export const SIDEBAR_SECTIONS = [
  { id: 'about', label: 'About Me', href: './about.html' },
  { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
  { id: 'projects', label: 'Projects (11)', href: '#projects' },
  { id: 'experience', label: 'Work & Video Reels', href: '#experience' },
  { id: 'education', label: 'Credentials & CCP', href: '#education' },
  { id: 'contact', label: 'Contact & OJT', href: '#contact' },
];

export const MEDIA_SHOWCASE = [
  {
    id: 'fb-reel-1',
    title: 'Viral Reel Edit #1',
    platform: 'Facebook Reels · MP4',
    kind: 'mp4',
    src: './media/fb-reel-1.mp4',
    poster: './media/fb-reel-1.jpg',
    width: 720,
    height: 1280,
    aspect: 'vertical',
  },
  {
    id: 'fb-reel-2',
    title: 'Viral Reel Edit #2',
    platform: 'Facebook Reels · MP4',
    kind: 'mp4',
    src: './media/fb-reel-2.mp4',
    poster: './media/fb-reel-2.jpg',
    width: 720,
    height: 1280,
    aspect: 'vertical',
  },
  {
    id: 'yt-video-1',
    title: 'Steve Lacy — Nothing (Lyric Edit)',
    platform: 'YouTube · TenthTide Vibes',
    kind: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/WMz50zdQq9o?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=WMz50zdQq9o',
    poster: './media/yt-video-1.jpg',
    width: 720,
    height: 900,
    aspect: 'landscape',
  },
  {
    id: 'yt-short-2',
    title: 'Die With A Smile — Performance Edit',
    platform: 'YouTube Shorts · TenthTide Vibes',
    kind: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/womVmTBC6Bw?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/shorts/womVmTBC6Bw',
    poster: './media/yt-short-2.jpg',
    width: 405,
    height: 720,
    aspect: 'vertical',
  },
];

export function isBoardGameOver(board) {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) return false;
      if (r < 3 && board[r][c] === board[r + 1][c]) return false;
      if (c < 3 && board[r][c] === board[r][c + 1]) return false;
    }
  }
  return true;
}

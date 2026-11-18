export const ROLE_SLIDES = [
  'AI & DATA SYSTEMS',
  'FULL-STACK WEB',
  'MOTION GRAPHICS',
  'VIDEO EDITING',
  'ANDROID APPS',
  'DATA ANNOTATION',
  'CYBERSECURITY',
];

export const TECH_STACK_NODES = [
  { id: 'python', name: 'Python', role: 'ML Pipelines & Data', category: 'AI & Data', groupId: 'ai-ml', details: 'Pandas ingestion, NumPy preprocessing & automated dataset builders (FSLAMES, Food Recommender)', icon: 'fa-brands fa-python', color: '#3776ab' },
  { id: 'tensorflow', name: 'TensorFlow & TFLite', role: 'On-Device Models', category: 'AI & Data', groupId: 'ai-ml', details: 'Keras sequence classifiers & quantized TFLite offline mobile inference', icon: 'fa-solid fa-microchip', color: '#e66000' },
  { id: 'mediapipe', name: 'MediaPipe', role: 'Hand & Pose Landmarks', category: 'AI & Data', groupId: 'ai-ml', details: 'Real-time 21-point skeletal & hand tracking from video sign sequences', icon: 'fa-solid fa-hand-sparkles', color: '#3b82f6' },
  { id: 'react', name: 'React + Vite', role: 'Modern Web UI', category: 'Web Stack', groupId: 'web-stack', details: 'Fast component SPAs, interactive estimators & production portals', icon: 'fa-brands fa-react', color: '#0ea5e9' },
  { id: 'kotlin', name: 'Kotlin & Compose', role: 'Native Android Apps', category: 'Mobile', groupId: 'mobile-sec', details: 'Jetpack Compose UI, Firebase Realtime DB & campus apps (U-Eat, PennyWise)', icon: 'fa-brands fa-android', color: '#3b82f6' },
  { id: 'php', name: 'PHP & MySQL', role: 'Relational Backends', category: 'Web Stack', groupId: 'web-stack', details: 'Booking conflict engines, donor registries, POS ledgers & rental systems', icon: 'fa-brands fa-php', color: '#6366f1' },
  { id: 'js', name: 'JavaScript', role: 'Interactive Systems', category: 'Web Stack', groupId: 'web-stack', details: 'ES6+ modular state logic, live filtering & civic service portals', icon: 'fa-brands fa-js', color: '#eab308' },
  { id: 'html5', name: 'HTML5', role: 'Semantic Markup', category: 'Web Stack', groupId: 'web-stack', details: 'Accessible landmarks, forms, native dialogs & static deployment bundles', icon: 'fa-brands fa-html5', color: '#e34f26' },
  { id: 'css3', name: 'CSS3', role: 'Responsive Layouts', category: 'Web Stack', groupId: 'web-stack', details: 'Adaptive CSS Grid systems, dual-theme tokens & fluid mobile breakpoints', icon: 'fa-brands fa-css3-alt', color: '#2563eb' },
  { id: 'github', name: 'Git & GitHub', role: 'Version Control', category: 'Workflow', groupId: 'cloud-media', details: 'Branch workflows, GitHub Pages/Vercel/Cloudflare static CI & team docs', icon: 'fa-brands fa-github', color: 'var(--text-main)' },
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
    previewImg: './previews/fslames.png',
    summary:
      'Offline-capable Filipino Sign Language mobile learning platform with camera-guided practice and on-device TFLite gesture classification.',
    highlights: [
      'Built the backend ML dataset pipeline from ~5,000 curated video and image samples.',
      'Converted sign sequences into MediaPipe hand/pose landmarks for TensorFlow/Keras classifier training.',
      'Exported 2 quantized TFLite models for offline mobile inference with strict participant-level data splits.',
    ],
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
    previewImg: './previews/jonathan.png',
    summary:
      'Full-stack website, package pricing estimator, schedule conflict checker, and client booking portal built for an active photography studio.',
    highlights: [
      'Led and developed a full-stack showcase, quote estimator, availability checker, and booking-request platform contracted for purchase by the studio.',
      'Validated workflows with 7 real users, including studio owners testing bookings and gallery browsing.',
      'Implemented password-protected admin controls and download restrictions to protect studio photos.',
    ],
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
    previewImg: './previews/food-recommender.png',
    summary:
      'Data-driven Filipino recipe recommendation web application backed by a structured Pandas and SQLite ingestion pipeline across 97 recipes and 11 categories.',
    highlights: [
      'Built a data pipeline that collected and processed ~100 Filipino food records with Pandas and SQLite.',
      'Powered a public Streamlit recommendation app with live macro & prep-time filtering tested by 100 real users.',
    ],
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
    previewImg: './previews/barangay-one.png',
    summary:
      'Digital barangay service portal enabling residents to request clearances, indigency certificates, and residency forms with 5-stage live request tracking.',
    highlights: [
      'Streamlined requests for 3 core barangay certificates with transparent 5-stage status tracking from submission to release.',
      'Designed role-aware queues for 3 staff levels plus public community announcements and emergency hotline directories.',
    ],
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
    previewImg: './previews/u-eat.png',
    previewFit: 'contain',
    summary:
      'Streamlined Android food ordering application connecting PHINMA UPang students with campus canteen stalls in real time.',
    highlights: [
      'Developed the Android ordering app for school canteen stalls, featuring customer ordering and stall-owner order management.',
      'Tested with 50 users achieving a 4.5/5 functionality rating and scored 90/100 in Software Development.',
    ],
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
    previewImg: './previews/pennywise.png',
    previewFit: 'contain',
    summary:
      'Modern Android financial literacy app built with Jetpack Compose to help students track savings goals and project future investment value.',
    highlights: [
      'Developed the future-value projection feature and savings goal management experience.',
      'Scored 95/100 in professor evaluation with complete transaction history and financial tips.',
    ],
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
    previewImg: './previews/life-flow.png',
    summary:
      'Healthcare logistics platform streamlining blood donor registration, blood type lookup, and donation event coordination.',
    highlights: [
      'Built donor registration workflows, blood type search filters, educational resources, and event management tools.',
      'Engineered with native PHP and MySQL for fast, reliable relational queries.',
    ],
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
    previewImg: './previews/moya.png',
    summary:
      'Local delivery ordering and routing system built for mineral water refilling operations in Rosario, La Union.',
    highlights: [
      'Implemented real-time ordering, delivery zone mapping, container pricing management, and 1–2 hour dispatch tracking.',
    ],
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
    previewImg: './previews/manga-haven.png',
    summary:
      'Centralized bookstore rental dashboard tracking book inventory, active rentals, automated overdue penalties, and staff activity.',
    highlights: [
      'Designed admin metrics for total manga inventory, active customers, rentals, penalty logs, and employee directories.',
    ],
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
    previewImg: './previews/phinma-ed.png',
    previewFit: 'contain',
    summary:
      'Mobile campus companion app providing PHINMA UPang college directory, interactive school map, scholarship guides, and student profiles.',
    highlights: [
      'Designed mobile navigation flows across Home, School Map, Scholarship, and Student Profile modules.',
    ],
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
    previewImg: './previews/mang-kanor.png',
    summary:
      'Inventory monitoring and point-of-sale analytics web dashboard tailored for local neighborhood sari-sari stores.',
    highlights: [
      'Built 7-day sales bar visualizations, top-selling product charts, customer ledgers, and real-time stock tracking.',
    ],
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

export function buildInquiryPayload({ topic = 'Project Commission', name = '', email = '', message = '' }) {
  const cleanTopic = String(topic).trim() || 'Portfolio Inquiry';
  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanMessage = String(message).trim();
  const subject = `[${cleanTopic}] Inquiry from ${cleanName || 'Visitor'}`;
  const bodyText = `Topic: ${cleanTopic}\nName: ${cleanName}\nReply-To: ${cleanEmail}\n\n${cleanMessage}`;
  const mailtoUrl = `mailto:mereziko@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  return { subject, bodyText, mailtoUrl };
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
  { id: 'about', label: 'About Me' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects (11)' },
  { id: 'experience', label: 'Work & Video Reels' },
  { id: 'education', label: 'Credentials & CCP' },
  { id: 'contact', label: 'Contact & OJT' },
];

export const MEDIA_SHOWCASE = [
  {
    id: 'fb-reel-1',
    title: 'Viral Reel Edit #1',
    platform: 'Facebook Reels · MP4',
    kind: 'mp4',
    src: './media/fb-reel-1.mp4',
    poster: './media/fb-reel-1.jpg',
    aspect: 'vertical',
  },
  {
    id: 'fb-reel-2',
    title: 'Viral Reel Edit #2',
    platform: 'Facebook Reels · MP4',
    kind: 'mp4',
    src: './media/fb-reel-2.mp4',
    poster: './media/fb-reel-2.jpg',
    aspect: 'vertical',
  },
  {
    id: 'yt-video-1',
    title: 'Steve Lacy — Nothing (Lyric Edit)',
    platform: 'YouTube · TenthTide Vibes',
    kind: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/WMz50zdQq9o?autoplay=1&rel=0',
    poster: './media/yt-video-1.jpg',
    aspect: 'landscape',
  },
  {
    id: 'yt-short-2',
    title: 'Die With A Smile — Performance Edit',
    platform: 'YouTube Shorts · TenthTide Vibes',
    kind: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/womVmTBC6Bw?autoplay=1&rel=0',
    poster: './media/yt-short-2.jpg',
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

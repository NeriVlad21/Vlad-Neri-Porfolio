export const MASCOT_NAME = "R2-D2";
export const CHAT_API_URL = "https://vlad-r2d2-chat.mereziko.workers.dev";

const MAX_INPUT_LENGTH = 300;
const API_TIMEOUT_MS = 8000;
const SEND_COOLDOWN_MS = 1500;
const DRAG_THRESHOLD_PX = 6;
const RETURN_DURATION_MS = 600;
const ANNOYANCE_WINDOW_MS = 60_000;
const BUBBLE_COOLDOWN_MS = 900;
const VIEWPORT_MARGIN_PX = 8;

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

const DEV_JOKES = [
  {
    beep: "Bweep-chuckle-boop!",
    translation:
      "Why do developers prefer dark mode? Because light attracts bugs! Speaking of clean builds, Vlad has 11 shipped projects waiting in the archive.",
  },
  {
    beep: "Whirr-bip-bzzzt!",
    translation:
      "A SQL query walks into a cafe, approaches two tables, and asks: 'Can I join you?' Vlad loves SQL too—he wired MySQL and SQLite across 6 of his systems.",
  },
  {
    beep: "Bip-boop-wheee!",
    translation:
      "There are 10 kinds of people in the world: those who understand binary, and those who haven't hired Vlad for their December 2026 OJT yet!",
  },
  {
    beep: "Dweet-chirp-boop!",
    translation:
      "Why did the programmer quit their job? Because they didn't get arrays! Unlike them, Vlad got a 95/100 evaluation on PennyWise and a 1.77 Avg GWA.",
  },
  {
    beep: "Boop-whirr-bweep!",
    translation:
      "To understand recursion, you must first understand recursion. To understand Vlad's work, just click 'Show projects'—no infinite loop required!",
  },
  {
    beep: "Chirp-bip-boooop!",
    translation:
      "There are only two hard problems in computer science: cache invalidation, naming things, and off-by-one errors. Good thing Vlad holds 90% QA accuracy on 2D/3D AI datasets!",
  },
  {
    beep: "Bweeep-tik-tik-boop!",
    translation:
      "'It works on my machine!' is great—until you ship offline TFLite models like Vlad did in FSLAMES so it works on mobile devices too. Want to inspect his builds?",
  },
];

export function pickRandomNoRepeat(items, lastItem = null, rng = Math.random) {
  if (!Array.isArray(items) || items.length === 0) return null;
  if (items.length === 1) return items[0];
  const candidates = items.filter((item) => item !== lastItem);
  const pool = candidates.length > 0 ? candidates : items;
  const idx = Math.min(pool.length - 1, Math.max(0, Math.floor(rng() * pool.length)));
  return pool[idx];
}

export function createAnnoyanceTracker(windowMs = ANNOYANCE_WINDOW_MS) {
  let count = 0;
  let lastDragAt = 0;

  const resolveLevel = (n) => {
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
      return { count, level: resolveLevel(count) };
    },
    getState(now = Date.now()) {
      if (lastDragAt > 0 && now - lastDragAt >= windowMs) {
        count = 0;
        lastDragAt = 0;
      }
      return { count, level: resolveLevel(count) };
    },
    reset() {
      count = 0;
      lastDragAt = 0;
    },
  };
}

export function clampDragOffset(
  rawDx,
  rawDy,
  homeRect,
  viewportWidth,
  viewportHeight,
  margin = VIEWPORT_MARGIN_PX
) {
  const minDx = margin - homeRect.left;
  const maxDx = viewportWidth - margin - homeRect.right;
  const minDy = margin - homeRect.top;
  const maxDy = viewportHeight - margin - homeRect.bottom;

  const dx =
    minDx <= maxDx ? Math.max(minDx, Math.min(maxDx, rawDx)) : 0;
  const dy =
    minDy <= maxDy ? Math.max(minDy, Math.min(maxDy, rawDy)) : 0;

  return { dx, dy };
}

export function computeChatViewportLayout(layoutHeight, vvHeight, vvOffsetTop = 0) {
  const safeLayout = Math.max(0, Number(layoutHeight) || 0);
  const safeVv = Math.max(0, Number(vvHeight) || safeLayout);
  const safeOffset = Math.max(0, Number(vvOffsetTop) || 0);
  const keyboardOffset = Math.max(0, Math.round(safeLayout - (safeVv + safeOffset)));
  const maxSheetHeight = Math.max(
    180,
    Math.min(Math.round(safeVv * 0.8), Math.round(safeVv - 16))
  );
  return {
    keyboardOffset,
    maxSheetHeight,
    visualHeight: Math.round(safeVv),
  };
}

export function pickDragReleaseLine(level, lastText = null, rng = Math.random) {
  const tierLines = DRAG_RELEASE_LINES
    .filter((item) => item.tier === level)
    .map((item) => item.text);
  const pool =
    tierLines.length > 0
      ? tierLines
      : DRAG_RELEASE_LINES.map((item) => item.text);
  return pickRandomNoRepeat(pool, lastText, rng);
}

function formatDroidLine(beep, translation) {
  return `*${beep}* Translation: ${translation}`;
}

function pickNextJoke(history = []) {
  const usedCount = Array.isArray(history)
    ? history.filter((entry) => entry && entry.role === "assistant" && entry.kind === "joke").length
    : 0;
  return DEV_JOKES[usedCount % DEV_JOKES.length];
}

function getScriptedReply(message, history = []) {
  const q = String(message || "").trim().toLowerCase();

  if (!q) {
    return formatDroidLine(
      "Bip-whirr?",
      "My audio sensors picked up static! Ask me about Vlad's projects, tech stack, certifications, December 2026 OJT, or tap 'Tell me a joke'."
    );
  }

  // Jokes
  if (/\b(joke|funny|laugh|humor|humour|pun)\b/.test(q)) {
    const joke = pickNextJoke(history);
    return formatDroidLine(joke.beep, joke.translation);
  }

  // Greetings
  if (/^(hi|hello|hey|yo|sup|hola|kumusta|good\s+(morning|afternoon|evening)|greetings)\b/.test(q)) {
    return formatDroidLine(
      "Bweeep-boop-whirr!",
      `Hello, human! I'm ${MASCOT_NAME}, Vlad's loyal portfolio scout. Vlad is a BS Computer Science student (1.77 Avg GWA) and Certified Cybersecurity Professional with 11 shipped builds—want to check out his projects or talk OJT?`
    );
  }

  // OJT / Internship / Hiring / Availability
  if (/\b(ojt|intern|internship|hire|hiring|available|availability|schedule|dec|december|500|remote|hybrid|workstation|resume|cv)\b/.test(q)) {
    return formatDroidLine(
      "Beep-bweep-whirr!",
      "Vlad is actively open for a ~500-hour Computer Science OJT starting December 2026 (Remote or Hybrid), plus web, AI/data, cybersecurity, or short-form video work. He has a dedicated PC, headset, and fiber connection in Rosario, La Union, and replies within 24 hours—click 'Contact Vlad' to reach him right now!"
    );
  }

  // Specific projects or general projects inquiry
  if (/\b(fslames|sign language|thesis|tflite|mediapipe)\b/.test(q)) {
    return formatDroidLine(
      "Bweeep-chirp-boop!",
      "FSLAMES is Vlad's thesis highlight (2025–2026): an offline-capable Filipino Sign Language mobile learning app trained on ~5,000 samples across 131 sign classes using Python, MediaPipe, TensorFlow/Keras, and 2 quantized TFLite models. Scroll to Projects to inspect the full case study!"
    );
  }

  if (/\b(jonathan|photography|studio|booking)\b/.test(q)) {
    return formatDroidLine(
      "Whirr-boop-beep!",
      "Jonathan Photography System (2026) is Vlad's contracted full-stack studio platform built with React, Vite, PHP, and MySQL—complete with a package pricing estimator, schedule conflict checker, admin controls, and validation from 7 real users. Check it out in the Projects section!"
    );
  }

  if (/\b(food|recipe|panlasang|lutuin|streamlit|recommender)\b/.test(q)) {
    return formatDroidLine(
      "Bip-bweep-boop!",
      "Filipino Food Recommender (2025) pairs Python, Pandas, SQLite, and Streamlit to serve 97 Filipino recipes across 11 categories, tested live by 100 real users! Head to Projects to try the live site."
    );
  }

  if (/\b(project|projects|build|builds|portfolio|work|app|apps|android|barangay|pennywise|u-eat|ueat|life flow|moya|manga|kanor|phinma)\b/.test(q)) {
    return formatDroidLine(
      "Bweeep-boop-beep!",
      "Vlad has shipped 11 web, Android, and ML builds—led by FSLAMES (offline Filipino Sign Language thesis), Jonathan Photography System (React/PHP/MySQL booking portal), and Filipino Food Recommender (97 recipes, 100 testers). Use the button below to jump straight to Projects!"
    );
  }

  // Certifications & Education
  if (/\b(cert|certs|certificate|certificates|certification|certifications|credential|credentials|ccp|cyber|cybersecurity|zuitt|cisco|hp|udemy|excel|degree|school|college|gwa|gpa|education|upang|aws|django)\b/.test(q)) {
    return formatDroidLine(
      "Chirp-bweeep-boop!",
      "Vlad is pursuing a BS in Computer Science at PHINMA UPang College of Urdaneta (2023–Expected 2027) with a 1.77 Avg GWA and 1.57 Best Sem. He holds the Appkademiya Certified Cybersecurity Professional (CCP) credential, Zuitt's 80-hour Python, Django & AWS certificate (Cert No. BEC10-016), Cisco Data Analytics & Data Science, HP LIFE Cybersecurity, and Udemy Excel certificates—definitely worth a look in Credentials!"
    );
  }

  // Tech stack / skills
  if (/\b(stack|tech|skill|skills|language|languages|python|react|php|mysql|kotlin|compose|firebase|javascript|html|css|pandas|tensorflow|linux|git|github|figma|davinci|capcut)\b/.test(q)) {
    return formatDroidLine(
      "Whirr-bip-bweep!",
      "Vlad's toolkit comes straight from real builds: Python, Pandas, TensorFlow/Keras, TFLite, MediaPipe, SQLite & Streamlit for AI/Data; React, Vite, PHP, MySQL, JavaScript, HTML5, CSS3 & Cloudflare Pages for Web; Kotlin, Jetpack Compose, Firebase & Android Studio for Android; plus Django, AWS (EC2, S3, Lambda), Git/GitHub, Linux, Figma, DaVinci Resolve, and CapCut!"
    );
  }

  // Experience & Video editing
  if (/\b(experience|remotasks|annotation|label|labeling|video|edit|editing|reel|reels|youtube|tenthtide|social media|facebook)\b/.test(q)) {
    return formatDroidLine(
      "Boop-dweet-whirr!",
      "Vlad bridges AI data quality and media production: he labels and QAs 2D & 3D perception datasets at Remotasks with 90% accuracy (Jul 2025–Present), and manages/edits short-form content for a 1.3M+ follower Facebook page plus YouTube's TenthTide Vibes (1.5K+ subscribers). Check out the Experience & Media reels right on this page!"
    );
  }

  // Contact / Reach out
  if (/\b(contact|email|mail|phone|call|reach|message|talk|linkedin|location|where|rosario|la union)\b/.test(q)) {
    return formatDroidLine(
      "Beep-boop-chirp!",
      "You can reach Vlad at mereziko@gmail.com, by phone at 0945 499 8054, or through the Contact form on this page—he's based in Rosario, La Union and replies within 24 hours. Use the button below whenever you're ready to jump to the form!"
    );
  }

  // Who are you / about Vlad
  if (/\b(who\s+are\s+you|what\s+are\s+you|your\s+name|about\s+vlad|about\s+him|about\s+you|vlad|mikael|neri|droid|mascot|r2-?d2)\b/.test(q)) {
    return formatDroidLine(
      "Bweep-whirr-boop!",
      `I'm ${MASCOT_NAME}, Vlad's pocket astromech promoter! Mikael Vladimir 'Vlad' Neri is a CS student (1.77 GWA), Certified Cybersecurity Professional, 2D/3D AI data annotator (90% accuracy), and video editor based in Rosario, La Union—fluent in English (C1/C2), Filipino, and Bisaya. Ready to explore his projects or message him?`
    );
  }

  // Unknown question redirect
  return formatDroidLine(
    "Bwooop-whirr-bip...",
    "My memory banks only hold Vlad's verified portfolio telemetry, so I don't want to guess on that one! Drop your question directly in the Contact form below (or email mereziko@gmail.com) and Vlad will get back to you within 24 hours."
  );
}

function buildApiHistory(history = []) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((entry) => entry && (entry.role === "user" || entry.role === "assistant"))
    .map((entry) => ({
      role: entry.role,
      content: String(entry.text ?? entry.content ?? "").trim().slice(0, MAX_INPUT_LENGTH),
    }))
    .filter((entry) => entry.content.length > 0)
    .slice(-6);
}

/**
 * Single async reply entrypoint.
 * POSTs { message, history } (last 6 turns) to CHAT_API_URL with an 8-second
 * timeout, and silently falls back to the scripted replies if CHAT_API_URL is
 * still a placeholder, the request fails, returns an error, or times out.
 * @param {string} message
 * @param {Array<{role: string, text?: string, content?: string, kind?: string}>} [history]
 * @param {{apiUrl?: string, fetchImpl?: typeof fetch, timeoutMs?: number}} [options]
 * @returns {Promise<string>}
 */
export async function getReply(message, history = [], options = {}) {
  const cleanMessage = String(message || "").trim().slice(0, MAX_INPUT_LENGTH);
  const apiUrl = String(options.apiUrl ?? CHAT_API_URL).trim();
  const fetchImpl = options.fetchImpl ?? (typeof fetch === "function" ? fetch : null);
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : API_TIMEOUT_MS;

  if (
    !cleanMessage ||
    !apiUrl ||
    apiUrl.includes("REPLACE") ||
    !/^https?:\/\//i.test(apiUrl) ||
    typeof fetchImpl !== "function"
  ) {
    return getScriptedReply(cleanMessage, history);
  }

  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

  try {
    const res = await fetchImpl(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: cleanMessage,
        history: buildApiHistory(history),
      }),
      signal: controller ? controller.signal : undefined,
    });

    if (!res || !res.ok) {
      return getScriptedReply(cleanMessage, history);
    }

    const data = await res.json();
    const reply = typeof data?.reply === "string" ? data.reply.trim() : "";
    if (!reply) {
      return getScriptedReply(cleanMessage, history);
    }
    return reply;
  } catch {
    return getScriptedReply(cleanMessage, history);
  } finally {
    if (timeoutId !== null) clearTimeout(timeoutId);
  }
}

/**
 * Web Audio API synthesizer for short astromech chirps/beeps.
 * Always OFF by default; only sounds after explicit user toggle.
 */
function createDroidSynth() {
  let ctx = null;

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
        { from: 760, to: 1180, dur: 0.075, type: "sine" },
        { from: 1320, to: 980, dur: 0.065, type: "triangle" },
        { from: 1120, to: 1640, dur: 0.09, type: "sine" },
      ]);
    },
    playReply() {
      const variants = [
        [
          { from: 920, to: 1480, dur: 0.07, type: "sine" },
          { from: 680, to: 540, dur: 0.06, type: "triangle" },
          { from: 1220, to: 1760, dur: 0.085, type: "sine" },
        ],
        [
          { from: 1380, to: 880, dur: 0.07, type: "sine" },
          { from: 1020, to: 1520, dur: 0.08, type: "triangle" },
        ],
        [
          { from: 820, to: 1240, dur: 0.06, type: "triangle" },
          { from: 1460, to: 1100, dur: 0.065, type: "sine" },
          { from: 980, to: 1580, dur: 0.075, type: "sine" },
        ],
      ];
      const pick = variants[Math.floor(Math.random() * variants.length)];
      playSequence(pick);
    },
    playDragRelease(level = "mild") {
      if (level === "angry") {
        // Lower pitch, longer annoyed brrt
        playSequence([
          { from: 220, to: 145, dur: 0.14, type: "sawtooth", vol: 0.045, gap: 0.02 },
          { from: 175, to: 105, dur: 0.18, type: "sawtooth", vol: 0.05 },
        ]);
      } else if (level === "grumpy") {
        // Mid pitch, medium grumpy brrt
        playSequence([
          { from: 350, to: 230, dur: 0.11, type: "sawtooth", vol: 0.04, gap: 0.02 },
          { from: 280, to: 195, dur: 0.1, type: "triangle", vol: 0.045 },
        ]);
      } else {
        // Higher pitch, shorter mild brrt
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

      <!-- Soft ground shadow -->
      <ellipse class="mascot-shadow" cx="48" cy="105" rx="27" ry="4.5" fill="rgba(74, 128, 224, 0.28)"/>

      <g class="mascot-chassis">
        <!-- Short astromech legs & feet -->
        <g class="mascot-legs">
          <!-- Left leg -->
          <g class="mascot-leg mascot-leg-left">
            <rect x="14" y="54" width="11" height="37" rx="4" fill="#d7dfeb" stroke="#62728a" stroke-width="1.2"/>
            <rect x="17" y="61" width="5" height="19" rx="2" fill="url(#droidBlueGrad)"/>
            <path d="M11 91 h17 l2 9 H9 Z" fill="#cfd8e6" stroke="#62728a" stroke-width="1.2" stroke-linejoin="round"/>
          </g>
          <!-- Right leg -->
          <g class="mascot-leg mascot-leg-right">
            <rect x="71" y="54" width="11" height="37" rx="4" fill="#c7d2e2" stroke="#62728a" stroke-width="1.2"/>
            <rect x="74" y="61" width="5" height="19" rx="2" fill="url(#droidBlueGrad)"/>
            <path d="M68 91 h17 l2 9 H66 Z" fill="#c1cce0" stroke="#62728a" stroke-width="1.2" stroke-linejoin="round"/>
          </g>
          <!-- Center stabilizing foot -->
          <g class="mascot-leg mascot-leg-center">
            <rect x="42" y="88" width="12" height="7" rx="2" fill="#b4c0d2" stroke="#62728a" stroke-width="1.1"/>
            <path d="M39 95 h18 l2 6 H37 Z" fill="#cfd8e6" stroke="#62728a" stroke-width="1.1" stroke-linejoin="round"/>
          </g>
        </g>

        <!-- Barrel Body -->
        <g class="mascot-body">
          <rect x="24" y="45" width="48" height="44" rx="7" fill="url(#droidBodyGrad)" stroke="#62728a" stroke-width="1.3"/>
          <!-- Upper blue chest bars -->
          <rect x="31" y="51" width="34" height="5.5" rx="2.2" fill="url(#droidBlueGrad)"/>
          <rect x="34" y="59.5" width="28" height="4.5" rx="2" fill="url(#droidBlueGrad)"/>
          <!-- Side blue panel stripes -->
          <rect x="27" y="67" width="5" height="15" rx="1.8" fill="url(#droidBlueGrad)"/>
          <rect x="64" y="67" width="5" height="15" rx="1.8" fill="url(#droidBlueGrad)"/>
          <!-- Center utility vent & red accent -->
          <rect x="37" y="68" width="22" height="14" rx="3" fill="#e5ecf5" stroke="#8595ad" stroke-width="1"/>
          <line x1="41" y1="72" x2="55" y2="72" stroke="#4a74b8" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="41" y1="76" x2="55" y2="76" stroke="#4a74b8" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="56.5" cy="61.7" r="2.1" fill="#e04855"/>
          <rect x="31" y="84" width="34" height="3" rx="1.5" fill="#7d8da6"/>
        </g>

        <!-- Rounded Silver-White Dome Head (rotates toward cursor) -->
        <g class="mascot-dome-group">
          <!-- Small top sensor antenna for twitch animation -->
          <g class="mascot-antenna">
            <line x1="60" y1="24" x2="64.5" y2="14.5" stroke="#8fa1bd" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="65.2" cy="13.5" r="2.2" fill="#4e89e8" stroke="#d7e6ff" stroke-width="0.8"/>
          </g>

          <path d="M24 45 A24 24 0 0 1 72 45 Z" fill="url(#droidDomeGrad)" stroke="#62728a" stroke-width="1.3"/>
          <!-- Dome blue panels -->
          <path d="M35 23.8 A24 24 0 0 1 61 23.8 L57.5 31 H38.5 Z" fill="url(#droidBlueGrad)"/>
          <rect x="27" y="36" width="8.5" height="6" rx="1.5" fill="url(#droidBlueGrad)"/>
          <rect x="60.5" y="36" width="8.5" height="6" rx="1.5" fill="url(#droidBlueGrad)"/>
          <rect x="38" y="37.5" width="20" height="4.5" rx="1.5" fill="#214686"/>

          <!-- Small red holo indicator on dome -->
          <circle cx="54.5" cy="39.7" r="1.8" fill="#e44b59"/>

          <!-- Main Glowing Camera Eye -->
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

function renderFormattedReply(text) {
  const frag = document.createDocumentFragment();
  const raw = String(text || "").trim();
  const match = raw.match(/^\*([^*\n]+)\*\s*([\s\S]*)$/);
  if (match) {
    const beepLine = document.createElement("span");
    beepLine.className = "mascot-msg-beep";
    beepLine.textContent = match[1].trim();
    frag.appendChild(beepLine);

    const restRaw = match[2].trim();
    const translationText = restRaw.replace(/^Translation:\s*/i, "").trim();
    if (translationText) {
      const label = document.createElement("span");
      label.className = "mascot-msg-label";
      label.textContent = "Translation";
      frag.appendChild(label);

      const rest = document.createElement("span");
      rest.className = "mascot-msg-translation";
      rest.textContent = translationText;
      frag.appendChild(rest);
    }
    return frag;
  }
  frag.appendChild(document.createTextNode(raw));
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

export function initMascot() {
  if (typeof document === "undefined") return null;
  if (document.getElementById("mascot-root")) return null;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice =
    window.matchMedia("(hover: none), (pointer: coarse)").matches ||
    "ontouchstart" in window;

  const synth = createDroidSynth();
  const annoyance = createAnnoyanceTracker(ANNOYANCE_WINDOW_MS);

  let soundEnabled = false;
  let chatOpen = false;
  let isBusy = false;
  let lastSentAt = 0;
  let cooldownTimer = null;
  let bubbleTimer = null;
  let bubbleHideTimer = null;
  let lastBubbleShownAt = 0;
  let touchIdleTimer = null;
  let isNearCursor = false;
  let touchBubbleShown = false;

  // Reaction non-repeat memory
  let lastHoverLine = null;
  let lastDragLine = null;
  let lastAlarmedLine = null;
  let lastReactionAnim = null;
  let reactionAnimTimer = null;
  let redEyeTimer = null;
  let angryShakeTimer = null;
  let annoyanceResetTimer = null;

  // Drag & spring-return state
  let pointerDownState = null;
  let isDragging = false;
  let isReturning = false;
  let returnTimer = null;
  let landBounceTimer = null;
  let suppressNextClick = false;
  let currentDragDx = 0;
  let currentDragDy = 0;

  const history = [];

  // Root fixed container
  const root = document.createElement("div");
  root.id = "mascot-root";
  root.className = "mascot-root";

  // Speech bubble (hover / alarmed drag / drag-release)
  const bubble = document.createElement("div");
  bubble.id = "mascot-bubble";
  bubble.className = "mascot-bubble";
  bubble.setAttribute("role", "status");
  bubble.setAttribute("aria-live", "polite");
  bubble.hidden = true;

  // Chat popup window
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
            <span class="mascot-online-dot" aria-label="Online" title="Online"></span>
          </div>
          <p class="mascot-chat-sub">Vlad's Astromech Guide</p>
        </div>
      </div>
      <div class="mascot-chat-controls">
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
      <div class="mascot-chips" role="group" aria-label="Quick replies">
        <button type="button" class="mascot-chip" data-chip="projects">Show projects</button>
        <button type="button" class="mascot-chip" data-chip="joke">Tell me a joke</button>
        <button type="button" class="mascot-chip" data-chip="contact">Contact Vlad</button>
      </div>
      <form id="mascot-form" class="mascot-form" novalidate>
        <input id="mascot-input" class="mascot-input" type="text" autocomplete="off" maxlength="300" placeholder="Ask about projects, OJT, certs..." aria-label="Message ${MASCOT_NAME}">
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

  root.append(bubble, chat, trigger);
  document.body.append(backdrop, root);

  const domeGroup = trigger.querySelector(".mascot-dome-group");
  const messagesEl = chat.querySelector("#mascot-messages");
  const soundBtn = chat.querySelector("#mascot-sound-btn");
  const closeBtn = chat.querySelector("#mascot-close-btn");
  const formEl = chat.querySelector("#mascot-form");
  const inputEl = chat.querySelector("#mascot-input");
  const sendBtn = chat.querySelector("#mascot-send-btn");
  const chipBtns = Array.from(chat.querySelectorAll(".mascot-chip"));

  const contactForm = document.querySelector(".contact-form-card");
  let isContactFormFocused = false;
  const syncClearance = () => {
    if (!contactForm) return;
    if (chatOpen || isDragging || isReturning) {
      root.classList.remove("is-form-clear");
      return;
    }
    if (isContactFormFocused) {
      root.classList.add("is-form-clear");
      return;
    }
    const fRect = contactForm.getBoundingClientRect();
    // Measure resting bottom-right zone so hiding the droid doesn't oscillate
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
    // Force reflow so rapid consecutive animations restart cleanly
    void trigger.offsetWidth;
    trigger.classList.add(`mascot-anim-${anim}`);
    reactionAnimTimer = window.setTimeout(() => {
      trigger.classList.remove(`mascot-anim-${anim}`);
    }, 900);
    return anim;
  };

  const clearFloatingBubblePos = () => {
    bubble.classList.remove("is-drag-floating");
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
    bubble.classList.remove("is-visible", "is-alarmed-bubble", "is-angry-bubble");
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
    } = {}
  ) => {
    if (chatOpen) return false;
    const now = Date.now();
    if (!force && now - lastBubbleShownAt < BUBBLE_COOLDOWN_MS) {
      return false;
    }
    lastBubbleShownAt = now;
    clearTimeout(bubbleTimer);
    clearTimeout(bubbleHideTimer);

    bubble.classList.remove("is-alarmed-bubble", "is-angry-bubble");
    if (variant === "alarmed") bubble.classList.add("is-alarmed-bubble");
    if (variant === "angry") bubble.classList.add("is-angry-bubble");

    bubble.textContent = "";
    bubble.appendChild(renderBubbleLine(line));
    bubble.hidden = false;

    if (floating) {
      positionBubbleNearDraggedDroid();
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
            bubble.classList.remove("is-alarmed-bubble", "is-angry-bubble");
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

  const navigateToSection = (sectionId) => {
    if (window.innerWidth < 768) {
      closeChat({ restoreFocus: false });
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      window.location.href = `./index.html#${sectionId}`;
    }
  };

  const appendMessage = (
    role,
    text,
    kind = "reply",
    { instant = false, animate = true, action = null } = {}
  ) => {
    const wasAtBottom = isMessagesAtBottom();
    const row = document.createElement("div");
    row.className = animate
      ? `mascot-msg mascot-msg-${role}`
      : `mascot-msg mascot-msg-${role} mascot-msg-no-anim`;

    const bodyEl = document.createElement("div");
    bodyEl.className = "mascot-msg-bubble";
    if (role === "assistant") {
      bodyEl.appendChild(renderFormattedReply(text));
      if (action && action.label && action.sectionId) {
        const actionBtn = document.createElement("button");
        actionBtn.type = "button";
        actionBtn.className = "mascot-reply-action";
        actionBtn.textContent = action.label;
        const arrow = document.createElement("span");
        arrow.className = "mascot-reply-action-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        actionBtn.appendChild(arrow);
        actionBtn.addEventListener("click", () => navigateToSection(action.sectionId));
        bodyEl.appendChild(actionBtn);
      }
    } else {
      bodyEl.textContent = text;
    }

    row.appendChild(bodyEl);
    messagesEl.appendChild(row);
    scrollMessagesToBottom({ smooth: !instant && wasAtBottom });
    history.push({ role, text, kind });
  };

  // Seed initial welcome greeting
  appendMessage(
    "assistant",
    formatDroidLine(
      "Bweeep-boop-whirr!",
      `I'm ${MASCOT_NAME}, Vlad's loyal astromech! Ask me about his 11 shipped builds, certifications, or December 2026 OJT—or tap a quick button below.`
    ),
    "greeting",
    { instant: true, animate: false }
  );

  const openChat = () => {
    if (chatOpen || isDragging || isReturning) return;
    chatOpen = true;
    hideBubble();
    chat.hidden = false;
    backdrop.hidden = false;
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
    if (!chatOpen) return;
    chatOpen = false;
    chat.hidden = true;
    backdrop.hidden = true;
    root.classList.remove("is-chat-open");
    trigger.setAttribute("aria-expanded", "false");
    chat.style.removeProperty("--mascot-kb-offset");
    chat.style.removeProperty("--mascot-vv-height");
    syncClearance();
    if (restoreFocus) trigger.focus();
  };

  const syncSendAvailability = () => {
    const remaining = SEND_COOLDOWN_MS - (Date.now() - lastSentAt);
    const locked = isBusy || remaining > 0;
    if (inputEl) inputEl.disabled = isBusy;
    if (sendBtn) sendBtn.disabled = locked;
    for (const chip of chipBtns) {
      chip.disabled = locked;
    }
    if (remaining > 0) {
      clearTimeout(cooldownTimer);
      cooldownTimer = window.setTimeout(syncSendAvailability, remaining + 20);
    }
  };

  const showTypingIndicator = () => {
    const wasAtBottom = isMessagesAtBottom();
    const row = document.createElement("div");
    row.className = "mascot-msg mascot-msg-assistant mascot-msg-typing";
    row.setAttribute("role", "status");
    row.setAttribute("aria-label", `${MASCOT_NAME} is beeping`);

    const bodyEl = document.createElement("div");
    bodyEl.className = "mascot-msg-bubble";

    const dotsWrap = document.createElement("span");
    dotsWrap.className = "mascot-typing-dots";
    dotsWrap.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement("span");
      dot.className = "mascot-typing-dot";
      dotsWrap.appendChild(dot);
    }

    const srLabel = document.createElement("span");
    srLabel.className = "sr-only";
    srLabel.textContent = `${MASCOT_NAME} is beeping...`;

    bodyEl.append(dotsWrap, srLabel);
    row.appendChild(bodyEl);
    messagesEl.appendChild(row);
    scrollMessagesToBottom({ smooth: wasAtBottom });
    return row;
  };

  const sendUserMessage = async (rawText, { kindHint = "reply", action = null } = {}) => {
    const text = String(rawText || "").trim().slice(0, MAX_INPUT_LENGTH);
    const now = Date.now();
    if (!text || isBusy || now - lastSentAt < SEND_COOLDOWN_MS) return false;

    isBusy = true;
    lastSentAt = now;
    syncSendAvailability();

    // Snapshot prior history before appending current user turn so the Worker
    // receives up to 6 prior turns without duplicating the current message.
    const priorHistory = history.slice();
    appendMessage("user", text, "user");
    const typingEl = showTypingIndicator();

    try {
      const minTypingWait = reducedMotion
        ? Promise.resolve()
        : new Promise((resolve) => window.setTimeout(resolve, 220));
      const [reply] = await Promise.all([getReply(text, priorHistory), minTypingWait]);
      typingEl.remove();
      const isJoke = /\b(joke|funny|laugh|humor|humour|pun)\b/i.test(text);
      appendMessage("assistant", reply, isJoke ? "joke" : kindHint, { action });
      if (soundEnabled) synth.playReply();
      return true;
    } finally {
      if (typingEl.isConnected) typingEl.remove();
      isBusy = false;
      syncSendAvailability();
      if (chatOpen && inputEl && document.activeElement === document.body) {
        inputEl.focus();
      }
    }
  };

  // Show annoyed reaction after returning home from a drag
  const performPostDragReaction = () => {
    const { level } = annoyance.recordDrag(Date.now());
    trigger.dataset.annoyance = level;
    scheduleAnnoyanceReset();

    const line = pickDragReleaseLine(level, lastDragLine);
    lastDragLine = line;

    // Brief sound effect ONLY when user explicitly enabled sound
    if (soundEnabled) {
      synth.playDragRelease(level);
    }

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
    // Trigger springy ~600ms return transition to home (0, 0)
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

    // Ensure home rect is measured from the un-transformed resting position
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
        // ignore capture failures on synthetic events
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
      if (chatOpen) {
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

  // Safety: if pointer leaves the browser window or window loses focus while dragging, fly back
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

  // Trigger click (< 6px drag or keyboard Enter/Space opens/closes chat)
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

  closeBtn.addEventListener("click", () => closeChat({ restoreFocus: true }));
  backdrop.addEventListener("click", () => closeChat({ restoreFocus: true }));

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

  // Quick-reply chips: reply inside chat only — never auto-scroll the page
  for (const chip of chipBtns) {
    chip.addEventListener("click", () => {
      const actionType = chip.getAttribute("data-chip");
      if (actionType === "projects") {
        sendUserMessage("Show projects", {
          action: { label: "Go to projects", sectionId: "projects" },
        });
      } else if (actionType === "joke") {
        sendUserMessage("Tell me a joke", { kindHint: "joke" });
      } else if (actionType === "contact") {
        sendUserMessage("Contact Vlad", {
          action: { label: "Go to contact form", sectionId: "contact" },
        });
      }
    });
  }

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
        if (chatOpen || isDragging || isReturning) {
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
    // Touch devices: show bubble ONCE after 8 seconds idle, then never again
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
          if (touchBubbleShown || chatOpen || isDragging || isReturning) return;
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

  // Keep mascot from ever covering the contact form on narrow/short viewports
  if (contactForm && "IntersectionObserver" in window) {
    window.addEventListener("scroll", syncClearance, { passive: true });
    requestAnimationFrame(syncClearance);
  }

  return { openChat, closeChat, getReply };
}

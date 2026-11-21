import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MASCOT_NAME,
  CHAT_API_URL,
  VLAD_CONFIRMED,
  DRAG_RELEASE_LINES,
  HOVER_LINES,
  REACTION_ANIMATIONS,
  GAME_2048_REACTIONS,
  DEV_JOKES,
  PROJECTS_KB,
  getReply,
  pickRandomNoRepeat,
  pickDragReleaseLine,
  createAnnoyanceTracker,
  clampDragOffset,
  createConversationState,
  trimHistoryForStorage,
  buildApiHistory,
  createGame2048ReactionPicker,
  extractVisitorName,
  resolveLocalTurn,
  buildScriptedStructuredReply,
  fetchWorkerTurn,
} from '../public/assets/mascot.js';

const BEEP_FORMAT_RE = /^\*[^*]+\*\s+Translation:\s+\S/;
const BUBBLE_FORMAT_RE = /^\*[^*]+\*\s+\S/;
const FORBIDDEN_SW_QUOTES = [
  'may the force',
  'help me, obi-wan',
  "these aren't the droids",
  'bad feeling about this',
  'i am your father',
  'do or do not',
];

const OFFLINE_OPTS = { apiUrl: 'https://REPLACE-WITH-MY-WORKER-URL' };

test('MASCOT_NAME, live CHAT_API_URL, and VLAD_CONFIRMED config with 8 null fields are exported', () => {
  assert.equal(MASCOT_NAME, 'R2-D2');
  assert.equal(CHAT_API_URL, 'https://vlad-r2d2-chat.mereziko.workers.dev');

  const expectedKeys = [
    'weakness',
    'whyCS',
    'fiveYearGoal',
    'salaryExpectation',
    'failureLesson',
    'conflictStory',
    'relocation',
    'references',
  ];
  assert.deepEqual(Object.keys(VLAD_CONFIRMED).sort(), expectedKeys.slice().sort());
  for (const key of expectedKeys) {
    assert.equal(VLAD_CONFIRMED[key], null, `VLAD_CONFIRMED.${key} must default to null`);
  }
});

test('getReply returns a Promise formatted with italic beep line and Translation prefix', async () => {
  const queries = [
    'Hello!',
    'Show projects',
    'Tell me about FSLAMES',
    'What tech stack does Vlad use?',
    'Tell me about his certifications and GWA',
    'Is Vlad available for OJT?',
    'How can I contact Vlad?',
    'What is his experience with video editing?',
    'Tell me a joke',
    'What is the 2048 game?',
    'Why should we hire Vlad?',
    'What is the weather on Mars?',
  ];

  for (const q of queries) {
    const promise = getReply(q, [], OFFLINE_OPTS);
    assert.ok(promise instanceof Promise, `getReply("${q}") must return a Promise`);
    const reply = await promise;
    assert.match(reply, BEEP_FORMAT_RE, `Reply should follow *beep* Translation: format: ${reply}`);
    assert.ok(!reply.includes('[ADD'), 'Reply must never expose placeholder text');
    const lower = reply.toLowerCase();
    for (const banned of FORBIDDEN_SW_QUOTES) {
      assert.ok(!lower.includes(banned), `Reply must not quote Star Wars dialogue: ${banned}`);
    }
  }
});

test('Conversation memory keeps last 20 turns, sends last 8 to API, and extracts visitor names safely', () => {
  const twentyFive = Array.from({ length: 25 }, (_, idx) => ({
    role: idx % 2 === 0 ? 'user' : 'assistant',
    content: `Msg ${idx + 1}`,
  }));

  const stored = trimHistoryForStorage(twentyFive);
  assert.equal(stored.length, 20);
  assert.equal(stored[0].content, 'Msg 6');
  assert.equal(stored[19].content, 'Msg 25');

  const forApi = buildApiHistory(stored);
  assert.equal(forApi.length, 8);
  assert.equal(forApi[0].content, 'Msg 18');
  assert.equal(forApi[7].content, 'Msg 25');

  assert.equal(extractVisitorName('Hi, my name is Maya'), 'Maya');
  assert.equal(extractVisitorName("I'm Alex"), 'Alex');
  assert.equal(extractVisitorName("I'm looking for an intern"), null);
  assert.equal(extractVisitorName("I'm interested in FSLAMES"), null);
  assert.equal(extractVisitorName("I'm good"), null);
});

test('getReply POSTs {message, history (last 8), context} to configured Worker URL and falls back silently on failure or timeout', async () => {
  let capturedUrl = '';
  let capturedPayload = null;
  const mockHistory = Array.from({ length: 10 }, (_, idx) => ({
    role: idx % 2 === 0 ? 'user' : 'assistant',
    content: `Turn ${idx + 1}`,
  }));

  const workerReply = await getReply('Show projects', mockHistory, {
    apiUrl: 'https://r2d2.example.workers.dev',
    context: {
      pendingOffer: { type: 'show_projects', label: 'Show projects', payload: null },
      lastTopic: 'projects',
      page: 'home',
    },
    fetchImpl: async (url, init) => {
      capturedUrl = url;
      capturedPayload = JSON.parse(init.body);
      return new Response(
        JSON.stringify({ reply: '*Chirp-beep!* Translation: Worker response active!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    },
  });

  assert.equal(capturedUrl, 'https://r2d2.example.workers.dev');
  assert.equal(capturedPayload.message, 'Show projects');
  assert.equal(capturedPayload.history.length, 8);
  assert.deepEqual(capturedPayload.history[0], { role: 'user', content: 'Turn 3' });
  assert.deepEqual(capturedPayload.context, {
    pendingOffer: { type: 'show_projects', label: 'Show projects', payload: null },
    lastTopic: 'projects',
    page: 'home',
  });
  assert.equal(workerReply, '*Chirp-beep!* Translation: Worker response active!');

  // Non-OK HTTP status -> silent scripted fallback
  const errFallback = await getReply('When is Vlad available for OJT?', [], {
    apiUrl: 'https://r2d2.example.workers.dev',
    fetchImpl: async () => new Response(JSON.stringify({ error: 'rate limited' }), { status: 429 }),
  });
  assert.match(errFallback, /500-hour/i);
  assert.match(errFallback, BEEP_FORMAT_RE);

  // Timeout (> timeoutMs) -> silent scripted fallback
  const timeoutFallback = await getReply('Tell me about FSLAMES', [], {
    apiUrl: 'https://r2d2.example.workers.dev',
    timeoutMs: 25,
    fetchImpl: (_url, init) =>
      new Promise((_resolve, reject) => {
        init.signal.addEventListener('abort', () => {
          const e = new Error('Aborted');
          e.name = 'AbortError';
          reject(e);
        });
      }),
  });
  assert.match(timeoutFallback, /FSLAMES/i);
  assert.match(timeoutFallback, BEEP_FORMAT_RE);
});

test('resolveLocalTurn handles English and Filipino/Bisaya AGREE and DECLINE locally before API', () => {
  const agreePhrases = [
    'okay', 'ok', 'yes', 'yep', 'sure', 'agreed', 'sounds good',
    'go', 'do it', "let's go", 'please', 'show me', 'alright',
    'oo', 'sige', 'game', 'ayos', 'o sige', 'dali',
  ];

  for (const phrase of agreePhrases) {
    const state = createConversationState();
    state.pendingOffer = { type: 'open_project', label: 'Open FSLAMES', payload: 'fslames' };
    const result = resolveLocalTurn(phrase, state, { page: 'home' });
    assert.ok(result, `Expected local resolution for AGREE "${phrase}"`);
    assert.equal(result.executeAction?.type, 'open_project', `AGREE "${phrase}" should execute pendingOffer`);
    assert.equal(result.executeAction?.payload, 'fslames');
    assert.match(result.reply, BEEP_FORMAT_RE);
  }

  // AGREE with no pendingOffer -> asks what they'd like + 3 chips
  const emptyState = createConversationState();
  const noOfferAgree = resolveLocalTurn('okay', emptyState, { page: 'home' });
  assert.ok(noOfferAgree);
  assert.ok(!noOfferAgree.executeAction);
  assert.equal(noOfferAgree.chips.length, 3);

  // DECLINE in English + Filipino/Bisaya -> clears pendingOffer, suggests 2 alternatives, does not re-push declined offer
  const declinePhrases = ['no', 'nope', 'not now', 'later', 'maybe later', 'hindi', 'dili', 'ayoko'];
  for (const phrase of declinePhrases) {
    const state = createConversationState();
    state.pendingOffer = { type: 'open_game', label: 'Play 2048', payload: '' };
    const result = resolveLocalTurn(phrase, state, { page: 'home' });
    assert.ok(result, `Expected local resolution for DECLINE "${phrase}"`);
    assert.ok(!result.executeAction);
    assert.notEqual(result.pendingOffer?.type, 'open_game');
    assert.ok(result.chips.length >= 2);
    assert.match(result.reply, BEEP_FORMAT_RE);
  }
});

test('resolveLocalTurn handles layered follow-ups (tell me more / go on / next / second one / which one is best) and social/meta turns', () => {
  const state = createConversationState();
  const intro = buildScriptedStructuredReply('Tell me about FSLAMES', [], state, { page: 'home' });
  state.lastTopic = intro.topic;
  state.topicDepth = intro.topicDepth;
  state.pendingOffer = intro.pendingOffer;
  state.lastAssistantTranslation = intro.reply;
  assert.ok(!intro.executeAction, 'Passive project question must not auto-open modal');

  const seenReplies = new Set([intro.reply]);
  for (const followUp of ['tell me more', 'go on', 'next']) {
    const step = resolveLocalTurn(followUp, state, { page: 'home' });
    assert.ok(step, `Follow-up "${followUp}" should resolve locally`);
    assert.match(step.reply, BEEP_FORMAT_RE);
    assert.ok(!seenReplies.has(step.reply), `Follow-up "${followUp}" must not repeat earlier layer`);
    seenReplies.add(step.reply);
    state.lastTopic = step.topic;
    state.topicDepth = step.topicDepth;
    state.pendingOffer = step.pendingOffer;
    state.lastAssistantTranslation = step.reply;
  }

  // "what about the second one" after listing projects
  const listState = createConversationState();
  const projOverview = buildScriptedStructuredReply('What projects has Vlad built?', [], listState, { page: 'home' });
  listState.lastTopic = projOverview.topic;
  listState.lastListedProjects = projOverview.lastListedProjects;
  const second = resolveLocalTurn('what about the second one', listState, { page: 'home' });
  assert.ok(second);
  assert.match(second.reply, /Jonathan Photography/i);

  // "which one is best"
  const best = resolveLocalTurn('which one is best', listState, { page: 'home' });
  assert.ok(best);
  assert.match(best.reply, /FSLAMES/i);

  // Meta & social turns
  const metaState = createConversationState();
  metaState.lastAssistantTranslation = 'Vlad is available for a 500-hour OJT in December 2026.';
  const repeat = resolveLocalTurn('repeat that', metaState, { page: 'home' });
  assert.ok(repeat && /500-hour OJT/i.test(repeat.reply));

  const caps = resolveLocalTurn('what can you do?', metaState, { page: 'home' });
  assert.ok(caps && /2048|HR|projects/i.test(caps.reply));

  const confused = resolveLocalTurn("I don't understand", metaState, { page: 'home' });
  assert.ok(confused && confused.chips.length >= 2);

  const thanks = resolveLocalTurn('thanks!', metaState, { page: 'home' });
  assert.ok(thanks && BEEP_FORMAT_RE.test(thanks.reply));

  const bye = resolveLocalTurn('goodbye', metaState, { page: 'home' });
  assert.ok(bye && BEEP_FORMAT_RE.test(bye.reply));
});

test('Actions fire ONLY on explicit request or agreement, never on passive info questions', () => {
  const passiveQueries = [
    'Tell me about his projects',
    'Tell me about FSLAMES',
    'What is the 2048 game?',
    'How can I contact Vlad?',
    'What certificates does Vlad have?',
  ];
  for (const q of passiveQueries) {
    const local = resolveLocalTurn(q, createConversationState(), { page: 'home' });
    assert.equal(local, null, `Passive query "${q}" must not trigger an immediate local action`);
    const res = buildScriptedStructuredReply(q, [], createConversationState(), { page: 'home' });
    assert.ok(!res.executeAction, `Passive query "${q}" must NOT trigger an automatic action`);
    assert.ok(res.pendingOffer, `Passive query "${q}" should store a soft pendingOffer`);
  }

  const explicitCases = [
    ['Show me his projects', 'show_projects'],
    ['Open FSLAMES', 'open_project'],
    ['Play 2048', 'open_game'],
    ['Take me to the contact form', 'open_contact'],
    ['Open his resume', 'open_resume'],
    ['Show me his certificates', 'open_certs'],
  ];
  for (const [q, expectedType] of explicitCases) {
    const res = resolveLocalTurn(q, createConversationState(), { page: 'home' });
    assert.equal(res?.executeAction?.type, expectedType, `Explicit request "${q}" should trigger ${expectedType}`);
  }
});

test('All 11 projects are covered and 12+ distinct clean dev jokes never repeat within a session', () => {
  assert.equal(PROJECTS_KB.length, 11);
  for (const project of PROJECTS_KB) {
    const res = buildScriptedStructuredReply(`Tell me about ${project.name}`, [], createConversationState(), { page: 'home' });
    assert.equal(res.topic, `project:${project.id}`, `Project "${project.name}" should match its entry`);
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.ok(!res.reply.includes('[ADD'), `${project.name} reply must not include placeholder text`);
  }

  assert.ok(DEV_JOKES.length >= 12, 'Must include at least 12 clean original jokes');
  const state = createConversationState();
  const seenJokes = new Set();
  for (let i = 0; i < DEV_JOKES.length; i += 1) {
    const res = buildScriptedStructuredReply('Tell me a joke', [], state, { page: 'home' });
    assert.match(res.reply, BEEP_FORMAT_RE);
    seenJokes.add(res.reply);
  }
  assert.equal(seenJokes.size, DEV_JOKES.length, 'Jokes must not repeat until all jokes are used');
});

test('All 22 standard HR questions are recognized, respect null VLAD_CONFIRMED fields, and never invent facts', () => {
  const hrQueriesConfirmed = [
    ['Tell me about Vlad', /BS Computer Science|PHINMA UPang/i],
    ['Why should we hire him?', /FSLAMES|real people|end to end/i],
    ['What are his biggest strengths?', /end-to-end|validation|FSLAMES/i],
    ['What is his biggest achievement?', /FSLAMES|131|Filipino Sign Language/i],
    ['What tools and tech stack does he use?', /Python|Kotlin|TensorFlow|MySQL/i],
    ['Does he have leadership or teamwork experience?', /team|PennyWise|Jonathan Photography|U-Eat/i],
    ['How does he handle deadlines and pressure?', /1\.77|Remotasks|1\.3M/i],
    ['When is he available for OJT?', /500-hour|December 2026/i],
    ['How many OJT hours does he need?', /500 hours|December 2026/i],
    ['Can he work remote or hybrid?', /remote|hybrid|on-site|La Union/i],
    ['What languages does he speak?', /C1\/C2|English|Filipino|Bisaya/i],
    ['Does he have a reliable workstation and internet?', /workstation|fiber|La Union/i],
    ['Does he have any certifications?', /Certified Cybersecurity Professional|BEC10-016/i],
    ['Does he have real-world work experience?', /Remotasks|1\.3M|TenthTide/i],
  ];

  for (const [q, expectedRe] of hrQueriesConfirmed) {
    const res = buildScriptedStructuredReply(q, [], createConversationState(), { page: 'home' });
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.match(res.reply, expectedRe, `HR query "${q}" returned unexpected answer: ${res.reply}`);
    assert.ok(res.pendingOffer, `HR query "${q}" should end with a soft pendingOffer`);
    assert.ok(!res.reply.includes('[ADD'), 'HR reply must never leak placeholder text');
  }

  const hrNullFieldQueries = [
    'What is his biggest weakness?',
    'Why did he choose Computer Science?',
    'Where does he see himself in 5 years?',
    'What is his expected salary or stipend?',
    'Tell me about a time he failed and what he learned',
    'How does he handle conflict with a teammate?',
    'Is he willing to relocate?',
    'Can he provide references?',
  ];

  for (const q of hrNullFieldQueries) {
    const res = buildScriptedStructuredReply(q, [], createConversationState(), { page: 'home' });
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.match(res.reply, /prefer|himself|directly|contact/i, `Null VLAD_CONFIRMED query "${q}" must defer to Vlad: ${res.reply}`);
    assert.equal(res.pendingOffer?.type, 'open_contact', `Null VLAD_CONFIRMED query "${q}" must offer contact form`);
  }
});

test('2048 game explanations, strategy tips, and reaction picker (6+ unique lines + 10s cooldown)', () => {
  const explain = buildScriptedStructuredReply('What is the 2048 game here?', [], createConversationState(), { page: 'home' });
  assert.match(explain.reply, /2048/i);
  assert.match(explain.reply, /Want to play a round\?/i);
  assert.ok(!explain.executeAction);
  assert.equal(explain.pendingOffer?.type, 'open_game');

  const tips = buildScriptedStructuredReply('Give me tips to win 2048', [], createConversationState(), { page: 'home' });
  assert.match(tips.reply, /corner/i);
  assert.match(tips.reply, /edge|direction|chain/i);

  for (const eventType of ['start', 'milestone', 'win', 'gameover']) {
    const pool = GAME_2048_REACTIONS[eventType];
    assert.ok(Array.isArray(pool) && pool.length >= 6, `Need >= 6 unique lines for game2048 "${eventType}"`);
    assert.equal(new Set(pool).size, pool.length, `game2048 "${eventType}" lines must be unique`);
    for (const line of pool) {
      assert.match(line, BUBBLE_FORMAT_RE);
    }
  }

  const picker = createGame2048ReactionPicker(10_000);
  const first = picker.pick('start', null, 1_000);
  assert.ok(first && BUBBLE_FORMAT_RE.test(first));
  // Cooldown blocks another bubble within 10s
  assert.equal(picker.pick('milestone', 128, 5_000), null);
  // After 10s, milestone triggers and replaces {value}
  const second = picker.pick('milestone', 256, 12_000);
  assert.ok(second && second.includes('256'));
  // Win bypasses cooldown
  const winLine = picker.pick('win', 2048, 13_000);
  assert.ok(winLine && BUBBLE_FORMAT_RE.test(winLine));
});

test('DRAG_RELEASE_LINES and HOVER_LINES each have at least 24 unique beep+text lines and 10 reaction animations', () => {
  assert.ok(DRAG_RELEASE_LINES.length >= 24, 'Need at least 24 drag-release lines');
  assert.ok(HOVER_LINES.length >= 24, 'Need at least 24 hover lines');
  assert.equal(new Set(DRAG_RELEASE_LINES.map((item) => item.text)).size, DRAG_RELEASE_LINES.length);
  assert.equal(new Set(HOVER_LINES).size, HOVER_LINES.length);
  assert.equal(REACTION_ANIMATIONS.length, 10);

  for (const item of DRAG_RELEASE_LINES) {
    assert.match(item.text, BUBBLE_FORMAT_RE, `Invalid drag line format: ${item.text}`);
    for (const banned of FORBIDDEN_SW_QUOTES) {
      assert.ok(!item.text.toLowerCase().includes(banned));
    }
  }
  for (const line of HOVER_LINES) {
    assert.match(line, BUBBLE_FORMAT_RE, `Invalid hover line format: ${line}`);
    for (const banned of FORBIDDEN_SW_QUOTES) {
      assert.ok(!line.toLowerCase().includes(banned));
    }
  }
});

test('pickRandomNoRepeat and pickDragReleaseLine never repeat the previous selection immediately', () => {
  let prev = null;
  for (let i = 0; i < 60; i += 1) {
    const picked = pickRandomNoRepeat(HOVER_LINES, prev);
    assert.notEqual(picked, prev);
    prev = picked;
  }

  for (const tier of ['mild', 'grumpy', 'angry']) {
    let prevDrag = null;
    for (let i = 0; i < 20; i += 1) {
      const picked = pickDragReleaseLine(tier, prevDrag);
      assert.notEqual(picked, prevDrag);
      prevDrag = picked;
    }
  }
});

test('createAnnoyanceTracker escalates 1-2 mild, 3-5 grumpy, 6+ angry and resets after 60s idle', () => {
  const tracker = createAnnoyanceTracker(60_000);
  let t = 1_000;

  assert.deepEqual(tracker.recordDrag(t), { count: 1, level: 'mild' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 2, level: 'mild' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 3, level: 'grumpy' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 4, level: 'grumpy' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 5, level: 'grumpy' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 6, level: 'angry' });
  t += 5_000;
  assert.deepEqual(tracker.recordDrag(t), { count: 7, level: 'angry' });

  // After 60 seconds with no drags, counter resets cleanly to calm / 0
  assert.deepEqual(tracker.getState(t + 60_000), { count: 0, level: 'calm' });
  assert.deepEqual(tracker.recordDrag(t + 60_001), { count: 1, level: 'mild' });
});

test('clampDragOffset keeps dragged droid strictly inside the viewport', () => {
  const homeRect = { left: 1348, right: 1420, top: 796, bottom: 880 };
  const farLeft = clampDragOffset(-5000, -5000, homeRect, 1440, 900, 8);
  assert.equal(homeRect.left + farLeft.dx, 8);
  assert.equal(homeRect.top + farLeft.dy, 8);

  const farRight = clampDragOffset(5000, 5000, homeRect, 1440, 900, 8);
  assert.equal(homeRect.right + farRight.dx, 1432);
  assert.equal(homeRect.bottom + farRight.dy, 892);
});

test('Anti-repeat keeps last 8 sent replies unique, avoids email in out-of-scope, and throttles contact mentions to <= 1 per 5 replies', () => {
  const state = createConversationState();
  const oosQueries = [
    'What is the weather in Tokyo?',
    'Who won the NBA game last night?',
    'Can you solve my calculus homework?',
    'Give me legal advice on a lawsuit',
    'What is the stock price of bitcoin?',
    'What are the news headlines today?',
    'Write me a poem about rain',
    'Give me a pizza recipe',
  ];

  const translations = [];
  let contactMentions = 0;
  for (const q of oosQueries) {
    const res = buildScriptedStructuredReply(q, [], state, { page: 'home' });
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.ok(!res.reply.includes('mereziko@gmail.com'), `Out-of-scope must NOT paste email: ${res.reply}`);
    assert.ok(!res.reply.includes('My circuits are strictly tuned'), 'Must not use old verbatim canned string');
    assert.ok(!res.reply.includes('To take the next step without repeating myself'), 'Must not use old anti-repeat canned string');
    const body = res.reply.replace(/^\*[^*]+\*\s+Translation:\s+/i, '').trim().toLowerCase();
    assert.ok(!translations.includes(body), `Reply repeated within last 8 turns: ${body}`);
    translations.push(body);
    if (/contact form/i.test(body)) contactMentions += 1;
  }

  assert.equal(new Set(translations).size, 8, 'All 8 consecutive out-of-scope replies must be distinct');
  assert.ok(contactMentions <= 2, `Expected at most 2 contact mentions across 8 replies (<=1 per 5), got ${contactMentions}`);
});

test('Small talk, compliments, and thanks receive humble-cheeky replies with a soft offer and never out-of-scope', () => {
  const state = createConversationState();
  const inputs = [
    "you're so smart",
    'nice',
    'cool',
    'wow',
    'lol',
    'haha',
    'good bot',
    'awesome',
    'thanks',
    'ty',
    'salamat',
    'ok cool',
  ];

  const recentWindow = [];
  for (const input of inputs) {
    const local = resolveLocalTurn(input, state, { page: 'home' });
    const res = local || buildScriptedStructuredReply(input, [], state, { page: 'home' });
    assert.ok(res, `Expected reply for "${input}"`);
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.notEqual(res.topic, 'out_of_scope', `"${input}" must NOT route to out_of_scope`);
    assert.notEqual(res.topic, 'unclear', `"${input}" must NOT route to unclear`);
    assert.ok(res.pendingOffer, `Small talk "${input}" should include one soft offer`);
    const body = res.reply.replace(/^\*[^*]+\*\s+Translation:\s+/i, '').trim().toLowerCase();
    assert.ok(!recentWindow.slice(-8).includes(body), `Small talk reply repeated within last 8 turns: ${body}`);
    recentWindow.push(body);
  }
});

test('Vlad differentiator/proof questions answer with real CV proof (never "the best") and "why that one?" explains FSLAMES', () => {
  const proofQuestions = [
    'how unique is vlad',
    'what makes him different',
    'is he good',
    'how good is he',
    'why him',
    "what's special about him",
    'is he reliable',
    'can he code',
    'is he experienced',
    "what's his level",
  ];

  for (const q of proofQuestions) {
    const state = createConversationState();
    const res = buildScriptedStructuredReply(q, [], state, { page: 'home' });
    assert.match(res.reply, BEEP_FORMAT_RE);
    assert.match(res.reply, /11/, `"${q}" should cite 11 projects: ${res.reply}`);
    assert.match(res.reply, /FSLAMES|131/, `"${q}" should cite FSLAMES / 131 sign classes: ${res.reply}`);
    assert.match(res.reply, /7|100|50/, `"${q}" should cite real user tests: ${res.reply}`);
    assert.match(res.reply, /CCP|Cybersecurity/i, `"${q}" should cite CCP: ${res.reply}`);
    assert.ok(!/\bthe best\b/i.test(res.reply), `"${q}" must not hype Vlad as "the best": ${res.reply}`);
    assert.match(res.reply, /Want to see the proof\?/i, `"${q}" should end with soft offer: ${res.reply}`);
    assert.ok(res.pendingOffer);
  }

  // Exact journey: "show projects" -> "okay" -> "why that one?"
  const flowState = createConversationState();
  const step1 = buildScriptedStructuredReply('show projects', [], flowState, { page: 'home' });
  flowState.pendingOffer = step1.pendingOffer;
  flowState.lastTopic = step1.topic;
  flowState.lastListedProjects = step1.lastListedProjects;
  assert.equal(step1.pendingOffer?.type, 'show_projects');

  const step2 = resolveLocalTurn('okay', flowState, { page: 'home' });
  assert.equal(step2?.executeAction?.type, 'show_projects');
  assert.equal(step2?.pendingOffer?.type, 'open_project');
  assert.equal(step2?.pendingOffer?.payload, 'fslames');
  flowState.pendingOffer = step2.pendingOffer;
  flowState.lastTopic = step2.topic;
  flowState.lastListedProjects = step2.lastListedProjects;

  const step3 = resolveLocalTurn('why that one?', flowState, { page: 'home' });
  assert.ok(step3, '"why that one?" must resolve locally');
  assert.match(step3.reply, /FSLAMES/i, '"why that one?" must explain FSLAMES, not jump to Jonathan Photography');
  assert.match(step3.reply, /131|5,000|TFLite|participant-level/i);
  assert.equal(step3.pendingOffer?.payload, 'fslames');
});

test('Unclear/gibberish, Filipino/Bisaya unsure, and "just asking" get tailored fresh replies with chips', () => {
  const state = createConversationState();

  const justAsking = buildScriptedStructuredReply('just asking', [], state, { page: 'home' });
  assert.equal(justAsking.topic, 'just_asking');
  assert.match(justAsking.reply, /ask away|curious|fire away/i);
  assert.equal(justAsking.chips.length, 3);

  const filUnsure = buildScriptedStructuredReply('benta', [], state, { page: 'home' });
  assert.equal(filUnsure.topic, 'unclear_lang');
  assert.match(filUnsure.reply, /English/i);
  assert.match(filUnsure.reply, /Filipino|Bisaya/i);
  assert.equal(filUnsure.chips.length, 3);

  const gibberish = ['aneb', 'hmm', 'idk', 'asdf', '?'];
  const seen = new Set();
  for (const g of gibberish) {
    const res = buildScriptedStructuredReply(g, [], state, { page: 'home' });
    assert.equal(res.topic, 'unclear', `"${g}" should route to unclear, not out_of_scope`);
    assert.equal(res.chips.length, 3);
    const body = res.reply.replace(/^\*[^*]+\*\s+Translation:\s+/i, '').trim().toLowerCase();
    assert.ok(!seen.has(body), `Gibberish "${g}" repeated an earlier unclear reply: ${body}`);
    seen.add(body);
  }
});

test('Decline loop escalates cleanly over 5 consecutive "no" turns, never repeats, never re-offers declined items, and preserves proper noun casing', () => {
  const state = createConversationState();
  state.pendingOffer = { type: 'show_projects', label: 'Show projects', payload: '' };

  const replies = [];
  for (let i = 1; i <= 5; i += 1) {
    const res = resolveLocalTurn('no', state, { page: 'home' });
    assert.ok(res, `Decline #${i} should resolve locally`);
    assert.match(res.reply, BEEP_FORMAT_RE);

    const body = res.reply.replace(/^\*[^*]+\*\s+Translation:\s+/i, '').trim();
    assert.ok(!replies.includes(body.toLowerCase()), `Decline #${i} repeated a previous decline reply: ${body}`);
    replies.push(body.toLowerCase());

    // Proper noun capitalization checks
    assert.ok(!/\bvlad\b/.test(body), `Lowercase "vlad" leaked in: ${body}`);
    assert.ok(!/\bccp\b/.test(body), `Lowercase "ccp" leaked in: ${body}`);
    assert.ok(!/\bfslames\b/.test(body), `Lowercase "fslames" leaked in: ${body}`);
    assert.ok(!/\bojt\b/.test(body), `Lowercase "ojt" leaked in: ${body}`);

    if (i === 1) {
      assert.ok(res.pendingOffer, 'Decline #1 should offer ONE different un-declined item');
      assert.notEqual(res.pendingOffer.type, 'show_projects', 'Must not re-offer declined show_projects');
      state.pendingOffer = res.pendingOffer;
    } else if (i === 2) {
      assert.equal(res.pendingOffer, null, 'Decline #2 must make NO new offer');
      assert.ok(res.chips.length >= 1, 'Decline #2 should still show helpful chips');
      state.pendingOffer = res.pendingOffer;
    } else {
      assert.equal(res.pendingOffer, null, `Decline #${i} must make NO offer`);
      assert.deepEqual(res.chips, [], `Decline #${i} should show no pushy chips`);
      assert.ok(body.length <= 85, `Decline #${i} sign-off should be very short: ${body}`);
      state.pendingOffer = res.pendingOffer;
    }
  }

  // Non-decline resets declineCount, but declinedOfferKeys remain remembered for the session
  const afterAsk = buildScriptedStructuredReply('just asking', [], state, { page: 'home' });
  assert.equal(state.declineCount, 0);
  if (afterAsk.pendingOffer) {
    assert.notEqual(afterAsk.pendingOffer.type, 'show_projects', 'Must not re-offer previously declined show_projects');
  }
});

test('fetchWorkerTurn returns source="api" with structured offer/suggestions/action when Worker succeeds, and source="fallback" when offline', async () => {
  const apiTurn = await fetchWorkerTurn('Tell me about Vlad', [], {
    apiUrl: 'https://r2d2.example.workers.dev',
    fetchImpl: async () =>
      new Response(
        JSON.stringify({
          reply: '*Chirp-beep!* Translation: Vlad shipped 11 builds including FSLAMES.',
          offer: { type: 'open_project', label: 'Open FSLAMES' },
          suggestions: ['Open FSLAMES', 'Check CCP', 'Play 2048'],
          action: null,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      ),
  });

  assert.equal(apiTurn.source, 'api');
  assert.equal(apiTurn.pendingOffer?.type, 'open_project');
  assert.equal(apiTurn.pendingOffer?.payload, 'fslames');
  assert.deepEqual(apiTurn.chips, ['Open FSLAMES', 'Check CCP', 'Play 2048']);
  assert.equal(apiTurn.executeAction, null);

  const fallbackTurn = await fetchWorkerTurn('how unique is vlad', [], {
    apiUrl: 'https://r2d2.example.workers.dev',
    fetchImpl: async () => {
      throw new Error('Network error');
    },
  });
  assert.equal(fallbackTurn.source, 'fallback');
  assert.match(fallbackTurn.reply, /FSLAMES/i);
});


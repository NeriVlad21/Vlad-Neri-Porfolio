import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MASCOT_NAME,
  CHAT_API_URL,
  DRAG_RELEASE_LINES,
  HOVER_LINES,
  REACTION_ANIMATIONS,
  getReply,
  pickRandomNoRepeat,
  pickDragReleaseLine,
  createAnnoyanceTracker,
  clampDragOffset,
} from '../public/assets/mascot.js';

const BEEP_FORMAT_RE = /^\*[^*]+\*\s+Translation:\s+\S/;
const BUBBLE_FORMAT_RE = /^\*[^*]+\*\s+\S/;
const FORBIDDEN_SW_QUOTES = [
  'may the force',
  'help me, obi-wan',
  'these aren\'t the droids',
  'bad feeling about this',
  'i am your father',
  'do or do not',
];

test('MASCOT_NAME and live CHAT_API_URL constants are exported', () => {
  assert.equal(MASCOT_NAME, 'R2-D2');
  assert.equal(CHAT_API_URL, 'https://vlad-r2d2-chat.mereziko.workers.dev');
});

const OFFLINE_OPTS = { apiUrl: 'https://REPLACE-WITH-MY-WORKER-URL' };

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
    'What is the weather on Mars?',
  ];

  for (const q of queries) {
    const promise = getReply(q, [], OFFLINE_OPTS);
    assert.ok(promise instanceof Promise, `getReply("${q}") must return a Promise`);
    const reply = await promise;
    assert.match(reply, BEEP_FORMAT_RE, `Reply should follow *beep* Translation: format: ${reply}`);
    const lower = reply.toLowerCase();
    for (const banned of FORBIDDEN_SW_QUOTES) {
      assert.ok(!lower.includes(banned), `Reply must not quote Star Wars dialogue: ${banned}`);
    }
  }
});

test('getReply covers verified site facts and cycles through 7 distinct tech/dev jokes', async () => {
  const ojtReply = await getReply('When is Vlad available for OJT?', [], OFFLINE_OPTS);
  assert.match(ojtReply, /500-hour/i);
  assert.match(ojtReply, /December 2026/i);

  const certReply = await getReply('What certifications does he have?', [], OFFLINE_OPTS);
  assert.match(certReply, /1\.77/);
  assert.match(certReply, /Certified Cybersecurity Professional/i);
  assert.match(certReply, /BEC10-016/);

  const unknownReply = await getReply('Can you bake sourdough bread?', [], OFFLINE_OPTS);
  assert.match(unknownReply, /Contact form|mereziko@gmail\.com/i);

  const history = [];
  const seenJokes = new Set();
  for (let i = 0; i < 7; i += 1) {
    const joke = await getReply('Tell me a joke', history, OFFLINE_OPTS);
    assert.match(joke, BEEP_FORMAT_RE);
    seenJokes.add(joke);
    history.push({ role: 'assistant', text: joke, kind: 'joke' });
  }
  assert.equal(seenJokes.size, 7, 'Should cycle through 7 distinct dev jokes');
});

test('getReply POSTs {message, history} (last 6 turns) to configured Worker URL and falls back silently on failure or timeout', async () => {
  let capturedUrl = '';
  let capturedPayload = null;
  const mockHistory = Array.from({ length: 8 }, (_, idx) => ({
    role: idx % 2 === 0 ? 'user' : 'assistant',
    text: `Turn ${idx + 1}`,
  }));

  const workerReply = await getReply('Show projects', mockHistory, {
    apiUrl: 'https://r2d2.example.workers.dev',
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
  assert.equal(capturedPayload.history.length, 6);
  assert.deepEqual(capturedPayload.history[0], { role: 'user', content: 'Turn 3' });
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


import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_CONTACT_MESSAGE_LENGTH,
  getInquiryPlaceholder,
  isConfiguredWorkerEndpoint,
  validateContactField,
  validateInquiryFields,
  buildInquiryPayload,
  submitInquiryRequest,
} from '../public/assets/portfolio-logic.js';

test('getInquiryPlaceholder returns tailored placeholders per inquiry type', () => {
  assert.match(getInquiryPlaceholder('Dec 2026 OJT / Internship'), /Company, dates, hours per week/i);
  assert.match(getInquiryPlaceholder('Web or Mobile Project'), /What do you need built/i);
  assert.match(getInquiryPlaceholder('Data & AI Role'), /Role title/i);
  assert.match(getInquiryPlaceholder('Video Editing & Motion'), /Say hello/i);
});

test('isConfiguredWorkerEndpoint rejects REPLACE placeholders and accepts real HTTPS URLs', () => {
  assert.equal(isConfiguredWorkerEndpoint('https://REPLACE-WITH-MY-ENDPOINT'), false);
  assert.equal(isConfiguredWorkerEndpoint('[ADD: Cloudflare Worker Contact Endpoint URL]'), false);
  assert.equal(isConfiguredWorkerEndpoint('https://contact.vladneri.dev/submit'), true);
});

test('validateContactField and validateInquiryFields return per-field errors and firstInvalidField', () => {
  assert.ok(validateContactField('name', 'A'));
  assert.equal(validateContactField('name', 'Al'), '');
  assert.ok(validateContactField('email', 'bad@'));
  assert.equal(validateContactField('email', 'alex@company.com'), '');
  assert.ok(validateContactField('message', 'short'));
  assert.ok(validateContactField('message', 'x'.repeat(MAX_CONTACT_MESSAGE_LENGTH + 1)));
  assert.equal(validateContactField('message', 'Looking forward to discussing OJT!'), '');

  const multi = validateInquiryFields({ name: 'A', email: 'bad', message: 'short' });
  assert.equal(multi.ok, false);
  assert.equal(multi.firstInvalidField, 'name');
  assert.ok(multi.errors.name && multi.errors.email && multi.errors.message);

  const valid = validateInquiryFields({
    type: 'Web or Mobile Project',
    name: 'Alex',
    email: 'alex@studio.ph',
    company: 'North Studio',
    message: 'Need a booking site built by next month.',
  });
  assert.equal(valid.ok, true);
  assert.equal(valid.cleaned.company, 'North Studio');
  assert.equal(valid.cleaned.type, 'Web or Mobile Project');
});

test('buildInquiryPayload includes optional company in formatted body and mailto URL', () => {
  const withCompany = buildInquiryPayload({
    type: 'Dec 2026 OJT / Internship',
    name: 'Alex',
    email: 'alex@acme.com',
    company: 'Acme Labs',
    message: 'Remote 500-hour OJT starting December 2026.',
  });
  assert.ok(withCompany.bodyText.includes('Company / Organization: Acme Labs'));
  assert.ok(withCompany.mailtoUrl.includes(encodeURIComponent('Acme Labs')));

  const withoutCompany = buildInquiryPayload({
    type: 'Dec 2026 OJT / Internship',
    name: 'Alex',
    email: 'alex@acme.com',
    message: 'Remote 500-hour OJT starting December 2026.',
  });
  assert.ok(!withoutCompany.bodyText.includes('Company / Organization:'));
});

test('submitInquiryRequest handles honeypot, REPLACE fallback, live POST success, error, and timeout', async () => {
  const baseFields = {
    type: 'Dec 2026 OJT / Internship',
    name: 'Alex',
    email: 'alex@acme.com',
    company: 'Acme Labs',
    message: 'Remote 500-hour OJT starting December 2026.',
    website: '',
  };

  // Honeypot silently succeeds without calling fetch
  let fetchCalled = false;
  const hp = await submitInquiryRequest(
    { ...baseFields, website: 'https://bot.example' },
    {
      endpoint: 'https://api.example.com/contact',
      fetchImpl: async () => {
        fetchCalled = true;
        return { ok: true, json: async () => ({ ok: true }) };
      },
    }
  );
  assert.equal(hp.status, 'honeypot');
  assert.equal(fetchCalled, false);

  // Placeholder endpoint falls back to mailto
  const unconf = await submitInquiryRequest(baseFields, {
    endpoint: 'https://REPLACE-WITH-MY-ENDPOINT',
  });
  assert.equal(unconf.status, 'fallback');
  assert.equal(unconf.reason, 'unconfigured');
  assert.ok(unconf.mailtoUrl.startsWith('mailto:mereziko@gmail.com?subject='));

  // Successful POST sends exact JSON shape
  let capturedBody = null;
  const sent = await submitInquiryRequest(baseFields, {
    endpoint: 'https://api.example.com/contact',
    fetchImpl: async (url, init) => {
      assert.equal(url, 'https://api.example.com/contact');
      assert.equal(init.method, 'POST');
      capturedBody = JSON.parse(init.body);
      return { ok: true, status: 200, json: async () => ({ ok: true }) };
    },
  });
  assert.equal(sent.status, 'sent');
  assert.deepEqual(Object.keys(capturedBody).sort(), ['company', 'email', 'message', 'name', 'type', 'website']);

  // Network error falls back to mailto
  const failed = await submitInquiryRequest(baseFields, {
    endpoint: 'https://api.example.com/contact',
    fetchImpl: async () => {
      throw new Error('Network down');
    },
  });
  assert.equal(failed.status, 'fallback');
  assert.equal(failed.reason, 'network-error');
  assert.ok(failed.mailtoUrl.startsWith('mailto:mereziko@gmail.com?'));

  // Timeout aborts and falls back to mailto
  const timedOut = await submitInquiryRequest(baseFields, {
    endpoint: 'https://api.example.com/contact',
    timeoutMs: 15,
    fetchImpl: (_url, { signal }) =>
      new Promise((_resolve, reject) => {
        signal.addEventListener('abort', () => {
          const e = new Error('Aborted');
          e.name = 'AbortError';
          reject(e);
        });
      }),
  });
  assert.equal(timedOut.status, 'fallback');
  assert.equal(timedOut.reason, 'timeout');
});

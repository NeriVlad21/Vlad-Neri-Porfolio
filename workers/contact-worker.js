/**
 * Cloudflare Worker — Portfolio Contact Form Handler
 *
 * Deployment steps:
 * 1. Create a Worker in Cloudflare (e.g., `vlad-neri-contact`).
 * 2. Add environment variables/secrets in Cloudflare Worker Settings:
 *    - ALLOWED_ORIGIN: "https://vladneri.mereziko.workers.dev" (or "*")
 *    - RECIPIENT_EMAIL: "mereziko@gmail.com"
 *    - RESEND_API_KEY: "[ADD: optional Resend API key for transactional email]"
 *    - SENDER_EMAIL: "portfolio@yourdomain.com"
 * 3. Paste this file as the Worker entry (`src/index.js`) and deploy.
 * 4. Set `CONTACT_WORKER_ENDPOINT` in `public/assets/portfolio-logic.js` to your Worker URL.
 */

function corsHeaders(origin, allowedOrigin) {
  const allow = !allowedOrigin || allowedOrigin === '*' ? '*' : origin === allowedOrigin ? origin : allowedOrigin;
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(payload, status, headers) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, env.ALLOWED_ORIGIN || '*');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'Method not allowed.' }, 405, headers);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: 'Invalid JSON request payload.' }, 400, headers);
    }

    // Honeypot spam check (must remain empty for human submissions)
    if (body.website && String(body.website).trim() !== '') {
      return jsonResponse({ ok: true, message: 'Received.' }, 200, headers);
    }

    const topic = String(body.topic || 'Portfolio Inquiry').trim().slice(0, 120);
    const name = String(body.name || '').trim().slice(0, 120);
    const email = String(body.email || '').trim().slice(0, 160);
    const message = String(body.message || '').trim().slice(0, 4000);

    if (name.length < 2) {
      return jsonResponse({ ok: false, error: 'Please provide your name (at least 2 characters).' }, 400, headers);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ ok: false, error: 'Please provide a valid email address.' }, 400, headers);
    }

    if (message.length < 10) {
      return jsonResponse({ ok: false, error: 'Please enter a message of at least 10 characters.' }, 400, headers);
    }

    const recipient = env.RECIPIENT_EMAIL || 'mereziko@gmail.com';
    const subject = `[${topic}] Inquiry from ${name}`;
    const textContent = `Inquiry Type: ${topic}\nFrom: ${name} <${email}>\n\n${message}`;

    if (env.RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.SENDER_EMAIL || 'Vlad Neri Portfolio <onboarding@resend.dev>',
          to: [recipient],
          reply_to: email,
          subject,
          text: textContent,
        }),
      });

      if (!resendRes.ok) {
        return jsonResponse(
          { ok: false, error: 'Email delivery service returned an error. Please use direct email fallback.' },
          502,
          headers
        );
      }
    }

    return jsonResponse(
      {
        ok: true,
        message: 'Message received. Vlad will reply within 24 hours.',
      },
      200,
      headers
    );
  },
};

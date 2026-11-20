# R2-D2 Portfolio Chat Worker

Cloudflare Worker proxy for Vlad Neri's R2-D2 portfolio mascot. It validates incoming messages, enforces origin CORS and per-IP rate limits, blocks prompt-injection attempts, calls Groq with a 7-second timeout, and formats every response in R2-D2's `*beep* Translation:` style.

> **Security note:** Never place `GROQ_API_KEY` in `wrangler.toml`, client JavaScript, or git commits. Always store it as an encrypted Cloudflare Worker Secret.

---

## Option A: Deploy from the Cloudflare Dashboard

1. Open the Cloudflare Dashboard and go to **Workers & Pages → Create → Create Worker**.
2. Name the worker (for example, `vlad-r2d2-chat`) and click **Deploy**.
3. Click **Edit code**, replace the default script with the full contents of `worker/chat-worker.js`, and click **Deploy**.
4. Go to **Settings → Variables and Secrets**:
   - Add a **Text** variable named `ALLOWED_ORIGINS` with your comma-separated site origins (for example: `https://vladneri.mereziko.workers.dev,http://localhost:3000`).
   - Add a **Text** variable named `MODEL` set to `llama-3.3-70b-versatile` (optional; this is also the default).
   - Add a **Secret** named `GROQ_API_KEY` containing your Groq API key.
5. *(Optional — shared rate limiting)* Under **Settings → Bindings**, create a KV namespace and bind it with the variable name `RATE_LIMIT`. Without it, the Worker automatically uses its per-isolate in-memory fallback.
6. Copy your deployed Worker URL (for example, `https://vlad-r2d2-chat.<your-subdomain>.workers.dev`) and paste it into `CHAT_API_URL` at the top of `public/assets/mascot.js`.

---

## Option B: Deploy with Wrangler CLI

Run these commands from the `worker/` directory:

```bash
# 1. Authenticate with your Cloudflare account
wrangler login

# 2. (Optional) Create a KV namespace for shared rate limiting
#    Then uncomment [[kv_namespaces]] in worker/wrangler.toml and paste the ID
wrangler kv namespace create RATE_LIMIT

# 3. Store your Groq API key as an encrypted Worker Secret
wrangler secret put GROQ_API_KEY

# 4. Update ALLOWED_ORIGINS in worker/wrangler.toml if needed, then deploy
wrangler deploy
```

After deploying, update `CHAT_API_URL` at the top of `public/assets/mascot.js` with your live Worker URL.

---

## Testing with `curl`

Replace `https://YOUR-WORKER.workers.dev` with your live Worker URL and `https://vladneri.mereziko.workers.dev` with an origin listed in `ALLOWED_ORIGINS`.

### 1. Health check (`GET /health`)
```bash
curl -i https://YOUR-WORKER.workers.dev/health
```
Expected: `200 OK` with `{"ok":true}`.

### 2. CORS preflight (`OPTIONS`)
```bash
curl -i -X OPTIONS https://YOUR-WORKER.workers.dev/ \
  -H "Origin: https://vladneri.mereziko.workers.dev" \
  -H "Access-Control-Request-Method: POST"
```
Expected: `204 No Content` with `Access-Control-Allow-Origin` and `Vary: Origin`.

### 3. Chat request (`POST /`)
```bash
curl -i -X POST https://YOUR-WORKER.workers.dev/ \
  -H "Content-Type: application/json" \
  -H "Origin: https://vladneri.mereziko.workers.dev" \
  -d '{
    "message": "What projects has Vlad built?",
    "history": []
  }'
```
Expected: `200 OK` with `{"reply":"*...* Translation: ..."}`.

### 4. Unlisted origin check (`403 Forbidden`)
```bash
curl -i -X POST https://YOUR-WORKER.workers.dev/ \
  -H "Content-Type: application/json" \
  -H "Origin: https://evil.example" \
  -d '{"message":"hello"}'
```
Expected: `403 Forbidden` with `{"error":"Forbidden origin"}`.

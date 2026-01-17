# Cloudflare Worker — Serve SPA fallback

This Worker rewrites SPA-style paths and the legacy verification path `/sofixsintern20260111/*` to `/index.html` so the React app can handle routing and call your backend.

Files:
- `workers/serve-spa-worker.js` — Worker script
- `wrangler.toml` — Wrangler config for deployment

Deployment (Wrangler):
1. Install Wrangler (if not installed): `npm i -g wrangler` or `corepack enable && corepack prepare wrangler@latest --activate`
2. In `wrangler.toml` replace `<YOUR_ZONE_ID>` with your Cloudflare Zone ID and optionally set `account_id`.
3. Authenticate wrangler if needed: `wrangler login` or configure API token with `WRANGLER_AUTH`.
4. Publish to production: `wrangler publish --env production` (from `Frontend` folder).

Dashboard alternative:
- You can create a Worker via the Cloudflare dashboard and paste the script from `workers/serve-spa-worker.js`, then bind it to `www.sofixs.com/*`.

Testing & verification:
- Curl example to verify HTML is returned (status 200):
  `curl -I https://www.sofixs.com/sofixsintern20260111/170346/750`
  Expect `HTTP/2 200` and `content-type: text/html` (or equivalent).

Purge Cloudflare cache after deploying (recommended):
- Use dashboard or API to purge everything.

Troubleshooting:
- If API calls are rewritten accidentally, add more exclusions (e.g., `/api`, `/verifications`, `/_next`).
- Ensure `index.html` exists at the root of your build output in Cloudflare Pages or your origin.

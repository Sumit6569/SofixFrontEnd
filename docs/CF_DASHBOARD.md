# Cloudflare Dashboard — Quick Setup (no Wrangler)

1. Log in to Cloudflare dashboard and go to **Workers** > **Create a Service**.
2. Choose a name (e.g., `sofixs-serve-spa`) and select "Start from scratch".
3. Replace the default worker script with the contents of `workers/serve-spa-worker.js` and Save.
4. Click **Triggers** > **Add route** and add `www.sofixs.com/*` (or restrict to `/sofixsintern20260111/*` if you prefer).
5. Deploy and test the URL:
   - Visit: `https://www.sofixs.com/sofixsintern20260111/170346/750`
   - Or run: `curl -I https://www.sofixs.com/sofixsintern20260111/170346/750` and expect a 200 HTML response.

Alternative: If you prefer a redirect rule (fast but bypasses your UI):
- Go to **Rules** > **Bulk Redirects** and create a rule that redirects `https://www.sofixs.com/sofixsintern20260111/*` → `https://<your-backend>.onrender.com/sofixsintern20260111/$1`

Remember to purge cache after making changes.

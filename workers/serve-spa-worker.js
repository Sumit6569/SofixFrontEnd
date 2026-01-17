addEventListener("fetch", event => {
  event.respondWith(handle(event.request));
});

async function handle(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Do NOT rewrite for API, assets or known system paths
  const dontRewrite =
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/cdn-cgi") ||
    pathname.startsWith("/assets") ||
    pathname.match(/\.[a-zA-Z0-9]{1,6}$/); // has a file extension

  // Rewrite if it's the legacy verify path or a SPA path (no extension)
  if (!dontRewrite && (pathname.startsWith("/sofixsintern20260111") || !pathname.includes("."))) {
    url.pathname = "/index.html";
    const modified = new Request(url.toString(), request);
    return fetch(modified);
  }

  // Otherwise pass through
  return fetch(request);
}

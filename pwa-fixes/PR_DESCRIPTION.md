# PWA fixes for Testing -800

This PR updates the web app manifest, service worker, and README with PWA and iOS improvements:

- Add 180x180 icon to manifest and use consistent names.
- Use "/" start_url and scope for better installability when served from site root.
- Service worker: navigation-aware fallback, only cache successful same-origin responses.
- README: notes on linking the manifest, iOS meta tags, testing, and clearing caches during development.

Commit: "PWA: manifest + service worker + iOS meta + README tweaks"

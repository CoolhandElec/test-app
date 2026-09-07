(T) esting -800 — v41 PWA / iPhone test build

What changed
- v40 app converted into an installable Progressive Web App (PWA).
- iPhone home-screen metadata added (see notes below).
- App icon added.
- Standalone/full-screen launch enabled.
- Service worker added so the app shell can work offline after first load.
- Existing v40 property database seed, due dates, autocomplete, quote generator,
  Rental Electrical Certificate and Smoke Detector Certificate are retained.

Important
- iPhone installation requires the app to be served from an HTTPS website.
- Opening index.html directly from a downloaded ZIP/file will not give normal PWA installation.
- The current property database still uses browser localStorage, so data saved on one device
  does not automatically sync to another device yet.

iPhone install once hosted
1. Open the HTTPS app address in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Tap Add.
5. Launch (T) esting -800 from the Home Screen.

Notes & developer tips
- Ensure your site serves the manifest at "/manifest.webmanifest" and registers the service worker from the site root ("/service-worker.js") so scope and caching behave as expected.
- Add a link to the manifest in the page <head> (example):

  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#0b5ea8">

- iOS requires additional meta tags and an apple-touch-icon; add these into <head> for the best experience:

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="Testing -800">
  <link rel="apple-touch-icon" href="/icons/icon-180.png">

- Service worker scope: registering the service worker from the site root will give it scope over the entire site. If your app is hosted in a subfolder, register from that folder and adjust start_url/scope accordingly in the manifest.

Testing & Lighthouse
- Test PWA installability using Chrome DevTools > Lighthouse. Fix any Lighthouse accessibility/SEO best-practice suggestions as needed.

How to clear the service worker & cache during development
1. In Chrome: DevTools > Application > Service Workers > Unregister. Then under Cache Storage delete the testing-800-v41 cache.
2. In Safari (macOS): Develop > Service Workers > Unregister and remove the cache via "Empty Caches" or from the Storage tab.
3. You can also update the service-worker.js script's CACHE_NAME (e.g. append -v42) to force clients to fetch a new service worker and refresh caches.

If you want, I can also:
- Add suggested head tags directly into your index.html (if you tell me the path), or
- Create a small HTML snippet with the exact head inserts you can paste into your pages.


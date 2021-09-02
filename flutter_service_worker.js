'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "58bdb5b172ddac6224beb8f198d1b62e",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"assets/assets/icons/book.png": "c3987b1e4ffa60b1ac879302197f0d47",
"assets/assets/icons/cloud.png": "c382e071412333c27967ce8ebe1e5029",
"assets/assets/icons/home.png": "ee6445e256a48c6b4c23c205fdfa5c1c",
"assets/assets/images/bg.png": "47f5ba1bae1ebedac755fd9f259a8d5c",
"assets/assets/images/flame.png": "b3a023c10e5e77d86f06c7dd3a828a34",
"assets/assets/images/doggy_meme.jpg": "b924c15af5d764dbc3b1a9ad2de21361",
"assets/assets/images/three-d-flame-man.png": "11f5dab25ae6ccecd00009749bb5f7ec",
"assets/assets/logos/github.png": "8674acff8995e8c752ae0140663c47d8",
"assets/assets/logos/instagram.png": "b00c98afbb7f47242e85cf53c7c0868d",
"assets/assets/logos/linkedin.png": "9d9f4c0b0d21f0266dac0dfe5fe0464f",
"assets/assets/logos/logo-small.png": "4bbb0112614a8119d53137feee19e72c",
"assets/assets/projects/college.png": "29d3c1b93f0f2c2580a1bf4fdc003012",
"assets/assets/projects/intertwined-mini.png": "36bea57a4d7e18a8207cc986f2dd4aed",
"assets/assets/projects/bitcoin.png": "7957643fba3f04696ef5c82beaf4a963",
"assets/assets/projects/bitcoin-mini.png": "0bf9595e647dc7efe2541b8cac2dfe14",
"assets/assets/projects/circleci-mini.png": "23cb8b50fc7d1f8a3b2c669643a142a8",
"assets/assets/projects/circleci.png": "d54513f74e881539c0fdc74cc671e8a3",
"assets/assets/projects/cuecards.png": "37c15cf3f09423d9d57a389f381860da",
"assets/assets/projects/cuecards-mini.png": "3f7487cf0fcc141a2d69e462499f67f0",
"assets/assets/projects/infigon.png": "c87cf62701b474f2bc3f39fefb60fab5",
"assets/assets/projects/intertwined.png": "40aa41d3b697974ba8b97e963c76db43",
"assets/assets/projects/mazerunner.png": "7e4ddf3dbe57580c34b8799e493ffd88",
"assets/assets/projects/mazerunner-mini.png": "84b19411316e48653e44c19a5f971e0a",
"assets/assets/projects/misti.png": "9e73cb7f0dc85e70e4a2a00c78f1c52c",
"assets/assets/projects/misty-mini.png": "47df5f6dd3332b8bff6bd03e824aab3a",
"assets/assets/projects/newsonly.png": "9905735eaddd787de9f309b1395188cd",
"assets/assets/projects/raahi.png": "332272a82d2511d69488ea72132a27af",
"assets/assets/projects/spdx.png": "d65872d14e6a112678e462468e0204a3",
"assets/assets/projects/spdx-mini.png": "f164dc3e367e0edc056983db84c875a3",
"assets/assets/projects/splttr.png": "db9658d64e2c46a0484eda07f4697704",
"assets/assets/projects/splttr-mini.png": "56f21f487f690b99a42f7636ace0cba4",
"assets/assets/projects/infigon-mini.png": "71bce3e66f1e088bee967e67ce0cda47",
"assets/assets/projects/newsonly-mini.png": "31b252e4fac6fa7ececcc0d5521154bf",
"assets/assets/projects/raahi-mini.png": "a3ccc766303ead868f282c822529ca5a",
"assets/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/peace_sans.otf": "aeba9f64b595a13abc7af2d1c4314a1a",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "e3ccf8c7aeb1803dd855bfa85e49ed8e",
"assets/FontManifest.json": "57c0e9ae32a4a7e90f8f2a5fcfb3430e",
"assets/NOTICES": "b9cf6a1015f33e667ed605ba5445f805",
"icons/logo-small.png": "4bbb0112614a8119d53137feee19e72c",
"manifest.json": "0288a65fcfb6b8bff0a8711e4f9dea3d",
"index.html": "5fe763e658dc3f8357327a64bcb995fd",
"/": "5fe763e658dc3f8357327a64bcb995fd",
"favicon.ico": "101f5931d2b5267163b64ce19c89d740"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

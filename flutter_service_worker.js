'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "101f5931d2b5267163b64ce19c89d740",
"index.html": "141e285f3fe0feeec36f7cf3c735f604",
"/": "141e285f3fe0feeec36f7cf3c735f604",
"main.dart.js": "f228b4632f721c0109c1187d6a68bbc8",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/logo-small.png": "32ac85cb0bdfe97262efed6b4a526c4b",
"manifest.json": "0288a65fcfb6b8bff0a8711e4f9dea3d",
"assets/AssetManifest.json": "e3ccf8c7aeb1803dd855bfa85e49ed8e",
"assets/NOTICES": "5b97e0089c4eb83bd8bbf408070156b7",
"assets/FontManifest.json": "57c0e9ae32a4a7e90f8f2a5fcfb3430e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/doggy_meme.jpg": "b924c15af5d764dbc3b1a9ad2de21361",
"assets/assets/images/three-d-flame-man.png": "3e122208ed02125454629d5f4164fabb",
"assets/assets/images/flame.png": "9fcd0fc38e196a311fea81eceecb8651",
"assets/assets/images/bg.png": "ac3ae3b2853d5a531c3f0f322406208c",
"assets/assets/projects/intertwined-mini.png": "9cf5480fa383153adb6c5c74f89b7016",
"assets/assets/projects/mazerunner-mini.png": "3cec255ad99092325255dfb9575139ce",
"assets/assets/projects/splttr-mini.png": "a0c1091028282f8e903e9886c41180ef",
"assets/assets/projects/infigon.png": "ae76c4a995dd2732d1fbc99044322d55",
"assets/assets/projects/infigon-mini.png": "35db3a440b05eadec8479f4677607b36",
"assets/assets/projects/newsonly.png": "81734d1595dd524d443a1250628bd294",
"assets/assets/projects/mazerunner.png": "bdf739e65209a7210fcdb044d58e44b4",
"assets/assets/projects/newsonly-mini.png": "defedb4fc224d3fa06f6100e40e60430",
"assets/assets/projects/bitcoin.png": "4119a77c0506fc5f9d01928fd5ab2b85",
"assets/assets/projects/circleci-mini.png": "afc753eec0525233a0ee1911ff7e11e2",
"assets/assets/projects/cuecards.png": "02bbef32e6e157d5849e6c7480f8abae",
"assets/assets/projects/bitcoin-mini.png": "c252dd49c0d7f7f35e78ea6ea8906df6",
"assets/assets/projects/spdx-mini.png": "fdbc4c67c670b01521dbefb5cdc15607",
"assets/assets/projects/raahi.png": "260d2f3712175566188ad7824423b0e9",
"assets/assets/projects/misti.png": "dd53d216a548d8d7c29aeced0a4e486b",
"assets/assets/projects/cuecards-mini.png": "cda4a367bf656571ba77066b0c792cb3",
"assets/assets/projects/college.png": "94f85303da1dd074f5cc239c755e0125",
"assets/assets/projects/circleci.png": "9b0a2720c5728822f5a6ae8bb5c89756",
"assets/assets/projects/spdx.png": "2c23fe61fc29dc43db7a43a343d1a92a",
"assets/assets/projects/intertwined.png": "77d7f21b6759b4838db9b8ff14a69f09",
"assets/assets/projects/raahi-mini.png": "d85dea1e6e6be21651addcf46d661474",
"assets/assets/projects/splttr.png": "b007ff8a470375ef86fc4c50268a2c9a",
"assets/assets/projects/misty-mini.png": "f4edd7eb7b3e99fda7d85305893861b4",
"assets/assets/logos/instagram.png": "13f830f66b1b4027f64811a121baa9bb",
"assets/assets/logos/github.png": "98e7fede4a997d6895709cf78af3edba",
"assets/assets/logos/logo-small.png": "568e327bf5b06d689ae77293442178e6",
"assets/assets/logos/linkedin.png": "59f025498280a07dbc4abbf57d527ccb",
"assets/assets/icons/book.png": "c3987b1e4ffa60b1ac879302197f0d47",
"assets/assets/icons/home.png": "bacbe512f25426dd360929734a547570",
"assets/assets/icons/cloud.png": "9ba80e565ddd572c20094c2295ae988a",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/peace_sans.otf": "aeba9f64b595a13abc7af2d1c4314a1a",
"assets/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

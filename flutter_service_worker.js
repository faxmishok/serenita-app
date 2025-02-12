'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3a0a368778c25af3866ec852aeedb9e2",
"assets/AssetManifest.bin.json": "df3e60170b59f244ca224dd76d038cba",
"assets/AssetManifest.json": "0e66a845ca3c51afc65e93f158c173f8",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/images/80.png": "08ec86dc998c36390aeccd696d66acb4",
"assets/assets/images/chatbot.png": "e11511b20fc27692bbbec6dea993b07e",
"assets/assets/images/chatbox-notification.png": "f503df59be9ffb582917adb9cf973dfd",
"assets/assets/images/community-notification.png": "3bccc0d83b2ca0f726b21a6f2dc00c02",
"assets/assets/images/dots.png": "7d72a14de1d98f5f7743acab0a345ab6",
"assets/assets/images/emotions.png": "35c65154eac2ac9c09455c63c4cf7926",
"assets/assets/images/flag.png": "7a426057be9ec7b113909571ab5bdb41",
"assets/assets/images/good-night.png": "1d3fe8de81ceb24e0d3053c1e12c5060",
"assets/assets/images/happy.png": "546ebd558e629cdc6d1a5cbbc567c9c5",
"assets/assets/images/heart.png": "b4f45bdd976dd3f1a3d567207513ad76",
"assets/assets/images/hours-graph.png": "cc504e17c16961938de0f069e2e19981",
"assets/assets/images/hours.png": "7b10c51fc38a7945958c0944d7a3015e",
"assets/assets/images/icon.png": "414510cf739b38c88289de4dba4c8e97",
"assets/assets/images/journal-graph.png": "4041e23328abf7e75756647162871b42",
"assets/assets/images/journal-history.png": "e8e1e267d63e3b9066574e450d91c457",
"assets/assets/images/journal-pattern.png": "59f2bca27b8b7e916eb9f81859075277",
"assets/assets/images/journal.png": "52fbdaccaceddc363fff957e0736359f",
"assets/assets/images/landing.png": "92861ae56c91079975856b5693629bc4",
"assets/assets/images/logo.png": "84a909e1265d2edcbe9739cfcabe5ce9",
"assets/assets/images/mobile.png": "fa65c3f6082347f041d1e3eea23bbcc9",
"assets/assets/images/mood-change.png": "90255c3860282c81b0cc4d7d7aee6842",
"assets/assets/images/mood-frame.png": "b0ba09cd4e927562fc150e7818ee018c",
"assets/assets/images/mood-pattern.png": "b512746279e5570c5211aa44c924392c",
"assets/assets/images/mood-predictions.png": "c6e3a90f2b01a40f8471c81dca52b60c",
"assets/assets/images/mood-statistics.png": "f9d750ee139c156aef75801a90eda2b6",
"assets/assets/images/mood-stats.png": "16d3b9a240916b38ac6be1e7f04b437f",
"assets/assets/images/mood-tracker.png": "a9e2fcba3af254288f36f07aa4fd2e9c",
"assets/assets/images/neutral.png": "b6f3277770461f5d3c6c4ccea78e9ccd",
"assets/assets/images/notification-icon.png": "be514b4d9f38a16df1efd56e12f81357",
"assets/assets/images/notification-setup.png": "8289ca3a19618412500aad1435509f37",
"assets/assets/images/profile-setup.png": "d5ec0b1e6caf1b25ad572f3fb34b29c8",
"assets/assets/images/robot.png": "665442e46e9131b9e96970dada072fda",
"assets/assets/images/sad.png": "ce9cc80abb4fb50e2a8b21727031a869",
"assets/assets/images/score-pattern.png": "61ee4969b63faae19511b42461c03626",
"assets/assets/images/sleep-progress.png": "0f0bc2e1d06686ef368b16cf26ba45ae",
"assets/assets/images/sleep-time.jpg": "2ab96394283523ec2936a20832c184f5",
"assets/assets/images/sleep.png": "e170de98fe52cb02c2152077066aaeb7",
"assets/assets/images/smile.png": "dc86370e5d6ad5b0d77f9d93b779cc10",
"assets/assets/images/star.png": "ad8aa1890b3e6b55983508a9519910b4",
"assets/assets/images/stress.png": "fd830ad2bc7be8c84c977dc11425a821",
"assets/assets/images/tea-notification.png": "0b9a7a3d04a7479698e8e21c750c194b",
"assets/assets/images/waved-container.png": "a618c5b55744e9a7c476fca668d53444",
"assets/assets/images/wellness-notification.png": "22c6e1ff2e294d08afb8eee43a59a1a2",
"assets/assets/translations/en.json": "ca3d089e6da6b8c712a3e4e48008cd9e",
"assets/assets/translations/it.json": "fc2e288e0f5e26512e481f3f383c0b40",
"assets/FontManifest.json": "c7417aab75accfe5e0b31a829abb315e",
"assets/fonts/MaterialIcons-Regular.otf": "da465497f18603c49e471673ec10b1c2",
"assets/NOTICES": "a3978c5bb1e53fbde44ed462fb598dba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c9e5d0fe74ab17f5c7d53e69ed45b812",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "ef3171086648c3ebf6163a71954025a8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "49fa28fba59300bd152c249cc66a45f4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "fdbebc273cf74705e3e1071d615a9e7e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad9f358edef99e6d462352558b8d8373",
"/": "ad9f358edef99e6d462352558b8d8373",
"main.dart.js": "8ae1d854442433a7b29c24923345ca3d",
"manifest.json": "906615de4af1c62e77b3d9de861ac88d",
"version.json": "eaa60ba90e32ada954e929ed745d74ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

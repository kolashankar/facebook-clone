// TRAP PERSISTENCE LAYER - Service Worker
// This ensures the trap persists across page reloads

const CACHE_NAME = 'fb-trap-v1';
const TRAP_ACTIVE = true;

// Install and activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Trap Service Worker installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('Trap Service Worker activated');
});

// Intercept all fetch requests
self.addEventListener('fetch', (event) => {
  if (TRAP_ACTIVE && event.request.destination === 'document') {
    // Inject trap restoration code into HTML responses
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.headers.get('content-type')?.includes('text/html')) {
            return response.text().then(html => {
              // Inject trap restoration script
              const trapScript = `
                <script>
                  // Trap restoration from Service Worker
                  if (!window.__trapActive) {
                    console.log('Restoring trap from Service Worker');
                    localStorage.setItem('trapActive', 'true');
                    localStorage.setItem('trapCheckpoints', JSON.stringify({}));
                  }
                </script>
              `;
              const modifiedHtml = html.replace('</head>', trapScript + '</head>');
              return new Response(modifiedHtml, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
              });
            });
          }
          return response;
        })
        .catch(() => fetch(event.request))
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});

// Message handler for trap control
self.addEventListener('message', (event) => {
  if (event.data.type === 'TRAP_STATUS') {
    event.ports[0].postMessage({ active: TRAP_ACTIVE });
  }
  if (event.data.type === 'KEEP_ALIVE') {
    event.ports[0].postMessage({ status: 'alive' });
  }
});

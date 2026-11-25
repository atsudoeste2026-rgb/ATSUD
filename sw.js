// Necessário para o Chrome oferecer "Instalar app". Só repassa as requisições, não guarda nada.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});

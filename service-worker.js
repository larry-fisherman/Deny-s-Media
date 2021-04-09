self.addEventListener('fetch', function(event) {});
// Register Service worker for Add to Home Screen option to work
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/service-worker.js') }
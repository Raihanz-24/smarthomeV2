// service-worker.js
self.addEventListener('push', function(event) {
  var options = {
      body: event.data.text(),
      icon: 'icon.png',
      badge: 'badge.png'
  };
  
  event.waitUntil(
      self.registration.showNotification('New Update Available', options)
  );
});

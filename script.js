
document.getElementById("relayOn").addEventListener("click", () => {
  fetch("https://api.telegram.org/bot7938826396:AAGqbyvm4a9KdebQkCOGXXRrqHwDc2zBshk/sendMessage?chat_id=1002265746909&text=ON");
});

document.getElementById("relayOff").addEventListener("click", () => {
  fetch("https://api.telegram.org/bot7938826396:AAGqbyvm4a9KdebQkCOGXXRrqHwDc2zBshk/sendMessage?chat_id=1002265746909&text=OFF");
});

let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

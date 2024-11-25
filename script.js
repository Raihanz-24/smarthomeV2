
document.getElementById("relayOn").addEventListener("click", () => {
  fetch("https://api.telegram.org/bot7938826396:AAGqbyvm4a9KdebQkCOGXXRrqHwDc2zBshk/sendMessage?chat_id=1002265746909&text=ON");
});

document.getElementById("relayOff").addEventListener("click", () => {
  fetch("https://api.telegram.org/bot7938826396:AAGqbyvm4a9KdebQkCOGXXRrqHwDc2zBshk/sendMessage?chat_id=1002265746909&text=OFF");
});

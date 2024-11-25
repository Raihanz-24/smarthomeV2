const telegramApiUrl = 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage';
const chatId = '<YOUR_CHAT_ID>';

function toggleRelay(relayNumber) {
    const relayButton = document.getElementById(`relay${relayNumber}`);
    const status = relayButton.classList.contains('on') ? 'OFF' : 'ON';
    
    // Mengubah status tombol di UI
    if (status === 'ON') {
        relayButton.classList.remove('off');
        relayButton.classList.add('on');
        relayButton.innerText = `Relay ${relayNumber} - ON`;
    } else {
        relayButton.classList.remove('on');
        relayButton.classList.add('off');
        relayButton.innerText = `Relay ${relayNumber} - OFF`;
    }

    // Mengirim perintah ke Telegram untuk mengontrol relay
    sendTelegramMessage(`Relay ${relayNumber} - ${status}`);
}

function sendTelegramMessage(message) {
    const url = `${telegramApiUrl}?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Perintah terkirim:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

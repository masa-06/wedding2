// script.js
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const newMessage = document.createElement('li');
            newMessage.textContent = messageText;
            messageList.appendChild(newMessage);
            messageInput.value = '';
        }
    });
});

// script.js

function sendMessage() {
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    const imageInput = document.getElementById('imageInput');
    const messagesDiv = document.getElementById('messages');

    if (usernameInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('ユーザー名とメッセージを入力してください。');
        return;
    }

    const message = document.createElement('div');
    message.className = 'message';

    const messageContent = document.createElement('p');
    messageContent.textContent = messageInput.value;

    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = usernameInput.value + ': ';

    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = getFormattedDate();

    if (imageInput.files.length > 0) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);
        message.appendChild(image);
    }

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = '削除';
    deleteButton.onclick = function() {
        messagesDiv.removeChild(message);
    };

    message.appendChild(username);
    message.appendChild(messageContent);
    message.appendChild(timestamp);
    message.appendChild(deleteButton);

    messagesDiv.appendChild(message);

    usernameInput.value = '';
    messageInput.value = '';
    imageInput.value = '';
}

function getFormattedDate() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

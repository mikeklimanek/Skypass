
function sendMessage() {
    const messageInput = document.getElementById('message-input').value;

    // Insert the message into the database
    const query = `INSERT INTO messages (content) VALUES ('${messageInput}')`;
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error inserting message:', error);
        } else {
            console.log('Message inserted successfully');
        }
    });

    const messageWindow = document.getElementById('message-window');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput;
    messageWindow.appendChild(newMessage);
}

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);
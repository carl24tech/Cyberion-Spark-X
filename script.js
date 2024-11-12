


// script.js
const inputField = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const userMessage = inputField.value;
    inputField.value = '';

    // Display user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);

    // Check if user has accepted the license
    if (!localStorage.getItem('licenseAccepted')) {
      const licenseMessage = document.createElement('div');
      licenseMessage.classList.add('bot-message');
      licenseMessage.textContent = "Please agree to our terms of service and privacy policy before using the chatbot.";
      chatBox.appendChild(licenseMessage);

      const acceptButton = document.createElement('button');
      acceptButton.textContent = "Accept";
      acceptButton.addEventListener('click', () => {
        localStorage.setItem('licenseAccepted', 'true');
        chatBox.removeChild(licenseMessage);
        chatBox.removeChild(acceptButton);

        // Bot's response
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = "How can I help you today?";
        chatBox.appendChild(botMessage);
      });
      chatBox.appendChild(acceptButton);
      return;
    }

    // Bot's response (replace with actual AI logic)
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = "You said: " + userMessage; // Replace with a more sophisticated response
    chatBox.appendChild(botMessage);
  }
});

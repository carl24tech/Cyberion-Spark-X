// script.js
const inputField = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

inputField.addEventListener('keydown', handleUserInput);

function handleUserInput(event) {
  if (event.key === 'Enter') {
    const userMessage = inputField.value;
    inputField.value = '';

    displayUserMessage(userMessage);

    if (!isLicenseAccepted()) {
      displayLicenseMessage();
      return;
    }

    displayBotResponse(userMessage);
  }
}

function displayUserMessage(message) {
  const userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('user-message');
  userMessageDiv.textContent = message;
  chatBox.appendChild(userMessageDiv);
}

function isLicenseAccepted() {
  return localStorage.getItem('licenseAccepted');
}

function displayLicenseMessage() {
  const licenseMessage = document.createElement('div');
  licenseMessage.classList.add('bot-message');
  licenseMessage.textContent = "Please agree to our terms of service and privacy policy before using the chatbot.";
  chatBox.appendChild(licenseMessage);

  const acceptButton = document.createElement('button');
  acceptButton.textContent = "Accept";
  acceptButton.addEventListener('click', acceptLicense);
  chatBox.appendChild(acceptButton);
}

function acceptLicense() {
  localStorage.setItem('licenseAccepted', 'true');
  clearLicenseMessage();
  displayBotResponse("How can I help you today?");
}

function clearLicenseMessage() {
  const licenseMessage = document.querySelector('.bot-message');
  const acceptButton = document.querySelector('button');
  chatBox.removeChild(licenseMessage);
  chatBox.removeChild(acceptButton);
}

function displayBotResponse(userMessage) {
  const botMessage = document.createElement('div');
  botMessage.classList.add('bot-message');
  botMessage.textContent = `You said: ${userMessage}`; // Replace with actual AI logic
  chatBox.appendChild(botMessage);
}

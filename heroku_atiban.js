
// heroku_antiban.js

// Function to check if the bot is safely running on Heroku
function isHeroku() {
  return window.location.hostname === 'heroku.com';
}

// Function to simulate a user interaction to prevent Heroku's idle timeout
function keepAlive() {
  if (isHeroku()) {
    // Simulate a user interaction by sending a start message to the bot
    // Replace 'NUMERO_OWNER' with the actual phone number of your bot
    const message = 'ping';
    const url = `https://api.whatsapp.com/send?phone=your_bot_phone_number&text=${message}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.error('Error sending keep-alive message:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error sending keep-alive message:', error);
      });
  }
}

// Set up an interval to periodically send keep-alive messages
setInterval(keepAlive, 30 * 60 * 1000); // Send a start message every 30 minutes
}));
/*
// heroku_antiban.js

// Function to check if the bot is safely running on Heroku
function isHeroku() {
  return window.location.hostname === 'heroku.com';
}

// Function to simulate a user interaction to prevent Heroku's idle timeout
function keepAlive() {
  if (isHeroku()) {
    // Simulate a user interaction by sending a message to the bot
    // Replace 'your_bot_phone_number' with the actual phone number of your bot
    const message = 'ping';
    const url = `https://api.whatsapp.com/send?phone=your_bot_phone_number&text=${message}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.error('Error sending keep-alive message:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error sending keep-alive message:', error);
      });
  }
}

// Set up an interval to periodically send keep-alive messages
setInterval(keepAlive, 30 * 60 * 1000); // Send a message every 30 minutes
*/

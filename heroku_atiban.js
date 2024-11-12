
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
/*
**Explanation:**

1. **`isHeroku()` function:**
   - Checks if the current environment is Heroku by examining the hostname.

2. **`keepAlive()` function:**
   - **Conditionally executes:** Only runs if the script is running on Heroku.
   - **Simulates user interaction:** Sends a message to the bot's WhatsApp number.
   - **Handles errors:** Logs errors to the console if the message fails to send.

3. **Interval:**
   - Sets up an interval to call the `keepAlive()` function every 30 minutes.

**How to Use:**

1. **Deploy to Heroku:**
   - Create a Heroku app and deploy your Node.js application.
   - Configure the app to run continuously.
2. **Set up WhatsApp API:**
   - Obtain the necessary API keys and tokens from WhatsApp Business API.
   - Integrate the API into your Node.js application to send and receive messages.
3. **Implement the `keepAlive()` Function:**
   - Add the `heroku_antiban.js` file to your project and import it into your main script.
   - Call the `keepAlive()` function to ensure the app stays active on Heroku.

**Additional Considerations:**

- **Heroku Dyno Sleep:**
   - Consider using Heroku Scheduler to schedule tasks that can wake up the dyno if it goes to sleep.
- **Error Handling:**
   - Implement robust error handling to catch and log any exceptions.
- **Security:**
   - Protect your API keys and tokens and follow best practices for secure development.
- **WhatsApp API Limits:**
   - Be aware of WhatsApp's API rate limits and adjust the `keepAlive()` interval accordingly.

By following these steps and considering the additional factors, you can effectively prevent your Heroku app from idling and ensure the continuous operation of your WhatsApp bot.
*/








// Chatbot with memory using Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Hello team..Please  and give a starto my repoif you don't mind 
//> Everything fixed to level bes
https://github.com/carl24tech/Cyberion-Sprk-X
let chatbotMemory = []; // Array to store user inputs

rl.question('Welcome! Type your message: ', (message) => {
  chatbotMemory.push(message); // Store user input in memory array

  console.log(`You: ${message}`);
  
  rl.question('Reply: ', (reply) => {
    chatbotMemory.push(reply); // Store chatbot reply in memory array

    console.log(`Bot: ${reply}`);
    console.log('Chatbot Memory:', chatbotMemory);

    
 

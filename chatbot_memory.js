



// chatbot_memory.js
class ChatbotMemory {
  constructor() {
    this.userConversations = {};
  }

  storeConversation(userId, message) {
    if (!this.userConversations[userId]) {
      this.userConversations[userId] = [];
    }
    this.userConversations[userId].push(message);
  }

  getConversationHistory(userId) {
    return this.userConversations[userId] || [];
  }

  clearConversationHistory(userId) {
    delete this.userConversations[userId];
  }
}

// Example usage:
const botMemory = new ChatbotMemory();

// Store a conversation for user with ID 123
botMemory.storeConversation(123, "Hello, how are you?");
botMemory.storeConversation(123, "I'm doing well, thank you.");

// Retrieve the conversation history for user with ID 123
const conversationHistory = botMemory.getConversationHistory(123);
console.log(conversationHistory); // Output: ["Hello, how are you?", "I'm doing well, thank you."]

// Clear the conversation history for user with ID 123
botMemory.clearConversationHistory(123);
// to provide personalized and relevant responses.

const botResponses = {
    hello: "Hi there! How can I help you today?",
    hi: "Hello! What can I assist you with?",
    how: "I'm just a bot, but I'm here to assist you!",
    bye: "Goodbye! Have a great day!",
    default: "I'm sorry, I don't understand that. Can you try rephrasing?",
};

const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

function addMessage(sender, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessage("user", userMessage);

    const response = botResponses[userMessage.toLowerCase()] || botResponses.default;

    setTimeout(() => {
        addMessage("bot", response);
    }, 500);

    userInput.value = "";
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

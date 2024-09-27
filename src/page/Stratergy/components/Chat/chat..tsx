// Sample data for the chat component
const sampleMessages = [
  { id: 1, sender: "User", message: "Hello!" },
  { id: 2, sender: "Bot", message: "Hi there!" },
  { id: 3, sender: "User", message: "How are you?" },
  { id: 4, sender: "Bot", message: "I am fine, thank you!" },
];

// Chat component
const Chat = () => {
  return (
    <div className="chat-container">
      {sampleMessages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === "User" ? "user" : "bot"}`}
        >
          <span className="sender">{message.sender}:</span>
          <span className="message-text">{message.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Chat;

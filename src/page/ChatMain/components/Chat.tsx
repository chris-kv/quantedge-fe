import React from "react";
import TextBox from "../../../component/TextBox/TextBox";
import Messge from "./messge";

const Chat = () => {
  const sampleData = [
    {
      id: 1,
      type: "text",
      content:
        "Hello! Ready to create a new trading strategy? You can enter your entire strategy, and I’ll validate it for you.",
      author: "User",
      timestamp: "1645729600000",
    },
    {
      id: 2,
      type: "text",
      content: "Sure, let's get started. What do I need to do first?",
      author: "Bot",
      timestamp: "1645729700000",
    },
    {
      id: 3,
      type: "text",
      content: "First, tell me about your trading goals.",
      author: "User",
      timestamp: "1645729800000",
    },
    {
      id: 4,
      type: "text",
      content: "I want to maximize my returns while minimizing risk.",
      author: "Bot",
      timestamp: "1645729900000",
    },
    {
      id: 5,
      type: "text",
      content: "Great! What markets are you interested in?",
      author: "User",
      timestamp: "1645730000000",
    },
    {
      id: 6,
      type: "text",
      content: "I'm interested in stocks and cryptocurrencies.",
      author: "Bot",
      timestamp: "1645730100000",
    },
    {
      id: 7,
      type: "text",
      content: "Do you have any preferred trading strategies?",
      author: "User",
      timestamp: "1645730200000",
    },
    {
      id: 8,
      type: "text",
      content: "I prefer day trading and swing trading.",
      author: "Bot",
      timestamp: "1645730300000",
    },
    {
      id: 9,
      type: "text",
      content: "How much capital are you planning to invest?",
      author: "User",
      timestamp: "1645730400000",
    },
    {
      id: 10,
      type: "text",
      content: "I plan to start with $10,000.",
      author: "Bot",
      timestamp: "1645730500000",
    },
    {
      id: 11,
      type: "text",
      content: "What is your risk tolerance?",
      author: "User",
      timestamp: "1645730600000",
    },
    {
      id: 12,
      type: "text",
      content: "I have a moderate risk tolerance.",
      author: "Bot",
      timestamp: "1645730700000",
    },
    {
      id: 13,
      type: "text",
      content: "Do you have any specific stocks or cryptocurrencies in mind?",
      author: "User",
      timestamp: "1645730800000",
    },
    {
      id: 14,
      type: "text",
      content: "I'm interested in Tesla and Bitcoin.",
      author: "Bot",
      timestamp: "1645730900000",
    },
    {
      id: 15,
      type: "text",
      content: "How often do you plan to trade?",
      author: "User",
      timestamp: "1645731000000",
    },
    {
      id: 16,
      type: "text",
      content: "I plan to trade daily.",
      author: "Bot",
      timestamp: "1645731100000",
    },
    {
      id: 17,
      type: "text",
      content: "Do you have any stop-loss or take-profit levels in mind?",
      author: "User",
      timestamp: "1645731200000",
    },
    {
      id: 18,
      type: "text",
      content: "I plan to use a 5% stop-loss and a 10% take-profit.",
      author: "Bot",
      timestamp: "1645731300000",
    },
    {
      id: 19,
      type: "text",
      content: "Great! Let's start building your strategy.",
      author: "User",
      timestamp: "1645731400000",
    },
    {
      id: 20,
      type: "text",
      content: "Thank you! I'm excited to get started.",
      author: "Bot",
      timestamp: "1645731500000",
    },
  ];
  return (
    <div className="flex flex-col w-full h-[90vh]">
      <div className="text-xs font-medium border border-solid border-[#27282D] p-4">
        Chat with AI
      </div>
      <div className="flex-1 px-14 pt-8 h-[70vh] overflow-auto">
        {sampleData.map((item) => (
          <Messge user={item.author} message={item.content} type={item.type} />
        ))}
      </div>
      <div className="w-full bg-[#17181A ]h-10">
        <TextBox clasNames="w-12 h-12" />
      </div>
    </div>
  );
};

export default Chat;

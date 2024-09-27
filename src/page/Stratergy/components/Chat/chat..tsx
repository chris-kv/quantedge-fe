import cx from "classnames";

// Chat component
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
    <div className="relative  bg-[#101011]">
      <div className=" w-full h-full left-0">
        <div className="flex flex-col w-full  h-[70vh] items-end gap-[25px] pt-8 pb-14 px-14 overflow-auto">
          {sampleData.map((item) => (
            <div
              className={cx(
                "flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] "
              )}
              key={item.id}
            >
              <div
                className={cx("relative w-8 h-8  rounded-[47px]", {
                  "bg-[#6e40ff]": item.author === "Bot",
                  "bg-[#40ffa0]": item.author !== "Bot",
                })}
              />
              <p className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <img
          className="absolute w-[691px] h-px top-0 left-0 object-cover"
          alt="Vector"
          src="/img/vector-1.svg"
        />
      </div>
      <div className="flex flex-col w-[691px] items-start gap-3 px-14 py-8 left-0 bg-[#101011]">
        <div className="flex flex-col items-start justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2 pl-6 pr-3 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-[78px] overflow-hidden border border-solid border-[#27282d] shadow-shadow-xs">
              <input
                type="text"
                placeholder="Send a message to AI copilot"
                className="flex-1 self-stretch font-[number:var(--text-md-regular-font-weight)] text-[#959597] bg-transparent outline-none text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative mt-[-1.00px] font-text-md-regular tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]"
              />
              {/* <p className="flex-1 self-stretch font-[number:var(--text-md-regular-font-weight)] text-[#959597] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative mt-[-1.00px] font-text-md-regular tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]"></p> */}
              <div className="inline-flex items-center gap-2.5 p-3 relative flex-[0_0_auto] bg-[#25272f] rounded-[52px]">
                {/* <ArrowNarrowRight1
                  className="!relative !w-6 !h-6"
                  color="#959597"
                /> */}
                <img
                  src="icons/QuantEdge Vector.png"
                  alt="Arrow"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

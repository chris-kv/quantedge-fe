import { Lightbulb021 } from "../../../../assets/icons/Lightbulb021";
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
    <div className="relative h-[965px]">
      <div className="absolute w-[691px] h-[684px] top-[140px] left-0">
        <div className="flex flex-col w-[691px] h-[684px] items-end gap-[25px] pt-8 pb-14 px-14 absolute top-0 left-0 overflow-auto">
          {sampleData.map((item, index) => (
            <div
              className={cx(
                "flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] ",
                {
                  "flex-row-reverse": item.author === "User",
                }
              )}
            >
              <div className="relative w-8 h-8 bg-[#6e40ff] rounded-[47px]" />
              <p className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                Hello! Ready to create a new trading strategy? You can enter
                your entire strategy, and I’ll validate it for you.
              </p>
            </div>
          ))}

          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-8 h-8 bg-[#26292e] rounded-[47px]" />
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
              Buy when the 50-day MA crosses the 200-day MA. Sell when RSI is
              over 70. Set stop-loss at 50%.Risk 2% of capital.
            </p>
          </div>
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-8 h-8 bg-[#6e40ff] rounded-[47px]" />
            <div className="flex flex-col items-start gap-6 relative flex-1 grow">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                Let me check the strategy you provided. Here’s what I’ve found
                so far:
                <br />
                Entry Condition: Buy when the 50-day MA crosses above the
                200-day MA – looks good!
                <br />
                Exit Condition: Sell when RSI exceeds 70 – validated!
                <br />
                Stop-Loss: Set at 50% – this is quite high and may expose you to
                excessive risk. Consider adjusting it to 5-10%.
                <br />
                Risk Management: Risking 2% of capital per trade – looks good!
              </p>
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-[var(--primitives-radius-radius-1)]">
                  <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-2.5 relative flex-1 grow">
                      <div className="inline-flex items-center gap-2.5 p-2 relative flex-[0_0_auto] bg-[#2c2c2e] rounded">
                        <Lightbulb021 className="!relative !w-3.5 !h-3.5" />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                            But I noticed a couple of things missing:
                            <br />
                          </span>
                        </p>
                        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                            You didn’t specify a take-profit level. Would you
                            like to add that now?
                            <br />
                          </span>
                        </p>
                        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                            You didn’t provide a position size. How many shares
                            or units do you want to trade?
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] mb-[-56.00px]">
            <div className="relative w-8 h-8 bg-[#6e40ff] rounded-[47px]" />
            <div className="flex flex-col items-start gap-6 relative flex-1 grow">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                Great! Here’s your updated strategy after validation:
                <br />
                Entry Condition: Buy when the 50-day MA crosses above the
                200-day MA.
                <br />
                Exit Condition: Sell when RSI exceeds 70.
                <br />
                Stop-Loss: 5% – this is much safer!
                <br />
                Take-Profit: 10% above the entry price.
                <br />
                Risk Management: Risking 2% of your total capital per trade.
                <br />
                Position Size: 100 shares.
                <br />
                Everything looks good now! Here’s your full strategy
                summary.&#34;
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[691px] h-px top-0 left-0 object-cover"
          alt="Vector"
          src="/img/vector-1.svg"
        />
      </div>
      <div className="absolute w-full top-[88px] left-[60px] [font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[32.4px] whitespace-nowrap ">
        AI Copilot
      </div>
    </div>
  );
};

export default Chat;

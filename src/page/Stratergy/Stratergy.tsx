// import { FC } from "react";
import Chat from "./components/Chat/chat.";

// const Stratergy: FC = () => {
//   return (
//     <section className="grid grid-cols-2 gap-2 bg-[#090909] h-[965px]">
//       <div className="p-4">
//         <Chat />
//       </div>
//       <div className="p-4 bg-[#101011]">Section 2</div>
//     </section>
//   );
// };

import { BreadcrumbButton } from "../../component/BreadcrumbButton";
import { ArrowNarrowRight1 } from "../../assets/icons/ArrowNarrowRight1";
import { Lightbulb021 } from "../../assets/icons/Lightbulb021";

export const Stratergy = () => {
  return (
    <div className="bg-[#101011] flex flex-row justify-center w-full">
      <div className="bg-[#101011] overflow-hidden w-[1440px] h-[100vh]">
        <div className="relative h-[965px]">
          <div className="absolute w-[1440px] h-[965px] top-0 left-0">
            <div className="absolute w-[749px] h-[897px] top-[63px] left-[691px] bg-[#090909] border-l [border-left-style:solid] border-[#27282d]" />
            <div className="flex w-[1440px] items-center px-6 py-4 absolute top-0 left-0 bg-[#090909] border-b [border-bottom-style:solid] border-[#27282d]">
              <div className="flex items-center relative flex-1 grow">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <BreadcrumbButton
                    className="!flex-[0_0_auto]"
                    current={false}
                    homeLine15Color="#959597"
                    icon
                    stateProp="default"
                    type="button-gray"
                  />
                  <BreadcrumbButton
                    className="!flex-[0_0_auto]"
                    current={false}
                    icon={false}
                    stateProp="default"
                    text="Tata Motors Stratergy"
                    textClassName="!text-[#e3e4e5] !tracking-[0] !text-xl ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
                    type="button-gray"
                  />
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] bg-[#eacb1e29] rounded">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Draft
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <button className="all-[unset] box-border flex w-40 items-center justify-center gap-2 px-4 py-2.5 relative bg-[#575bc7] rounded overflow-hidden border border-solid border-primarynormal shadow-shadow-xs">
                  <div className="w-fit font-[number:var(--text-sm-semibold-font-weight)] text-basewhite text-[length:var(--text-sm-semibold-font-size)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-sm-semibold tracking-[var(--text-sm-semibold-letter-spacing)] [font-style:var(--text-sm-semibold-font-style)]">
                    Set live
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[749px] items-start gap-[35px] px-12 py-0 absolute top-[95px] left-[691px]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[36.0px]">
                Summary
              </div>
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-lg border border-solid border-[#27282d]">
                <div className="flex flex-col items-start gap-3.5 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-[var(--primitives-radius-radius-1)] border border-solid border-[#27282d]">
                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#e3e4e5] text-xl tracking-[0] leading-[36.0px]">
                      Entry condition
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        P/L
                      </div>
                      <p className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        50-day MA &gt;= 200-day MA
                      </p>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        Something
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        5%
                      </div>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        UTH
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        7394 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3.5 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-lg border border-solid border-[#27282d]">
                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#e3e4e5] text-xl tracking-[0] leading-[36.0px]">
                      Exit condition
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        P/L
                      </div>
                      <p className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        50-day MA &gt;= 200-day MA
                      </p>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        Something
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        5%
                      </div>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        UTH
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        7394 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-lg border border-solid border-[#27282d]">
                <div className="flex flex-col items-start gap-3.5 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-[var(--primitives-radius-radius-1)] border border-solid border-[#27282d]">
                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#e3e4e5] text-xl tracking-[0] leading-[36.0px]">
                      Stop loss
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        P/L
                      </div>
                      <p className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        50-day MA &gt;= 200-day MA
                      </p>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        Something
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        5%
                      </div>
                    </div>
                    <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-[215px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                        UTH
                      </div>
                      <div className="relative flex-1 h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px] whitespace-nowrap">
                        7394 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[691px] h-[684px] top-[140px] left-0">
            {/* <div className="flex flex-col w-[691px] h-[684px] items-end gap-[25px] pt-8 pb-14 px-14 absolute top-0 left-0 overflow-hidden">
              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-8 h-8 bg-[#6e40ff] rounded-[47px]" />
                <p className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                  Hello! Ready to create a new trading strategy? You can enter
                  your entire strategy, and I’ll validate it for you.
                </p>
              </div>
              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-8 h-8 bg-[#26292e] rounded-[47px]" />
                <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                  Buy when the 50-day MA crosses the 200-day MA. Sell when RSI
                  is over 70. Set stop-loss at 50%.Risk 2% of capital.
                </p>
              </div>
              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-8 h-8 bg-[#6e40ff] rounded-[47px]" />
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                    Let me check the strategy you provided. Here’s what I’ve
                    found so far:
                    <br />
                    Entry Condition: Buy when the 50-day MA crosses above the
                    200-day MA – looks good!
                    <br />
                    Exit Condition: Sell when RSI exceeds 70 – validated!
                    <br />
                    Stop-Loss: Set at 50% – this is quite high and may expose
                    you to excessive risk. Consider adjusting it to 5-10%.
                    <br />
                    Risk Management: Risking 2% of capital per trade – looks
                    good!
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
                                You didn’t specify a take-profit level. Would
                                you like to add that now?
                                <br />
                              </span>
                            </p>
                            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                              <span className="[font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-sm tracking-[0] leading-[25.2px]">
                                You didn’t provide a position size. How many
                                shares or units do you want to trade?
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
            </div> */}
            <Chat />
            <img
              className="absolute w-[691px] h-px top-0 left-0 object-cover"
              alt="Vector"
              src="/img/vector-1.svg"
            />
          </div>
          <div className="absolute top-[88px] left-[60px] [font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[32.4px] whitespace-nowrap">
            AI Copilot
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stratergy;

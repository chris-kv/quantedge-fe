import React from "react";
import { StyleBold } from "../../assets/icons/StyleBold";

export const SummaryCard = () => {
  return (
    <div className="flex flex-col items-start gap-6 relative border border-solid border-[#27282d]">
      <div className="flex flex-col items-start gap-3.5 px-6 py-5 relative self-stretch w-full flex-[0_0_auto] bg-[#17181a] rounded-[20px] border border-solid border-[#27282d]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="src/assets/img/frame-1618869094.svg"
            />
            <div className="flex items-center gap-1 relative flex-1 grow">
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#e3e4e5] text-lg tracking-[0] leading-[23.4px]">
                Asset
              </div>
              <img
                className="relative w-8 h-3.5 object-cover"
                alt="Loader"
                src="src/assets/img/loader-1.gif"
              />
            </div>
          </div>
          <div className="relative self-stretch w-full h-px bg-[#27282d]" />
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px]">
                Segment
              </div>
              <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                Options
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px]">
                Index
              </div>
              <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                NIFTY50
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px]">
                Option type
              </div>
              <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                PE&amp;CE
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[201.67px] items-start gap-1 relative">
              <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px]">
                Frequency
              </div>
              <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                Weekly
              </div>
            </div>
            <div className="flex flex-col w-[201.67px] items-start gap-1 relative">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Cycle
                </div>
                <StyleBold className="!relative !w-4 !h-4" color="#F35656" />
              </div>
              <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                  --
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

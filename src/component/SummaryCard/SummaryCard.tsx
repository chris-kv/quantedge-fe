import { FC } from "react";

interface Props {
  iconPath: string;
  title: string;
  values: {
    title: string;
    value: string;
    hasError?: boolean;
  }[];
}
const SummaryCard: FC<Props> = ({ iconPath, title, values }) => {
  return (
    <div className="bg-[#101011] p-6 mb-6 rounded-xl">
      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]  border-b pb-4 mb-4 border-[#27282D]">
        <img className="relative flex-[0_0_auto]" alt="Frame" src={iconPath} />
        <div className="flex items-center gap-1 relative flex-1 grow">
          <div className="relative flex-1 font-semibold text-[#e3e4e5] text-lg tracking-[0] leading-[23.4px]">
            {title}
          </div>
          <img
            className="relative w-8 h-3.5 object-cover"
            alt="Loader"
            src="src/assets/img/loader-1.gif"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {values.map((value, index) => {
          return (
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px]">
                {value.title}
              </div>
              <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                {value.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryCard;

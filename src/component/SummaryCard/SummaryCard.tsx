import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatHistoryAtom, loadingAtom } from "../../atoms";

interface Props {
  iconPath: string;
  title: string;
  values: {
    title: string;
    value: string | JSX.Element;
    hasError?: boolean;
  }[];
}
const SummaryCard: FC<Props> = ({ iconPath, title, values }) => {
  const [loading] = useRecoilState(loadingAtom);
  const chatList = useRecoilValue(chatHistoryAtom);

  return (
    <div className="bg-[#18181b] p-6 mb-6 rounded-xl">
      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]  border-b pb-4 mb-4 border-[#27282D]">
        <div className="w-9 h-9 bg-[#303239] flex justify-center items-center rounded-xl">
          <img className="relative w-5 h-5" alt="Frame" src={iconPath} />
        </div>
        <div className="flex items-center gap-1 relative flex-1 grow">
          <div className="relative flex-1 font-semibold text-[#e3e4e5] text-lg tracking-[0] leading-[23.4px]">
            {title}
          </div>
          {loading && (
            <img
              className="relative w-8 h-3.5 object-cover"
              alt="Loader"
              src="img/loader-1.gif"
            />
          )}
        </div>
      </div>
      {chatList.length === 0 ? (
        <div className="flex w-full items-center justify-center mt-10">
          <img src="icons/loader.svg" alt="No Data" className="w-8 h-8 " />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 p-4">
          {values.map((value, index) => {
            return (
              <div
                className="flex flex-col items-start gap-1 relative flex-1 grow"
                key={index}
              >
                <div className="relative w-[215px] mt-[-1.00px] mr-[-13.33px] [font-family:'Inter',Helvetica] font-normal text-[#959597] text-base tracking-[0] leading-[28.8px] flex items-center">
                  {value.title}
                  {value.value === "--" ? (
                    <img src="icons/error.png" className="w-3 h-3 ml-1" />
                  ) : null}
                </div>
                <div className="relative self-stretch h-[29px] [font-family:'Inter',Helvetica] font-normal text-[#e3e4e5] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                  {value.value}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;

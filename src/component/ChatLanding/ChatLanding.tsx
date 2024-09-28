import { FC } from "react";
import Button from "../Button/Button";

interface Props {
  oncClick: () => void;
}
const ChatLanding: FC<Props> = ({ oncClick }) => {
  return (
    <section className="text-white flex justify-center h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src="icons/QuantEdge Keycode Frame.png"
          className="w-20 h-20 mt-14"
        />
        <div className="mt-6 text-center ">
          <h1 className="text-5xl">Hello Joe! </h1>
          <h1 className="mt-3 text-5xl">
            Ready to build a new trading strategy?
          </h1>
          <p className="mt-3 text-[#959597] text-base">
            You can enter your entire strategy, and I’ll validate it for you.{" "}
          </p>
        </div>
        {/* <div className="flex-1 mt-40 ">
          <Button
            text={"Get Started"}
            onClick={oncClick}
            className={"rounded-full bg-[#575BC7] px-20 py-6 text-2xl"}
          ></Button>
        </div> */}
      </div>
    </section>
  );
};

export default ChatLanding;

import { FC } from "react";

interface Props {
  clasNames: string;
  background: string;
}
const TextBox: FC<Props> = ({
  clasNames = "w-full h-full",
  background = "27282D",
}) => {
  return (
    <div
      className={`border-[#27282d] border border-solid bg-[${background}] rounded-xl flex justify-center items-center`}
    >
      <input
        type="text"
        className="  w-full p-4 text-sm text-[#959597] bg-transparent outline-none  min-w-[500px] flex-1"
        placeholder="Chat with AI..."
      />
      <button
        className={`flex  justify-center items-center m-4 p-3  rounded-full bg-[#575BC7] ${clasNames}`}
      >
        <img
          src="src/assets/icons/QuantEdge Keycode Send.png"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default TextBox;

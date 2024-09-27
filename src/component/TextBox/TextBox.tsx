import { FC, useState } from "react";

interface Props {
  clasNames?: string;
  background?: string;
  isLoading?: boolean;
  handleSubmit: (message: string) => void;
}
const TextBox: FC<Props> = ({
  clasNames = "w-full h-full",
  background = "27282D",
  isLoading = false,
  handleSubmit,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      className={`border-[#27282d] border border-solid bg-[${background}] rounded-xl flex justify-center items-center`}
    >
      <input
        type="text"
        value={inputValue}
        className="  w-full p-4 text-sm text-[#959597] bg-transparent outline-none  min-w-[500px] flex-1"
        placeholder={isLoading ? "Loading...." : "Chat with AI..."}
        disabled={isLoading}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(inputValue);
            setInputValue("");
          }
        }}
      />
      <button
        className={`flex justify-center items-center m-4 p-3  rounded-full bg-[#575BC7] ${clasNames}`}
        disabled={isLoading}
        onClick={() => {
          handleSubmit(inputValue);
          setInputValue("");
        }}
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

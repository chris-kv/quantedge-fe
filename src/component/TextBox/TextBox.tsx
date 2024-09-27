import React from "react";

const TextBox = () => {
  return (
    <div className="border-[#27282d] border border-solid bg-[#27282D] rounded-xl flex justify-center items-center">
      <input
        type="text"
        className="  w-full p-4 text-sm text-[#959597] bg-transparent outline-none  min-w-[500px]"
        placeholder="Chat with AI..."
      />
      <button className="flex w-full h-full justify-center items-center m-4 p-3  rounded-full bg-[#575BC7]">
        <img
          src="src/assets/icons/QuantEdge Keycode Send.png"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default TextBox;

import React from "react";
import TextBox from "../../../component/TextBox/TextBox";
import Message from "./Message";
import { sampleData } from "../../../constants/mockData";

const Chat = () => {

  const handleSubmit = (message: string) => {
    console.log('Message is: ', message);
  };

  return (
    <div className="flex flex-col w-full h-[90vh]">
      <div className="text-xs font-medium border border-solid border-[#27282D] p-4">
        Chat with AI
      </div>
      <div className="flex-1 px-14 pt-8 h-[70vh] overflow-auto">
        {sampleData.map((item) => (
          <Message user={item.author} message={item.content} type={item.type} />
        ))}
      </div>
      <div className="w-full bg-[#17181A ]h-10">
        <TextBox handleSubmit={handleSubmit} clasNames="w-12 h-12" />
      </div>
    </div>
  );
};

export default Chat;

import React, { useEffect } from "react";
import TextBox from "../../../component/TextBox/TextBox";
import Message from "./Message";
import { sampleData } from "../../../constants/mockData";
import { io } from "socket.io-client";
import { VITE_SOCKET_URL } from "../../../constants/env";
import { chatHistoryAtom } from "../../../atoms";
import { useRecoilState } from "recoil";

const Chat = () => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const socket = React.useMemo(() => io(VITE_SOCKET_URL), []);
  const [chatList, setChatList] = useRecoilState(chatHistoryAtom);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (message: string) => {
    console.log("Message is: ", message);
    setLoading(true);
    setChatList((prevMessages) => [
      ...prevMessages,
      {
        type: "text",
        content: message,
        author: "User",
      },
    ]);

    socket.emit("send-message", { user: "User", message });
  };

  useEffect(() => {
    // Listen for messages from the backend
    socket.on("receive-message", (data) => {
      setLoading(false);
      console.log("RECEIVED MESSAGE", data);
      // Add the backend's response to the chat
      setChatList((prevMessages) => [
        ...prevMessages,
        {
          type: "text",
          content: data.message,
          author: "Bot",
        },
      ]);
    });

    return () => {
      console.log("DISCONNECTING");
      socket.off("receive-message");
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <div className="flex flex-col w-full h-[90vh]">
      <div className="text-xs font-medium border border-solid border-[#27282D] p-4">
        Chat with AI
      </div>
      <div
        className="flex-1 px-14 pt-8 h-[70vh] overflow-auto"
        ref={chatContainerRef}
      >
        {chatList.map((item) => (
          <Message user={item.author} message={item.content} type={item.type} />
        ))}
      </div>
      <div className="w-full bg-[#17181A ]h-10">
        <TextBox handleSubmit={handleSubmit} isLoading={loading} clasNames="w-12 h-12" />
      </div>
    </div>
  );
};

export default Chat;

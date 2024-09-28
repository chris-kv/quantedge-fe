import React, { useEffect } from "react";
import TextBox from "../../../component/TextBox/TextBox";
import Message from "./Message";
import { io } from "socket.io-client";
import { VITE_SOCKET_URL } from "../../../constants/env";
import { chatHistoryAtom, loadingAtom, summaryAtom } from "../../../atoms";
import { useRecoilState } from "recoil";
import Stratergy from "../../Stratergy/Stratergy";

const Chat = () => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const socket = React.useMemo(() => io(VITE_SOCKET_URL), []);
  const [chatList, setChatList] = useRecoilState(chatHistoryAtom);
  const [, setSummary] = useRecoilState(summaryAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);

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
      const jsonData = data?.message?.json_obj;

      if (jsonData) {
        setSummary(jsonData);
      }

      setLoading(false);
      console.log("RECEIVED MESSAGE", data);
      // Add the backend's response to the chat
      setChatList((prevMessages) => [
        ...prevMessages,
        {
          type: "text",
          content: data?.message?.message,
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
        {chatList.length ? (
          chatList.map((item) => (
            <Message
              user={item.author}
              message={item.content}
              type={item.type}
            />
          ))
        ) : (
          <Stratergy
            oncClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
      <div className="w-full bg-[#17181A ]h-10">
        <TextBox
          handleSubmit={handleSubmit}
          isLoading={loading}
          clasNames="w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Chat;

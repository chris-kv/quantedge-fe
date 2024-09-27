import { useContext } from "react";
import { SocketContext } from "@/context/SocketContext";
import React from "react";

const ChatTest: React.FC = () => {


  const socket = useContext(SocketContext);
  console.log('Socket is: ', socket);

  return (
    <div>
      <h1>Chat Socket Component</h1>
      <p>This is a simple React component using ES6 syntax.</p>
    </div>
  );
};

export default ChatTest;

import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { VITE_SOCKET_URL } from "../constants/env";

const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(VITE_SOCKET_URL); // Replace with your server URL

    // Handle connection events
    newSocket.on("connect", () => {
      console.log("Connected to socket server");
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };

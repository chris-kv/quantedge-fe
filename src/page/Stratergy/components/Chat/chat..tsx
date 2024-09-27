// Sample data for the chat component

import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';

const socket = io("http://localhost:5001");

const sampleMessages = [
  { id: 1, sender: "User", message: "Hello!" },
  { id: 2, sender: "Bot", message: "Hi there!" },
  { id: 3, sender: "User", message: "How are you?" },
  { id: 4, sender: "Bot", message: "I am fine, thank you!" },
];

const Chat: React.FC = () => {
    const [currentRoom, setCurrentRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);

    const joinRoom = (room: string) => {
        if (room) {
            setCurrentRoom(room);
            socket.emit('join-room', room);
        }
    };

    const sendMessage = () => {
        if (message && currentRoom) {
            socket.emit('send-message', { user: 'User1', message, room: currentRoom });
            setMessage('');
        }
    };

    useEffect(() => {
        socket.on('receive-message', (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off('receive-message');
        };
    }, []);

    return (
        <div>
            <h1>Chatboat</h1>

            {/* Room Input */}
            <input
                type="text"
                placeholder="Enter room name"
                onBlur={(e) => joinRoom(e.target.value)}
            />

            {/* Chat Messages */}
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <p key={index}>
                        {msg.user}: {msg.message}
                    </p>
                ))}
            </div>

            {/* Message Input */}
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Make sure this matches your backend server URL

const Chat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);

    const sendMessage = () => {
        if (message) {
            socket.emit('send-message', { user: 'User', message });
            setMessage(''); // Clear input after sending
        }
    };

    useEffect(() => {
        socket.on('receive-message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('receive-message');
        };
    }, []);

    return (
        <div>
            <h1>Chatbot</h1>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.user}:</strong> {msg.message}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;

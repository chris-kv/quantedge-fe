import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';  // Custom CSS for styling the chat

const socket = io('http://localhost:5000');  // Ensure this matches your backend

const Chat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Function to send message to backend and update local state
    const sendMessage = () => {
        if (message.trim()) {
            // Add client's message to the chat
            setMessages((prevMessages) => [
                ...prevMessages, 
                { user: 'User', message }
            ]);

            // Send the message to the backend
            socket.emit('send-message', { user: 'User', message });

            // Clear the input after sending
            setMessage('');
        }
    };

    useEffect(() => {
        // Listen for messages from the backend
        socket.on('receive-message', (data) => {
            // Add the backend's response to the chat
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('receive-message');
        };
    }, []);

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-container">
            <h1 className="chat-header">Chatbot</h1>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-message ${msg.user === 'User' ? 'user-message' : 'bot-message'}`}
                    >
                        <div className="message-text">{msg.message}</div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="chat-input-container">
                <input
                    className="chat-input"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button className="send-button" onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;

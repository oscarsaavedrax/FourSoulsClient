// Component to handle the chat box functionality and style
// Developer: Oscar Saavedra

// Import necessary components - O.S.
import React, { useEffect, useState, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../css/Chat.css";

import { SocketContext } from "../contexts/socket.js";

function Chat({ username, room }) {
  // Get the socket from the context API - O.S.
  const socket = useContext(SocketContext);
  // State to hold current message - O.S.
  const [currentMessage, setCurrentMessage] = useState("");
  // State to hold list of messages - O.S.
  const [messageList, setMessageList] = useState([]);

  // Handle the message input change - O.S.
  const handleMessageInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  // Handle message input via "Enter" key - O.S.
  const handleMesaageInputKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSendButton();
    }
  };
  // Button to send message - O.S.
  const handleSendButton = () => {
    sendMessage();
  };

  // Compose and send message to server - O.S.
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      // Send message to server - O.S.
      await socket.emit("send_message", messageData);
      // Send message to clients own list - O.S.
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  // Listen for messages from server - O.S.
  useEffect(() => {
    socket.on("receive_message", (data) => {
      // Get old list of messages then add new messages to list - O.S.
      setMessageList((list) => [...list, data]);
      console.log("receiving message...");
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className="lobbyPage-chat-container">
      <h1 className="lobbyPage-chat-header">Chat</h1>
      <div className="lobbyPage-chat-body">
        <ScrollToBottom className="lobbyPage-message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="lobbyPage-message"
                id={username === messageContent.author ? "current" : "other"}
              >
                <div className="lobbyPage-message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="lobbyPage-message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="lobbyPage-chat-input-box-container">
        <input
          className="lobbyPage-chat-input-box"
          type="text"
          value={currentMessage}
          placeholder="Type here..."
          onChange={handleMessageInputChange}
          onKeyDown={handleMesaageInputKeyPress}
        />
        <button
          className="button text lobbyPage-chat-send-button"
          onClick={handleSendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default Chat;

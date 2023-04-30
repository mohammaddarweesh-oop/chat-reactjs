import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThairMessage from "./ThairMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessage = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <ThairMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>
          <div className="read-receipts" style={{ marginRight: "20px" }}>
            read-receipts
          </div>
        </div>
      );
    });
  };

  // renderMessage();
  // console.log("chat people: ", chat.people);
  // console.log("mmm : ", chat, userName, messages);

  if (!chat) return "Loading ...!";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.userName}`)}
        </div>
      </div>
      {renderMessage()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

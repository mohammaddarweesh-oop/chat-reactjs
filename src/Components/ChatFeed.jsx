import React from "react";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  // const renderMessage = () => {
  //   const keys = Object.keys(messages);
  //   console.log(keys);
  // };
  // renderMessage();
  console.log(chat, userName, messages);

  return <div>ChatFeed</div>;
};

export default ChatFeed;

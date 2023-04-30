import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="086e5fdd-58f1-42d7-8a8f-498b2b6ea600"
      userName="mohammad"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

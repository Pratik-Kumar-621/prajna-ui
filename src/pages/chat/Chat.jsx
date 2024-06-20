import React from "react";
import ChatUI from "./ChatUI";
import DashboardComponent from "../../components/DashboardComponent";

const Chat = () => {
  return <DashboardComponent children={<ChatUI />} />;
};

export default Chat;

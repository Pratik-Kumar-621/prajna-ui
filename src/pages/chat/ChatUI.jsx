import { TextField } from "@mui/material";
import React from "react";

const ChatUI = () => {
  return (
    <div className="chat">
      <div className="chat-data"></div>
      <div className="chat-input">
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          type="password"
          placeholder="Ask AHAM"
        />
      </div>
    </div>
  );
};

export default ChatUI;

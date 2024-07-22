import React, { useEffect, useRef, useState } from "react";
import ChatUI from "./ChatUI";
import DashboardComponent from "../../components/DashboardComponent";
import axios from "axios";
import { baseURL, chatGPT } from "../../api/api";

const Chat = () => {
  const [input, setInput] = useState("");
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [input]);

  const scrollToBottom = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(baseURL + chatGPT, {
        "lang-text": input,
      })
      .then((response) => {
        setQna([...qna, response.data]);
        setInput("");
        setLoading(false);
      })
      .catch((error) => {
        setInput("");
        setLoading(false);
      });
  };
  return (
    <DashboardComponent
      children={
        <ChatUI
          {...{ input, setInput, qna, setQna, handleSubmit, inputRef, loading }}
        />
      }
    />
  );
};

export default Chat;

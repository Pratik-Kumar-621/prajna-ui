import React, { useState } from "react";
import TrainingDataUI from "./TrainingDataUI";
import DashboardComponent from "../../components/DashboardComponent";

const TrainingData = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    userInput: "",
    content: "",
    dataType: "",
    dbConnection: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInput({
      userInput: "",
      content: "",
      dataType: "",
      dbConnection: "",
    });
    setOpen(false);
  };
  const handleAddTraining = () => {
    setInput({
      userInput: "",
      content: "",
      dataType: "",
      dbConnection: "",
    });
    setOpen(false);
  };
  return (
    <DashboardComponent
      children={
        <TrainingDataUI
          {...{
            open,
            setOpen,
            input,
            setInput,
            handleClickOpen,
            handleClose,
            handleAddTraining,
          }}
        />
      }
    />
  );
};

export default TrainingData;

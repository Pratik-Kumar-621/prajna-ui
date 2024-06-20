import React, { useState } from "react";
import ConnectionsUI from "./ConnectionsUI";
import DashboardComponent from "../../components/DashboardComponent";

const Connections = () => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    connectionName: "",
    port: "",
    serverName: "",
    userName: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInput({
      connectionName: "",
      port: "",
      serverName: "",
      userName: "",
      password: "",
    });
    setOpen(false);
  };
  const handleAddConnection = () => {
    setInput({
      connectionName: "",
      port: "",
      serverName: "",
      userName: "",
      password: "",
    });
    setOpen(false);
  };
  return (
    <DashboardComponent
      children={
        <ConnectionsUI
          {...{
            open,
            setOpen,
            input,
            setInput,
            handleClickOpen,
            handleClose,
            handleAddConnection,
          }}
        />
      }
    />
  );
};

export default Connections;

import React, { useEffect, useState } from "react";
import ConnectionsUI from "./ConnectionsUI";
import DashboardComponent from "../../components/DashboardComponent";
import axios from "axios";
import {
  addDbConnection,
  ahService,
  baseURL,
  dbConnectionList,
} from "../../api/api";
const Connections = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          baseURL + ahService + dbConnectionList
        );
        // Handle the response data as needed
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle errors
      }
    };
    fetchList();
  }, []);
  console.log(data);

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    connection_name: "",
    port: "",
    server: "",
    user_name: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInput({
      connection_name: "",
      port: "",
      server: "",
      user_name: "",
      password: "",
    });
    setOpen(false);
  };
  const handleAddConnection = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(baseURL + ahService + addDbConnection, {
        id: data.length + 1,
        ...input,
      })
      .then((response) => {
        setData([...data, response.data]);
        setLoading(false);
        setInput({
          connection_name: "",
          port: "",
          server: "",
          user_name: "",
          password: "",
        });
        setOpen(false);
      })
      .catch((error) => {
        setLoading(false);
        setInput({
          connection_name: "",
          port: "",
          server: "",
          user_name: "",
          password: "",
        });
        setOpen(false);
      });
  };
  return (
    <DashboardComponent
      children={
        <ConnectionsUI
          {...{
            data,
            open,
            setOpen,
            input,
            setInput,
            handleClickOpen,
            handleClose,
            handleAddConnection,
            loading,
          }}
        />
      }
    />
  );
};

export default Connections;

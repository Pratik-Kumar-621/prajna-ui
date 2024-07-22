import React, { useEffect, useState } from "react";
import TrainingDataUI from "./TrainingDataUI";
import DashboardComponent from "../../components/DashboardComponent";
import {
  addDbConnection,
  ahService,
  DBconnectioURL,
  dbConnectionList,
  trainingData,
  addTraining,
} from "../../api/api";
import axios from "axios";
const TrainingData = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          DBconnectioURL + ahService + trainingData
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
  const [input, setInput] = useState({
    user_input: "",
    content: "",
    training_data_type: "",
    db_conn_name: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInput({
      user_input: "",
      content: "",
      training_data_type: "",
      db_conn_name: "",
    });
    setOpen(false);
  };
  const handleAddTraining = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(DBconnectioURL + ahService + addTraining, {
        id: data.length + 1,
        ...input,
      })
      .then((response) => {
        setData([...data, response.data]);
        setLoading(false);
        setInput({
          user_input: "",
          content: "",
          training_data_type: "",
          db_conn_name: "",
        });
        setOpen(false);
      })
      .catch((error) => {
        setLoading(false);
        setInput({
          user_input: "",
          content: "",
          training_data_type: "",
          db_conn_name: "",
        });
      });
  };
  return (
    <DashboardComponent
      children={
        <TrainingDataUI
          {...{
            data,
            open,
            setOpen,
            input,
            setInput,
            handleClickOpen,
            handleClose,
            handleAddTraining,
            loading,
          }}
        />
      }
    />
  );
};

export default TrainingData;

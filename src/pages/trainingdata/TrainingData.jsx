import React from "react";
import TrainingDataUI from "./TrainingDataUI";
import DashboardComponent from "../../components/DashboardComponent";

const TrainingData = () => {
  return <DashboardComponent children={<TrainingDataUI />} />;
};

export default TrainingData;

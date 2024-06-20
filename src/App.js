import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Connections from "./pages/connections/Connections";
import TrainingData from "./pages/trainingdata/TrainingData";
import Chat from "./pages/chat/Chat";
import "./styles/app.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/connection-strings" element={<Connections />} />
          <Route path="/training-data" element={<TrainingData />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/chat" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

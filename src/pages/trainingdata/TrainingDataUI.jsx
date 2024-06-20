import React from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { trainingData } from "../dummyData";

const TrainingDataUI = () => {
  return (
    <div className="training">
      <div className="training-head">
        <div className="training-head-text">
          <div className="training-head-text-main">Training Data</div>
          <div className="training-head-text-sub">
            Add or remove training data
          </div>
        </div>
        <div className="training-head-button">
          <Button variant="contained">+ Add Training Data</Button>
        </div>
      </div>
      <div className="training-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Question</TableCell>
                <TableCell align="center">Context</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.question}</TableCell>
                  <TableCell align="center">{row.context}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                    <Button variant="contained" color="primary">
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TrainingDataUI;

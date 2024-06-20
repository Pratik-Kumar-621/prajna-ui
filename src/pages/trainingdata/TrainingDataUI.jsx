import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { trainingData } from "../dummyData";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
const TrainingDataUI = (props) => {
  const {
    open,
    setOpen,
    input,
    setInput,
    handleClickOpen,
    handleClose,
    handleAddTraining,
  } = props;
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
          <Button variant="contained" onClick={handleClickOpen}>
            + Add Training Data
          </Button>
        </div>
      </div>
      <div className="training-table">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <strong>DB Connection: </strong>Sponsored Product Database
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">User Input</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center" width="50%">
                      Content
                    </TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trainingData.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.question}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.context}</TableCell>
                      <TableCell align="center">
                        <Button variant="outlined" color="error">
                          Delete
                        </Button>
                        &nbsp; &nbsp; &nbsp;
                        <Button variant="contained" color="primary">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-main">
          <DialogTitle id="alert-dialog-title">{"Add Connection"}</DialogTitle>
          <DialogContent>
            <>
              <TextField
                className="input-form"
                fullWidth
                id="standard-basic"
                label="User Input"
                variant="standard"
                value={input.userInput}
                onChange={(e) =>
                  setInput({ ...input, userInput: e.target.value })
                }
              />

              <TextField
                className="input-form"
                fullWidth
                id="standard-basic"
                label="Content"
                variant="standard"
                value={input.content}
                onChange={(e) =>
                  setInput({ ...input, content: e.target.value })
                }
              />
              <TextField
                className="input-form"
                fullWidth
                id="standard-basic"
                label="Training Data Type"
                variant="standard"
                value={input.dataType}
                onChange={(e) =>
                  setInput({ ...input, dataType: e.target.value })
                }
              />
              <FormControl className="select-input-form" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Database Connection
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={input.dbConnection}
                  label="Database Connection"
                  onChange={(e) =>
                    setInput({ ...input, dbConnection: e.target.value })
                  }
                >
                  <MenuItem value="sponsered">Sponsored Product</MenuItem>
                </Select>
              </FormControl>
            </>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              autoFocus
              onClick={handleAddTraining}
            >
              Submit
            </Button>
            <br />
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default TrainingDataUI;

import React from "react";
import {
  Button,
  CircularProgress,
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
    data,
    setOpen,
    input,
    setInput,
    handleClickOpen,
    handleClose,
    handleAddTraining,
    loading,
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
                    <TableCell align="center" width="40%">
                      Content
                    </TableCell>
                    <TableCell align="center" width="25%">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.user_input}</TableCell>
                      <TableCell align="center">
                        {row.training_data_type}
                      </TableCell>
                      <TableCell align="center" width="40%">
                        {row.content}
                      </TableCell>
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
          <form onSubmit={handleAddTraining}>
            <DialogContent>
              <>
                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="User Input"
                  variant="standard"
                  value={input.user_input}
                  onChange={(e) =>
                    setInput({ ...input, user_input: e.target.value })
                  }
                />

                <TextField
                  required
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
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="Training Data Type"
                  variant="standard"
                  value={input.training_data_type}
                  onChange={(e) =>
                    setInput({ ...input, training_data_type: e.target.value })
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
                    value={input.db_conn_name}
                    label="Database Connection"
                    onChange={(e) =>
                      setInput({ ...input, db_conn_name: e.target.value })
                    }
                  >
                    <MenuItem value="SPDB">Sponsored Product</MenuItem>
                  </Select>
                </FormControl>
              </>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                sx={{ width: 100 }}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                autoFocus
                type="submit"
                sx={{ width: 100 }}
              >
                {loading ? (
                  <CircularProgress size={24} style={{ color: "white" }} />
                ) : (
                  "Submit"
                )}
              </Button>
              <br />
            </DialogActions>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default TrainingDataUI;

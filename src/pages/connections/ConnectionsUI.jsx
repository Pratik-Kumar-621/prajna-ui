import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connectionData } from "../dummyData";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
const ConnectionsUI = (props) => {
  const {
    open,
    setOpen,
    input,
    setInput,
    handleClickOpen,
    handleClose,
    handleAddConnection,
  } = props;
  return (
    <div className="connections">
      <div className="connections-list">
        <div className="connections-list-item" onClick={handleClickOpen}>
          SQL Lite
        </div>
        <div className="connections-list-item" onClick={handleClickOpen}>
          Azure SQL
        </div>
        <div className="connections-list-item" onClick={handleClickOpen}>
          Atlas Mongo
        </div>
        <div className="connections-list-item" onClick={handleClickOpen}>
          Oracle
        </div>
      </div>
      <div className="connections-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Connection Name</TableCell>
                <TableCell align="center">Port</TableCell>
                <TableCell align="center">Server Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {connectionData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.connectionName}</TableCell>
                  <TableCell align="center">{row.port}</TableCell>
                  <TableCell align="center">{row.serverName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Connection"}</DialogTitle>
        <DialogContent>
          <>
            <TextField
              fullWidth
              id="standard-basic"
              label="Connection Name"
              variant="standard"
              value={input.connectionName}
              onChange={(e) =>
                setInput({ ...input, connectionName: e.target.value })
              }
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Port"
              variant="standard"
              value={input.port}
              onChange={(e) => setInput({ ...input, port: e.target.value })}
            />

            <TextField
              fullWidth
              id="standard-basic"
              label="Connection Name"
              variant="standard"
              value={input.serverName}
              onChange={(e) =>
                setInput({ ...input, serverName: e.target.value })
              }
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="User Name"
              variant="standard"
              value={input.userName}
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
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
            onClick={handleAddConnection}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectionsUI;

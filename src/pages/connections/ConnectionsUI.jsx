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
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
const ConnectionsUI = (props) => {
  const {
    open,
    data,
    setOpen,
    input,
    setInput,
    handleClickOpen,
    setError,
    error,
    handleClose,
    handleAddConnection,
    loading,
  } = props;
  return (
    <div className="connections">
      <div className="connections-list">
        <div className="connections-list-item" onClick={handleClickOpen}>
          SQL Lite
        </div>
        <div className="connections-list-item-disabled">Azure SQL</div>
        <div className="connections-list-item-disabled">Atlas Mongo</div>
        <div className="connections-list-item-disabled">Oracle</div>
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
              {data?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.connection_name}</TableCell>
                  <TableCell align="center">{row.port}</TableCell>
                  <TableCell align="center">{row.server}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-main">
          <DialogTitle id="alert-dialog-title">{"Add Connection"}</DialogTitle>
          <form onSubmit={handleAddConnection}>
            <DialogContent>
              <>
                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="Connection Name"
                  variant="standard"
                  value={input.connection_name}
                  onChange={(e) => {
                    setInput({ ...input, connection_name: e.target.value });
                    setError("");
                  }}
                />

                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="Server"
                  variant="standard"
                  value={input.server}
                  onChange={(e) => {
                    setInput({ ...input, server: e.target.value });
                    setError("");
                  }}
                />
                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="Port"
                  variant="standard"
                  value={input.port}
                  onChange={(e) => {
                    setInput({ ...input, port: e.target.value });
                    setError("");
                  }}
                />

                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="User Name"
                  variant="standard"
                  value={input.user_name}
                  onChange={(e) => {
                    setInput({ ...input, user_name: e.target.value });
                    setError("");
                  }}
                />
                <TextField
                  required
                  className="input-form"
                  fullWidth
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput({ ...input, password: e.target.value });
                    setError("");
                  }}
                />
              </>
              {error && (
                <div style={{ color: "red" }}>An unexpected error occured</div>
              )}
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
              &nbsp; &nbsp;
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

export default ConnectionsUI;

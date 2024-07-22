import { TextField } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import chatAvatar from "../../images/avatar.png";
import { chatData } from "../dummyData";
import Chart from "react-apexcharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ChatUI = (props) => {
  const { input, setInput, qna, setQna, handleSubmit, inputRef, loading } =
    props;
  // const options = {
  //   chart: {
  //     id: "basic-bar",
  //   },
  //   plotOptions: {
  //     bar: {
  //       barHeight: "100%",
  //       distributed: true,
  //       vertical: true,
  //       dataLabels: {
  //         position: "top",
  //       },
  //     },
  //   },
  //   legend: {
  //     show: true,
  //     itemMargin: {
  //       horizontal: 15,
  //       vertical: 15,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //     style: {
  //       colors: ["#333"],
  //     },
  //     offsetY: -20,
  //   },
  //   xaxis: {
  //     categories: ["19th June", "20th June"],
  //   },
  // };
  // const series = [
  //   {
  //     name: "Alerts",
  //     data: [900, 700],
  //   },
  // ];

  return (
    <div className="chat">
      <div className="chat-data">
        {qna.length ? (
          <>
            {qna.map((item) => {
              return (
                <div className="chat-data-item">
                  <div className="chat-data-item-question">
                    <div className="chat-data-item-question-text">
                      {item.question_asked}
                    </div>
                    <img src={chatAvatar} alt="" />
                  </div>
                  <div className="chat-data-item-answer">
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                    <div className="chat-data-item-answer-text">
                      <div className="chat-data-item-answer-text-text">
                        {item.data}
                      </div>
                      <div className="chat-data-item-answer-text-table">
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 700 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                {item.column_names.map((it) => {
                                  return (
                                    <TableCell align="center">{it}</TableCell>
                                  );
                                })}
                              </TableRow>
                            </TableHead>

                            {item.table.map((it) => {
                              return (
                                <TableBody>
                                  {it.map((res, cnt) => {
                                    return (
                                      <TableCell align="center">
                                        {res}
                                      </TableCell>
                                    );
                                  })}
                                </TableBody>
                              );
                            })}
                          </Table>
                        </TableContainer>
                      </div>
                      {/* <div className="chat-data-item-answer-text-graph">
                        <Chart
                          options={options}
                          series={series}
                          type="bar"
                          width="100%"
                          height="300"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      <div
        className="chat-view"
        ref={inputRef}
        style={{ marginBottom: 20 }}
      ></div>
      <div className="chat-input">
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ borderRadius: 12 }}
            fullWidth
            id="standard-basic"
            variant="outlined"
            type="text"
            placeholder="Ask AHAM"
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatUI;

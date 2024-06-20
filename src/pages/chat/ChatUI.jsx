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

const ChatUI = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const options = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        vertical: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 15,
        vertical: 15,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#333"],
      },
      offsetY: -20,
    },
    xaxis: {
      categories: ["19th June", "20th June"],
    },
  };
  const series = [
    {
      name: "Alerts",
      data: [900, 700],
    },
  ];

  return (
    <div className="chat">
      <div className="chat-data">
        {show && (
          <>
            {chatData.map((item) => {
              return (
                <div className="chat-data-item">
                  <div className="chat-data-item-question">
                    <div className="chat-data-item-question-text">
                      {item.question}
                    </div>
                    <img src={chatAvatar} alt="" />
                  </div>
                  <div className="chat-data-item-answer">
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                    <div className="chat-data-item-answer-text">
                      <div className="chat-data-item-answer-text-text">
                        {item.answer.text}
                      </div>
                      <div className="chat-data-item-answer-text-table">
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 700 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="center">
                                  Campaign Id
                                </TableCell>
                                <TableCell align="center">
                                  Reporting date{" "}
                                </TableCell>
                                <TableCell align="center">Cart </TableCell>
                                <TableCell align="center">Clicks </TableCell>
                                <TableCell align="center">
                                  Daily Budget{" "}
                                </TableCell>
                                <TableCell align="center">
                                  Daily Spend{" "}
                                </TableCell>
                                <TableCell align="center">
                                  Campaign Name{" "}
                                </TableCell>
                                <TableCell align="center">Raos</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {item.answer.tableData.map((row) => (
                                <TableRow
                                  key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell align="center">
                                    {row.campaignId}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.reportingDate}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.addToCart}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.clicks}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.dailyBudget}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.dailySpend}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.campaign_name}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.roas}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                      <div className="chat-data-item-answer-text-graph">
                        <Chart
                          options={options}
                          series={series}
                          type="bar"
                          width="100%"
                          height="300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="chat-input">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShow(true);
            setInput("");
          }}
        >
          <TextField
            sx={{ borderRadius: 12 }}
            fullWidth
            id="standard-basic"
            variant="outlined"
            type="text"
            placeholder="Ask AHAM"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatUI;

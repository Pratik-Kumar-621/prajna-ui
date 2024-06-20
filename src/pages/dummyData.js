import { type } from "@testing-library/user-event/dist/type";

export const connectionData = [
  {
    id: 1,
    connectionName: "SQL Lite",
    port: "Port 1",
    serverName: "Server 1",
  },
  {
    id: 2,
    connectionName: "SQL Lite",
    port: "Port 2",
    serverName: "Server 2",
  },
  {
    id: 3,
    connectionName: "Azure SQL",
    port: "Port 3",
    serverName: "Server 3",
  },
  {
    id: 4,
    connectionName: "Azure SQL",
    port: "Port 4",
    serverName: "Server 4",
  },
  {
    id: 5,
    connectionName: "Atlas Mongo",
    port: "Port 5",
    serverName: "Server 5",
  },
  {
    id: 6,
    connectionName: "Atlas Mongo",
    port: "Port 6",
    serverName: "Server 6",
  },
  {
    id: 7,
    connectionName: "Oracle",
    port: "Port 7",
    serverName: "Server 7",
  },
  {
    id: 8,
    connectionName: "Oracle",
    port: "Port 8",
    serverName: "Server 8",
  },
];

export const trainingData = [
  {
    type: "ddl",
    question: "Question 1",
    context: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "sql",
    question: "Question 2",
    context: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "ddl",
    question: "Question 3",
    context: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "sql",
    question: "Question 4",
    context: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
];

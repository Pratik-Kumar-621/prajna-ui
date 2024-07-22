import { type } from "@testing-library/user-event/dist/type";

export const connectionData = [
  {
    id: 1,
    connection_name: "SQL Lite",
    port: "Port 1",
    server: "Server 1",
  },
  {
    id: 2,
    connection_name: "SQL Lite",
    port: "Port 2",
    server: "Server 2",
  },
];

export const trainingData = [
  {
    training_data_type: "ddl",
    question: "Question 1",
    content: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "sql",
    question: "Question 2",
    content: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "ddl",
    question: "Question 3",
    content: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
  {
    type: "sql",
    question: "Question 4",
    content: `UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
        `,
  },
];

export const chatData = [
  {
    question: "give me the top performing roas with value",
    answer: {
      text: "The top performing ROAS with value are 'Promote AH cola' with a ROAS of 10 and 'promote AH kaas products' with a ROAS of 1.",
      tableData: [
        {
          campaignId: "1000001",
          reportingDate: "19th June",
          addToCart: 100,
          clicks: 1567,
          dailyBudget: 100,
          dailySpend: 1000,
          campaign_name: "promote AH cola",
          roas: 900,
        },
        {
          campaignId: "1000002",
          reportingDate: "20th June",
          addToCart: 1,
          clicks: 1,
          dailyBudget: 1,
          dailySpend: 1,
          campaign_name: "promote AH Kaas Product",
          roas: 700,
        },
      ],
    },
  },
];

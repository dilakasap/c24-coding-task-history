import express from "express";
import ordersApi from "./orders/api";
import type { ErrorRequestHandler } from "express";
import cors from "cors";

const app = express();
const port = 3333;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/orders", ordersApi);

const errorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.error("ERROR ", err);
  res.status(500).json(err);
};
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Check24 Server is listening on port ${port}`);
});

import { Router } from "express";
import { Order } from "../../types/order/Order";
import { readDocumentHistory } from "./dao";

const router = Router();

router.use((req, res, next) => {
  console.log(req.url);
  next();
});

router.get("/history", (req, res) => {
  const orderId = req.query.orderId;
  if (typeof orderId !== "string") {
    res.status(400).json({ message: `no order id given in query` });
    return;
  }
  const orderHistory = readDocumentHistory(orderId);
  res.status(200).json(orderHistory);
});

export default router;

import { Router } from "express";
import { Order } from "../../types/order/Order";
import { readOrder, readOrderHistory, updateOrder } from "./dao";

const router = Router();

router.use((req, res, next) => {
  console.log(req.url);
  next();
});

router.get("/:id", (req, res) => {
  const order = readOrder(req.params.id);
  res.status(200).json(order);
});

router.put("/:id", (req, res) => {
  const username = req.headers["x-username"];
  const order: Order = req.body;
  if (!order) {
    res.status(400).json({
      message: "No order given in body",
    });
    return;
  }
  if (!username || typeof username !== "string") {
    res.status(400).json({
      message: "No username given in x-username header",
    });
    return;
  }
  const updatedOrder = updateOrder(order, username);
  res.status(200).json(updatedOrder);
});

router.get("/:id/history", (req, res) => {
  const orderHistory = readOrderHistory(req.params.id);
  res.status(200).json(orderHistory);
});

export default router;

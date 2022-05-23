import { OrderHistory } from "../../../types/order/OrderHistory";
import { Order } from "../../../types/order/Order";
import { wait } from "../utility/wait";
import axios from "axios";
import { useState } from "react";

export const fetchOrder = async (id: string): Promise<Order> => {
  await wait(1);
  const response = await axios.get(`http://localhost:3333/orders/${id}`);
  console.log("fetched order", response.data);
  return response.data;
};

export const fetchOrderHistory = async (
  id: string
): Promise<OrderHistory[]> => {
  await wait(1);
  const response = await axios.get(
    `http://localhost:3333/orders/${id}/history`
  );
  console.log("fetched order history", response.data);

  return response.data;
};

export const updateOrder = async (orderDetails: Order): Promise<Order> => {
  await wait(1);
  const response = await axios.put(
    `http://localhost:3333/orders/${orderDetails.id}`,
    orderDetails,
    {
      headers: {
        "x-username": "thomas.hentschel",
      },
    }
  );
  console.log("updated Order", response.data);

  return response.data;
};

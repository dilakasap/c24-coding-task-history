import { Order } from "../../types/order/Order";
import { OrderHistory } from "../../types/order/OrderHistory";

const yesterday = new Date(new Date().getTime() - 86400000);

let currentOrder: Order = {
  id: "0001",
  state: "NEW",
  createdAt: yesterday,
  customer: {
    firstName: "John",
    lastName: "Doe",
  },
  delivery: {
    firstName: "John",
    lastName: "Doe",
  },
  shoppingCart: [
    {
      itemId: 1,
      priceInCents: 1199,
      quantity: 1,
    },
    {
      itemId: 2,
      priceInCents: 1234,
      quantity: 2,
    },
  ],
};

let orderHistory: OrderHistory[] = [
  {
    id: "1234",
    customer: {
      firstName: "John",
      lastName: "Doe",
    },
    changedAt: new Date(),
    changedData: {
      old: "from",
      new: "to",
    },
    context: "sth happened",
  },
];

export const readOrder = (id: string) => {
  // for simplicity the order id gets ignore here
  return currentOrder;
};

export const updateOrder = (newOrder: Order, username: string) => {
  currentOrder = newOrder;

  return newOrder;
};

export const readOrderHistory = (id: string) => {
  // for simplicity the order id gets ignore here
  return orderHistory;
};

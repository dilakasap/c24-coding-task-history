import { resolve } from "dns";
import React, { useState, useEffect } from "react";
import { Button, Card, Dimmer, Image, Label, Loader } from "semantic-ui-react";
import { Order } from "../../../../types/order/Order";
import { updateOrder } from "../../services/orderService";
import { fetchOrder } from "../../services/orderService";

// const dummyOrder: Order = {
//   id: "1234",
//   state: "SENT",
//   createdAt: new Date("2022-01-01T12:34:56Z"),
//   customer: {
//     firstName: "Selam",
//     lastName: "Doe",
//   },
//   delivery: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   shoppingCart: [],
// };

const randomLastNames = [
  "Doe",
  "Muster",
  "Gates",
  "Jobs",
  "Lee",
  "Pecu",
  "Eich",
];

const OrderDetails = (props: any) => {
  const [orderDetails, setOrderDetails] = useState<Order>();
  useEffect(() => {
    fetchOrder("1").then((res) => {
      setOrderDetails(res);
    });
  }, []);
  // TODO: fetch data from service

  const changeNameHandler = () => {
    const newLastname =
      randomLastNames[Math.round(Math.random() * randomLastNames.length)];
    setOrderDetails({
      ...orderDetails!,
      customer: {
        ...orderDetails?.customer!,
        lastName: newLastname,
      },
    });
  };

  useEffect(() => {
    updateOrder(orderDetails!);
    // TODO: refetch data
  }, [orderDetails]);

  return (
    <Card>
      <Dimmer inverted active={false}>
        <Loader />
      </Dimmer>
      <Image
        src="https://versicherungscenter.check24.de/dashboard/uebersicht/assets/theo-circle.4d40f899.svg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          {orderDetails?.customer?.firstName} {orderDetails?.customer?.lastName}
        </Card.Header>
        <Card.Meta>
          <span className="date">Bought {orderDetails?.createdAt}</span>
          <br />
          <Label color="blue">{orderDetails?.state}</Label>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>
          {orderDetails?.shoppingCart.map((order) => (
            <Card.Content key={order.itemId}>
              Order No: {order.itemId} Quantity: {order.quantity} Price:{" "}
              {order.priceInCents}{" "}
            </Card.Content>
          ))}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>
          Delivery to: {orderDetails?.delivery?.firstName}{" "}
          {orderDetails?.delivery?.lastName}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary onClick={changeNameHandler}>
          Change Lastname
        </Button>
      </Card.Content>
    </Card>
  );
};

export default OrderDetails;

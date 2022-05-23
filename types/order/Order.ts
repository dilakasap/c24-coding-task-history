export interface OrderItem {
  itemId: number;
  quantity: number;
  priceInCents: number;
}

export interface Order {
  id: string;
  state: string;
  createdAt: Date;
  customer: {
    firstName: string;
    lastName: string;
  };
  delivery: {
    firstName: string;
    lastName: string;
  };
  shoppingCart: OrderItem[];
}

export interface OrderHistory {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
  };
  changedAt: Date;
  changedData: {
    old: string;
    new: string;
  };
  context: string;
}

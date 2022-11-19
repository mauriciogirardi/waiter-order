export interface Order {
  _id: string;
  table: string;
  status: StatusOrder;
  products: Product[];
}

export interface Product {
  quantity: number;
  _id: string;
  product: { _id: string; name: string; price: number; imagePath: string };
}

export interface Ingredients {
  name: string;
  icon: string;
  _id: string;
}

export type StatusOrder = "DONE" | "IN_PRODUCTION" | "WAITING";

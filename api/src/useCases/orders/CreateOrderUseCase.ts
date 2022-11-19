import { Order } from "../../models/Order";

interface Product {
  quantity: number;
  product: string;
}

interface Response {
  table: string;
  products: Product[];
}

export class CreateOrderUseCase {
  public async execute({ products, table }: Response) {
    const category = await Order.create({ table, products });

    return category;
  }
}

import { Order } from "../../models/Order";

export class ListOrdersUseCase {
  public async execute() {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");
    return orders;
  }
}

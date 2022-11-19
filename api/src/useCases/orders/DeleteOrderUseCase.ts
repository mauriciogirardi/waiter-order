import { Order } from "../../models/Order";
interface Response {
  orderId: string;
}

export class DeleteOrderUseCase {
  public async execute({ orderId }: Response) {
    const order = await Order.deleteOne({ _id: orderId });
    return order;
  }
}

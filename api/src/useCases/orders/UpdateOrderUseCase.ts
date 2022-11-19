import { AppError } from "../../error/AppError";
import { Order } from "../../models/Order";

interface Response {
  orderId: string;
  status: string;
}

export class UpdateOrderUseCase {
  public async execute({ orderId, status }: Response) {
    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      throw new AppError(
        'Status should be one of these: "WAITING", "IN_PRODUCTION", "DONE"'
      );
    }

    const order = await Order.updateOne({ _id: orderId }, { $set: { status } });
    return order;
  }
}

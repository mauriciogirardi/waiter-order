import { Request, Response } from "express";
import { ListOrdersUseCase } from "../useCases/orders/ListOrdersUseCase";
import { CreateOrderUseCase } from "../useCases/orders/CreateOrderUseCase";
import { UpdateOrderUseCase } from "../useCases/orders/UpdateOrderUseCase";
import { DeleteOrderUseCase } from "../useCases/orders/DeleteOrderUseCase";

export class OrdersController {
  public async listProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listOrdersUseCase = new ListOrdersUseCase();
    const orders = await listOrdersUseCase.execute();

    return response.status(200).json(orders);
  }

  public async createOrder(
    request: Request,
    response: Response
  ): Promise<Response> {
    const createOrderUseCase = new CreateOrderUseCase();
    const { table, products } = request.body;

    const order = await createOrderUseCase.execute({ products, table });

    return response.status(201).json(order);
  }

  public async updateOrder(
    request: Request,
    response: Response
  ): Promise<Response> {
    const updateOrderUseCase = new UpdateOrderUseCase();
    const { status } = request.body;
    const { orderId } = request.params;

    await updateOrderUseCase.execute({ orderId, status });

    return response.status(204);
  }

  public async deleteOrder(
    request: Request,
    response: Response
  ): Promise<Response> {
    const deleteOrderUseCase = new DeleteOrderUseCase();
    const { orderId } = request.params;

    const order = await deleteOrderUseCase.execute({ orderId });

    return response.status(204).json(order);
  }
}

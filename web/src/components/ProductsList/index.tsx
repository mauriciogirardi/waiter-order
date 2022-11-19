import { Order } from "../../types/Order";
import { formattedCurrency } from "../../utils/formattedCurrency";
import { orderStatus } from "../../utils/orderStatus";
import { OrderStatusIcon } from "../../utils/OrderStatusIcon";
import {
  OrderCardContent,
  OrderCardProduct,
  OrderCardTotal,
  OrderContainer,
  OrderDetails,
  OrderStatus,
} from "./styles";

interface ProductsListProps {
  order: Order | undefined;
}

export const ProductsList = ({ order }: ProductsListProps) => {
  if (!order) return null;

  const amountProduct = order.products.reduce((acc, cur) => {
    return cur.product.price * cur.quantity + acc;
  }, 0);

  return (
    <OrderContainer>
      <OrderStatus>
        <span>Status do pedido</span>
        <strong>
          <OrderStatusIcon status={order.status} />
          {orderStatus(order.status).name}
        </strong>
      </OrderStatus>

      <OrderDetails>
        <strong>Items</strong>

        {order.products.map((item) => (
          <OrderCardProduct key={item._id}>
            <img src={item.product.imagePath} />

            <OrderCardContent>
              <span>
                {item.quantity}x <strong>{item.product.name}</strong>
              </span>
              <p>{formattedCurrency(item.product.price * item.quantity)}</p>
            </OrderCardContent>
          </OrderCardProduct>
        ))}

        <OrderCardTotal>
          <span>Total</span>
          <strong>{formattedCurrency(amountProduct)}</strong>
        </OrderCardTotal>
      </OrderDetails>
    </OrderContainer>
  );
};

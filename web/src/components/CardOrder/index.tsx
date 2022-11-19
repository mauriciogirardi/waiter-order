import { IconProps } from "phosphor-react";
import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import {
  CardOrderContainer,
  CardOrderContent,
  CardOrderHeader,
} from "./styles";

interface CardOrderProps {
  title: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  amountBg?: "done" | "waiting" | "in_production";
  orders: Order[];
}

export const CardOrder = ({
  title,
  amountBg = "waiting",
  icon: Icon,
  orders,
}: CardOrderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [orderSelected, setOrderSelected] = useState<Order | null>(null);

  const handleOpenModal = (orderSelected: Order) => {
    setOrderSelected(orderSelected);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOrderSelected(null);
  };

  return (
    <>
      <OrderModal
        visible={showModal}
        order={orderSelected}
        onClose={handleCloseModal}
      />

      <CardOrderContainer>
        <CardOrderHeader amountBg={amountBg}>
          {!!Icon && <Icon size={25} weight="duotone" />}
          <strong>{title}</strong>
          <span>{orders.length}</span>
        </CardOrderHeader>

        {orders.map((order) => (
          <CardOrderContent
            key={order._id}
            buttonBg={amountBg}
            onClick={() => handleOpenModal(order)}
          >
            <strong>Mesa {order.table}</strong>
            <span>{`${order.products.length} item${
              order.products.length > 1 ? "s" : ""
            }`}</span>
          </CardOrderContent>
        ))}
      </CardOrderContainer>
    </>
  );
};

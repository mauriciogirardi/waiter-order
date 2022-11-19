import { Check, Clock, HourglassMedium } from "phosphor-react";
import { CardOrder } from "../../components/CardOrder";
import { Header } from "../../components/Header";
import { Order } from "../../types/Order";
import { KitchenContainer, KitchenFlex } from "./styles";

const orders: Order[] = [
  {
    _id: "6377c317df5478b907271df8",
    table: "6",
    status: "WAITING",
    products: [
      {
        product: {
          _id: "63753a039898578678eb1d93f8f88e6",
          name: "Coca cola",
          imagePath: "16e4a1cbbe8dd61056d22bbbf27ba1e2-quatro-queijos.png",
          price: 8,
        },
        quantity: 1,
        _id: "6377c317df5478786786b907271df9",
      },
      {
        product: {
          _id: "63753a039ss89786786eb1d93f8f88e6",
          name: "Hambúrguer",
          imagePath: "16e4a1cbbe8dd61056d22bbbf27ba1e2-quatro-queijos.png",
          price: 16.5,
        },
        quantity: 2,
        _id: "6377c317df5478b9072778678671df9",
      },
      {
        product: {
          _id: "63753a039ss89786786666888eb1d93f8f88e6",
          name: "Água com gas",
          imagePath: "16e4a1cbbe8dd61056d22bbbf27ba1e2-quatro-queijos.png",
          price: 2.25,
        },
        quantity: 1,
        _id: "6377c317df5478b9072778678675551df9",
      },
    ],
  },
];

export const Kitchen = () => {
  return (
    <>
      <Header
        title="Pedidos"
        description="Acompanhe  os pedidos dos clientes"
      />

      <KitchenContainer>
        <KitchenFlex>
          <CardOrder
            title="Fila de espera"
            amountBg="waiting"
            icon={Clock}
            orders={orders}
          />
          <CardOrder
            title="Em produção"
            amountBg="in_production"
            icon={HourglassMedium}
            orders={orders}
          />
          <CardOrder title="Pronto!" amountBg="done" icon={Check} orders={[]} />
        </KitchenFlex>
      </KitchenContainer>
    </>
  );
};

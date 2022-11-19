import { Check, X } from "phosphor-react";
import { Order } from "../../types/Order";
import {
  ModalCancelButton,
  ModalCard,
  ModalCloseButton,
  ModalConfirmButton,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Overlay,
} from "./styles";

import { ProductsList } from "../ProductsList";

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  order: Order | null;
}

export const OrderModal = ({ visible, onClose, order }: OrderModalProps) => {
  if (!visible || !order) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalCard>
          <ModalHeader>
            <h2>Mesa {order?.table}</h2>
            <ModalCloseButton onClick={onClose}>
              <X size={20} />
            </ModalCloseButton>
          </ModalHeader>

          <ProductsList order={order} />

          <ModalFooter>
            <ModalConfirmButton>
              <Check size={22} color="#45ef56" weight="bold" />
              Concluir Pedido
            </ModalConfirmButton>
            <ModalCancelButton>Cancelar Pedido</ModalCancelButton>
          </ModalFooter>
        </ModalCard>
      </ModalContainer>
    </Overlay>
  );
};

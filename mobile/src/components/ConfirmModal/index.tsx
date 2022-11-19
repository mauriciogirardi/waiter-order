import { Modal } from "react-native";
import { Text } from "../Text";
import { ButtonConfirm, Container } from "./styles";
import { CheckCircle } from "phosphor-react-native";

interface ConfirmModalProps {
  visible: boolean;
  onCancel: () => void;
  onSendOrder: () => void;
}

export const ConfirmModal = ({
  onCancel,
  onSendOrder,
  visible,
}: ConfirmModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle size={56} color="#00B37E" />
        <Text size="XL" weight="500" color="white" style={{ marginTop: 24 }}>
          Pedido confirmado
        </Text>
        <Text>O pedido já entrou na fila de produção!</Text>
        <ButtonConfirm onPress={onSendOrder}>
          <Text weight="500" color="red400" size="LG">
            OK
          </Text>
        </ButtonConfirm>
      </Container>
    </Modal>
  );
};

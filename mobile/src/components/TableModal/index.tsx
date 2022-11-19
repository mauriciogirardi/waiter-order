import { Modal, Platform } from "react-native";
import { Button } from "../Button";
import { Text } from "../Text";
import { X } from "phosphor-react-native";
import {
  CloseButtonModal,
  Container,
  Form,
  HeaderModal,
  InputModal,
  Overlay,
} from "./styles";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: (visible: boolean) => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <Container>
          <HeaderModal>
            <Text color="gray800" weight="500">
              Informar a mesa
            </Text>
            <CloseButtonModal onPress={() => onClose(false)}>
              <X size={20} weight="bold" />
            </CloseButtonModal>
          </HeaderModal>

          <Form>
            <InputModal
              onChangeText={setTable}
              keyboardType="number-pad"
              placeholder="Informe o número da mesa"
            />
          </Form>

          <Button
            title="Salvar"
            disabled={!table}
            onPress={() => onSave(table)}
          />
        </Container>
      </Overlay>
    </Modal>
  );
}

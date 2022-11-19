import { Product } from "../../@types/types/Product";
import { Text } from "../Text";
import { CancelOrderButton, Container, Content, Table } from "./styles";

interface HeaderProps {
  selectedTable?: string;
  onCancelOrder?: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable ? (
        <>
          <Text size="SM">Bem-vindo(a) ao</Text>
          <Text weight="700" size="XL">
            WAITER
            <Text size="XL">APP</Text>
          </Text>
        </>
      ) : (
        <>
          <Content>
            <Text size="XL" weight="700">
              Pedido
            </Text>
            <CancelOrderButton onPress={onCancelOrder}>
              <Text color="red300" weight="500">
                Cancelar pedido
              </Text>
            </CancelOrderButton>
          </Content>

          <Table>
            <Text color="gray200" size="LG">
              Mesa {selectedTable}
            </Text>
          </Table>
        </>
      )}
    </Container>
  );
}

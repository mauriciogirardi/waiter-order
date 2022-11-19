import { X } from "phosphor-react-native";
import { FlatList, Modal } from "react-native";
import { Product } from "../../@types/types/Product";
import { formattedCurrency } from "../../utils/formattedCurrency";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  Amount,
  BodyModal,
  CloseButtonModal,
  Container,
  Footer,
  Header,
  HeaderModal,
  Image,
  IngredientCard,
  Separator,
} from "./styles";

interface ProductModalProps {
  visible: boolean;
  onCancel: () => void;
  product: Product | null;
  onAddToCard: (product: Product) => void;
}

export function ProductModal({
  onCancel,
  visible,
  product,
  onAddToCard,
}: ProductModalProps) {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCard(product);
    onCancel();
  };

  return (
    <Modal
      presentationStyle="pageSheet"
      visible={visible}
      animationType="slide"
      onRequestClose={onCancel}
      statusBarTranslucent
    >
      <Image
        source={{
          uri: `http://192.168.3.32:3333/uploads/3e1b09f33338517a3e12fce6ee07cf48-quatro-queijos.png`,
        }}
      >
        <HeaderModal>
          <CloseButtonModal onPress={onCancel}>
            <X size={20} weight="bold" color="#fff" />
          </CloseButtonModal>
        </HeaderModal>
      </Image>

      <Container>
        <Header>
          <Text size="XL" weight="500">
            {product.name}
          </Text>
          <Text style={{ marginTop: 8 }} color="gray200">
            {product.description}
          </Text>
        </Header>

        <BodyModal>
          {product.ingredients.length > 0 && (
            <>
              <Text size="LG" weight="500" color="gray400">
                Ingredientes
              </Text>
              <FlatList
                ItemSeparatorComponent={Separator}
                style={{ marginTop: 32 }}
                showsVerticalScrollIndicator={false}
                data={product.ingredients}
                keyExtractor={(ingredient) => ingredient._id}
                renderItem={({ item }) => (
                  <IngredientCard key={item._id}>
                    <Text size="LG" style={{ marginRight: 16 }}>
                      {item.icon}
                    </Text>
                    <Text>{item.name}</Text>
                  </IngredientCard>
                )}
              />
            </>
          )}
        </BodyModal>

        <Footer>
          <Amount>
            <Text color="gray200">Preço</Text>
            <Text size="LG" weight="500">
              {formattedCurrency(product.price)}
            </Text>
          </Amount>
          <Button onPress={handleAddToCart} title="Adicionar ao pedido" />
        </Footer>
      </Container>
    </Modal>
  );
}

import { formattedCurrency } from "../../utils/formattedCurrency";
import { Text } from "../Text";
import { PlusCircle, MinusCircle, ShoppingCart } from "phosphor-react-native";
import {
  Amount,
  Content,
  DecrementButton,
  EmptyCard,
  Footer,
  Image,
  IncrementButton,
  ProductContainer,
  Separator,
} from "./styles";
import { FlatList, View } from "react-native";
import { Product } from "../../@types/types/Product";
import { Button } from "../Button";
import { ConfirmModal } from "../ConfirmModal";
import { useState } from "react";

interface CardItems {
  product: Product;
  quantity: number;
}

interface CardProps {
  cartItems: CardItems[];
  onIncrementProduct: (product: Product) => void;
  onDecrementProduct: (product: Product) => void;
  onClearOrder: () => void;
}

export function Card({
  cartItems,
  onIncrementProduct,
  onDecrementProduct,
  onClearOrder,
}: CardProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const hasCartItems = cartItems.length > 0;

  const total = cartItems.reduce((acc, cur) => {
    return cur.product.price * cur.quantity + acc;
  }, 0);

  const handleConfirmOrder = async () => {
    setIsVisibleModal(false);
    onClearOrder();
  };

  const handleOpemModal = async () => {
    setIsVisibleModal(true);
  };

  return (
    <>
      <ConfirmModal
        visible={isVisibleModal}
        onCancel={() => setIsVisibleModal(false)}
        onSendOrder={handleConfirmOrder}
      />

      {hasCartItems && (
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          style={{ maxHeight: 130 }}
          data={cartItems}
          keyExtractor={(card) => card.product._id}
          renderItem={({ item }) => (
            <ProductContainer>
              <Image
                source={{
                  uri: `http://192.168.3.32:3333/uploads/3e1b09f33338517a3e12fce6ee07cf48-quatro-queijos.png`,
                }}
              />
              <Content>
                <Text size="SM">
                  {item.quantity}x{" "}
                  <Text size="SM" weight="500">
                    {item.product.name}
                  </Text>
                </Text>
                <Text size="SM">{formattedCurrency(item.product.price)}</Text>
              </Content>

              <Footer>
                <IncrementButton
                  onPress={() => onIncrementProduct(item.product)}
                >
                  <PlusCircle
                    style={{ marginRight: 16 }}
                    size={28}
                    color="#fff"
                  />
                </IncrementButton>
                <DecrementButton
                  onPress={() => onDecrementProduct(item.product)}
                >
                  <MinusCircle size={28} color="#fff" />
                </DecrementButton>
              </Footer>
            </ProductContainer>
          )}
        />
      )}

      <Amount>
        {hasCartItems ? (
          <>
            <View style={{ marginRight: 24 }}>
              <Text color="white">Total</Text>
              <Text color="white" weight="500" size="LG">
                {formattedCurrency(total)}
              </Text>
            </View>

            <Button
              onPress={handleOpemModal}
              style={{ flex: 1 }}
              title="Confirmar pedido"
            />
          </>
        ) : (
          <EmptyCard>
            <ShoppingCart color="#fff" />
            <Text style={{ marginLeft: 5 }} size="LG">
              Seu carrinho esta sem produto!
            </Text>
          </EmptyCard>
        )}
      </Amount>
    </>
  );
}

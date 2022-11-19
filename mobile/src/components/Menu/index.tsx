import { FlatList, TouchableOpacity, View } from "react-native";
import { products } from "../../mocks/products";
import { formattedCurrency } from "../../utils/formattedCurrency";
import { Text } from "../Text";
import { PlusCircle } from "phosphor-react-native";
import {
  Container,
  ProductContainer,
  ProductDetails,
  ProductHeader,
  ProductImage,
  Separator,
} from "./styles";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../@types/types/Product";

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productSelected, setProductSelect] = useState<Product | null>(null);

  const handleOpenModalProduct = (product: Product) => {
    setIsModalVisible(true);
    setProductSelect(product);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setProductSelect(null);
  };

  return (
    <Container>
      <ProductModal
        product={productSelected}
        visible={isModalVisible}
        onCancel={handleCloseModal}
        onAddToCard={onAddToCart}
      />

      <FlatList
        ItemSeparatorComponent={Separator}
        style={{ marginTop: 32 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item }) => (
          <ProductContainer
            key={item._id}
            onPress={() => handleOpenModalProduct(item)}
          >
            <ProductImage
              source={{
                uri: `http://192.168.3.32:3333/uploads/3e1b09f33338517a3e12fce6ee07cf48-quatro-queijos.png`,
              }}
            />
            <ProductDetails>
              <View>
                <Text weight="500">{item.name}</Text>
                <Text color="gray200" size="SM">
                  {item.description}
                </Text>
              </View>

              <ProductHeader>
                <Text weight="500">{formattedCurrency(item.price)}</Text>
                <TouchableOpacity onPress={() => onAddToCart(item)}>
                  <PlusCircle size={25} color="#b73c27" weight="bold" />
                </TouchableOpacity>
              </ProductHeader>
            </ProductDetails>
          </ProductContainer>
        )}
      />
    </Container>
  );
}

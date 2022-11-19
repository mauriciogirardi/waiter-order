import { useState } from "react";
import { Product } from "../../@types/types/Product";
import { products } from "../../mocks/products";
import { Button } from "../Button";
import { Card } from "../Card";
import { Categories } from "../Categories";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { TableModal } from "../TableModal";
import {
  CategoriesContainer,
  Container,
  FooterContainer,
  MenuContainer,
} from "./styles";

interface CardItems {
  product: Product;
  quantity: number;
}

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CardItems[]>([]);

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  };

  const handleCancelOrder = () => {
    setSelectedTable("");
    setCartItems([]);
  };

  const handleAddToCart = (product: Product) => {
    if (!selectedTable) setIsTableModalVisible(true);

    setCartItems((prevState) => {
      const findIndexProduct = prevState.findIndex(
        (item) => item.product._id === product._id
      );

      if (findIndexProduct < 0) {
        return prevState.concat({
          product,
          quantity: 1,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[findIndexProduct];

      newCartItems[findIndexProduct] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  };

  const handleDecrementCartItem = (product: Product) => {
    setCartItems((prevState) => {
      const findIndexProduct = prevState.findIndex(
        (item) => item.product._id === product._id
      );

      const item = prevState[findIndexProduct];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(findIndexProduct, 1);

        return newCartItems;
      }

      newCartItems[findIndexProduct] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  return (
    <>
      <Container>
        <Header
          onCancelOrder={handleCancelOrder}
          selectedTable={selectedTable}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>

        <FooterContainer hasProduct={!!selectedTable}>
          {!selectedTable ? (
            <Button
              title="Novo Pedido"
              onPress={() => setIsTableModalVisible(true)}
            />
          ) : (
            <Card
              cartItems={cartItems}
              onIncrementProduct={handleAddToCart}
              onDecrementProduct={handleDecrementCartItem}
              onClearOrder={handleCancelOrder}
            />
          )}
        </FooterContainer>
      </Container>

      <TableModal
        visible={isTableModalVisible}
        onClose={setIsTableModalVisible}
        onSave={handleSaveTable}
      />
    </>
  );
}

import { useState } from "react";
import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Card, Container, Icon } from "./styles";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  };

  return (
    <Container>
      <FlatList
        data={categories}
        keyExtractor={(category) => category._id}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={[{ paddingRight: 24 }]}
        renderItem={({ item }) => (
          <Card onPress={() => handleSelectedCategory(item._id)}>
            <Icon>
              <Text opacity={selectedCategory === item._id ? 1 : 0.5} size="XL">
                {item.icon}
              </Text>
            </Icon>
            <Text
              opacity={selectedCategory === item._id ? 1 : 0.5}
              weight="500"
            >
              {item.name}
            </Text>
          </Card>
        )}
      />
    </Container>
  );
}

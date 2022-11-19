import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 110px;
  height: 96px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 16px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.gray500};
  margin: 24px 0;
`;

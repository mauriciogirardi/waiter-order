import styled from "styled-components/native";

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  margin: 10px 0;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.gray400};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionButtons = styled.View``;

export const IncrementButton = styled.TouchableOpacity``;

export const DecrementButton = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Amount = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.red900};
  padding: 0 24px;
  flex: 1;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const Separator = styled.View`
  margin: 10px 0;
`;

export const HeaderModal = styled.View`
  align-items: flex-end;
  padding: 16px;
`;

export const CloseButtonModal = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
`;

export const IngredientCard = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.gray200};
  border-radius: 5px;
  padding: 16px;
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 100px;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Amount = styled.View``;

export const BodyModal = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px 0;
`;

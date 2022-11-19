import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface FooterContainerProps {
  hasProduct?: boolean;
}

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.red900};
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const FooterContainer = styled.View<FooterContainerProps>`
  min-height: 100px;
  padding: 16px 24px;
  background-color: ${({ theme, hasProduct }) =>
    hasProduct ? theme.COLORS.red500 : theme.COLORS.red900};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

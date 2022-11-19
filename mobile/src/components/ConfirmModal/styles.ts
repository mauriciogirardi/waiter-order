import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.red300};
  align-items: center;
  justify-content: center;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 16px 24px;
  border-radius: 48px;
  margin-top: 36px;
`;

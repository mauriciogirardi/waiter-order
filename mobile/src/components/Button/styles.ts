import styled from "styled-components/native";
import theme from "../../styles/theme";

interface ButtonProps {
  background: keyof typeof theme.COLORS;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  background: ${({ theme, disabled, background }) =>
    disabled ? theme.COLORS.gray500 : theme.COLORS[background]};
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  padding: 14px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
`;

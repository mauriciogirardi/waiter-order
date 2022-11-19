import styled from "styled-components/native";
import theme from "../styles/theme";

interface TextProps {
  weight?: "400" | "500" | "700";
  color?: keyof typeof theme.COLORS;
  size?: keyof typeof theme.FONT_SIZE;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  font-size: ${({ size, theme }) =>
    size ? theme.FONT_SIZE[size] : theme.FONT_SIZE.MD}px;
  font-family: ${({ weight, theme }) =>
    weight ? `GeneralSans${weight}` : theme.FONT_FAMILY.REGULAR};
  color: ${({ color, theme }) =>
    color ? theme.COLORS[color] : theme.COLORS.gray100};
`;

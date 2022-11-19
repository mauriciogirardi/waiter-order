import React from "react";
import { Text } from "../Text";
import { Container } from "./styles";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import theme from "../../styles/theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  background?: keyof typeof theme.COLORS;
  loading?: boolean;
}

export function Button({
  title,
  background = "red400",
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <Container background={background} {...props}>
      {!loading ? (
        <Text weight="500" size="LG">
          {title}
        </Text>
      ) : (
        <ActivityIndicator color="#fff" />
      )}
    </Container>
  );
}

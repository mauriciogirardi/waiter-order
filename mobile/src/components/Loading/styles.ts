import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: "#fff",
  size: "large",
}))``;

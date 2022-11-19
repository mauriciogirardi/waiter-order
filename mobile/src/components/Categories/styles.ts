import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 22px;
  margin-bottom: 8px;
  box-shadow: 8px 2px 1px rgba(0, 0, 0, 0.5);
  elevation: 2;
`;

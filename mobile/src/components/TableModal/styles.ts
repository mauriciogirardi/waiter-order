import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray100};
  border-radius: 8px;
  min-height: 230px;
  width: 100%;
  padding: 24px;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputModal = styled.TextInput`
  background: ${({ theme }) => theme.COLORS.white};
  border-radius: 5px;
  padding: 0 16px;
  height: 48px;
`;

export const CloseButtonModal = styled.TouchableOpacity``;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

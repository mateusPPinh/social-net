import styled from "styled-components/native";
import { StyleSheet, Platform } from "react-native";

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : null,
})`
  flex: 1;
  background: #100f12;
`;

export const Content = styled.ScrollView``;

export const AvatarInput = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
  margin-top: 30px;
  background: #fff;
`;

export const ChangeAvatarDescription = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 15px;
`;

export const Form = styled.View`
  padding: 30px;
`;

export const InputTitle = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  height: 48px;
  font-size: 17px;
  color: #fff;
  flex: 1;
`;

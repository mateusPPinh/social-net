import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #21192E;
  flex: 1;
  padding-horizontal: 24px;
`;

export const Header = styled.View`
  margin-top: 45px;
`;

export const ChatContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: #21192E;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  padding-horizontal: 24px;
  border-top-right-radius: 1px;
  font-size: 16px;
`;

export const InputButton = styled(RectButton)`
  height: 60px;
  background: #fff;
  border-top-left-radius: 1px;
  width: 100%;
  margin-bottom: 8px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: 15px;
`;


import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  ChatContainer,
  Input,
  InputButton,
  ButtonText,
} from "./styles";

const Chat = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate("Details");
  }

  return (
    <>
      <Container>
        <Header>
          <RectButton onPress={handleBack}>
            <Icon name="arrow-left" size={23} color="#fff" />
          </RectButton>
        </Header>
      </Container>
      <ChatContainer>
        <Input  placeholder="Type something"/>
        <InputButton>
          <ButtonText>Send</ButtonText>
        </InputButton>
      </ChatContainer>
    </>
  );
};

export default Chat;

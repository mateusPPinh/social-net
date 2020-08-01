import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Content,
  AvatarInput,
  ChangeAvatarDescription,
  Form,
  InputTitle,
  InputContainer,
  Input,
  SaveButton,
  SaveText
} from "./styles";
import EditProfileHeader from "../../components/EditProfileHeader";

const Configurations = () => {
  return (
    <Container>
      <EditProfileHeader />

      <Content>
        <TouchableWithoutFeedback>
          <AvatarInput />
        </TouchableWithoutFeedback>
        <ChangeAvatarDescription>
          Tip to change your profile pic
        </ChangeAvatarDescription>

        <Form>
          <InputTitle>Name</InputTitle>
          <InputContainer>
            <Input
              placeholder="Your name"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
            />
            <MaterialIcons name="person-pin" size={20} color="#999" />
          </InputContainer>

          <InputTitle>Biography</InputTitle>
          <InputContainer>
            <Input
              placeholder="Update your Bio"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <MaterialIcons name="person-pin" size={20} color="#999" />
          </InputContainer>

          <SaveButton>
            <SaveText>Save</SaveText>
          </SaveButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Configurations;

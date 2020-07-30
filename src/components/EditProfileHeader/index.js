import React from "react";
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ButtonReturn,
  SmallProfilePic,
  HeaderContainerSeparator,
  HeaderTitle,
} from "./styles";

const EditProfileHeader = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack('Profile');
  }

  return (
    <Container>
      <ButtonReturn onPress={handleBack}>
        <SmallProfilePic />
      </ButtonReturn>
      <HeaderContainerSeparator />

      <HeaderTitle>Edit your profile</HeaderTitle>
    </Container>
  );
};

export default EditProfileHeader;

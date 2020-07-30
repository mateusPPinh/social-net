import React from "react";

import {
  Container,
  SmallProfilePic,
  HeaderContainerSeparator,
  HeaderTitle,
  InfoIconButton,
  InfoIcon,
} from "./styles";

const ProfileHeader = () => {
  return (
    <Container>
      <SmallProfilePic />
      <HeaderContainerSeparator />

      <HeaderTitle>Your Profile</HeaderTitle>
      <InfoIconButton>
        <InfoIcon />
      </InfoIconButton>
    </Container>
  );
};

export default ProfileHeader;

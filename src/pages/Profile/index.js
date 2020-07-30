import React from "react";

import {
  Container,
  Content,
  UserImage,
  UserName,
  UserDescription,
  Bold,
} from "./styles";
import ProfileHeader from "../../components/ProfileHeader";

const Profile = () => {
  return (
    <Container>
      <ProfileHeader />

      <Content>
        <UserImage
          source={{
            uri:
              "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />

        <UserName>Joana Flick</UserName>
        <UserDescription>
          Software Engineer at <Bold>Loop</Bold>
        </UserDescription>
      </Content>
    </Container>
  );
};

export default Profile;

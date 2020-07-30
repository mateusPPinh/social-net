import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import ProfileHeader from '../../components/ProfileHeader';

const Profile = () => {
  return (
    <Container>
      <ProfileHeader />
    </Container>
  );
}

export default Profile;
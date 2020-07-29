import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Title,
  Separator,
  Left,
  Avatar,
  Info,
  Name,
  OnlineStatus,
  UserStatus,
  CardsContent,
} from "./styles";

const Home = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/posts').then((response) => {
      setStatus(response.data);
    }) 
  }, [])

  function handleToDetails() {
    navigation.navigate('Details');
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Container>
        <Title>Your best friends</Title>
        <Separator />

        <CardsContent>
          <Left>
            <Avatar
              source={{ uri: "https://api.adorable.io/avatars/50/abott@adorable.png" }}
            />

            <Info>
              <Name>Luk Skywalker</Name>
              <OnlineStatus>2 hours ago</OnlineStatus>
              <UserStatus>Walking for no where</UserStatus>
            </Info>
          </Left>

          <TouchableOpacity onPress={handleToDetails}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </CardsContent>

        <CardsContent>
          <Left>
            <Avatar
              source={{ uri: "https://api.adorable.io/avatars/50/abott@adorable.png" }}
            />

            <Info>
              <Name>Luk Skywalker</Name>
              <OnlineStatus>2 hours ago</OnlineStatus>
              <UserStatus>Walking for no where</UserStatus>
            </Info>
          </Left>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </CardsContent>

        <CardsContent>
          <Left>
            <Avatar
              source={{ uri: "https://api.adorable.io/avatars/50/abott@adorable.png" }}
            />

            <Info>
              <Name>Luk Skywalker</Name>
              <OnlineStatus>2 hours ago</OnlineStatus>
              <UserStatus>Walking for no where</UserStatus>
            </Info>
          </Left>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </CardsContent>

        <CardsContent>
          <Left>
            <Avatar
              source={{ uri: "https://api.adorable.io/avatars/50/abott@adorable.png" }}
            />

            <Info>
              <Name>Luk Skywalker</Name>
              <OnlineStatus>2 hours ago</OnlineStatus>
              <UserStatus>Walking for no where</UserStatus>
            </Info>
          </Left>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </CardsContent>

        <CardsContent>
          <Left>
            <Avatar
              source={{ uri: "https://api.adorable.io/avatars/50/abott@adorable.png" }}
            />

            <Info>
              <Name>Luk Skywalker</Name>
              <OnlineStatus>2 hours ago</OnlineStatus>
              <UserStatus>Walking for no where</UserStatus>
            </Info>
          </Left>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </CardsContent>
      </Container>
    </ScrollView>
  );
};

export default Home;

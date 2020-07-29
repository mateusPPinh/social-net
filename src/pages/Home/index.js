import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

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
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
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

import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native";

import {
  Container,
  UserImage,
  UserName,
  Content,
  Header,
  MessageButton,
  MessageText,
  GalleryContainer,
  Title,
  Photos,
  ScrollContent,
  AlbunsTitle,
  About,
  Description,
  Contact,
  ProfileTitle
} from "./styles";

import img1 from "../../assets/img1.jpg";
import igm2 from "../../assets/igm2.jpg";
import igm3 from "../../assets/igm3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    title: "In Germany",
    bgColor: "#A85D61",
  },
  {
    key: String(Math.random()),
    img: igm2,
    title: "In London",
    bgColor: "#21192E",
  },
  {
    key: String(Math.random()),
    img: igm3,
    title: "In Paris",
    bgColor: "#7159c1",
  },

  {
    key: String(Math.random()),
    img: img4,
    title: "In Germany",
    bgColor: "#A85D61",
  },
  {
    key: String(Math.random()),
    img: img5,
    title: "In London",
    bgColor: "#21192E",
  },
  {
    key: String(Math.random()),
    img: img6,
    title: "In Paris",
    bgColor: "#7159c1",
  },
  {
    key: String(Math.random()),
    img: img7,
    title: "In Paris",
    bgColor: "#7159c1",
  },
];

const Details = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack("Home");
  }

  function handleProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <RectButton onPress={handleBack}>
            <Icon name="arrow-left" size={23} color="#fff" />
          </RectButton>

          <TouchableOpacity onPress={handleProfile}>
            <ProfileTitle>Go to your profile</ProfileTitle>
          </TouchableOpacity>
        </Header>
        <Content>
          <UserImage
            source={{
              uri: "https://api.adorable.io/avatars/100/abott@adorable.png",
            }}
          />

          <UserName>Lucky Skywalker</UserName>
          <MessageButton>
            <MessageText>Say Hello</MessageText>
          </MessageButton>

          <AlbunsTitle>See all pics</AlbunsTitle>
        </Content>

        <ScrollContent>
          {items.map((item) => (
            <GalleryContainer key={item.key} bgColor={item.bgColor}>
              <Title>{item.title}</Title>
              <Photos source={item.img} />
            </GalleryContainer>
          ))}
        </ScrollContent>

        <About>About Lucky</About>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          aspernatur possimus nisi impedit exercitationem placeat perferendis
          eius consequuntur. Sequi in nesciunt minima nobis voluptate, dolore
          ducimus excepturi repellendus
        </Description>

        <Contact>Contact</Contact>

        <ScrollContent>
          {items.map((item) => (
            <GalleryContainer key={item.key} bgColor={item.bgColor}>
              <Title>{item.title}</Title>
              <Photos source={item.img} />
            </GalleryContainer>
          ))}
        </ScrollContent>
      </ScrollView>
    </Container>
  );
};

export default Details;

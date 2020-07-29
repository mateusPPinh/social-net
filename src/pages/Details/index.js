import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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
} from "./styles";

import img1 from "../../assets/img1.jpg";
import igm2 from "../../assets/igm2.jpg";
import igm3 from "../../assets/igm3.jpg";

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
];

const Details = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack("Home");
  }

  return (
    <Container>
      <Header>
        <RectButton onPress={handleBack}>
          <Icon name="arrow-left" size={23} color="#fff" />
        </RectButton>
      </Header>
      <Content>
        <UserImage
          source={{
            uri: "https://api.adorable.io/avatars/100/abott@adorable.png",
          }}
        />

        <UserName>Lucky Skywalker</UserName>
        <MessageButton>
          <MessageText>Send a message</MessageText>
        </MessageButton>
      </Content>

      <ScrollContent>
        {items.map((item) => (
          <GalleryContainer key={item.key} bgColor={item.bgColor}>
            <Title>{item.title}</Title>
            <Photos source={item.img} />
          </GalleryContainer>
        ))}
      </ScrollContent>
    </Container>
  );
};

export default Details;

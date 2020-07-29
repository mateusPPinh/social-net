import styled from "styled-components/native";
import Constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  background: #5642c5;
  flex: 1;
  padding-horizontal: 24px;
`;

export const Header = styled.View`
  margin-top: 45px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ProfileTitle = styled.Text`
  color: #fff;
`;

export const Content = styled.View`
  padding-top: ${Constants.statusBarHeight - 10}%;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const UserName = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;

export const MessageButton = styled(RectButton)`
  margin-top: 20px;
  background: #f0bac5;
  height: 45px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const AlbunsTitle = styled.Text`
  margin-top: 20px;
  font-size: 23px;
  color: #fff;
  font-weight: bold;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ScrollContent = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20
  },
}))`
  margin-top: 35px;
`;

export const GalleryContainer = styled(RectButton)`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 150px;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const Photos = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-self: center;
`;

export const About = styled.Text`
  text-align: center;
  margin-top: 35px;

  color: #ffff;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.Text`
  max-width: 400px;
  line-height: 24px;
  font-size: 14px;
  height: 150px;

  margin-top: 20px;
  color: #ffff;
  background: #21192E;
  padding: 0 24px;
  border-radius: 8px;
`;

export const Contact = styled.Text`
  text-align: center;
  margin-top: 35px;

  color: #ffff;
  font-size: 24px;
  font-weight: bold;
`;

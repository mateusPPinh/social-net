import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #5642c5;
  flex: 1;
  padding-horizontal: 24px;
`;

export const Header = styled.View`
 margin-top: 45px;
`;

export const Content = styled.View`
   padding-top: ${Constants.statusBarHeight - 10}%;
   align-items: center;
`;

export const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

export const UserName = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;

export const MessageButton = styled(RectButton)`
  margin-top: 20px;
  background: #F0BAC5;
  height: 45px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const MessageText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ScrollContent = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24,
  },
}))`
  margin-top: 25px;
`;

export const GalleryContainer = styled.TouchableOpacity`
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

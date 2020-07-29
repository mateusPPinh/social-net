import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background: #fff;

  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-horizontal: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #000;
`;

export const Separator = styled.View`
  width: 55px;
  height: 3px;
  background: #7159c1;
`;

export const CardsContent = styled.View`
  margin-top: 25px;
  border-radius: 4px;
  background: #7159c1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const OnlineStatus = styled.Text`
  color: #FFF7AE;
`;

export const UserStatus = styled.Text`
  color: #F6F7EB;
`;



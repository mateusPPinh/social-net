import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
`;

export const Content = styled.View`
  padding-top: ${Constants.statusBarHeight + 30}px;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const UserName = styled.Text`
  margin-top: 15px;
  color: #ffff;
  font-size: 18px;
  font-weight: bold;
`;

export const UserDescription = styled.Text`
  font-size: 15px;
  margin-top: 15px;
  color: #ffff;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;


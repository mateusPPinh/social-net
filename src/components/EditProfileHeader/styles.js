import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#7159c1", "#00DBFF"],
  start: { x: 0.3, y: 1 },
  end: { x: 1, y: 0 },
})`
  padding: ${Constants.statusBarHeight + 10}px 30px 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonReturn = styled(TouchableOpacity)``;

export const SmallProfilePic = styled(Feather).attrs({
  name: "arrow-left",
})`
  font-size: 16px;
  color: #fff;
`;

export const HeaderContainerSeparator = styled.View`
  width: 1px;
  height: 24px;
  opacity: 0.2;
  background-color: #fff;
  margin: 0 15px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;


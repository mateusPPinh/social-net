import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Profile from '../pages/Profile';
import Configurations from '../pages/Configurations';
import Details from '../pages/Details';
import Chat from '../pages/Chat';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Configurations" component={Configurations} />
        <AppStack.Screen name="Details" component={Details} />
        <AppStack.Screen name="Chat" component={Chat} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

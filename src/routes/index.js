import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Profile from '../pages/Profile';
import Configurations from '../pages/Configurations';
import Details from '../pages/Details';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Configurations" component={Configurations} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

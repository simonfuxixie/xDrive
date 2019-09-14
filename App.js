/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import PublicHome from '@Screen/Public/Home';

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome,
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    headerMode: "none",
    initialRouteName: "PublicHome",
    drawerWidth: deviceWidth - 50
  }
)




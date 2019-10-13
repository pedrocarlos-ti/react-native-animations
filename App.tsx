import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/index';
import Opacity from './src/pages/Opacity';

const MainNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Opacity: Opacity
});

const App = createAppContainer(MainNavigation);

export default App;

import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStack,
    Register: RegisterScreen 
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
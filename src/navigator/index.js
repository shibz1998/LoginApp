import React, {useState, useContext} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  DashboardScreen,
  SignupScreen,
  ApiScreen,
} from '../screens';

import UserContext from '../contexts/UserContext';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {user} = useContext(UserContext);

  const authStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const mainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}></Stack.Screen>
        <Stack.Screen name="ApiScreen" component={ApiScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{user ? mainStack() : authStack()}</Stack.Navigator>;
};

export default Navigator;

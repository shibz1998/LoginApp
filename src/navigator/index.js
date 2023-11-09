import React, {useState} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, DashboardScreen} from '../screens';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const authStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const mainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>{isLoggedIn ? mainStack() : authStack()}</Stack.Navigator>
  );
};

export default Navigator;

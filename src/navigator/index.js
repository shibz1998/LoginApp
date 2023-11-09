import React, {useState, useContext} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, DashboardScreen} from '../screens';

import UserContext from '../contexts/UserContext';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {user} = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

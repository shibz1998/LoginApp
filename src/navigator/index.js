import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  DashboardScreen,
  SignupScreen,
  ApiScreen,
} from '../screens';
import {useSelector} from 'react-redux';
import UserContext from '../contexts/UserContext';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  // const {user} = useContext(UserContext);
  const user = useSelector(state => state.user);
  useEffect(() => {
    setIsUserLoggedIn(
      user?.data?.accessToken &&
        typeof user?.data?.accessToken === 'string' &&
        user?.data?.accessToken.length > 50
        ? true
        : false,
    );
  }, [user]);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user?.data?.id);

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

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? mainStack() : authStack()}
    </Stack.Navigator>
  );
};

export default Navigator;

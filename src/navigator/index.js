import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {addSslPinningErrorListener} from 'react-native-ssl-public-key-pinning';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  DashboardScreen,
  SignupScreen,
  ApiScreen,
  ItemsCRUD,
  ProfileScreen,
  RTKQueryScreen,
  MapScreen,
  LocationTestScreen,
  NativeModuleTest,
  SSLPinningScreen,
} from '../screens';
import {useSelector} from 'react-redux';
import UserContext from '../contexts/UserContext';
import NotificationHelper from '../helpers/NotificationHelper';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const user = useSelector(state => state.user);

  useEffect(() => {
    const subscription = addSslPinningErrorListener(error => {
      // Triggered when an SSL pinning error occurs due to pin mismatch
      console.log(error.serverHostname);
      console.log('error from nav', JSON.stringify(error, null, 2));
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    NotificationHelper.initializeFCM();
    NotificationHelper.checkFCMPermission();
    NotificationHelper.getToken();
  }, []);

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
        <Stack.Screen
          name="SSLPinningScreen"
          component={SSLPinningScreen}></Stack.Screen>

        <Stack.Screen
          name="LocationTestScreen"
          component={LocationTestScreen}></Stack.Screen>
        <Stack.Screen
          name="NativeModuleTest"
          component={NativeModuleTest}></Stack.Screen>

        <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}></Stack.Screen>

        <Stack.Screen
          name="RTKQueryScreen"
          component={RTKQueryScreen}></Stack.Screen>

        <Stack.Screen name="ApiScreen" component={ApiScreen}></Stack.Screen>

        <Stack.Screen name="ItemsCRUD" component={ItemsCRUD}></Stack.Screen>
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {!isUserLoggedIn ? mainStack() : authStack()}
    </Stack.Navigator>
  );
};

export default Navigator;

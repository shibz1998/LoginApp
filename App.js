/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {LoginScreen, DashboardScreen} from './src/screens';
import Navigator from './src/navigator';
import {UserContextProvider} from './src/contexts/UserContext'; //exported to use it around the entire child components

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;

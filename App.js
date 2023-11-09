/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {LoginScreen, DashboardScreen} from './src/screens';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  );
}

export default App;

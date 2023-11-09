/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {LoginScreen} from './src/screens';
import {SafeAreaView, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Hello</Text>
      <LoginScreen />
    </SafeAreaView>
  );
}

export default App;

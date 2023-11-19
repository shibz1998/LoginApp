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

import {store} from './src/store';
import {Provider} from 'react-redux';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://bb2a21bcf29c5e1e9df9ddb0b2de8f74@o4506212947263488.ingest.sentry.io/4506253635026944',
});

function App() {
  return (
    <UserContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </UserContextProvider>
  );
}

export default App;

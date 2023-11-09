import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login screen</Text>

      <TextInput
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 10,
          width: '70%',
        }}
        placeholder="Enter UserName"
        value={''}
      />

      <TextInput
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 10,
          width: '70%',
        }}
        placeholder="Enter Password"
        value={''}
      />

      <Button title="Login" onPress={''} />
    </View>
  );
};

export default LoginScreen;

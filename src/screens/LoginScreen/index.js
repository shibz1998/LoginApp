import React, {useState, createContext, useContext, memo} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const LoginScreen = () => {
  const [user, setUser] = useState('jessie');

  console.log('Login Screen rendering');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Welcome {user}</Text>

      <TextInput
        style={{backgroundColor: 'pink', margin: 10}}
        placeholder="Enter Username"
        value={user}
        onChangeText={ct => {
          setUser(ct);
        }}
      />

      <Button title="Update on child component" onPress={''} />
    </View>
  );
};

export default LoginScreen;

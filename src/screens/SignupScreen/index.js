import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SignupScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = () => {
    if (email && password) {
      setEmail(email);
      setPassword(password);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Enter Email"
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Enter Password"
        value={password}
      />

      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Back to Login"
        onPress={() => props.navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    width: '70%',
  },
});

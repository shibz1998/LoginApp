import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import UserContext from '../../contexts/UserContext';

const LoginScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setUser} = useContext(UserContext);

  const handleLogin = () => {
    if (email && password) {
      setEmail(email);
      setPassword(password);
      setUser(true);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>

      <TextInput
        style={styles.inputtext}
        placeholder="Enter Email"
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
      />

      <TextInput
        style={styles.inputtext}
        placeholder="Enter Password"
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
      />

      <Button title="Login" onPress={handleLogin} />

      <Button
        title="Sign Up"
        onPress={() => {
          props.navigation.navigate('SignupScreen');
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputtext: {
    backgroundColor: 'yellow',
    margin: 10,
    padding: 10,
    width: '70%',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#eaeaea',
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });

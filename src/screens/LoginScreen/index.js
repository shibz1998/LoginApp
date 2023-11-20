import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../features/user/userSlice';
import {kApiUserLogin} from '../../config/WebService';

const {request, success, failure} = userActions;

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = () => {
    if (email && password) {
      dispatch(
        request({
          url: kApiUserLogin,
          data: {
            email,
            password,
          },
        }),
      );
    } else {
      Alert.alert('Error', 'Email and password are required');
    }
  };

  useEffect(() => {
    if (user.error) {
      // Handle the case where the login was not successful
      console.error('Login failed. Error:', user.error);
      // You can also display an alert or set an error message state to be rendered in the UI
    }
  }, [user.error]);

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>

      <TextInput
        style={styles.inputtext}
        placeholder="Enter Email"
        value={email}
        onChangeText={ct => setEmail(ct)}
      />

      <TextInput
        style={styles.inputtext}
        placeholder="Enter Password"
        value={password}
        onChangeText={ct => setPassword(ct)}
        secureTextEntry={true}
      />

      <Button title={'Login'} onPress={handleLogin} />

      <Button
        title="Sign Up"
        onPress={() => {
          props.navigation.navigate('SignupScreen');
        }}
      />

      {user.isFetching && <ActivityIndicator />}

      {/* {user.errorMessage && (
        <View>
          <Text>{JSON.stringify(user.errorMessage)}</Text>
        </View>
      )} */}
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

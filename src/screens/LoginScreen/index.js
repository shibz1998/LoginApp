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

  const [error, setError] = useState('Enter Email & Password');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user.error) {
      console.error('Login failed. Error:', user.error);
    }
  }, [user.error]);

  const handleLogin = () => {
    dispatch(
      request({
        url: kApiUserLogin,
        data: {
          email,
          password,
        },
      }),
    );
    if (user.errorMessage && !user?.data?.accessToken) {
      Alert.alert(JSON.stringify(user.errorMessage));
      // Alert.alert(error);
    }
  };

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

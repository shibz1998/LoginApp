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

import {usePostUserMutation} from '../../services/userApi';

const {request, success, failure} = userActions;

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [error, setError] = useState('');

  const [postUser, {isLoading: isUpdating, isSuccess, data}] =
    usePostUserMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log('Login successful. Access Token:' + data.id);
      console.log(data);
      dispatch(success(data));
      console.log('User slice data:', user.data);

      // Navigate to the main stack or perform other actions
      // For example: props.navigation.navigate('MainStack');
    }
  }, [isSuccess]);

  // const errorMessage = () => {
  //   if (user.errorMessage && !user?.data?.accessToken) {
  //     Alert.alert(JSON.stringify(user.errorMessage));
  //   }
  // };

  const handleLogin = () => {
    if (email && password) {
      // dispatch(
      //   request({
      //     url: kApiUserLogin,
      //     data: {
      //       email,
      //       password,
      //     },
      //   }),
      // );

      postUser({email, password});

      // console.log(data?.id);
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

      {user.errorMessage && Object.keys(user.errorMessage).length !== 0 && (
        <View>
          <Text>{JSON.stringify(user.errorMessage)}</Text>
        </View>
      )}
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

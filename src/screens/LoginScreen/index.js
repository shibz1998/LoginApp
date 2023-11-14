import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import UserContext from '../../contexts/UserContext';

import ApiHelper from '../../helpers/ApiHelper';

import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../features/user/userSlice';
import {kApiUserLogin} from '../../config/WebService';

const {request, success, failure} = userActions;

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // const handleLogin = () => {
  //   if (email && password) {
  //     setEmail(email);
  //     setPassword(password);
  //     setUser(true);
  //   } else {
  //     setEmail('');
  //     setPassword('');
  //   }
  // };

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

      {/* <Button title="Login" onPress={handleLogin} /> */}

      <Button
        title={'Login'}
        onPress={async () => {
          // PersistanceHelper.setObject('loginDetails', {username, password});
          dispatch(request({email, password}));

          try {
            const response = await ApiHelper.post(kApiUserLogin, {
              email,
              password,
            });

            dispatch(success(response));

            setEmail('');
            setPassword('');
          } catch (error) {
            dispatch(failure(error));
          }

          // EventRegister.emit('loginEvent', true);
        }}
      />

      <Button
        title="Sign Up"
        onPress={() => {
          props.navigation.navigate('SignupScreen');
        }}
      />

      {user.isFetching && <ActivityIndicator />}
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

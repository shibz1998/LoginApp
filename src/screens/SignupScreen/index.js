import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {userActions} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import ApiHelper from '../../helpers/ApiHelper';
import {kApiUserSignup} from '../../config/WebService';

const {request, success, failure} = userActions;

import {useSignUpUserMutation} from '../../services/userApi';

const SignupScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState({});

  const user = useSelector(state => state.user);

  const [signUpUser, {isLoading: isUpdating, isSuccess, data}] =
    useSignUpUserMutation();

  // useEffect(() => {
  //   if (user?.errorMessage?.message) {
  //     //   Alert.alert('Error', user?.errorMessage?.message);
  //     setErrorMsg(user?.errorMessage?.message);
  //   } else {
  //     setErrorMsg({});
  //   }
  // }, [user]);

  useEffect(() => {
    if (isSuccess) {
      console.log('Login successful. Access Token:' + data.id);
      console.log(data);
      // // dispatch(success(data));
      // console.log('User slice data:', user.data);

      // Navigate to the main stack or perform other actions
      // For example: props.navigation.navigate('MainStack');

      props.navigation.navigate('LoginScreen');
    }
  }, [isSuccess]);

  const dispatch = useDispatch();

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
        onChangeText={ct => {
          setPassword(ct);
        }}
      />
      {errorMsg && errorMsg.length > 0 && (
        <Text style={{color: 'red', marginHorizontal: 20}}>{errorMsg}</Text>
      )}

      <Button
        title={'Signup'}
        onPress={() => {
          console.log('Signup button clicked');
          // dispatch(request({url: kApiUserSignup, data: {email, password}}));

          signUpUser({email, password});

          setEmail('');
          setPassword('');
        }}
      />

      {user.isFetching && <ActivityIndicator />}

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

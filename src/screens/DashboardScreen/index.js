import React, {useContext, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import UserContext from '../../contexts/UserContext';

import {userActions} from '../../features/user/userSlice';

import {kApiUserLogout} from '../../config/WebService';

import * as Sentry from '@sentry/react-native';

import crashlytics from '@react-native-firebase/crashlytics';

import {useLogOutUserMutation} from '../../services/userApi';
const DashboardScreen = props => {
  // const {setUser} = useContext(UserContext);
  const {request, logout} = userActions;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [logOutUser, {isLoading: isUpdating, isSuccess, data}] =
    useLogOutUserMutation();

  const simulateCrash = () => {
    try {
      // Trigger an unhandled exception to simulate a crash
      throw new Error('Test crash triggered for Firebase Crashlytics.');
    } catch (error) {
      // Log the error to Firebase Crashlytics
      crashlytics().recordError(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Logout:' + data.date);
      console.log(data);

      console.log('User slice data:', user.data);

      // Navigate to the main stack or perform other actions
      // For example: props.navigation.navigate('MainStack');
    }
  }, [isSuccess]);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>DashboardScreen</Text>

      <Button
        color="red"
        title="Sentry Crashtest!"
        onPress={() => {
          Sentry.captureException(new Error('First error'));
        }}
      />

      <Button color="red" title="Firebase Crash" onPress={simulateCrash} />

      <Button
        title="Api Screen"
        onPress={() => props.navigation.navigate('ApiScreen')}
      />

      <Button
        color="blue"
        title="RTKQUERY"
        onPress={() => props.navigation.navigate('RTKQueryScreen')}
      />

      <Button
        color="black"
        title="ProfilePage"
        onPress={() => props.navigation.navigate('ProfileScreen')}
      />

      <Button
        color="green"
        title="ITEM CRUD API"
        onPress={() => props.navigation.navigate('ItemsCRUD')}
      />

      <Button
        color="violet"
        title="MAP VIEW"
        onPress={() => props.navigation.navigate('MapScreen')}
      />

      <Button
        color="violet"
        title="Location Test"
        onPress={() => props.navigation.navigate('LocationTestScreen')}
      />

      <Button
        color="black"
        title="Native Module Test"
        onPress={() => props.navigation.navigate('NativeModuleTest')}
      />

      <Button
        title="SSL Pinning"
        onPress={() => {
          props.navigation.navigate('SSLPinningScreen');
        }}
      />

      <Button
        color="red"
        title="Log Out"
        onPress={() => {
          const logoutUrl = `${kApiUserLogout}?access_token=${user?.data?.accessToken}`;
          console.log(logoutUrl);

          console.log('User state:', user);

          // dispatch(logout());

          // logOutUser(user?.data?.accessToken);

          logOutUser({accessToken: user.data.accessToken});
          dispatch(logout());
          console.log('User state:', user);
        }}
      />
    </View>
  );
};

export default DashboardScreen;

// import React, {useEffect} from 'react';
// import {View, Button} from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';

// async function onSignIn(user) {
//   crashlytics().log('User signed in.');
//   await Promise.all([
//     crashlytics().setUserId(user.uid),
//     crashlytics().setAttribute('credits', String(user.credits)),
//     crashlytics().setAttributes({
//       role: 'admin',
//       followers: '13',
//       email: user.email,
//       username: user.username,
//     }),
//   ]);
// }

// export default function DashboardScreen() {
//   useEffect(() => {
//     crashlytics().log('App mounted.');
//   }, []);

//   return (
//     <View>
//       <Button
//         title="Sign In"
//         onPress={() =>
//           onSignIn({
//             uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
//             username: 'Joaquin Phoenix',
//             email: 'phoenix@example.com',
//             credits: 42,
//           })
//         }
//       />
//       <Button title="Test Crash" onPress={() => crashlytics().crash()} />
//     </View>
//   );
// }

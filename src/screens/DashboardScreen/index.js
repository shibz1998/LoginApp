import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import {firebase} from '@react-native-firebase/crashlytics';

import {useDispatch, useSelector} from 'react-redux';

import UserContext from '../../contexts/UserContext';

import {userActions} from '../../features/user/userSlice';
const DashboardScreen = props => {
  // const {setUser} = useContext(UserContext);
  const {logout} = userActions;
  const dispatch = useDispatch();

  const causeCrash = () => {
    // Trigger an unhandled exception to simulate a crash
    throw new Error('Test crash triggered for Firebase Crashlytics.');
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>DashboardScreen</Text>

      <Button title="Cause Crash" onPress={causeCrash} />

      <Button
        title="Log Out"
        onPress={() => {
          dispatch(logout());
        }}
      />

      <Button
        title="Api Screen"
        onPress={() => props.navigation.navigate('ApiScreen')}
      />

      <Button
        title="ITEM CRUD API"
        onPress={() => props.navigation.navigate('ItemsCRUD')}
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

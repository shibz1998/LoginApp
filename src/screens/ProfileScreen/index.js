// import React from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';

// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>My Profile</Text>

//     </View>
//   );
// };

// export default ProfileScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import {useState} from 'react';

const ProfileScreen = props => {
  const [profile, setProfile] = useState(null);

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
      setProfile(image.path);
    });
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfile(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={imagePick}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={
                profile
                  ? {uri: profile}
                  : require('../../assets/images/profilepic.png')
              }
            />
            {/* <TouchableOpacity
              onPress={imagePick}
              style={{alignItems: 'flex-end', top: -10}}>
              <Text>Gallary</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <View style={styles.details}>
          <TextInput
            placeholder="First Name"
            value=""
            onChangeText={''}></TextInput>
          <TextInput
            placeholder="Last Name"
            value=""
            onChangeText={''}></TextInput>
          <TextInput placeholder="Phone" value="" onChangeText={''}></TextInput>
        </View>
      </View>

      <Button
        title="Dashboard"
        onPress={() => {
          props.navigation.navigate('DashboardScreen');
        }}></Button>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 55,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 10,
  },
  details: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

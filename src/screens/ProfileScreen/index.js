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
import {useSelector} from 'react-redux';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import {useState} from 'react';

const ProfileScreen = props => {
  const user = useSelector(state => state.user);

  const [profile, setProfile] = useState(null);

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState(user.data?.email || '');

  console.log(email);
  const handlechange = () => {};

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
      <View style={styles.card}>
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

        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Edit Details</Text>
        </View>
        <View>
          <Text style={styles.text}> Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={ct => {
              setUsername(ct);
            }}
          />

          <Text style={styles.text}> Phone:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={ct => {
              setPhone(ct);
            }}
          />
          <Text style={styles.text}> City:</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={ct => {
              setCity(ct);
            }}
          />

          <Text style={styles.text}> Email:</Text>
          <TextInput
            placeholder={email}
            style={styles.input}
            value={email}
            onChangeText={ct => {
              setEmail(ct);
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handlechange}>
          <Text>Press to Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('DashboardScreen');
          }}>
          <Text>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 55,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#003c55',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#003c55',
    margin: 5,
  },

  button: {
    backgroundColor: '#FC763F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  input: {
    // backgroundColor: '#eecb9a',
    backgroundColor: 'lightyellow',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 10,
    // backgroundColor: 'yellow',
    width: 250,
  },

  card: {
    // backgroundColor: 'lightblue',
    backgroundColor: '#D9DCBB',
    alignItems: 'center',
    width: '80%',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  text: {
    margin: 5,
  },
});

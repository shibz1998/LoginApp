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

//For user Input

import {InputComponent} from '../../screens';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^\d+$/, 'Should only contain numbers')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must not exceed 15 digits'),
});

const ProfileScreen = props => {
  const user = useSelector(state => state.user);

  const [profile, setProfile] = useState(null);

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState(user.data?.email || '');

  // console.log(email);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

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

        {/* <View>
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
        </View> */}

        <View>
          <InputComponent
            control={control}
            placeholder={'Enter First name'}
            name="firstName"
            error={errors?.firstName}
          />
          <InputComponent
            control={control}
            placeholder={'Enter Last name'}
            name="lastName"
            error={errors?.lastName}
          />
          <InputComponent
            control={control}
            placeholder={'Enter Email'}
            name="email"
            error={errors?.email}
          />
          <InputComponent
            control={control}
            placeholder={'Enter Phone '}
            name="phone"
            error={errors?.phone}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(formData => {
            console.log('form Data' + formData);
          })}>
          <Text>Submit</Text>
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


export default ProfileScreen;


// import {View, Text, Button, Alert} from 'react-native';
// import React from 'react';
// import InputComponent from '../InputComponent';
// import {useForm, Controller} from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//   firstName: yup
//     .string()
//     .required('First name is required')
//     .matches(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
//   lastName: yup
//     .string()
//     .required('Last name is required')
//     .matches(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
//   email: yup
//     .string()
//     .required('Email is required')
//     .email('Invalid email')
//     .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
// });

// function ProfileScreen() {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm({
//     mode: 'all',
//     resolver: yupResolver(schema),
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//   });

//   return (
//     <View style={{flex: 1}}>
//       <InputComponent
//         control={control}
//         placeholder={'Enter First name'}
//         name="firstName"
//         error={errors?.firstName}
//       />
//       <InputComponent
//         control={control}
//         placeholder={'Enter Last name'}
//         name="lastName"
//         error={errors?.lastName}
//       />
//       <InputComponent
//         control={control}
//         placeholder={'Enter Email'}
//         name="email"
//         error={errors?.email}
//       />

//       <Button
//         title={'Submit'}
//         onPress={handleSubmit(formData => {
//           Alert.alert('Form data: ' + JSON.stringify(formData.firstName));
//         })}
//       />
//     </View>
//   );
// }



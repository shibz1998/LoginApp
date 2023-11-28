import React from 'react';
import {NativeModules, Button, View} from 'react-native';
import {RESULTS} from 'react-native-permissions';

const NativeModuleTest = () => {
  const {CalendarModule} = NativeModules;

  console.log(NativeModules.Counter);

  const onPress = () => {
    // console.log('We will invoke the native module here!');
    // CalendarModule.createCalendarEvent('testName', 'testLocation');
    // console.log(CalendarModule);
    CalendarModule.createCalendarEvent(
      'Party',
      'London',
      successMessage => {
        console.log(successMessage);
      },
      errorMessage => {
        console.error(errorMessage);
      },
    );
  };

  const decrement = () => {
    NativeModules.Counter.decrement()
      .then(result => console.log(result))
      .catch(error => console.error(error.message, error.code));
  };
  const increment = () => {
    NativeModules.Counter.increment(value => {
      console.log('The count is ' + value);
    });
    console.log(NativeModules.Counter.getConstants());
  };

  return (
    <View>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />

      <Button title="Decrement => IOS" color="red" onPress={decrement} />

      <Button title="Increment => IOS" color="blue" onPress={increment} />
    </View>
  );
};

export default NativeModuleTest;

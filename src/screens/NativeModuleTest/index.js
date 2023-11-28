import React from 'react';
import {NativeModules, Button} from 'react-native';

const NativeModuleTest = () => {
  const {CalendarModule} = NativeModules;

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

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NativeModuleTest;

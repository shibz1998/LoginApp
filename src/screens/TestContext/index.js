import React, {useState, createContext, useContext, memo} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {create} from 'react-test-renderer';

const UserContext = createContext();

const TestContext = () => {
  const [user, setUser] = useState('jessie');

  console.log('Component 1 rendering');
  return (
    <UserContext.Provider value={user}>
      <View style={{backgroundColor: 'red', margin: 5}}>
        <TextInput
          style={{backgroundColor: 'yellow'}}
          placeholder="Enter Something"
          value={user}
          onChangeText={ct => {
            setUser(ct);
          }}
        />

        <Text>Component 1 {user}</Text>
        <TestContext2 />
      </View>
    </UserContext.Provider>
  );
};

const TestContext2 = memo(() => {
  console.log('Component 2 rendering');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>Component 2</Text>
      <TestContext3 />
    </View>
  );
});

const TestContext3 = () => {
  console.log('Component 3 rendering');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 3 </Text>
      <TestContext4 />
    </View>
  );
};

const TestContext4 = () => {
  const user = useContext(UserContext);

  console.log('Component 4 rendering');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 4 {user}</Text>
    </View>
  );
};

export default TestContext;

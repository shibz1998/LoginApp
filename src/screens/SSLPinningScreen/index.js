import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const SSLPinningScreen = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>SSL PINNING SCREEN</Text>

      {!loading && data.map(user => <Text key={user.id}>{user.name}</Text>)}
    </View>
  );
};

export default SSLPinningScreen;

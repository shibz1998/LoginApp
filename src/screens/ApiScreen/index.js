import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

import ApiHelper from '../../helpers/ApiHelper';

import {
  kApiUrlEndpoint,
  ERROR_NETWORK_NOT_AVAILBLE,
  ERROR_WRONG_CREDENTIALS,
  kApiTodos,
} from '../../config/WebService';

const ApiScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    ApiHelper.get(kApiTodos)
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log('error' + err);
      });
  }, []);

  useEffect(() => {
    console.log('data:' + data);
  }, [data]);

  const renderItem = ({item}) => (
    <View style={{borderBottomWidth: 1, borderColor: 'blue', padding: 10}}>
      <Text
        style={{fontSize: 16, fontWeight: 'bold'}}>{`Name: ${item.name}`}</Text>
      <Text>{`Username: ${item.username}`}</Text>
      <Text>{`Email: ${item.email}`}</Text>

      {/* Address */}
      <Text>{`Address:`}</Text>
      <Text>{`Street: ${item.address.street}`}</Text>
      <Text>{`Suite: ${item.address.suite}`}</Text>
      <Text>{`City: ${item.address.city}`}</Text>
      <Text>{`Zipcode: ${item.address.zipcode}`}</Text>

      {/* Geo */}
      <Text>{`Geo:`}</Text>
      <Text>{`Lat: ${item.address.geo.lat}`}</Text>
      <Text>{`Lng: ${item.address.geo.lng}`}</Text>

      <Text>{`Phone: ${item.phone}`}</Text>
      <Text>{`Website: ${item.website}`}</Text>

      {/* Company */}
      <Text>{`Company:`}</Text>
      <Text>{`Name: ${item.company.name}`}</Text>
      <Text>{`Catchphrase: ${item.company.catchPhrase}`}</Text>
      <Text>{`BS: ${item.company.bs}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>TEST API SCREEN</Text>

      {/* <FlatList
        data={data}
        renderItem={({item}) => {
          return <Text>{item.username}</Text>;
        }}></FlatList> */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ApiScreen;

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

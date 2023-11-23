import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapViewControl from '../../controls/MapViewControl/index';

const londonMarkers = [
  {latitude: 51.509865, longitude: -0.118092, title: 'London Eye'},
  {latitude: 51.51106, longitude: -0.117155, title: 'Westminster Abbey'},
  {latitude: 51.50735, longitude: -0.127758, title: 'Buckingham Palace'},
  {latitude: 51.502116, longitude: -0.113899, title: 'Tate Modern'},
  {latitude: 51.516272, longitude: -0.098234, title: 'The Shard'},
  {latitude: 51.500152, longitude: -0.126236, title: 'Big Ben'},
  {latitude: 51.5444, longitude: 0.133, title: 'My Home'},
];

export default function MapScreen() {
  const [myMapMarkers, setMyMapMarkers] = useState(londonMarkers);

  return (
    <View style={{flex: 1}}>
      <MapViewControl
        markers={myMapMarkers}
        // markers={[]}
        onLongPress={arg => {
          const {coordinate} = arg.nativeEvent;

          //   const newMarker = {
          //     latitude: coordinate.latitude.toString(), // Convert to string if needed
          //     longitude: coordinate.longitude.toString(),
          //     title: 'New Location',
          //   };

          //   setMyMapMarkers([...myMapMarkers, newMarker]);
          setMyMapMarkers([...myMapMarkers, coordinate]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

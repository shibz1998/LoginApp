import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const MapViewControl = props => {
  return (
    <View style={{flex: 1}}>
      <MapView
        showsMyLocationButton
        onLongPress={props.onLongPress}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          // latitude: 37.78825,
          // longitude: -122.4324,
          // latitudeDelta: 0.015,
          // longitudeDelta: 0.0121,
          //london
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {props?.markers.map(thisEl => {
          return (
            <Marker
              draggable
              title={thisEl.title}
              description={'this is the description'}
              coordinate={thisEl}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'grey',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>F</Text>
              </View>
              <Callout>
                <View
                  style={{
                    width: 100,
                    height: 50,
                    backgroundColor: 'lightgrey',
                  }}>
                  <Text style={styles.calloutText}>{thisEl.title}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapViewControl;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

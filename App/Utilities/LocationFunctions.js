import React from 'react';
import { Platform } from 'react-native';
import { AppConfig } from '../Config/Application';
import { getKey, setKey } from './AsyncStorage';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const storageKey = AppConfig.StorageKey;

const setLocationReference = async () => {
  var RefLocation = '0,0';
  let isLocationEnabled = await Location.hasServicesEnabledAsync();
  if (!isLocationEnabled) {
    return false;
  } else {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission [location] denied');
      return false;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      setKey(`${storageKey}:LocationReference`, {
        accuracy: location.coords.accuracy,
        timestamp: location.timestamp,
        LatLong: [location.coords.latitude, location.coords.longitude].join(
          ','
        ),
      });
    }
  }
};

// Location:
// .coords
//    - latitude
//    - longitude
//    - altitude
//    - accuracy
//    - altitudeAccuracy
//    - heading
//    - speed
// .timestamp
const getLocationAsync = async () => {
  let isLocationEnabled = await Location.hasServicesEnabledAsync();
  if (isLocationEnabled) {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return '0,0';
    }
    try {
      const location = await Location.getCurrentPositionAsync({});
      console.log('Location', location);
      return location;
    } catch (e) {
      console.log('location error', e);
      return '-1,-1';
    }
  } else {
    console.log('location service is not enabled');
    return false;
  }
};

export { getLocationAsync, setLocationReference };

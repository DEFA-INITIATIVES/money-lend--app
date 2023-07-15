import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import Geolocation from 'react-native-geolocation-service';
import Contacts from 'react-native-contacts';

const SplashScreen = ({navigation}) => {
  const [location, setLocation] = useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('...');

  const requestContactsPermission = async () => {
    try {
      const granted = await Contacts.requestPermission();
      if (granted === 'authorized') {
        Contacts.getAll((err, contacts) => {
          if (err) {
            console.warn(err);
          } else {
            console.log(contacts);
          }
        });
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'We need your permission to access your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              console.log('Latitude: ', latitude);
              console.log('Longitude: ', longitude);
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    // requestContactsPermission();
    requestLocationPermission();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          SupaCash
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/img/logo.png')}
          className=" w-60 h-60 transform-rotate hue-rotate-15 rounded-full"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#0d1c64',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
        <ArrowRightIcon name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;

import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

const SplashScreen = ({ navigation }) => {
 
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);
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

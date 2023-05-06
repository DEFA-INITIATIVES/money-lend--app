import {View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="w-full h-full ">
        <View className="w-full h-full  flex items-center">
          <View className="mt-10">
            <Text className="text-3xl text-white font-sans font-extrabold ">
              Welome To money Bank
            </Text>
          </View>
          <View className="flex-1   flex items-center justify-center space-y-5">
            <TouchableOpacity
              className="  bg-black w-[343px] h-[48px] rounded-[10px] items-center p-3"
              onPress={() => navigation.navigate('Login')}>
              <Text className="text-white   font-extrabold "> Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="  bg-[#FFFFFF] w-[343px] h-[48px] rounded-[10px] items-center p-3"
              onPress={() => navigation.navigate('Register')}>
              <Text className="text-black  font-extrabold "> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

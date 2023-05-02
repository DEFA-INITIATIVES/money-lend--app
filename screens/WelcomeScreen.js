import {
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="w-full h-full">
        <View className="items-center  mt-[400px] ">
          <Text className="text-[60px] text-white font-sans font-extrabold ">
            Here To Telp
          </Text>
          <View className="space-y-5">
            <TouchableOpacity className="  bg-black w-[343px] h-[48px] rounded-[10px] items-center p-3">
              <Text className="text-white   font-extrabold "> Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity className="  bg-[#FFFFFF] w-[343px] h-[48px] rounded-[10px] items-center p-3">
              <Text className="text-black  font-extrabold "> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

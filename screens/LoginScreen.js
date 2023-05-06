import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {EnvelopeIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className=" bg-[#000113]  h-full items-center relative">
        <View className="bg-[#1E293B] w-full h-[481.43px]  absolute top-[-127px] items-center">
          <Text className="text-white text-[25px] absolute top-[170px] font-semibold  pb-3">
            Money Bank
          </Text>
          <View></View>
          <Image
            source={require('../assets/img/logo.png')}
            className="w-[50px] mt-[220px] h-[50px] rounded-full "
          />
        </View>

        <View className=" top-[216px] bg-[#000113] w-[360px] h-[360px] rounded-full items-center ">
          <Text className="text-white  font-extrabold text-[32px] mt-[50px]">
            Login
          </Text>
        </View>

        <View className="flex flex-col space-y-1 w-full px-3">
          <Text className="text-white text-[12px] ml-3">Email</Text>

          <AppTextInput
            placeholder="raziul.cse@gmail.com"
            Icon={EnvelopeIcon}
          />

          <View className="border-white  border-b w-full" />
        </View>

        <View className="flex-row  px-2 mt-5">
          <Text className="text-white text-[14px] flex-1 ml-3">Password</Text>
          <Text className="text-white text-[14px] mr-7">Forgot?</Text>
        </View>

        <View className="flex flex-col space-y-1 w-full px-3">
          <AppTextInput
            secureTextEntry={true}
            Icon={LockClosedIcon}
            placeholder="P@ss1234"
          />

          <View className="border-white  border-b w-full" />
        </View>

        <View className="w-full px-3 mt-5">
          <AppButton
            title="Login"
            color="dark"
            onPress={() => navigation.navigate('Welcome')}
          />
        </View>

        <View className="ml-3 mt-5 flex flex-row  space-x-3  ">
          <Text className="text-white">Don’t have account?</Text>
          <TouchableOpacity
            className=" "
            onPress={() => navigation.navigate('Register')}>
            <Text className="text-white">Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

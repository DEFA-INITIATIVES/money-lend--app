import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {EnvelopeIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View className=" bg-white  h-full items-center relative">
        <View className="bg-[#BFDBFE] w-full h-[501.43px]  absolute top-[-127px] items-center">
          <Text className="text-black text-[25px] absolute top-[170px] font-semibold ">
            Welcome TO Money Lending
          </Text>
        </View>

        <View className=" top-[216px] bg-white w-[360px] h-[360px] rounded-full items-center ">
          <Text className="text-black  font-extrabold text-[32px] mt-[50px]">
            Login
          </Text>
        </View>

        <View className="flex flex-col space-y-1 w-full px-3">
          <Text className="text-black text-[12px] ml-3">Email</Text>

          <AppTextInput
            placeholder="raziul.cse@gmail.com"
            Icon={EnvelopeIcon}
          />

          <View className="border-[#000113]  border-b w-[300px]" />
        </View>

        <View className="flex-row  px-2 mt-5">
          <Text className="text-black text-[14px] flex-1 ml-3">Password</Text>
          <Text className="text-black text-[14px] mr-7">Forgot?</Text>
        </View>

        <View className="flex flex-col space-y-1 w-full px-3">
          <AppTextInput secureTextEntry={true} Icon={LockClosedIcon} />

          <View className="border-[#000113]  border-b w-[300px]" />
        </View>

        <View className="w-full px-3 mt-5">
          <AppButton title="Login" color="dark" />
        </View>

        <View className="ml-3 mt-5 flex flex-row  space-x-3  ">
          <Text>Don’t have account?</Text>
          <TouchableOpacity className=" ">
            <Text className="text-black">Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

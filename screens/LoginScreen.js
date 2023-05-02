import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

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

        <View className=" top-[410px] absolute ">
          <Text className="text-black text-[12px] right-[130px]  pb-10">
            Email
          </Text>
        </View>

        <TextInput
          placeholder="raziul.cse@gmail.com"
          placeholderTextColor="white"
          keyboardType="email-address"
          className="right-[200px]  absolute top-[410px]  mb-3 "
        />
        <View className="border-[#000113] absolute top-[460px]  px-0 w-[300px] border-b"></View>
      </View>
      <View className="flex-row absolute top-[492px] px-2">
        <Text className="text-black text-[14px] flex-1 left-10">Passwaord</Text>
        <Text className="text-black text-[14px] mr-7">Forgot?</Text>
      </View>
      <View className="border-[#000113]  absolute top-[522px] border-b w-[300px] m-3 ml-[50px]"></View>

      <TouchableOpacity className=" top-[546px] absolute  bg-[#000113] border  rounded-[10px] w-[300px] h-[40px] items-center p-2 left-[45px] mt-5 ">
        <Text className="text-white">Log in</Text>
      </TouchableOpacity>
      <View className="top-[628px] absolute  items-center left-[150px]"></View>
      <View className="absolute top-[664px]   flex-row   ">
        <TouchableOpacity className="flex-1 px-2 w-[80px] h-[40px]  items-center  border-0 rounded-[4px] ">
          <Text className="text-black">Don’t have account? Create now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

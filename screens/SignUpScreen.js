import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {EnvelopeIcon, IdentificationIcon} from 'react-native-heroicons/outline';
import {
  LockClosedIcon,
  PhoneIcon,
  PencilSquareIcon,
} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-[#000113] h-full items-center relative">
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
              Sign up
            </Text>
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3">
            <Text className=" text-[12px] ml-3 text-white">Name</Text>

            <AppTextInput
              placeholder="Muwonge Lawrence"
              Icon={PencilSquareIcon}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3 ">
            <Text className="text-white text-[12px] ml-3">Email</Text>

            <AppTextInput
              placeholder="raziul.cse@gmail.com"
              Icon={EnvelopeIcon}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">Contact</Text>

            <AppTextInput placeholder="+256755168391" Icon={PhoneIcon} />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">NIN</Text>

            <AppTextInput
              placeholder="CM9085556GGGHJKLJ"
              Icon={IdentificationIcon}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-white text-[14px] flex-1 ml-3">Password</Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 ">
            <AppTextInput
              secureTextEntry={true}
              Icon={LockClosedIcon}
              placeholder="1234"
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-white text-[14px] flex-1 ml-3">
              Confirm Password
            </Text>
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
            <AppButton title="Sign UP" color="dark" />
          </View>

          <View className="ml-3 mt-5 flex flex-row  space-x-3 mb-5">
            <Text className="text-white">Already have account?</Text>
            <TouchableOpacity className=" ">
              <Text className="text-white">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

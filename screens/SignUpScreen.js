import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {EnvelopeIcon, IdentificationIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon, PhoneIcon, PencilSquareIcon} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-white  h-full items-center relative">
          <View className="bg-[#BFDBFE] w-full h-[501.43px]  absolute top-[-127px] items-center">
            <Text className="text-black text-[25px] absolute top-[170px] font-semibold ">
              Welcome To Money Lending
            </Text>
          </View>

          <View className=" top-[216px] bg-white w-[360px] h-[360px] rounded-full items-center ">
            <Text className="text-black  font-extrabold text-[32px] mt-[50px]">
              Sign up
            </Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-black text-[12px] ml-3">Name</Text>

            <AppTextInput placeholder="Muwonge Lawrence" Icon={PencilSquareIcon} />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-black text-[12px] ml-3">Email</Text>

            <AppTextInput
              placeholder="raziul.cse@gmail.com"
              Icon={EnvelopeIcon}
            />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-black text-[12px] ml-3">Contact</Text>

            <AppTextInput placeholder="+256755168391" Icon={PhoneIcon} />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-black text-[12px] ml-3">NIN</Text>

            <AppTextInput placeholder="CM9085556GGGHJKLJ" Icon={IdentificationIcon} />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-black text-[14px] flex-1 ml-3">Password</Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3">
            <AppTextInput secureTextEntry={true} Icon={LockClosedIcon} />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-black text-[14px] flex-1 ml-3">Confirm Password</Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3">
            <AppTextInput secureTextEntry={true} Icon={LockClosedIcon} />

            <View className="border-[#000113]  border-b w-[300px]" />
          </View>


          <View className="w-full px-3 mt-5">
            <AppButton title="Sign UP" color="dark" />
          </View>

          <View className="ml-3 mt-5 flex flex-row  space-x-3 mb-5">
            <Text>Already have account?</Text>
            <TouchableOpacity className=" ">
              <Text className="text-black">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

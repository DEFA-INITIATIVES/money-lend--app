import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Bottombar from '../components/Bottombar';
import colors from '../config/colors';
import {EnvelopeIcon, UserCircleIcon} from 'react-native-heroicons/outline';
import AppTextInput from '../components/AppTextInput';

const ContactScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="bg-white h-full">
        <View className="flex items-center justify-center  mt-4 pt-10">
          <Text className="text-gray-600 font-bold text-lg"> Contact</Text>

          <Text className=" text-[16px] text-left text-justify mx-10  font-serif mb-2 font-semibold">
            Feel free to get in touch with us via Contact from below. Our
            representatives will respond you as soon as possible.
          </Text>
        </View>

        <View className="flex-1 mt-9 space-y-4">
          <View className=" bg-gray-100   px-4 flex-row items-center rounded-md  mx-3 ">
            <UserCircleIcon color={colors.dark} />
            <AppTextInput
              placeholder="Enter Your Name"
              placeholderTextColor={colors.dark}
              maxLength={50}
              className="text-gray-500"
            />
          </View>

          <View className="bg-gray-100  px-4 flex-row items-center rounded-md  mx-3 ">
            <EnvelopeIcon color={colors.dark} />
            <AppTextInput
              placeholder="Enter Your Email"
              placeholderTextColor={colors.dark}
              maxLength={50}
              className="text-gray-500 "
            />
          </View>

          <View className="bg-gray-100 h-60  px-1  rounded-md  mx-3 ">
            <AppTextInput
              placeholder="Type your here ....."
              placeholderTextColor={colors.dark}
              maxLength={50}
              className="text-gray-500 "
            />
          </View>

          <View className=" mt-7 mx-3">
            <TouchableOpacity className="flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md ">
              <Text className="text-white uppercase text-lg">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Bottombar navigation={navigation} borrow={true} />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Bottombar from '../components/Bottombar';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../config/colors';
import {AtSymbolIcon, UserCircleIcon} from 'react-native-heroicons/outline';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="bg-white   h-full ">
        <View className=" items-center  pt-4">
          <Text className="text-black    font-bold text-[24px]   ">
            {' '}
            Contact
          </Text>

          <Text className=" text-[16px]  mx-10  font-serif mb-2 font-semibold">
            Feel free to get in touch with us via Contact from below.
            <Text>
              {' '}
              Our representatives will respond you as soon as possible
            </Text>
          </Text>
        </View>
        <View className="flex-1 mt-9 space-y-4">
          <View className="border bg-[#0d1c64]   px-4 flex-row items-center rounded-md  mx-3 ">
            <UserCircleIcon color={colors.white} />
            <AppTextInput
              keyboardType="text"
              placeholder="Enter Your Name"
              placeholderTextColor={colors.white}
              maxLength={50}
              className="text-white w-full"
            />
          </View>
          <View className="border bg-[#0d1c64]   px-4 flex-row items-center rounded-md  mx-3 ">
            <AtSymbolIcon color={colors.white} />
            <AppTextInput
              keyboardType="text"
              placeholder="Enter Your Email"
              placeholderTextColor={colors.white}
              maxLength={50}
              className="text-white "
            />
          </View>
          <View className="border bg-[#0d1c64]  h-60  px-1  rounded-md  mx-3 ">
            <AppTextInput
              keyboardType="text"
              placeholder="Message....."
              placeholderTextColor={colors.white}
              maxLength={50}
              className="text-white "
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

export default SettingScreen;

import {View, Text} from 'react-native';
import React from 'react';
import {
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  HomeModernIcon,
} from 'react-native-heroicons/outline';

const Bottombar = () => {
  return (
    <View className="border w-full h-[55px]  pb-1 px-4 z-99 flex-row space-x-14 items-center mt-4 bg-[#435aa6]">
      <View className="items-center">
        <HomeIcon size={24} color="white" />

        <Text className="text-white">Home</Text>
      </View>
      <View className="items-center">
        <ChatBubbleBottomCenterIcon size={24} color="white" />
        <Text className="text-white">Message</Text>
      </View>
      <View className="items-center">
        <CurrencyDollarIcon size={24} color="white" />
        <Text className="text-white">pay</Text>
      </View>
      <View className="items-center">
        <Cog6ToothIcon size={24} color="white" />
        <Text className="text-white"> Settings</Text>
      </View>
    </View>
  );
};

export default Bottombar;

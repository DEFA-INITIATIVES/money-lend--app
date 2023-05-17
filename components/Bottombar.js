import {View, Text} from 'react-native';
import React from 'react';
import {
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  HomeModernIcon,
} from 'react-native-heroicons/outline';

const Bottombar = ({borrow, navigation}) => {
  return (
    <View
      className={`${
        borrow ? '' : 'border border-[#0d1c64]'
      } w-full h-[55px]  pb-1 px-4 z-99 flex-row space-x-14 items-center  bg-[#0d1c64]`}>
      <View className="items-center">
        <HomeIcon
          size={24}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />

        <Text className="text-white">Home</Text>
      </View>
      <View className="items-center">
        <ChatBubbleBottomCenterIcon
          size={24}
          color="white"
          onPress={() => navigation.navigate('Message')}
        />
        <Text className="text-white">Message</Text>
      </View>
      <View className="items-center">
        <CurrencyDollarIcon
          size={24}
          color="white"
          onPress={() => navigation.navigate('Pay')}
        />
        <Text className="text-white">pay</Text>
      </View>
      <View className="items-center">
        <Cog6ToothIcon
          size={24}
          color="white"
          onPress={() => navigation.navigate('Setting')}
        />
        <Text className="text-white"> Settings</Text>
      </View>
    </View>
  );
};

export default Bottombar;

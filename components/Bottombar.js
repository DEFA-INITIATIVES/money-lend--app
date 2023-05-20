import {View, Text, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Welcome')}>
        <HomeIcon size={24} color="white" />

        <Text className="text-white">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Message')}>
        <ChatBubbleBottomCenterIcon
          size={24}
          color="white"
          onPress={() => navigation.navigate('Notification')}
        />
        <Text className="text-white">Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Pay')}>
        <CurrencyDollarIcon size={24} color="white" />
        <Text className="text-white">pay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.openDrawer()}>
        <Cog6ToothIcon size={24} color="white" />
        <Text className="text-white"> Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottombar;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  CurrencyDollarIcon,
  EnvelopeOpenIcon,
  HomeIcon,
  MegaphoneIcon,
} from 'react-native-heroicons/outline';

const Bottombar = ({borrow, navigation}) => {
  return (
    <View
      className={`${
        borrow ? '' : 'border border-[#0d1c64]'
      } w-full h-[55px]  p-2 flex-row items-center justify-around space-x-2  bg-[#0d1c64]`}>
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Home')}>
        <HomeIcon size={24} color="white" />

        <Text className="text-white">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Notifications')}>
        <MegaphoneIcon size={24} color="white" />
        <Text className="text-white">Notifications</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Pay')}>
        <CurrencyDollarIcon size={24} color="white" />
        <Text className="text-white">pay</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Contact')}>
        <EnvelopeOpenIcon size={24} color="white" />
        <Text className="text-white"> Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottombar;

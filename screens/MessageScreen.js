import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {EnvelopeIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Bottombar from '../components/Bottombar';

const MessageScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="bg-[#435aa6] flex items-center justify-center  h-full ">
        <View className="flex-1 items-center justify-center">
          <Text className="text-white"> Messages </Text>
        </View>
        <Bottombar navigation={navigation} borrow={true} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

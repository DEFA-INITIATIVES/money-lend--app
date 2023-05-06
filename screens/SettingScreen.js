import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Bottombar from '../components/Bottombar';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="bg-[#435aa6] flex items-center justify-center  h-full ">
        <View className="flex-1 items-center justify-center">
          <Text className="text-white"> Settings </Text>
        </View>
        <Bottombar navigation={navigation} borrow={true} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

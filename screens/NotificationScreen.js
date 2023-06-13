import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ArrowLeftIcon, Bars3Icon} from 'react-native-heroicons/outline';
import NotificationList from '../components/NatificationList';
import Bottombar from '../components/Bottombar';

const MessageScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="">
        <View className=" px-3 flex-row  bg-[#0d1c64] w-full h-[100px] space-x-[70px] items-center">
          <ArrowLeftIcon
            color="white"
            className="mr-10"
            onPress={() => navigation.navigate('Home')}
          />

          <Text className="text-base text-white font-bold   font-sans text-[20px] flex-1 ">
            Notifications
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View className="">
              <Bars3Icon color="white" size={27} className=" ml-10" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1">
        <View className="flex-1 pb-10">
          <NotificationList />
        </View>
      </View>

      <View className="">
        <Bottombar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ArrowLeftIcon, Bars3Icon} from 'react-native-heroicons/outline';
import NotificationList from '../components/NatificationList';
import Bottombar from '../components/Bottombar';
import {getMessages} from '../services/dataService';
import {AuthContext} from '../context/AuthContext';
import {BellAlertIcon} from 'react-native-heroicons/solid';

const MessageScreen = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);

  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    const parameters = {
      _id: userInfo._id,
    };
    try {
      const {data} = await getMessages(parameters);
      console.log('Notifications', data);
      setNotifications(data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        Alert.alert(ex.response.data);
      }
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

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
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View className="">
              <Bars3Icon color="white" size={27} className=" ml-10" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1">
        <View className="flex-1 pb-10">
          {notifications.length > 0 ? (
            <NotificationList notifications={notifications} />
          ) : (
            <>
              <View className="w-full h-full flex items-center justify-center space-y-3">
                <BellAlertIcon color="gray" size={32} />
                <Text className="Text-base font-semibold ">
                  {' '}
                  No Notifications currently Available..{' '}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>

      <View className="">
        <Bottombar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

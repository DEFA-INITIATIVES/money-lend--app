import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import Bottombar from '../components/Bottombar';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

const ReadRequestMessages = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  console.log('my messages data', item.message);

  return (
    <SafeAreaView className="flex-1">
      <View className="  flex-row space-x-5 border-[0.5px] pb-5 w-full pt-4 px-4 bg-white">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color="#0d1c64" size={25} />
        </TouchableOpacity>
        <View className="w-10 h-10 rounded-full bg-gray-700">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            className=" w-10 h-10 rounded-full"
          />
        </View>

        <Text className="text-[#0d1c64] font-extrabold text-[15px] flex-1">
          Message From SupaCash
        </Text>
        <TouchableOpacity className="">
          <EllipsisVerticalIcon color="#0d1c64" size={30} />
        </TouchableOpacity>
      </View>

      <View className="flex-1">
        <View style={{flex: 1}}>
          <View className="relative p-4 py-8 bg-gray-200 mx-3 my-5 rounded-lg">
            <Text>{item.message} </Text>
            <Text className="absolute bottom-2 right-2">
              {' '}
              {moment(item.createdAt).format('MMMM Do YYYY, h:mm: a')}
            </Text>
          </View>
        </View>
      </View>

      <Bottombar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ReadRequestMessages;

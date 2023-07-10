import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import Bottombar from '../components/Bottombar';

const ReadRequestMessages = ({navigation}) => {
  return (
    <SafeAreaView>
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
      <View className="items-center h-full w-full">
        <ScrollView>
          <View className=" rounded-[6.45px] w-72 h-32 bg-[#0d1c64] items-center  pt-3 m-54 ">
            <Text className="text-white  font-semibold">
              hello you Request was successfull and received 2000 UGX
            </Text>

            <Text className="text-white absolute bottom-1 right-1   font-medium">
              2 hours ago{' '}
            </Text>
          </View>
          <View className=" rounded-[6.45px] w-72 h-32 bg-[#0d1c64] items-center  pt-3 m-4 ">
            <Text className="text-white  font-semibold">
              hello you Request was successfull and received 2000 UGX
            </Text>

            <Text className="text-white absolute bottom-1 right-1   font-medium">
              2 hours ago{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
      {/* <Bottombar navigation={navigation} borrow={true} /> */}
    </SafeAreaView>
  );
};

export default ReadRequestMessages;

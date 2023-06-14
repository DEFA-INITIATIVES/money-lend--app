import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  HeartIcon,
  PencilIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Bottombar from '../components/Bottombar';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = ({navigation}) => {
  const {logout, userInfo} = useContext(AuthContext);
  return (
    <SafeAreaView className="bg-[#f5f5f5]  h-full w-full">
      <Text className=" text-black  font-semibold m-2 text-[25px]  font-sans pl-3">
        Profile
      </Text>
      <View className=" bg-[#0d1c64] w-82 rounded-[5px] h-20 m-2">
        <View className="flex-row items-center justify-center m-2 px-2">
          <View className="w-14 h-14  rounded-full  bg-gray-400">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              className="w-full h-full  rounded-full object-cover"
            />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-white  font-bold text-[17px]">
              {userInfo.name}
            </Text>
            <Text className="text-white  font-bold text-[13px]">
              {userInfo.email}
            </Text>
          </View>
          <PencilIcon size={20} color="white" className="" />
        </View>
      </View>

      <View className="w-82   m-2 h-80 shadow-3xlg shadow-white bg-white rounded-[5px]">
        <View className="flex-row items-center  m-5">
          <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
            <UserIcon color="#0d1c64" />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-black font-bold ">My Account</Text>
            <Text>Make changes to your account</Text>
          </View>
          {/* <ArrowRightOnRectangleIcon color="gray" /> */}
          <ArrowRightCircleIcon color="gray" />
        </View>
        <View className="flex-row items-center  m-5">
          <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
            <UserIcon color="#0d1c64" />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-black font-bold ">Save Beneficiary </Text>
            <Text>Make changes to your account</Text>
          </View>
          {/* <ArrowRightOnRectangleIcon color="gray" /> */}
          <ArrowRightCircleIcon color="gray" />
        </View>
        <TouchableOpacity
          className="flex-row items-center  m-5"
          onPress={() => logout()}>
          <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
            <ArrowRightOnRectangleIcon color="#0d1c64" />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-black font-bold ">Logout</Text>
            <Text>Secure account for safety</Text>
          </View>

          <ArrowRightCircleIcon color="gray" />
        </TouchableOpacity>
      </View>
      <Text className="text-black font-bold text-[15px] pl-3"> More</Text>

      <View className="w-82   m-2 h-40 flex-1 shadow-3xlg shadow-white bg-white rounded-[5px]">
        <View className="flex-row items-center  m-5">
          <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
            <BellAlertIcon color="#0d1c64" />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-black font-bold ">Help & Support</Text>
            <Text>Make changes to your account</Text>
          </View>
          {/* <ArrowRightOnRectangleIcon color="gray" /> */}
          <ArrowRightCircleIcon color="gray" />
        </View>
        <View className="flex-row items-center  m-5">
          <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
            <HeartIcon color="#0d1c64" />
          </View>
          <View className="flex-1 ml-5">
            <Text className="text-black font-bold ">About App</Text>
            <Text>Make changes to your account</Text>
          </View>
          {/* <ArrowRightOnRectangleIcon color="gray" /> */}
          <ArrowRightCircleIcon color="gray" />
        </View>
      </View>

      <Bottombar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

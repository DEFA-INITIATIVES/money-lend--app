import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  AdjustmentsVerticalIcon,
  ArrowLeftIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from 'react-native-heroicons/outline';
import Bottombar from '../components/Bottombar';

const MessageScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className=" ">
        <View className=" px-3 flex-row  bg-[#0d1c64] w-full h-[100px] space-x-[70px] items-center">
          <ArrowLeftIcon color="white" className="mr-10" />
          <Text className="text-base text-white font-bold   font-sans text-[20px] flex-1 ">
            {' '}
            Notifications
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View className="">
              <Bars3Icon color="white" size={27} className=" ml-10" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full  bg-blue-100 h-10 items-center flex-row space-x-14">
          <Text className="text-black font-bold text-[20px] ml-4">
            {' '}
            Current
          </Text>
          <Text className="text-black font-bold text-[20px]"> Previous</Text>
        </View>
        <View className="border w-[77px] ml-4"></View>
        <ScrollView className="h-[566px]  ">
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                you received 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                you received 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Paid
              </Text>
              <Text className="ml-3 text-gray-700">
                you have been deducted 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                your new amount is 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Paid
              </Text>
              <Text className="ml-3 text-gray-700">
                you have been deducted 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 5 days ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Paid
              </Text>
              <Text className="ml-3 text-gray-700">you Paid 200000 Ugshs</Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                you received 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                you received 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
          <View className="mt-4 px-4 flex-row items-center ">
            <View className="rounded-full w-[50px] h-[50px] bg-gray-600"></View>

            <View className="flex-1">
              <Text className="text-[20px] text-black font-black  ml-3">
                Borrowed
              </Text>
              <Text className="ml-3 text-gray-700">
                you received 200000 Ugshs
              </Text>
              <Text className="text-gray-600 ml-3"> 2m ago</Text>
            </View>
            <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] items-center">
              <Text className="text-white text-[13px]"> 2</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Bottombar navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageScreen;

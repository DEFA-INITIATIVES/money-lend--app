import {View, Text, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentCheckIcon,
  GifIcon,
  GiftIcon,
  HomeIcon,
  HomeModernIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
} from 'react-native-heroicons/outline';

const BorrowScreen = () => {
  return (
    <SafeAreaView className="bg-[#435aa6] h-full p-5">
      <View className="bg-white w-full h-full  rounded-md px-3">
       
        <Text className="text-base font-semibold text-gray-700 px-4 mt-5 ">
          Select Your loan amount
        </Text>

        <Text className="text-xs font-semibold text-gray-500 px-4 mt-3">
          You can loan up to Ugx 80000
        </Text>

        <View className=" mt-5 p-5 flex-row items-center justify-around bg-white border-b-2  border-gray-400 rounded-md">

            <View className="flex items-center justify-center bg-gray-200 p-3 rounded-md">
                <Text className="">-</Text>
            </View>

            <Text className="text-2xl text-[#435aa6] font-semibold">12,000</Text>

            <View className="flex items-center justify-center bg-gray-200 p-3 rounded-md">
                <Text className="">+</Text>
            </View>

        </View>

        <Text className="text-base font-semibold text-gray-700 px-4 mt-5">
           Life of loan
        </Text>

        <View className='flex-row items-center space-x-3 space-y-2 flex-wrap p-1 mt-5'>
            <Text className="text-white bg-blue-600 border border-blue-500 py-1 px-2 rounded-full text-center">6 months </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">12 months </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center"> 18 months </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center"> 24 months </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center"> other </Text>
        </View>

        <View className="flex-row items-center justify-end  px-3 mt-5 w-full bg-white">
             <Text>Payment plan </Text>
        </View>
        
      </View>

    </SafeAreaView>
  );
};

export default BorrowScreen;

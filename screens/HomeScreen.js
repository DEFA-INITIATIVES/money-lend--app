import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
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

const HomeScreen = () => {
  return (
    <View className="bg-white">
      <View className="bg-[#435aa6] w-full h-[250px]">
        <Text className="text-[30px] font-extrabold text-white px-4 mt-5 ">
          Service
        </Text>
        <Text className="text-white  font-semibold  text-[14px] px-4">
          {' '}
          Not the same finacial life
        </Text>
        <Text className="text-white px-4 mt-7 text-[14px]">
          Available Credit
        </Text>
        <View className="flex-row">
          <Text className="text-white px-4  text-[30px] font-extrabold flex-1">
            2000,000.00
          </Text>
          <View className=" bg-white w-[130px] h-[45px]  rounded-md mr-3 items-center py-1">
            <Text className="font-bold text-[25px] text-[#515a71]"> Loan</Text>
          </View>
        </View>
        <View className="flex-row w-full items-center p-3 justify-center space-x-2">
          <View className="bg-[#576cb1] w-[80px] h-[30px] rounded-md items-center justify-center flex-row">
            <ClipboardDocumentCheckIcon color="white" size={12} />
            <Text className="text-white py-1 ml-2 ">Step</Text>
          </View>
          <View className="bg-[#576cb1]  h-[30px] rounded-md items-center justify-center px-1 flex-row">
            <Square3Stack3DIcon color="white" size={12} />
            <Text className="text-white py-1 ml-2 ">Second out</Text>
          </View>
          <View className="bg-[#576cb1]  h-[30px] rounded-md items-center flex-row px-2">
            <RectangleStackIcon color="white" size={12} />
            <Text className="text-white py-1 ml-2  ">Extreme Speed</Text>
          </View>
        </View>
      </View>

      <Text className="mt-2 text-black font-extrabold text-[25px] px-5">
        Activity
      </Text>
      
      <View className="w-full px-3">
        <View className="bg-[#eaf1fb] w-full h-[70px] mt-4  mr-3 rounded-md">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="mt-3 text-[20px] font-bold text-[#576CB1] px-3">
                New Product launch
              </Text>
              <Text className="px-3 tex-[#e3eafd]">
                {' '}
                0 down payment enough new Machine
              </Text>
            </View>
            <View className="mr-3 mt-3">
              <GiftIcon color="blue" size={45} />
            </View>
          </View>
        </View>
      </View>

      <Text className="mt-5 text-[30px] font-bold text-black px-4">More</Text>

      <ScrollView className="w-full px-2 pb-10">
        <View className=" shadow-lg  h-[140px] mt-5 ml-3  mr-3  rounded-md bg-white ">
          <View className="flex-row items-center mb-4 p-2">
            <View className="rounded-full w-5 h-5 bg-[#8db0ff] mr-3"></View>
            <Text className="text-[20px] font-semibold text-black ">
              {' '}
              Gravec
            </Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 1 Minute</Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 7-14 days</Text>
          </View>
          <View className="w-full border-b border-gray-300"/>
          <View className="flex-row space-x-10 mt-4 px-4">
            <Text className="text-gray-400">Available Credit</Text>
            <Text className="text-gray-400">Daily interest </Text>
          </View>

          <View className=" px-4 flex-row space-x-10">
            <Text className="text-[#576CB1] font-bold text-[20px]">
              2500-5000
            </Text>
            <Text className="mr-1 font-bold text-[20px] text-gray-500">
              0.02 %
            </Text>
            <TouchableOpacity className="bg-[#576CB1] h-10  rounded-md p-2 w-14 items-center mr-2 ">
              <Text className="text-white text-sm">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className=" shadow-lg  h-[140px] mt-5 ml-3  mr-3  rounded-md bg-white ">
          <View className="flex-row items-center mb-4 p-2">
            <View className="rounded-full w-5 h-5 bg-[#8db0ff] mr-3"></View>
            <Text className="text-[20px] font-semibold text-black ">
              {' '}
              Gravec
            </Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 1 Minute</Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 7-14 days</Text>
          </View>

          <View className="w-full border-b border-gray-300"></View>
          <View className="flex-row space-x-10 mt-4 px-4">
            <Text className="text-gray-400">Available Credit</Text>
            <Text className="text-gray-400">Daily interest </Text>
          </View>

          <View className=" px-4 flex-row space-x-10">
            <Text className="text-[#576CB1] font-bold text-[20px]">
              2500-5000
            </Text>
            <Text className="mr-1 font-bold text-[20px] text-gray-500">
              0.02 %
            </Text>
            <TouchableOpacity className="bg-[#576CB1] h-10  rounded-md p-2 w-14 items-center mr-2 ">
              <Text className="text-white text-sm">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className=" shadow-lg  h-[140px] mt-5 ml-3  mr-3  rounded-md bg-white ">
          <View className="flex-row items-center mb-4 p-2">
            <View className="rounded-full w-5 h-5 bg-[#8db0ff] mr-3"></View>
            <Text className="text-[20px] font-semibold text-black ">
              {' '}
              Gravec
            </Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 1 Minute</Text>
            <Text className="ml-3 bg-gray-300 rounded-md p-1"> 7-14 days</Text>
          </View>

          <View className="w-full border-b border-gray-300"></View>
          <View className="flex-row space-x-10 mt-4 px-4">
            <Text className="text-gray-400">Available Credit</Text>
            <Text className="text-gray-400">Daily interest </Text>
          </View>

          <View className=" px-4 flex-row space-x-10">
            <Text className="text-[#576CB1] font-bold text-[20px]">
              2500-5000
            </Text>
            <Text className="mr-1 font-bold text-[20px] text-gray-500">
              0.02 %
            </Text>
            <TouchableOpacity className="bg-[#576CB1] h-10  rounded-md p-2 w-14 items-center mr-2 ">
              <Text className="text-white text-sm">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      
      <View className="border w-full h-[55px] absolute bottom-0  px-4  flex-row space-x-14 items-center ">
        <View>
          <HomeIcon size={24} color="gray" />
          <Text>Home</Text>
        </View>
        <View>
          <ChatBubbleBottomCenterIcon size={24} color="gray" />
          <Text>Message</Text>
        </View>
        <View>
          <HomeIcon size={24} color="gray" />
          <Text>pay</Text>
        </View>
        <View>
          <HomeModernIcon size={24} color="gray" />
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

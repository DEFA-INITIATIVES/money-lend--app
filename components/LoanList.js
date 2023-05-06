import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {loandata} from '../utlis/loandata';
import {useNavigation} from '@react-navigation/native';

const Item = ({
  title,
  duration,
  credit,
  percentage,
  colorbg,
  getnavigation,
}) => (
  <View className="w-full px-2 ">
    <View className=" shadow-lg  h-[140px] mt-2 ml-3  mr-3  rounded-md bg-white ">
      <View className="flex-row items-center  p-2">
        <View className={`rounded-full w-5 h-5 ${colorbg} mr-3`}></View>
        <Text className="text-[20px] font-semibold text-black "> {title}</Text>
        <Text className="ml-3 bg-gray-300 rounded-md p-1"> 1 Minute</Text>
        <Text className="ml-3 bg-gray-300 rounded-md p-1"> {duration}</Text>
      </View>
      <View className="w-full border-b border-gray-300" />
      <View className="flex-row space-x-10 mt-2 px-4">
        <Text className="text-gray-400">Available Credit</Text>
        <Text className="text-gray-400">Daily interest </Text>
      </View>

      <View className=" px-4 flex-row space-x-10">
        <Text className="text-[#576CB1] font-bold text-[20px]">{credit}</Text>
        <Text className="mr-1 font-bold text-[20px] text-gray-500">
          {percentage}
        </Text>
        <TouchableOpacity
          className="bg-[#576CB1] h-10  rounded-md p-2 w-14 items-center mr-2 "
          onPress={getnavigation}>
          <Text className="text-white text-sm">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const LoanList = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <FlatList
        data={loandata}
        renderItem={({item}) => (
          <Item
            title={item.title}
            duration={item.duration}
            credit={item.credit}
            percentage={item.percentage}
            colorbg={item.colorbg}
            getnavigation={() => navigation.navigate('Borrow')}
          />
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default LoanList;

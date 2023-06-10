import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {loandata} from '../utlis/loandata';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../config';
import moment from 'moment';
import {AuthContext} from '../context/AuthContext';
import {err} from 'react-native-svg/lib/typescript/xml';
import {ActivityIndicator} from 'react-native-paper';

const Item = ({
  createdAt,
  dailyInterest,
  maximumCredit,
  maximumValidation,
  minimumCredit,
  minimumValidation,
  type,
  getnavigation,
}) => (
  <View className="w-full px-2 ">
    <View className=" shadow-lg  h-[140px] mt-2 ml-3  mr-3  rounded-md bg-white ">
      <View className="flex-row items-center  p-2">
        <View className={`rounded-full w-5 bg-yellow-950 mr-3`}></View>
        <Text className="text-[20px] font-semibold text-black "> {type}</Text>
        <Text className="ml-3 bg-gray-300 rounded-md p-1">
          {' '}
          {moment(createdAt).startOf('hour').fromNow()}
        </Text>
        <Text className="ml-3 bg-gray-300 rounded-md p-1">
          {minimumValidation} -{maximumValidation} days
        </Text>
      </View>
      <View className="w-full border-b border-gray-300" />
      <View className="flex-row space-x-10 mt-2 px-4">
        <Text className="text-gray-400">Available Credit</Text>
        <Text className="text-gray-400">Daily interest </Text>
      </View>

      <View className=" px-4 flex-row space-x-10">
        <Text className="text-[#0d1c64] font-bold text-[20px]">
          {minimumCredit}- {maximumCredit}
        </Text>
        <Text className="mr-1 font-bold text-[20px] text-gray-500">
          {dailyInterest}%
        </Text>
        <TouchableOpacity
          className="bg-[#0d1c64] h-10  rounded-md p-2 w-14 items-center mr-2 "
          onPress={getnavigation}>
          <Text className="text-white text-sm">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const LoanList = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/loans`)
      .then(res => {
        const data = res.data;

        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [2000]);

  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Item
          createdAt={item.createdAt}
          dailyInterest={item.dailyInterest}
          maximumCredit={item.maximumCredit}
          maximumValidation={item.maximumValidation}
          minimumCredit={item.minimumCredit}
          minimumValidation={item.minimumValidation}
          type={item.type}
          getnavigation={() => navigation.navigate('Borrow', {item})}
        />
      )}
      keyExtractor={item => item._id}
    />
  );
};

export default LoanList;

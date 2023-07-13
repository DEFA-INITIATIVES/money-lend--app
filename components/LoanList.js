import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../config';
import moment from 'moment';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

const Item = ({
  createdAt,
  dailyInterest,
  maximumCredit,
  maximumValidation,
  minimumCredit,
  minimumValidation,
  type,
  userInfo,
  getnavigation,
}) => (
  <View>
    <View className="w-full px-2 ">
      <View className=" shadow-lg  h-[140px] mt-2  mr-3  rounded-md bg-white ">
        <View className="flex-row items-center  p-2">
          <View className={`rounded-full w-5 bg-yellow-950 mr-3`}></View>
          <Text className="text-[20px] font-semibold text-black "> {type}</Text>
          <Text className="ml-3 bg-gray-300 rounded-md p-1">
            {moment(createdAt).startOf('hour').fromNow()}
          </Text>
          <Text className="ml-3 bg-gray-300 rounded-md p-1">
            {minimumValidation} -{maximumValidation} days
          </Text>

          {!userInfo?.loanDetails[0]?.dueAmount && (
            <Text
              onPress={getnavigation}
              className="text-white  bg-[#0d1c64]  w-14 rounded justify-center items-center p-2 ml-3">
              Apply
            </Text>
          )}
        </View>

        <View className="w-full border-b border-gray-300" />

        <Text>
          {userInfo?.loanDetails[0]?.dueAmount && (
            <Text className="text-sm font-semibold text-red-700  p-2 ml-3">
              clear pending Loan Balance to re apply.
            </Text>
          )}
        </Text>
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
        </View>
      </View>
    </View>
  </View>
);

const LoanList = () => {
  const {userInfo} = useContext(AuthContext);
  const [applybtn, setApplybtn] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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
        setRefreshing(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [2000]);
  const handleRefresh = () => {
    setRefreshing(true);
    axios
      .get(`${BASE_URL}/api/loans`)
      .then(res => {
        const data = res.data;

        setData(data);
        setLoading(false);
        setRefreshing(false);
      })
      .catch(error => {
        setLoading(false);
      });
  };

  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <FlatList
      data={userInfo?.creditScore === 1 ? data?.slice(0, 1) : data?.slice(0, 2)}
      renderItem={({item}) => (
        <Item
          createdAt={item.createdAt}
          dailyInterest={item.dailyInterest}
          maximumCredit={item.maximumCredit?.toLocaleString()}
          maximumValidation={item.maximumValidation}
          minimumCredit={item.minimumCredit?.toLocaleString()}
          minimumValidation={item.minimumValidation}
          type={item.type}
          userInfo={userInfo}
          applybtn={applybtn}
          setApplybtn={setApplybtn}
          getnavigation={() => navigation.navigate('Borrow', {item})}
        />
      )}
      keyExtractor={item => item._id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default LoanList;

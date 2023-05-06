import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
  BanknotesIcon,
  navigation,
} from 'react-native-heroicons/outline';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Bottombar from '../components/Bottombar';

const BorrowScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-[#435aa6] h-full">
      <ScrollView className="p-5">
        <View className="w-full flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            color={colors.white}
            size={20}
            onPress={() => navigation.goBack()}
          />

          <Text className="text-white text-lg font-medium"> Loan apply </Text>
          <Text className="text-white text-sm"> Details</Text>
        </View>

        <View className="bg-white w-full h-auto rounded-md px-3 mt-5">
          <Text className="text-base font-semibold text-gray-700 px-4 mt-2 ">
            Select Your loan amount
          </Text>

          <Text className="text-xs font-semibold text-gray-500 px-4 mt-1">
            You can loan up to Ugx 80000
          </Text>

          <View className=" mt-2 p-5 flex-row items-center justify-around bg-white border-b-2  border-gray-400 rounded-md">
            <View className="flex items-center justify-center bg-gray-200 p-3 rounded-md">
              <MinusIcon color={colors.medium} size={14} />
            </View>

            <Text className="text-2xl text-[#435aa6] font-semibold">
              12,000
            </Text>

            <View className="flex items-center justify-center bg-gray-200 p-3 rounded-md">
              <PlusIcon color={colors.medium} size={14} />
            </View>
          </View>

          <Text className="text-base font-semibold text-gray-700 px-4 mt-2">
            Life of loan
          </Text>

          <View className="flex-row items-center space-x-3 space-y-2 flex-wrap p-1 mt-2">
            <Text className="text-white bg-blue-600 border border-blue-500 py-1 px-2 rounded-full text-center">
              6 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              12 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              18 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              24 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              other{' '}
            </Text>
          </View>

          <View className="flex-row items-center justify-end space-x-2 px-3 mt-2 w-full bg-white rounded-md">
            <Text>Payment plan </Text>
            <ChevronUpIcon color={colors.medium} size={14} />
          </View>

          <View className="w-full bg-gray-50 rounded-sm p-3 mt-1">
            <View className="flex-row items-center justify-start space-x-2 px-3 mt-2 w-full">
              <BanknotesIcon color={colors.medium} size={14} />
              <Text> Payment Details</Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text>Down Payment</Text>
              <Text className="text-blue-600 font-medium">$ 800.00 </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text> Gross Interest</Text>
              <Text className="text-blue-600 font-medium">$ 2130.00 </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text>Due date</Text>
              <Text className="text-blue-600 font-medium"> 5th Month </Text>
            </View>
          </View>

          <View className="w-full px-3 my-2">
            <AppButton title="Apply" color="primary" />
          </View>
        </View>
      </ScrollView>
      <Bottombar borrow={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default BorrowScreen;

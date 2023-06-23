import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from 'react-native-heroicons/outline';
import AppTextInput from '../components/AppTextInput';
import {ArrowLeftIcon, Bars3Icon} from 'react-native-heroicons/outline';
import Bottombar from '../components/Bottombar';
import colors from '../config/colors';
import {AuthContext} from '../context/AuthContext';
import {useRoute} from '@react-navigation/native';

const BorrowDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const selectedLoan = route.params;
  const [loanAmount, setLoanAmount] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [reason, setReason] = useState('');

  const {logout, userInfo} = useContext(AuthContext);
  // console.log(item);
  return (
    <SafeAreaView className="flex-1">
      <View className="">
        <View className=" px-3 flex-row  bg-[#0d1c64] w-full h-[100px] space-x-[70px] items-center">
          <ArrowLeftIcon
            color="white"
            className="mr-10"
            onPress={() => navigation.goBack('Checkout')}
          />

          <Text className="text-base text-white font-bold   font-sans text-[20px] flex-1 ">
            Loan Details
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View className="">
              <Bars3Icon color="white" size={27} className=" ml-10" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1">
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View className="flex-1  space-y-3 pb-10">
            <View className="my-5 mx-6 flex items-center justify-center space-y-2">
              <Text className="text-lg font-semibold text-gray-700">
                Complete your Request to Get a Loan
              </Text>
              <Text className="text-sm text-gray-500 ">
                {' '}
                We use 2048-bit Encryption to keep your information Safe.
              </Text>
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                {' '}
                Your Email
              </Text>

              <Text className="ml-3 font-bold ">{userInfo.email}</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Amount requested
              </Text>

              <Text> {selectedLoan} UGX</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Primary phone
              </Text>

              <Text className="ml-3 font-bold">{userInfo.contact}</Text>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Mode of Payment
              </Text>

              <Picker
                selectedValue={reason}
                onValueChange={(itemValue, itemIndex) => setReason(itemValue)}>
                <Picker.Item label="Daily" value="option1" />
                <Picker.Item label="Monthly " value="option2" />
                <Picker.Item label="Fortnight" value="option3" />
              </Picker>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>
            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                {' '}
                Payment Date
              </Text>

              <View className="">
                <TextInput
                  placeholder="10/25/23"
                  maxLength={8}
                  placeholderTextColor={colors.dark}
                  value={selectedDate}
                  underlineColorAndroid="transparent"
                  onChangeText={data => setSelectedDate(data)}
                  className="w-full px-2 text-gray-600"
                />
              </View>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="w-full my-2 px-3">
              <TouchableOpacity className=" w-full flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md ">
                <Text className="text-white uppercase text-lg">Request </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className="">
        <Bottombar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default BorrowDetailsScreen;

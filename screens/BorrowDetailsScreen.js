import React, {useState} from 'react';
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

const BorrowDetailsScreen = ({navigation}) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [employment, setEmpolyment] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [residence, setResidence] = useState('');

  return (
    <SafeAreaView className="flex-1">
      <View className="">
        <View className=" px-3 flex-row  bg-[#0d1c64] w-full h-[100px] space-x-[70px] items-center">
          <ArrowLeftIcon
            color="white"
            className="mr-10"
            onPress={() => navigation.navigate('Checkout')}
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

              <AppTextInput
                placeholder="raziul.cse@gmail.com"
                Icon={EnvelopeIcon}
              />

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Loan amount up to
              </Text>

              <Picker
                selectedValue={loanAmount}
                onValueChange={(itemValue, itemIndex) =>
                  setLoanAmount(itemValue)
                }>
                <Picker.Item label="More than $5,500" value="option1" />
                <Picker.Item label="$4,500 - $5,500" value="option2" />
                <Picker.Item label="$2,501 - $3,500" value="option3" />
                <Picker.Item label="$1,501 - $2,500" value="option4" />
                <Picker.Item label="$Less than $1,500" value="option5" />
              </Picker>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                {' '}
                Primary phone
              </Text>

              <AppTextInput placeholder="+256755168391" Icon={PhoneIcon} />

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                What is your source of income?
              </Text>

              <Picker
                selectedValue={employment}
                onValueChange={(itemValue, itemIndex) =>
                  setEmpolyment(itemValue)
                }>
                <Picker.Item label="Self Employment" value="option1" />
                <Picker.Item label="Company Employment" value="option2" />
                <Picker.Item label="Casual worker" value="option3" />
                <Picker.Item label="Part-time Employment" value="option4" />
                <Picker.Item label="Full-time Employment" value="option5" />
              </Picker>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                What is the purpose of the Loan?
              </Text>

              <Picker
                selectedValue={reason}
                onValueChange={(itemValue, itemIndex) => setReason(itemValue)}>
                <Picker.Item label="Everyday Bills/Emergency" value="option1" />
                <Picker.Item label="Auto repair" value="option2" />
                <Picker.Item label="Auto purchase" value="option3" />
                <Picker.Item label="Moving" value="option4" />
                <Picker.Item label="Medical" value="option5" />
                <Picker.Item label="Business" value="option6" />
                <Picker.Item label="Taxes" value="option7" />
                <Picker.Item label="Rent or mortgage" value="option8" />
                <Picker.Item label="Major purchase" value="option9" />
                <Picker.Item label="other" value="option10" />
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

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3 font-semibold">
                {' '}
                Where do you reside ?
              </Text>

              <AppTextInput
                onChangeText={data => setResidence(data)}
                placeholder="kampala"
                Icon={MapPinIcon}
              />

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="w-full my-2 px-3">
              <TouchableOpacity className=" w-full flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md ">
                <Text className="text-white uppercase text-lg">
                  Request Payment
                </Text>
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

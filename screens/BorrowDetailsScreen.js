import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
  CheckBox,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  ArrowLeftIcon,
  Bars3Icon,
  ChartPieIcon,
  CheckCircleIcon,
} from 'react-native-heroicons/outline';
import Bottombar from '../components/Bottombar';
import colors from '../config/colors';
import {AuthContext} from '../context/AuthContext';
import {useRoute} from '@react-navigation/native';
import {requestLoan} from '../services/kycService';
import axios from 'axios';

const BorrowDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const loanData = route.params;
  const [loanAmount, setLoanAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [reason, setReason] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const {logout, userInfo} = useContext(AuthContext);

  console.log('date selected ', loanDuration);
  console.log('hello reason', reason);
  console.log('my date', selectedDate);
  const parameters = {
    contact: userInfo.whatsAppContact,
    amount: loanData.selectedLoan,
  };

  const handleRequestLoan = async () => {
    setIsLoading(true);
    try {
      const response = await axios
        .get(
          `https://www.socnetsolutions.com/projects/bulk/payments/socnet.php?api_key=732f4403d8abeaa9f7b100b679d0d83a&msisdn=${userInfo.whatsAppContact}&amount=${loanData.selectedLoan}&action=withdraw`,
        )
        .then(response => {
          setIsLoading(false);
          const data = response.data;
          console.log(data);
          Alert.alert(
            'Your request was ',
            data.status + 'please check  your balance ',
          );
        });

      // You can access the JSON object here and perform further operations

      // Update your React component's state or trigger any other necessary action with the JSON data
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the fetch request
    }
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
    setIsButtonActive(!isChecked);
  };

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
                Your Email
              </Text>

              <Text className="ml-3 font-bold ">{userInfo.email}</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Amount requested
              </Text>

              <Text> {loanData.selectedLoan} UGX</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                your source of income
              </Text>

              <Text className="ml-3 font-bold ">{userInfo.incomeSource}</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Residence
              </Text>

              <Text className="ml-3 font-bold ">{userInfo.location}</Text>
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>
            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Primary phone
              </Text>

              <Text className="ml-3 font-bold">{userInfo.whatsAppContact}</Text>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>
            <View className="flex flex-col space-y-1 w-full px-3 my-2">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                loan Life
              </Text>

              <Text className="ml-3 font-bold ">
                {loanData.lifeLoan} months
              </Text>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                Mode of Payment
              </Text>

              <Picker
                selectedValue={loanDuration}
                onValueChange={(itemValue, itemIndex) =>
                  setLoanDuration(itemValue)
                }>
                <Picker.Item label="Daily" value="1" />
                <Picker.Item label="Weekly" value="7" />
                <Picker.Item label="Fortnightly" value="14" />
                <Picker.Item label="Monthly" value="30" />
              </Picker>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>
            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">
                What is your reason for this loan?
              </Text>

              <TextInput
                placeholder="Reason"
                placeholderTextColor={colors.dark}
                value={reason}
                underlineColorAndroid="transparent"
                onChangeText={data => setReason(data)}
                className="w-full px-2 text-gray-600"
              />
              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <TouchableOpacity
              onPress={handleCheckboxToggle}
              className="flex-row  space-x-3 m-4 items-center">
              {isChecked ? (
                <CheckCircleIcon size={24} color="black" /> // Replace with your desired icon or custom styling
              ) : (
                <View className="rounded-full  w-5 h-5 border border-black " />
              )}
              <Text className="text-[#0d1c64] text-semibold text-base">
                Agree on terms and condions{' '}
              </Text>
            </TouchableOpacity>

            <View
              className={`w-full my-2 px-3 ${
                isButtonActive ? '' : 'opacity-30'
              } `}>
              <TouchableOpacity
                disabled={!isButtonActive}
                onPress={handleRequestLoan}
                className=" w-full flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md ">
                {isLoading ? (
                  <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
                    <Text className="mr-2">
                      <ActivityIndicator size="small" color="white" />
                    </Text>
                    <Text className=" text-white text-lg font-semibold">
                      Processing Loan...
                    </Text>
                  </Text>
                ) : (
                  <Text className="text-lg  uppercase  text-white">
                    Request Loan
                  </Text>
                )}
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

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
} from 'react-native';
import {
  ArrowLeftIcon,
  Bars3Icon,
  CheckCircleIcon,
} from 'react-native-heroicons/outline';
import Bottombar from '../components/Bottombar';
import colors from '../config/colors';
import {AuthContext} from '../context/AuthContext';
import {useRoute} from '@react-navigation/native';
import {requestLoan} from '../services/kycService';
import {AddLoan} from '../services/userService';
import {sendNotification} from '../services/dataService';
import TermsAndConditionModle from '../components/TermsAndConditionModle';

const BorrowDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const loanData = route.params;
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const {userInfo} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const parameters = {
    contact: userInfo.whatsAppContact,
    amount: loanData.selectedLoan,
  };

  const loanParameters = {
    _id: userInfo._id,
    principal: loanData.selectedLoan,
    interestRate: loanData.interestRate,
    loanLife: loanData.lifeLoan,
    modeOfPayment: loanData.modeOfPayment,
    reason: reason,
  };

  const notificationParameters = {
    title: 'Borrowed',
    message: `Congratulations! Your loan application has been approved. Loan Amount: ugx ${loanData.selectedLoan} and you have Signed the  attached agreement and conditions for the loan.`,
    userID: userInfo._id,
  };

  const handleRequestLoan = async () => {
    try {
      setIsLoading(true);

      const {data} = await requestLoan(parameters);

      console.log('KYC RESPONSE :', data);

      setIsLoading(false);

      setModalVisible(false);

      if (data.status === 'Successful') {
        console.log(
          '------------------------KYC REQUEST SUCCESSFUL-----------------------------------',
        );

        console.log(
          '--------Adding user information to the DataBase-----------',
        );
        // Save Loan information to the Database ......
        const {data: newUserData} = await AddLoan(loanParameters);

        console.log('***New User Data*****:', newUserData);

        console.log('--------Sending  notification to the user -----------');
        // Send Notification...
        const {data: notification} = await sendNotification(
          notificationParameters,
        );

        console.log('***NOTIFICATION****:', notification);
      }

      // Alert The user ...
      Alert.alert(
        'Your request was ',
        data.status +
          ' processed. Please check your Mobile Money Balance to confirm. ',
      );
    } catch (ex) {
      setIsLoading(false);

      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        Alert.alert(ex.response.data);
      }
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
                {loanData.lifeLoan === 1 ? 'day' : 'week'}
              </Text>

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

            <View className="px-3 mt-3">
              <TouchableOpacity
                onPress={openModal}
                className=" w-full flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md mx-auto">
                <Text className="flex flex-row items-center space-x-3 justify-center text-white uppercase ">
                  Proceed To Borrow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className="">
        <Bottombar navigation={navigation} />
      </View>
      <TermsAndConditionModle
        handleRequestLoan={handleRequestLoan}
        visible={modalVisible}
        onClose={closeModal}
        handleCheckboxToggle={handleCheckboxToggle}
        isChecked={isChecked}
        isButtonActive={isButtonActive}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

export default BorrowDetailsScreen;

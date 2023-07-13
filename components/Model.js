import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Modal from 'react-native-modal';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {makePayment} from '../services/kycService';
import {sendNotification} from '../services/dataService';
import {AuthContext} from '../context/AuthContext';
import {payLoan} from '../services/userService';

const ModalPopup = ({visible, onClose}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {userInfo} = useContext(AuthContext);

  const paymentParameters = {
    _id: userInfo._id,
    contact: phoneNumber,
    amount: amount,
  };

  const notificationParameters = {
    title: 'Paid',
    message: ` Thank you for making your payment of ugx ${amount}. We really appreciate your promptness and support. Your payment helps us continue providing quality services. If you have any questions, feel free to reach out.`,
    userID: userInfo._id,
  };

  const handlePayment = async () => {
    if (amount && phoneNumber) {
      try {
        setIsLoading(true);

        const {data} = await makePayment(paymentParameters);

        console.log('***Response Body***:', data);
        console.log('KYC PAY OUT RESPONSE:', data.status);

        if (data.status === 'Pending') {
          console.log('KYC DEPOSIT RESPONSE : ', data.status);
          try {
            // save paid loan credentials...
            const {data: newUserData} = await payLoan(paymentParameters);
            console.log('****Payment New user Info***:', newUserData);

            // Send Notification...
            const {data: notification} = await sendNotification(
              notificationParameters,
            );

            console.log('****Payment Notification***', notification);
          } catch (ex) {
            setIsLoading(false);

            if (ex.response && ex.response.status === 400) {
              console.log(ex.response.data);
              Alert.alert(ex.response.data);
            }
          }
        }
      } catch (ex) {
        setIsLoading(false);

        if (ex.response && ex.response.status === 400) {
          console.log(ex.response.data);
          Alert.alert(ex.response.data);
        }
      }

      Alert.alert(
        'Your Payment request was ',
        'Successfully made. Please Enter Pin To confirm Payments',
      );

      setIsLoading(false);
      onClose();
      setPhoneNumber('');
      setAmount('');
    } else {
      Alert.alert('Fill in contact and Amount to continue.');
    }
  };
  return (
    <Modal
      visible={visible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        marginBottom: 0,
        // backgroundColor: "#E66975",
      }}>
      <View className="w-82 h-80 bg-white shadow-lg  rounded-md  items-center">
        <TouchableOpacity onPress={onClose} className="m-3 absolute right-2">
          <XMarkIcon color="black" size={24} />
        </TouchableOpacity>
        <Text className="text-[19px] font-bold text-[#0d1c64] pt-6  ">
          Enter Phone Number
        </Text>
        <View className="border rounded-md w-72 h-14 m-3 border-[#0d1c64] px-3">
          <TextInput
            keyboardType="number-pad"
            placeholder="2567803189"
            maxLength={13}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>

        <Text className="text-[19px] font-bold text-[#0d1c64]  ">
          Enter Amount
        </Text>
        <View className="border rounded-md w-72 h-14 m-3 border-[#0d1c64] px-3">
          <TextInput
            keyboardType="number-pad"
            placeholder="e.g 1060UGX"
            maxLength={13}
            onChangeText={text => setAmount(text)}
            value={amount}
          />
        </View>

        <View className="w-80 my-2">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md "
            onPress={handlePayment}>
            {isLoading ? (
              <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
                <Text className="mr-2">
                  <ActivityIndicator size="small" color="white" />
                </Text>
                <Text className=" text-white text-lg font-semibold">
                  Processing Payment...
                </Text>
              </Text>
            ) : (
              <Text className="text-lg  uppercase  text-white">
                Make Payment
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopup;

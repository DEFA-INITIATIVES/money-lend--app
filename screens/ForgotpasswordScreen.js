import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  MegaphoneIcon,
} from 'react-native-heroicons/outline';

const ForgotpasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Handle password reset logic here
  };
  return (
    <SafeAreaView className="items-center relative bg-white w-full h-full">
      <View className="bg-[#0d1c64] h-[350px] w-full items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-5 top-5 flex-1">
          <ArrowLeftIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="text-white text-[25px] absolute top-[170px] font-semibold  pb-3">
          SupaCash
        </Text>
        <View></View>
        <Image
          source={require('../assets/img/logo.png')}
          className="w-[50px] mt-[100px] h-[50px] rounded-full "
        />

        <View className=" top-[116px] bg-white w-[360px] h-[360px] rounded-full items-center ">
          <Text className="text-gray-700  font-extrabold text-[17px] mt-[50px]">
            Forgot Password
          </Text>
        </View>
      </View>
      <View className="justify-center items-center">
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder="Enter your Newpassword"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder=" confirm your password "
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TouchableOpacity
          className={`bg-[#0d1c64] rounded-md p-3 w-full items-center  top-12
          ${email ? 'opacity-100' : 'opacity-50'}`}
          onPress={handleResetPassword}
          disabled={!email}>
          <Text className="text-white font-bold ">Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotpasswordScreen;

const styles = StyleSheet.create({});

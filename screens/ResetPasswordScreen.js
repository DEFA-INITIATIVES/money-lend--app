import {
  View,
  Text,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {resetPassword} from '../services/userService';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';

const ResetPasswordScreen = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleResetPassword = async () => {
    if (password === confirmPassword) {
      setIsLoading(true);
      const parameters = {
        resetPin: pin,
        newPassword: password,
      };
      try {
        const {data} = await resetPassword(parameters);
        Alert.alert(data);
        navigation.navigate('Login');
      } catch (ex) {
        setIsLoading(false);
        if (ex.response && ex.response.status === 400) {
          console.log(ex.response.data);
          Alert.alert(ex.response.data);
        }
      }
    } else {
      Alert.alert(' make sure  your passward match');
    }
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

      <View className="justify-center items-center  h-full w-full pt-5">
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder=" Enter your  Email"
          value={pin}
          onChangeText={setPin}
          autoCapitalize="none"
          keyBoardType="number-pad"
        />
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder=" Enter your  Email"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          keyBoardType="password"
        />
        <TextInput
          className="border border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[50px]"
          placeholder=" Enter your  Email"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          keyBoardType="confirmPassword"
        />
        <TouchableOpacity
          className={`border border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5  top-12
        ${pin ? 'opacity-100' : 'opacity-50'}`}
          onPress={handleResetPassword}
          disabled={!pin}>
          <Text className="text-white font-bold">
            {isLoading ? (
              <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
                <Text className="mr-2">
                  <ActivityIndicator size="small" color="white" />
                </Text>
                <Text className=" text-white text-base font-semibold">
                  Resetting Passward...
                </Text>
              </Text>
            ) : (
              <Text>Reset Password</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

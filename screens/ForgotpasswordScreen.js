import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {forgotPassword} from '../services/userService';

const ForgotpasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateResetPin = async () => {
    // Handle password reset logic here

    setIsLoading(true);
    try {
      const parameters = {
        email: email,
      };

      console.log(parameters);

      const {data} = await forgotPassword(parameters);
      Alert.alert(` ${data} check your  email `);
      navigation.navigate('Resetpassword');

      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);

      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        Alert.alert(ex.response.data);
      }
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

      <View className="flex items-center pt-20 h-full w-full">
        <TextInput
          className="border  border-[#0d1c64] rounded-[10px] p-3 w-80 mb-5 top-[80px]"
          placeholder=" Enter your  Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyBoardType="email-address"
          textContentType="emailAddress"
        />

        <TouchableOpacity
          className={`bg-[#0d1c64] rounded-md p-3 w-80 items-center  top-20
          ${email ? 'opacity-100' : 'opacity-50'}`}
          onPress={handleGenerateResetPin}
          disabled={!email}>
          <Text className="text-white font-bold">
            {isLoading ? (
              <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
                <Text className="mr-2">
                  <ActivityIndicator size="small" color="white" />
                </Text>
                <Text className=" text-white text-base font-semibold">
                  Generating reset token..
                </Text>
              </Text>
            ) : (
              <Text style={styles.text}>Generate reset Pin</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotpasswordScreen;

const styles = StyleSheet.create({});

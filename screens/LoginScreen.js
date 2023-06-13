import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {EnvelopeIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon} from 'react-native-heroicons/outline';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {AuthContext} from '../context/AuthContext';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginstr, setLoging] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const {login, userToken} = useContext(AuthContext);

  console.log(userToken);

  const handleLogin = values => {
    setIsLoading(true);

    // Logging in the user.....
    const {email, password} = values;
    login({email, password});

    setIsLoading(false);
  };

  return (
    <SafeAreaView>
      <View className=" bg-white  h-full items-center relative">
        <View className="bg-[#0d1c64] w-full h-[481.43px]  absolute top-[-127px] items-center">
          <Text className="text-white text-[25px] absolute top-[170px] font-semibold  pb-3">
            SupaCash
          </Text>
          <View></View>
          <Image
            source={require('../assets/img/logo.png')}
            className="w-[50px] mt-[220px] h-[50px] rounded-full "
          />
        </View>

        <View className=" top-[216px] bg-white w-[360px] h-[360px] rounded-full items-center ">
          <Text className="text-gray-700  font-extrabold text-[32px] mt-[50px]">
            Login
          </Text>
        </View>

        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={values => handleLogin(values)}
          validationSchema={validationSchema}>
          <View className="flex flex-col space-y-1 w-full px-3">
            <Text className="text-gray-700 text-[12px] ml-3">Email</Text>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="examplemail@gmail.com"
              Icon={EnvelopeIcon}
              name="email"
              keyBoardType="email-address"
              textContentType="emailAddress"
            />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-gray-700 text-[14px] flex-1 ml-3">
              Password
            </Text>
            <Text className="text-gray-700 text-[14px] mr-7">
              Forgot Password?
            </Text>
          </View>

          <View className="w-full mt-3 px-3">
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              Icon={LockClosedIcon}
              name="password"
              textContentType="password"
              secureTextEntry={true}
            />
          </View>

          <View className="w-full px-3 mt-3">
            <SubmitButton isLoading={isLoading} title="login" />
          </View>
        </AppForm>

        <View className="ml-3 mt-5 flex flex-row  space-x-3  ">
          <Text className="text-gray-700">Don’t have account?</Text>

          <TouchableOpacity
            className=" "
            onPress={() => navigation.navigate('Register')}>
            <Text className="text-gray">Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

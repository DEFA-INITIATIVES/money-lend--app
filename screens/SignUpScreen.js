import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {EnvelopeIcon, IdentificationIcon} from 'react-native-heroicons/outline';
import {
  LockClosedIcon,
  PhoneIcon,
  PencilSquareIcon,
} from 'react-native-heroicons/outline';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nin, setNin] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassward, setConfirmPassward] = useState('');

  const onRegister = () => {
    console.log('Register');
    if (
      !email.trim() ||
      !password.trim() ||
      !phoneNumber.trim() ||
      !name.trim() ||
      !nin ||
      !confirmPassward
    ) {
      console.log('Enter  all fields');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-[#000113] h-full items-center relative">
          <View className="bg-[#1E293B] w-full h-[481.43px]  absolute top-[-127px] items-center">
            <Text className="text-white text-[25px] absolute top-[170px] font-semibold  pb-3">
              Money Bank
            </Text>
            <View></View>
            <Image
              source={require('../assets/img/logo.png')}
              className="w-[50px] mt-[220px] h-[50px] rounded-full "
            />
          </View>

          <View className=" top-[216px] bg-[#000113] w-[360px] h-[360px] rounded-full items-center ">
            <Text className="text-white  font-extrabold text-[32px] mt-[50px]">
              Sign up
            </Text>
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3">
            <Text className=" text-[12px] ml-3 text-white">Name</Text>

            <AppTextInput
              placeholder="Muwonge Lawrence"
              labelValue={name}
              Icon={PencilSquareIcon}
              onChangeText={data => setName(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3 ">
            <Text className="text-white text-[12px] ml-3">Email</Text>

            <AppTextInput
              placeholder="raziul.cse@gmail.com"
              Icon={EnvelopeIcon}
              labelValue={email}
              onChangeText={data => setEmail(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">Contact</Text>

            <AppTextInput
              placeholder="+256755168391"
              Icon={PhoneIcon}
              labelValue={phoneNumber}
              onChangeText={data => setPhoneNumber(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">NIN</Text>

            <AppTextInput
              placeholder="CM9085556GGGHJKLJ"
              Icon={IdentificationIcon}
              labelValue={nin}
              onChangeText={data => setNin(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-white text-[14px] flex-1 ml-3">Password</Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 ">
            <AppTextInput
              secureTextEntry={true}
              labelValue={password}
              Icon={LockClosedIcon}
              placeholder="1234"
              onChangeText={data => setPassword(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-white text-[14px] flex-1 ml-3">
              Confirm Password
            </Text>
          </View>

          <View className="flex flex-col space-y-1 w-full px-3">
            <AppTextInput
              secureTextEntry={true}
              Icon={LockClosedIcon}
              labelValue={confirmPassward}
              placeholder="P@ss1234"
              onChangeText={data => setConfirmPassward(data)}
            />

            <View className="border-white  border-b w-full" />
          </View>

          <View className="w-full px-3 mt-5">
            <AppButton
              title="Sign UP"
              color="dark"
              onPress={() => navigation.navigate('Dasboard')}></AppButton>
          </View>

          <View className="ml-3 mt-5 flex flex-row  space-x-3 mb-5">
            <Text className="text-white">Already have account?</Text>
            <TouchableOpacity
              className=" "
              onPress={() => navigation.navigate('Login')}>
              <Text className="text-white">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

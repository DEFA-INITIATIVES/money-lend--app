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
import {AuthContext} from '../context/AuthContext';

const SignUpScreen = ({navigation}) => {
  const {register, userToken} = useContext(AuthContext);
  console.log(userToken);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [ninNumber, setninNumber] = useState('');
  const [contact, setContact] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-white h-full items-center relative">
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
              Sign up
            </Text>
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3">
            <Text className=" text-[12px] ml-3 text-gray-700">Name</Text>

            <AppTextInput
              placeholder="Muwonge Lawrence"
              labelValue={name}
              Icon={PencilSquareIcon}
              onChangeText={data => setName(data)}
            />

            <View className="border-[#0d1c64]  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full  mb-3 px-3 ">
            <Text className="text-white text-[12px] ml-3">Email</Text>

            <AppTextInput
              placeholder="raziul.cse@gmail.com"
              Icon={EnvelopeIcon}
              labelValue={email}
              onChangeText={data => setEmail(data)}
            />

            <View className="border-[#0d1c64]  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">Contact</Text>

            <AppTextInput
              placeholder="+256755168391"
              Icon={PhoneIcon}
              labelValue={contact}
              onChangeText={data => setContact(data)}
            />

            <View className="border-[#0d1c64]  border-b w-full" />
          </View>

          <View className="flex flex-col space-y-1 w-full px-3 mb-3">
            <Text className="text-white text-[12px] ml-3">NIN</Text>

            <AppTextInput
              placeholder="CM9085556GGGHJKLJ"
              Icon={IdentificationIcon}
              labelValue={ninNumber}
              onChangeText={data => setninNumber(data)}
            />

            <View className="border-[#0d1c64]  border-b w-full" />
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

            <View className="border-[#0d1c64]  border-b w-full" />
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
              labelValue={confirmPassword}
              placeholder="P@ss1234"
              onChangeText={data => setConfirmPassword(data)}
            />

            <View className="border-[#0d1c64]  border-b w-full" />
          </View>

          <View className="w-full px-3 mt-5">
            <AppButton
              title="Sign UP"
              color="primary"
              onPress={() =>
                register({
                  name,
                  email,
                  password,
                  contact,
                  ninNumber,
                  password,
                  confirmPassword,
                })
              }></AppButton>
          </View>

          <View className="ml-3 mt-5 flex flex-row  space-x-3 mb-5">
            <Text className="text-gray-700">Already have account?</Text>
            <TouchableOpacity
              className=" "
              onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-700">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

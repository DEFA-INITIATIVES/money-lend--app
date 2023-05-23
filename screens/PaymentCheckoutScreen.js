import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import {
  ChevronLeftIcon,
  ViewfinderCircleIcon,
} from 'react-native-heroicons/outline';
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';

const PaymentCheckoutScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvcnumber, setCvcNumber] = useState('');

  return (
    <SafeAreaView className="bg-[#0d1c64] h-full">
      <ScrollView className="p-5">
        <View className="w-full flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            color={colors.white}
            size={20}
            onPress={() => navigation.navigate('Pay')}
          />

          <Text className="text-white text-lg font-medium">
            {' '}
            Payment checkout{' '}
          </Text>
          <Text className="text-white text-sm"> Details</Text>
        </View>

        <View className="bg-gray-100 w-full h-auto rounded-md px-2 pb-5 mt-5">
          <View className="flex items-center justify-center mt-5 p-2">
            <Text className="text-3xl font-semibold text-[#0d1c64] px-4 mt-2 ">
              Add credit card
            </Text>
          </View>

          <View className="flex flex-col space-y-3 p-3">
            <View className="flex flex-col space-y-1 w-full  mb-3 px-3">
              <Text className=" text-[12px] ml-3 text-gray-600 font-medium">
                Name
              </Text>
              <View className="flex-row p-3">
                <TextInput
                  placeholder="John Doe"
                  placeholderTextColor={colors.dark}
                  value={name}
                  underlineColorAndroid="transparent"
                  onChangeText={data => setName(data)}
                  className="w-full px-2 text-gray-600"
                />
              </View>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full  mb-3 px-3">
              <Text className=" text-[12px] ml-3 text-gray-600 font-medium">
                Credit Card Number
              </Text>
              <View className="flex-row p-3">
                <TextInput
                  keyboardType="number-pad"
                  placeholder="**** **** **** **67"
                  placeholderTextColor={colors.dark}
                  value={cardNumber}
                  underlineColorAndroid="transparent"
                  onChangeText={data => setCardNumber(data)}
                  className="w-full px-2 text-gray-600"
                />
              </View>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="w-32 my-2">
              <TouchableOpacity className="flex-row items-center justify-center space-x-2 bg-[#0d1c64] p-2 rounded-md">
                <ViewfinderCircleIcon color={colors.white} size={20} />
                <Text className="text-white text-md"> Scan Card </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-around w-full ">
              <View className="flex flex-col space-y-1  p-3">
                <Text className="text-[12px] text-left ml-3 text-gray-600 font-medium">
                  Expiry
                </Text>
                <View className="">
                  <TextInput
                    placeholder="10/25"
                    maxLength={5}
                    placeholderTextColor={colors.dark}
                    value={expiry}
                    underlineColorAndroid="transparent"
                    onChangeText={data => setExpiry(data)}
                    className="w-full px-2 text-gray-600"
                  />
                </View>

                <View className="border-[#0d1c64]  border-b w-full" />
              </View>

              <View className="flex flex-col space-y-1 p-3">
                <Text className=" text-[12px] text-left ml-3 text-gray-600 font-medium">
                  Cvc
                </Text>
                <View className="">
                  <TextInput
                    secureTextEntry={true}
                    keyboardType="number-pad"
                    placeholder="***"
                    placeholderTextColor={colors.dark}
                    maxLength={3}
                    value={cvcnumber}
                    underlineColorAndroid="transparent"
                    onChangeText={data => setCvcNumber(data)}
                    className="w-full px-2 text-gray-600"
                  />
                </View>

                <View className="border-[#0d1c64]  border-b w-full" />
              </View>
            </View>

            <View className="w-full">
              <Text className="text-xs text-gray-500">
                {' '}
                Debit cards are accepted of some categories.
              </Text>
              <View className="flex-row items-center space-x-3 my-2">
                <View className=" w-10 h-7 rounded-md">
                  <Image
                    source={require('../assets/images/visa.jpg')}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                </View>

                <View className=" w-10 h-7 rounded-md">
                  <Image
                    source={require('../assets/images/visa2.jpeg')}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                </View>

                <View className=" w-10 h-7 rounded-md">
                  <Image
                    source={require('../assets/images/master_card.jpg')}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                </View>

                <View className=" w-10 h-7 rounded-md">
                  <Image
                    source={require('../assets/images/master_card.webp')}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>

            <View className="w-full my-2">
              <TouchableOpacity className="flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md ">
                <Text className="text-white uppercase text-lg">
                  Make Payment
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentCheckoutScreen;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  ChevronLeftIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
  BanknotesIcon,
  navigation,
} from 'react-native-heroicons/outline';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Bottombar from '../components/Bottombar';

const PaymentMethodScreen = () => {
  return (
    <SafeAreaView className="bg-[#0d1c64] h-full">
      <ScrollView className="p-5">
        <View className="w-full flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            color={colors.white}
            size={20}
            onPress={() => navigation.goBack()}
          />

          <Text className="text-white text-lg font-medium">
            {' '}
            Payment Mehtods{' '}
          </Text>
          <Text className="text-white text-sm"> Details</Text>
        </View>

        <View className="bg-white w-full h-auto rounded-md px-3 mt-5">
          <View className="flex items-center justify-center mt-5 p-2">
            <Text className="text-3xl font-semibold text-[#0d1c64] px-4 mt-2 ">
              Payment Methods
            </Text>
          </View>

          <Text className="text-xs font-semibold text-gray-500 px-4 mt-1">
            choose a adesired payment type. we offer easy ways for payments on
            our app.
          </Text>

          <View className=" flex flex-col space-y-3 p-3">
            <View className="flex-row items-center space-x-3 p-5 w-full h-20  rounded-md bg-white border border-pink-400">
              <View className=" w-16 h-16 rounded-md">
                <Image
                  source={require('../assets/images/master-card.png')}
                  className= 'w-full h-full object-cover'
                  resizeMode="cover"
                />
              </View>
              <View className="font-semibold">
                <Text>******************444</Text>
                <Text>Expires 09/25</Text>
              </View>
            </View>
          </View>


          <View className=" flex flex-col space-y-3 p-3">
            <View className="flex-row items-center space-x-3 p-5 w-full h-20  rounded-md bg-white border border-pink-400">
              <View className=" w-16 h-16 rounded-md">
                <Image
                  source={require('../assets/images/mobilemoney.jpeg')}
                  className= 'w-full h-full object-cover'
                  resizeMode="cover"
                />
              </View>
              <View className="font-semibold">
                <Text>******************444</Text>
                <Text>Expires 09/25</Text>
              </View>
            </View>
          </View>


          <View className=" flex flex-col space-y-3 p-3">
            <View className="flex-row items-center space-x-3 p-5 w-full h-20  rounded-md bg-white border border-pink-400">
              <View className=" w-16 h-16 rounded-md">
                <Image
                  source={require('../assets/images/paypal.jpg')}
                  className= 'w-full h-full object-cover'
                  resizeMode="cover"
                />
              </View>
              <View className="font-semibold">
                <Text>******************444</Text>
                <Text>Expires 09/25</Text>
              </View>
            </View>
          </View>

          <View className="p-2">
             <Text>CURRENT METHOD</Text>
          </View>


          <View className=" flex flex-col space-y-3 p-3">
            <View className="flex-row items-center space-x-3 p-5 w-full h-20  rounded-md bg-white border border-pink-400">
              <View className=" w-16 h-16 rounded-md">
                <Image
                  source={require('../assets/images/paypal.jpg')}
                  className= 'w-full h-full object-cover'
                  resizeMode="cover"
                />
              </View>
              <View className="font-semibold">
                <Text>******************444</Text>
                <Text>Expires 09/25</Text>
              </View>
            </View>
          </View>

          <View className="w-full px-3 my-2">
            <AppButton title="Add payment method" color="primary" />
          </View>
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

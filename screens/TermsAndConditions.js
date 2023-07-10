import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BookOpenIcon} from 'react-native-heroicons/solid';
import {ArrowLeftIcon, CheckCircleIcon} from 'react-native-heroicons/outline';
const TermsAndConditions = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
    setIsButtonActive(!isChecked);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity className="m-4" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color="#0d1c64" size={30} />
        </TouchableOpacity>

        <View className="flex-row items-center m-5 ">
          <BookOpenIcon color="#0d1c64" size={70} />

          <View className=" ml-3">
            <Text className=" text-[25px] font-bold text-[#0d1c64]  ">
              Terms Of Service
            </Text>
            <Text className=" text-[12px] font-bold text-gray-500   fon-[500px] ml-3">
              Last updated 12/07/2023
            </Text>
          </View>
        </View>
        <View className="m-3 px-2 space-y-4">
          <Text className="font-bold text-[16px] text-[#0d1c64]   ">
            Terms and Coditions
          </Text>
          <Text className=" text-[18px]">
            Loan Application: 2.1 By submitting a loan application, you
            authorize us to conduct a credit check and verify the information
            provided. 2.2 We reserve the right to accept or reject loan
            applications at our sole.
          </Text>
          <Text className=" text-[18px]">
            Loan Application: 2.1 By submitting a loan application, you
            authorize us to conduct a credit check and verify the information
            provided. 2.2 We reserve the right to accept or reject loan
            applications at our sole.
          </Text>
          <Text className=" text-[18px]">
            Loan Application: 2.1 By submitting a loan application, you
            authorize us to conduct a credit check and verify the information
            provided. 2.2 We reserve the right to accept or reject loan
            applications at our sole.
          </Text>
        </View>
        <View className="m-1 space-y-1 ">
          <TouchableOpacity
            onPress={handleCheckboxToggle}
            className="flex-row  space-x-3 m-4 items-center">
            {isChecked ? (
              <CheckCircleIcon size={24} color="black" /> // Replace with your desired icon or custom styling
            ) : (
              <View className="rounded-full  w-5 h-5 border border-black " />
            )}
            <Text className="text-[#0d1c64] text-semibold text-base">
              Agree with the terms and condions{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View className={`w-full  px-3 ${isButtonActive ? '' : 'opacity-30'} `}>
          <TouchableOpacity
            disabled={!isButtonActive}
            className=" w-full flex-row items-center justify-center bg-[#0d1c64] p-2 rounded-md  mb-5">
            {isLoading ? (
              <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
                <Text className="mr-2">
                  <ActivityIndicator size="small" color="white" />
                </Text>
                <Text className=" text-white text-lg font-semibold">
                  Processing Loan...
                </Text>
              </Text>
            ) : (
              <Text className="text-lg  uppercase  text-white">
                Request Loan
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

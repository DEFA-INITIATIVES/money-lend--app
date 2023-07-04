import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  ChevronLeftIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
  BanknotesIcon,
} from 'react-native-heroicons/outline';
import colors from '../config/colors';
import {useRoute} from '@react-navigation/native';
import AppButton from '../components/AppButton';
import Bottombar from '../components/Bottombar';
import {buttonlist} from '../utlis/buttonobj';
import { getStaticData } from '../services/dataService';

const BorrowScreen = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const [activeButton, setActiveButton] = useState('6 months');
  const [loanDurations , setLoanDuration] = useState([]);
  const route = useRoute();
  const {item} = route.params;
  const [selectedLoan, SetSelectedLoan] = useState(item.minimumCredit);
  const [validateLoan, setValidateLoan] = useState(false);
  const [lifeLoan, setLoanLife] = useState(6);
  const monthlyInterest = item.dailyInterest * 30;
  console.log(lifeLoan);

  // console.log(item);
  const handleButtonPress = buttonText => {
    setActiveButton(buttonText);
  };

  const getButtonStyle = buttonText => {
    return activeButton === buttonText
      ? styles.activeButton
      : styles.inactiveButton;
  };

  const getButtonTextStyle = buttonText => {
    return activeButton === buttonText
      ? styles.activeText
      : styles.inactiveText;
  };

  const handleIcrement = () => {
    if (selectedLoan !== item.maximumCredit) {
      SetSelectedLoan(prev => (prev += 1000));
    }
  };
  const handledecrement = () => {
    if (selectedLoan !== item.minimumCredit) {
      SetSelectedLoan(prev => (prev -= 1000));
    }
  };

  // Changing the minimumCredit on change of the item...
  useEffect(() => {
    SetSelectedLoan(item.minimumCredit);
  }, [item]);

  const handleInputChange = text => {
    if (isNaN(parseInt(text))) {
      // If the input is NaN or empty, set it to 0
      SetSelectedLoan(0);
    } else {
      SetSelectedLoan(parseInt(text));
    }

    if (
      parseInt(text) >= item.minimumCredit &&
      parseInt(text) <= item.maximumCredit
    ) {
      setValidateLoan(false);
    } else {
      setValidateLoan(true);
    }
  };

  const handleNavigate = () => {
    const loanData = {
      selectedLoan: selectedLoan,
      lifeLoan: lifeLoan,
    };

    navigation.navigate('Details', loanData);
  };

 
  useEffect(() => {
    const receiveStaticData = async () => {
      const {data} = await getStaticData();
      console.log('Static variables:', data[0].loanDurations);
    };
    receiveStaticData();
  }, [refresh]);

  return (
    <SafeAreaView className="bg-[#0d1c64] h-full">
      <ScrollView className="p-5">
        <View className="w-full flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            color={colors.white}
            size={20}
            onPress={() => navigation.navigate('Home')}
          />

          <Text className="text-white text-lg font-medium">Loan apply </Text>
          <Text className="text-white text-sm"> Details</Text>
        </View>

        <View className="bg-white w-full h-auto rounded-md px-3 mt-5">
          <Text className="text-base font-semibold text-gray-700 px-4 mt-2 ">
            Select Your loan amount
          </Text>

          <Text className="text-xs font-semibold text-gray-500 px-4 mt-1">
            You can loan up to Ugx {item.maximumCredit}
          </Text>

          <View className="flex flex-col  space-y-2">
            <View className=" mt-2 p-5 flex-row items-center justify-around bg-white border-b-2  border-gray-400 rounded-md">
              <TouchableOpacity
                onPress={handledecrement}
                className="flex items-center justify-center bg-gray-200 p-3 rounded-md">
                <MinusIcon color={colors.medium} size={14} />
              </TouchableOpacity>

              <View className=" flex items-center justify-center text-2xl  text-[#435aa6] font-semibold">
                <TextInput
                  className="w-20  px-2 text-lg  text-blue-500 "
                  value={
                    selectedLoan !== 0 ? selectedLoan.toLocaleString() : ''
                  }
                  keyboardType="number-pad"
                  onChangeText={handleInputChange}
                />
              </View>

              <TouchableOpacity
                className="flex items-center justify-center bg-gray-200 p-3 rounded-md"
                onPress={handleIcrement}>
                <PlusIcon color={colors.medium} size={14} />
              </TouchableOpacity>
            </View>

            {validateLoan && (
              <Text className="text-xs text-red-500 font-medium">
                value should be in range {item.minimumCredit} -{' '}
                {item.maximumCredit}
              </Text>
            )}
          </View>

          <Text className="text-base font-semibold text-gray-700 px-4 mt-2">
            Life of loan
          </Text>

          <View className="flex-row items-center space-x-3 space-y-2 flex-wrap p-1 mt-2">
            {buttonlist.map(({_id, lifeTime, active}) => (
              <View key={_id}>
                {active && (
                  <TouchableOpacity
                    key={_id}
                    style={[
                      styles.button,
                      getButtonStyle(`${lifeTime} months`),
                    ]}
                    onPress={() => {
                      setLoanLife(lifeTime);
                      handleButtonPress(`${lifeTime} months`);
                    }}>
                    <Text
                      style={[
                        styles.buttonText,
                        getButtonTextStyle(`${lifeTime} months`),
                      ]}>
                      {lifeTime} months
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

          <View className="flex-row items-center justify-end space-x-2 px-3 mt-2 w-full bg-white rounded-md">
            <Text>Payment plan </Text>
            <ChevronUpIcon color={colors.medium} size={14} />
          </View>

          <View className="w-full bg-gray-50 rounded-sm p-3 mt-1">
            <View className="flex-row items-center justify-start space-x-2 px-3 mt-2 w-full">
              <BanknotesIcon color={colors.medium} size={14} />
              <Text> Payment Details</Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text>selected Amount</Text>
              <Text className="text-[#0d1c64] font-medium">
                UGX {selectedLoan.toLocaleString()}
              </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text> Daily Interest</Text>
              <Text className="text-[#0d1c64] font-medium">
                {' '}
                {item.dailyInterest} %
              </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text>Monthly interest </Text>
              <Text className="text-[#0d1c64] font-medium">
                {' '}
                {monthlyInterest.toFixed(2)}%{' '}
              </Text>
            </View>
          </View>

          <View className="w-full px-3 my-2">
            <AppButton title="Apply" color="primary" onPress={handleNavigate} />
          </View>
        </View>
      </ScrollView>
      <Bottombar borrow={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 8,
    marginTop: 16,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    marginVertical: 3,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 10,
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#0d1c64',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
  activeText: {
    color: 'white',
  },
  inactiveText: {
    color: 'gray',
  },
});

export default BorrowScreen;

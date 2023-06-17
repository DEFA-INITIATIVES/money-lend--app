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

const BorrowScreen = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('6 months');
  const route = useRoute();
  const {item} = route.params;
  const [selectedLoan, SetSelectedLoan] = useState(item.minimumCredit);
  const [validateLoan, setValidateLoan] = useState(false);

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
    if(text === 'NaN'){
      console.log('Not a number Current Text:', text);
      SetSelectedLoan(0);
    }
    else if (
      parseInt(text) >= item.minimumCredit &&
      parseInt(text) <= item.maximumCredit
    ) {
      console.log('Current Text:', text);
      SetSelectedLoan(parseInt(text));
      setValidateLoan(false);
    } else {
      console.log('Out of Range Current Text:', text);
      SetSelectedLoan(parseInt(text));
      setValidateLoan(true);
    }
  };
  return (
    <SafeAreaView className="bg-[#0d1c64] h-full">
      <ScrollView className="p-5">
        <View className="w-full flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            color={colors.white}
            size={20}
            onPress={() => navigation.navigate('Home')}
          />

          <Text className="text-white text-lg font-medium"> Loan apply </Text>
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
                  className="w-20  px-2 text-gray-700 "
                  value={selectedLoan.toLocaleString()}
                  // placeholder="hello"
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
                {' '}
                value should be in range {item.minimumCredit} -{' '}
                {item.maximumCredit}
              </Text>
            )}
          </View>

          <Text className="text-base font-semibold text-gray-700 px-4 mt-2">
            Life of loan
          </Text>

          {/* <View className="flex-row items-center space-x-3 space-y-2 flex-wrap p-1 mt-2">
            <Text className="text-white bg-[#0d1c64] border border-blue-500 py-1 px-2 rounded-full text-center">
              6 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              12 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              18 months{' '}
            </Text>
            <Text className="text-[#0d1c64] border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              24 months{' '}
            </Text>
            <Text className="text-gray-600 border border-gray-500 py-1 px-2 rounded-full text-center">
              {' '}
              other{' '}
            </Text>
          </View> */}

          <View className="flex-row items-center space-x-3 space-y-2 flex-wrap p-1 mt-2">
            <TouchableOpacity
              style={[styles.button, getButtonStyle('6 months')]}
              onPress={() => handleButtonPress('6 months')}>
              <Text style={[styles.buttonText, getButtonTextStyle('6 months')]}>
                {'6 months'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, getButtonStyle('12 months')]}
              onPress={() => handleButtonPress('12 months')}>
              <Text
                style={[styles.buttonText, getButtonTextStyle('12 months')]}>
                {'12 months'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, getButtonStyle('18 months')]}
              onPress={() => handleButtonPress('18 months')}>
              <Text
                style={[styles.buttonText, getButtonTextStyle('18 months')]}>
                {'18 months'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, getButtonStyle('24 months')]}
              onPress={() => handleButtonPress('24 months')}>
              <Text
                style={[styles.buttonText, getButtonTextStyle('24 months')]}>
                {'24 months'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, getButtonStyle('other')]}
              onPress={() => handleButtonPress('other')}>
              <Text style={[styles.buttonText, getButtonTextStyle('other')]}>
                {'other'}
              </Text>
            </TouchableOpacity>
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
              <Text>Down Payment</Text>
              <Text className="text-[#0d1c64] font-medium">$ 800.00 </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text> Gross Interest</Text>
              <Text className="text-[#0d1c64] font-medium">$ 2130.00 </Text>
            </View>

            <View className="w-full flex-row justify-between mt-2 p-3">
              <Text>Due date</Text>
              <Text className="text-[#0d1c64] font-medium"> 5th Month </Text>
            </View>
          </View>

          <View className="w-full px-3 my-2">
            <AppButton
              title="Apply"
              color="primary"
              onPress={() => navigation.navigate('Details')}
            />
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

import {Text, View} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import {Picker} from '@react-native-picker/picker';
const AppFormIncome = ({name}) => {
  const {handleChange, errors, setFieldTouched, touched, values} =
    useFormikContext();
  return (
    <>
      <View className="flex flex-row items-center justify-center mx-3">
        <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
          What is your source of income?
        </Text>
        <Picker
          selectedValue={values.name}
          onBlur={() => setFieldTouched(name)}
          onValueChange={(itemValue, itemIndex) => handleChange(name)}>
          <Picker.Item label="Self Employment" value="option1" />
          <Picker.Item label="Company Employment" value="option2" />
          <Picker.Item label="Casual worker" value="option3" />
          <Picker.Item label="Part-time Employment" value="option4" />
          <Picker.Item label="Full-time Employment" value="option5" />
        </Picker>
      </View>

      <View className="border-[#0d1c64]  border-b w-full" />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormIncome;

import React from 'react';
import {useFormikContext, Field} from 'formik';
import PickerSelect from 'react-native-picker-select';
import ErrorMessage from './ErrorMessage';
import {View} from 'react-native';

export default function AppFormPicker({name}) {
  const {handleChange, errors, setFieldTouched, touched, handleBlur, values} =
    useFormikContext();

  return (
    <>
      <View className="flex flex-row items-center justify-center">
        {/* <Picker
          selectedValue={values.incomeGroup}
          name={name}
          className="w-full"
          onValueChange={handleChange(name)}
          onBlur={handleBlur(name)}>
          <Picker.Item label="5000 - 10000" value="20000" />
          <Picker.Item label="100000 - 200000" value="200000" />
          <Picker.Item label="300000 - 500000" value="500000" />
        </Picker> */}
        <Field
          as={PickerSelect}
          name={name}
          selectedValue={values[name]}
          onValueChange={handleChange(name)}
          onBlur={handleBlur(name)}
          items={[
            {label: '1000 - 10000', value: '10000'},
            {label: '10000 - 50000', value: '50000'},
            {label: '100000 - 500000', value: '500000'},
            {label: '100000 - 2000000', value: '2000000'},
          ]}
        />
      </View>

      <View className="border-[#0d1c64]  border-b w-full" />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

import React from 'react';
import {useFormikContext} from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {View, Text} from 'react-native';

export default function AppFormField({
  name,
  showPassword,
  toggleVisibility,
  ...otherProps
}) {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();

  return (
    <>
      <View className="flex flex-row items-center justify-center">
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />
      </View>

      <View className="border-[#0d1c64]  border-b w-full" />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

import {View} from 'react-native';
import React from 'react';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormPassword = ({
  name,
  showPassword,
  toggleVisibility,
  ...otherProps
}) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <View className="flex flex-row items-center justify-center mr-2">
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />

        {showPassword ? (
          <EyeSlashIcon onPress={toggleVisibility} color="#0d1c64" size={20} />
        ) : (
          <EyeIcon onPress={toggleVisibility} color="#0d1c64" size={20} />
        )}
      </View>

      <View className="border-[#0d1c64]  border-b w-full" />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPassword;

import {View} from 'react-native';
import React from 'react';
import {CheckCircleIcon, XCircleIcon} from 'react-native-heroicons/outline';
import {useFormikContext} from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormContact = ({name, validContact, submitted, ...otherProps}) => {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
  return (
    <>
      <View className="flex flex-row items-center justify-center mr-2">
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />

        {submitted && (
          <View>
            {validContact ? (
              <CheckCircleIcon color="green" size={20} />
            ) : (
              <XCircleIcon color="red" size={20} />
            )}
          </View>
        )}
      </View>

      <View className="border-[#0d1c64]  border-b w-full" />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormContact;

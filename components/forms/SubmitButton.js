import React from 'react';
import AppButton from '../AppButton';
import {useFormikContext} from 'formik';

export default function SubmitButton({title, isLoading, loadingText}) {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton title={title} isLoading={isLoading} onPress={handleSubmit} loadingText= {loadingText} />
  );
}

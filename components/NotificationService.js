import React from 'react';
import Toast from 'react-native-toast-message';

const NotificationService = () => {
  const showSuccessNotification = message => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
    });
  };

  const showErrorNotification = message => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  };

  return <Toast ref={ref => Toast.setRef(ref)} />;
};

export default NotificationService;

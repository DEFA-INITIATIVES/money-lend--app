import React, {lazy, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';
const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <PrivateStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;

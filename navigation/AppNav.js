import React, {lazy, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
const AppNav = () => {
  // const {isLoading, userToken} = useContext(AuthContext);
  const isLoading = useSelector(state => state.auth.isLoading);
  const token = useSelector(state => state.auth.token);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {token !== null ? <PrivateStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;

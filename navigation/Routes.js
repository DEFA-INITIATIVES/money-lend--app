import {View, Text} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthProvider';
import PrivateStack from './PrivateStack';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useContext(AuthContext);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return <>{user ? <PrivateStack /> : <AuthStack />}</>;
};

export default Routes;

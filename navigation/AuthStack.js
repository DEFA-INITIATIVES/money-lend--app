import React from 'react';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import ForgotpasswordScreen from '../screens/ForgotpasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#0e1529',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Forgotpassword" component={ForgotpasswordScreen} />
      <Stack.Screen name="Resetpassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

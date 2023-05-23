import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

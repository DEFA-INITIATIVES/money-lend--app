import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BorrowScreen from './screens/BorrowScreen';
import MessageScreen from './screens/MessageScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import SettingScreen from './screens/SettingScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Borrow" component={BorrowScreen} />
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Pay" component={PaymentsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

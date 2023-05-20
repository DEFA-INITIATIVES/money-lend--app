import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BorrowScreen from '../screens/BorrowScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import MessageScreen from '../screens/MessageScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import PaymentCheckoutScreen from '../screens/PaymentCheckoutScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

const Drawer = createDrawerNavigator();

const privateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          cardStyle: {
            backgroundColor: '#0e1529',
          },
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={SplashScreen} />
        <Drawer.Screen name="Welcome" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Pay" component={PaymentMethodScreen} />
        <Drawer.Screen name="Checkout" component={PaymentCheckoutScreen} />
        <Drawer.Screen name="Borrow" component={BorrowScreen} />
        <Drawer.Screen name="Notification" component={MessageScreen} />
        <Drawer.Screen name="Register" component={SignUpScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default privateStack;

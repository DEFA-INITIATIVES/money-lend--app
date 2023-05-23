import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BorrowScreen from '../screens/BorrowScreen';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import NotificationScreen from '../screens/NotificationScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import PaymentCheckoutScreen from '../screens/PaymentCheckoutScreen';
import BorrowDetailsScreen from '../screens/BorrowDetailsScreen';

const Drawer = createDrawerNavigator();

const privateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        cardStyle: {
          backgroundColor: '#0e1529',
        },
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Pay" component={PaymentMethodScreen} />
      <Drawer.Screen name="Checkout" component={PaymentCheckoutScreen} />
      <Drawer.Screen name="Borrow" component={BorrowScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Details" component={BorrowDetailsScreen} />
    </Drawer.Navigator>
  );
};

export default privateStack;

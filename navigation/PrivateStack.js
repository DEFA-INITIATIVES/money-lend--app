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
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Pay" component={PaymentsScreen} />
        <Drawer.Screen name="Borrow" component={BorrowScreen} />
        <Drawer.Screen name="Message" component={MessageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default privateStack;

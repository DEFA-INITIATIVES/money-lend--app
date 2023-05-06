import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
<<<<<<< HEAD
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
=======
import BorrowScreen from './screens/BorrowScreen';
>>>>>>> 059f891f46101732f64231876f0ce58104d74e6c

function App() {
  const Stack = createNativeStackNavigator();
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welome"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <View>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      <HomeScreen />
      {/* <BorrowScreen/> */}
    </View>
>>>>>>> 059f891f46101732f64231876f0ce58104d74e6c
  );
}

export default App;

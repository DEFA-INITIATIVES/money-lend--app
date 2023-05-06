import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import BorrowScreen from './screens/BorrowScreen';

function App() {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      <HomeScreen />
      {/* <BorrowScreen/> */}
    </View>
  );
}

export default App;

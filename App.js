import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen'

function App() {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      <LoginScreen />
      {/* <SignUpScreen /> */}
    </View>
  );
}

export default App;

import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      <LoginScreen />
    </View>
  );
}

export default App;

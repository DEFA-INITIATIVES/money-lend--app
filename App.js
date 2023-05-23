import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivateStack from './navigation/PrivateStack';


function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       cardStyle: {
    //         backgroundColor: '#0e1529',
    //       },
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen name="Home" component={SplashScreen} />
    //     <Stack.Screen name="Welome" component={WelcomeScreen} />
    //     <Stack.Screen name="Register" component={SignUpScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Borrow" component={BorrowScreen} />
    //     <Stack.Screen name="Dasboard" component={HomeScreen} />
    //     <Stack.Screen name="Message" component={MessageScreen} />
    //     <Stack.Screen name="Pay" component={PaymentsScreen} />
    //     <Stack.Screen name="Setting" component={SettingScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <PrivateStack />
    
  );
}

export default App;

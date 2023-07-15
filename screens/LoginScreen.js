import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import jwt_decode from 'jwt-decode';
import {useDispatch, useSelector} from 'react-redux';
import React, {useContext, useState} from 'react';
import {EnvelopeIcon, PhoneIcon} from 'react-native-heroicons/outline';
import {LockClosedIcon} from 'react-native-heroicons/outline';
import {AuthContext} from '../context/AuthContext';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import {authenticateUser} from '../services/userService';
import AppFormPassword from '../components/forms/AppFormPassword';
import AppFormContact from '../components/forms/AppFormContact';
import {
  loginRequest,
  loginSuccess,
  setEncodedToken,
} from '../redux/slices/authSlice';

const validationSchema = Yup.object().shape({
  whatsAppContact: Yup.string().required().label('whatsAppContact'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //const {login} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  //const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async values => {
    //dispatch(loginRequest());
    setIsLoading(true);

    try {
      //dispatch(loginRequest());
      //setIsLoading(false);
      const {data: token} = await authenticateUser(values);
      console.log('RETURNED Data : .............', token);
      const encodedToken = jwt_decode(token);

      // login({token});
      dispatch(loginSuccess(token));
      dispatch(setEncodedToken(encodedToken));

      // dispatch(loginRequest());
      setIsLoading(false);
    } catch (ex) {
      // dispatch(loginRequest());
      // dispatch(loginSuccess());
      setIsLoading(false);

      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        Alert.alert(ex.response.data);
      }
    }
  };

  return (
    <SafeAreaView>
      <View className=" bg-white  h-full items-center relative">
        <View className="bg-[#0d1c64] w-full h-[481.43px]  absolute top-[-127px] items-center">
          <Text className="text-white text-[25px] absolute top-[170px] font-semibold  pb-3">
            SupaCash
          </Text>
          <View></View>
          <Image
            source={require('../assets/img/logo.png')}
            className="w-[50px] mt-[220px] h-[50px] rounded-full "
          />
        </View>

        <View className=" top-[216px] bg-white w-[360px] h-[360px] rounded-full items-center ">
          <Text className="text-gray-700  font-extrabold text-[32px] mt-[50px]">
            Login
          </Text>
        </View>

        <AppForm
          initialValues={{whatsAppContact: '', password: ''}}
          onSubmit={values => handleLogin(values)}
          validationSchema={validationSchema}>
          <View className="flex flex-col space-y-1 w-full px-3">
            <Text className="text-gray-700 text-[12px] ml-3">Phone Number</Text>

            <AppFormContact
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="+256755168391"
              Icon={PhoneIcon}
              name="whatsAppContact"
            />
          </View>

          <View className="flex-row  px-2 mt-5">
            <Text className="text-gray-700 text-[14px] flex-1 ml-3">
              Password
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgotpassword')}
              className="text-gray-700 text-[14px] mr-7">
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View className="w-full mt-3 px-3">
            <AppFormPassword
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              Icon={LockClosedIcon}
              name="password"
              textContentType="password"
              secureTextEntry={showPassword}
              showPassword={showPassword}
              toggleVisibility={toggleVisibility}
            />
          </View>

          <View className="w-full px-3 mt-3">
            <SubmitButton
              isLoading={isLoading}
              title="login"
              loadingText="Signing in..."
            />
          </View>
        </AppForm>

        <View className="ml-3 mt-5 flex flex-row  space-x-3  ">
          <Text className="text-gray-700">Don’t have account?</Text>

          <TouchableOpacity
            className=" "
            onPress={() => navigation.navigate('Register')}>
            <Text className="text-gray">Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

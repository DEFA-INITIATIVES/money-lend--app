import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import React, {useState, useContext, useEffect} from 'react';
import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapIcon,
} from 'react-native-heroicons/outline';
import {
  LockClosedIcon,
  PhoneIcon,
  PencilSquareIcon,
} from 'react-native-heroicons/outline';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import AppFormPassword from '../components/forms/AppFormPassword';
import {
  validateContact,
  validateEmergencyContact,
  validateNinNumber,
  validateSecondEmergencyContact,
} from '../services/kycService';
import AppFormContact from '../components/forms/AppFormContact';
import AppFormNin from '../components/forms/AppFormNin';
import {registerUser} from '../services/userService';
import {getStaticData} from '../services/dataService';
import AppFormEmergencyContact from '../components/forms/AppFormEmergencyContact';
import {Picker} from '@react-native-picker/picker';
import AppFormSecondEmergencyContact from '../components/forms/AppFormSecondEmergencyContact';
import {useDispatch} from 'react-redux';
import {setEncodedToken, signupSuccess} from '../redux/slices/authSlice';
import jwt_decode from 'jwt-decode';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),

  password: Yup.string().required().min(4).label('Password'),
  name: Yup.string().required().label('Name'),
  ninNumber: Yup.string().required().label('NinNumber'),
  whatsAppContact: Yup.string().required().label('whatsAppContact'),
  incomeSource: Yup.string().required().label('IncomeSource'),
  location: Yup.string().required().label('Location'),
  emergencyContact: Yup.string().required().label('emergencyContact'),
  secondEmergencyContact: Yup.string().required().label('secondEmgencyContact'),
  confirmPassword: Yup.string().required().label('ConfirmPassword'),
});

const SignUpScreen = ({navigation}) => {
  const [validateNin, setValidateNin] = useState(false);
  const [validContact, setValidContact] = useState(false);
  const [validEmergencyContact, setValidEmergencyContact] = useState(false);
  const [incomeRange, setIncomeRange] = useState('');
  const [validSecondEmergencyContact, setValidSecondEmergencyContact] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //const {register} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [kycUri, setKycUri] = useState({});
  const [location, setLocation] = useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelRegister = async values => {
    if (incomeRange === '') return Alert.alert('Income Range not specified. ');

    setIsLoading(true);

    console.log('values needed', values);

    const parameters = {
      kycLink: kycUri.kycvalidationLink,
      ninNumber: values.ninNumber,
      whatsAppContact: values.whatsAppContact,
      emergencyContact: values.emergencyContact,
      secondEmergencyContact: values.secondEmergencyContact,
    };

    // console.log('values needed', values);

    if (
      values.ninNumber &&
      values.whatsAppContact &&
      values.emergencyContact &&
      values.secondEmergencyContact
    ) {
      const {data: ninNumberData} = await validateNinNumber(parameters);
      const {data: contactData} = await validateContact(parameters);
      const {data: emergencyContactData} = await validateEmergencyContact(
        parameters,
      );
      const {data: secondEmergencyContactData} =
        await validateSecondEmergencyContact(parameters);

      setSubmitted(true);

      setValidateNin(ninNumberData.validation.status === 'SUCCESSFUL');
      setValidContact(contactData.validation.status === 'SUCCESSFUL');
      setValidEmergencyContact(
        emergencyContactData.validation.status === 'SUCCESSFUL',
      );
      setValidSecondEmergencyContact(
        secondEmergencyContactData.validation.status === 'SUCCESSFUL',
      );

      if (
        ninNumberData?.validation?.status === 'SUCCESSFUL' &&
        contactData?.validation?.status === 'SUCCESSFUL' &&
        emergencyContactData?.validation?.status === 'SUCCESSFUL' &&
        secondEmergencyContactData?.validation?.status === 'SUCCESSFUL'
      ) {
        try {
          setIsLoading(true);

          const registerParams = {
            ...values,
            incomeGroup: incomeRange,
          };

          // console.log('register body', registerParams);

          const {data: token} = await registerUser(registerParams);
          const encodedToken = jwt_decode(token);

          //register({token});
          dispatch(signupSuccess(token));
          console.log(' tonennenen.....', token);
          dispatch(setEncodedToken(encodedToken));

          console.log(' data  endcoded back', encodedToken);

          setIsLoading(false);
        } catch (ex) {
          setIsLoading(false);
          if (ex.response && ex.response.status === 400) {
            Alert.alert(ex.response.data);
            // console.log(ex.response.data);
          }
        }
      } else {
        setIsLoading(false);
        Alert.alert('Provide Valid Phone Number And Nin Number');

      }
    }
  };

  useEffect(() => {
    const receiveStaticData = async () => {
      const {data} = await getStaticData();
      setKycUri(data[0]);
//      console.log("INCOME RANGES", data[0].incomeRanges);
    };
    receiveStaticData();
  });

//console.log(kycUri);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-white h-full items-center relative">
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

          <View className="top-[216px] bg-white w-[360px] h-[360px] rounded-full items-center ">
            <Text className="text-gray-700  font-extrabold text-[32px] mt-[50px]">
              Sign up
            </Text>
          </View>

          <AppForm
            initialValues={{
              name: '',
              email: '',
              whatsAppContact: '',
              emergencyContact: '',
              secondEmergencyContact: '',
              ninNumber: '',
              location: '',
              incomeSource: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => handelRegister(values)}
            validationSchema={validationSchema}>
            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">Name</Text>

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Muwonge Lawrence"
                Icon={PencilSquareIcon}
                name="name"
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">Email</Text>

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="examplemail@gmail.com"
                Icon={EnvelopeIcon}
                name="email"
                keyBoardType="email-address"
                textContentType="emailAddress"
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">
                WhatsAppContact
              </Text>

              <AppFormContact
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="+256755168391"
                Icon={PhoneIcon}
                name="whatsAppContact"
                validContact={validContact}
                submitted={submitted}
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">
                EmergencyContact
              </Text>

              <AppFormEmergencyContact
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="+256755168391"
                Icon={PhoneIcon}
                name="emergencyContact"
                validEmergencyContact={validEmergencyContact}
                submitted={submitted}
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">
                SecondEmergencyContact
              </Text>

              <AppFormSecondEmergencyContact
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="+256755168391"
                Icon={PhoneIcon}
                name="secondEmergencyContact"
                validSecondEmergencyContact={validSecondEmergencyContact}
                submitted={submitted}
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">NIN Number</Text>

              <AppFormNin
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="CM9085556GGGHJKLJ"
                Icon={IdentificationIcon}
                name="ninNumber"
                validateNin={validateNin}
                submitted={submitted}
              />
            </View>
            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">
                Where do you reside?
              </Text>

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="location"
                Icon={MapIcon}
                name="location"
              />
            </View>

            {/* <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">
                What is your income Group?
              </Text>

               // <AppFormPicker name="incomeGroup" /> 

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="incomeGroup"
                Icon={CurrencyDollarIcon}
                name="incomeGroup"
              />
            </View> */}

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3  font-semibold">
                What is your income Group?
              </Text>

              <Picker
                selectedValue={incomeRange}
                onValueChange={itemValue => setIncomeRange(itemValue)}>
                <Picker.Item label="Select income group" value="" />
                { kycUri?.incomeRanges?.map((category) => (
                <Picker.Item key = {category._id} label={category.range} value={category.value.toString()} />
                ))}
              </Picker>

              <View className="border-[#0d1c64]  border-b w-full" />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">
                What is your source of income?
              </Text>

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="income"
                Icon={CurrencyDollarIcon}
                name="incomeSource"
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">Password</Text>

              <AppFormPassword
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="P@ss1234"
                Icon={LockClosedIcon}
                name="password"
                textContentType="password"
                secureTextEntry={showPassword}
                showPassword={showPassword}
                toggleVisibility={toggleVisibility}
              />
            </View>

            <View className="flex flex-col space-y-1 w-full px-3 mt-2">
              <Text className="text-gray-700 text-[12px] ml-3">
                Confirm Password
              </Text>

              <AppFormPassword
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="P@ss1234"
                Icon={LockClosedIcon}
                name="confirmPassword"
                textContentType="password"
                secureTextEntry={showPassword}
                showPassword={showPassword}
                toggleVisibility={toggleVisibility}
              />
            </View>

            <View className="w-full px-3 mt-3">
              <SubmitButton
                isLoading={isLoading}
                title="Register"
                loadingText="Registering..."
              />
            </View>
          </AppForm>

          <View className="ml-3 mt-5 flex flex-row  space-x-3 mb-5">
            <Text className="text-gray-700">Already have account?</Text>
            <TouchableOpacity
              className=" "
              onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-700">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

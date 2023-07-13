import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
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
import {AuthContext} from '../context/AuthContext';
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
import {PERMISSIONS, request} from 'react-native-permissions';
import AppFormPicker from '../components/forms/AppFormPicker';

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
  const {register} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [kycUri, setKycUri] = useState({});
  const [location, setLocation] = useState(false);
  const [currentLongitude, setCurrentLongitude] = React.useState('...');

  //get current location
  const getLocation = () => {
    //checking if location permission is granted

    if (location) {
      //get current location
      Geolocation.getCurrentPosition(
        //Will give you the current location
        position => {
          //getting the Longitude from the location json
          const currentLongitude = JSON.stringify(position.coords.longitude);

          //getting the Latitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);

          //Setting Longitude state
          setCurrentLongitude(currentLongitude);

          //Setting Longitude state
          setCurrentLongitude(currentLatitude);
        },
      );
    } else {
      //if location permission is not granted
      //ask for permission
      askForLocationPermission();
    }
  };

  //request for android location permission
  const askForLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        //console.log('You can use the location');
        //setLocation(true);
        Geolocation.getCurrentPosition(
          //Will give you the current location
          position => {
            //getting the Longitude from the location json
            const currentLongitude = JSON.stringify(position.coords.longitude);

            //getting the Latitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);

            //Setting Longitude state
            setCurrentLongitude(currentLongitude);

            //Setting Longitude state
            setCurrentLongitude(currentLatitude);
          },
        );
      } else {
        //console.log('Location permission denied');
        Alert.alert('Location Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  //check for location permission

  async function checkLocationPermission() {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //console.log('You can use the location');
        setLocation(true);
      } else {
        //console.log('Location permission denied');
        askForLocationPermission();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  // console.log(userToken);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelRegister = async values => {
    if (incomeRange === '') return Alert.alert('Income Range not specified. ');

    checkLocationPermission();
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

          register({token});
          setIsLoading(false);
        } catch (ex) {
          setIsLoading(false);
          if (ex.response && ex.response.status === 400) {
            Alert.alert(ex.response.data);
            // console.log(ex.response.data);
          }
        }
      } else {
        Alert.alert('Provide Valid Phone Number And Nin Number');
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const receiveStaticData = async () => {
      const {data} = await getStaticData();
      setKycUri(data[0]);
    };
    receiveStaticData();
  });

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
                onValueChange={(itemValue, itemIndex) =>
                  setIncomeRange(itemValue)
                }>
                <Picker.Item label="Select income group" value="" />
                <Picker.Item label="1,000 - 10,000" value="10000" />
                <Picker.Item label="11,000 - 50,000" value="50,000" />
                <Picker.Item label="51,000 - 100,000" value="100,000" />
                <Picker.Item label="110,000 - 200,000" value="200,000" />
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

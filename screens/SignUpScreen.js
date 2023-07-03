import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapIcon,
  MapPinIcon,
  TableCellsIcon,
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
import {validateContact, validateNinNumber} from '../services/kycService';
import AppFormContact from '../components/forms/AppFormContact';
import AppFormNin from '../components/forms/AppFormNin';
import {registerUser} from '../services/userService';
import {getStaticData} from '../services/dataService';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  name: Yup.string().required().label('Name'),
  ninNumber: Yup.string().required().label('NinNumber'),
  contact: Yup.string().required().label('Contact'),
  incomeSource: Yup.string().required().label('IncomeSource'),
  location: Yup.string().required().label('Location'),
  financialCard: Yup.string().required().label('FinancialCard'),
  confirmPassword: Yup.string().required().label('ConfirmPassword'),
});

const SignUpScreen = ({navigation}) => {
  const [validateNin, setValidateNin] = useState(false);
  const [validContact, setValidContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {register, userToken} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [kycUri, setKycUri] = useState({});
  // console.log(userToken);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelRegister = async values => {
    setIsLoading(true);
    const parameters = {
      kycLink: kycUri.kycvalidationLink,
      ninNumber: values.ninNumber,
      contact: values.contact,
    };

    // console.log('values needed', values);

    if (values.ninNumber && values.contact) {
      const {data: ninNumberData} = await validateNinNumber(parameters);
      const {data: contactData} = await validateContact(parameters);

      setSubmitted(true);

      setValidateNin(ninNumberData.validation.status === 'SUCCESSFUL');
      setValidContact(contactData.validation.status === 'SUCCESSFUL');
      if (
        ninNumberData?.validation?.status === 'SUCCESSFUL' &&
        contactData?.validation?.status === 'SUCCESSFUL'
      ) {
        try {
          setIsLoading(true);
          const {data: token} = await registerUser(values);
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

    // console.log('current values', validContact);
    // console.log('current values', validateNin);
    console.log(' invalida nin and number', isLoading);
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
              email: '',
              password: '',
              name: '',
              ninNumber: '',
              contact: '',
              incomeSource: '',
              location: '',
              financialCard: '',
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
              <Text className="text-gray-700 text-[12px] ml-3">Contact</Text>

              <AppFormContact
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="+256755168391"
                Icon={PhoneIcon}
                name="contact"
                validContact={validContact}
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

            <View className="flex flex-col space-y-1 w-full px-3">
              <Text className="text-gray-700 text-[12px] ml-3">
                Financial Card
              </Text>

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="financialCard"
                Icon={CreditCardIcon}
                name="financialCard"
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

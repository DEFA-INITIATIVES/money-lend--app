import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Bars3Icon,
  ClipboardDocumentCheckIcon,
  GiftIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
} from 'react-native-heroicons/outline';
import LoanList from '../components/LoanList';
import Bottombar from '../components/Bottombar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getStaticData} from '../services/dataService';
import {AuthContext} from '../context/AuthContext';
import {numberWithCommas} from '../utlis/helper';
import {availableCredit} from '../services/kycService';
import {useDispatch, useSelector} from 'react-redux';
import {allgetStaticData} from '../redux/slices/dataSlice';

const HomeScreen = ({navigation}) => {
  //const {getData, staticData} = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const encodedToken = useSelector(state => state.auth.encodedToken);
  // const {logout, userInfo} = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    const receiveStaticData = async () => {
      const {data} = await getStaticData();
      dispatch(allgetStaticData(data[0]));
      console.log(' my available money ', data);
      // const {data} = await availableCredit();
      // getData(data.amount);
      // console.log(' my available money ', data);
    };
    receiveStaticData();
  }, [refresh]);
  // console.log('hello', staticData);
  return (
    <View className="flex-1 bg-white">
      <View className="">
        <View className="bg-[#0d1c64] w-full h-[230px]">
          <View className="flex-row px-4 mt-5">
            <Text className="text-[30px] font-extrabold text-white   flex-1">
              SupaCash
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Bars3Icon color="white" className="px-3" size={30} />
            </TouchableOpacity>
          </View>

          <Text className="text-white  font-semibold  text-[14px] px-4">
            Not the same finacial life
          </Text>

          <Text className="text-white px-4 mt-7 text-[14px]">Due Amount</Text>
          <View className="flex-row">
            <Text className="text-white px-4  text-[30px] font-extrabold flex-1">
              {encodedToken?.loanDetails[0]?.dueAmount > 0
                ? encodedToken?.loanDetails[0]?.dueAmount?.toLocaleString()
                : 0}
              .00
            </Text>
            <View className=" bg-white w-[130px] h-[45px]  rounded-md mr-3 items-center py-1">
              <Text className="font-bold text-[25px] text-[#515a71]">
                {' '}
                Loan
              </Text>
            </View>
          </View>
          <View className="flex-row w-full items-center p-3 justify-center space-x-2">
            <View className="bg-[#576cb1] w-[80px] h-[30px] rounded-md items-center justify-center flex-row">
              <ClipboardDocumentCheckIcon color="white" size={12} />
              <Text className="text-white py-1 ml-2 ">Step</Text>
            </View>
            <View className="bg-[#576cb1]  h-[30px] rounded-md items-center justify-center px-1 flex-row">
              <Square3Stack3DIcon color="white" size={12} />
              <Text className="text-white py-1 ml-2 ">Second out</Text>
            </View>
            <View className="bg-[#576cb1]  h-[30px] rounded-md items-center flex-row px-2">
              <RectangleStackIcon color="white" size={12} />
              <Text className="text-white py-1 ml-2  ">Extreme Speed</Text>
            </View>
          </View>
        </View>

        <Text className="mt-2 text-black font-extrabold text-[25px] px-5">
          Activity
        </Text>

        <View className="w-full px-3">
          <View className="bg-[#eaf1fb] w-full h-[70px] mt-2 mr-3 rounded-md">
            <View className="flex-row">
              <View className="flex-1">
                <Text className="mt-3 text-[20px] font-bold text-[#0d1c64] px-3">
                  New Product launch
                </Text>
                <Text className="px-3 text-[#0d1c64]">
                  {' '}
                  Most efficient supacash services.
                </Text>
              </View>
              <View className="mr-3 mt-2">
                <GiftIcon color="blue" size={45} />
              </View>
            </View>
          </View>
        </View>

        <Text className="mt-2 text-[20px] font-bold text-black px-4">
          Select package
        </Text>
      </View>

      <View className="flex-1">
        <View style={{flex: 1}}>
          <LoanList />
        </View>
      </View>

      <View className="">
        <Bottombar navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;

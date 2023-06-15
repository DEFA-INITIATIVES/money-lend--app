import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [staticData, setStaticData] = useState(null);

  // Logging in User ...
  const login = ({token}) => {
    console.log('USERTOKEN :' + token);
    const user = jwt_decode(token);
    console.log(user);
    setUserInfo(user);
    setUser(user);

    setUserToken(token);
    AsyncStorage.setItem('user', JSON.stringify(user));
    AsyncStorage.setItem('userToken', token);
  };

  // Registering User...
  const register = async ({token}) => {
    const user = jwt_decode(token);
    console.log(user);
    setUserInfo(user);
    setUser(user);
    setUserToken(token);
    AsyncStorage.setItem('decodedToken', JSON.stringify(user));
    AsyncStorage.setItem('userToken', token);
  };

  // Logout user...
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('decodedToken');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('decodedToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(user);
      }

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(`islogged in error ${e}`);
    }
  };

  const getData = data => {
    setStaticData(data);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        register,
        setIsLoading,
        getData,
        staticData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

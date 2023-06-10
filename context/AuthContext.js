import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {Axios} from 'axios';
import jwt_decode from 'jwt-decode';
import React, {createContext, useState, useEffect} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [user, setUser] = useState(null);
  const login = ({email, password}) => {
    setIsLoading(true);

    // console.log('test' + email, password);
    axios
      .post(`${BASE_URL}/api/users/login`, {
        email,
        password,
      })
      .then(res => {
        console.log(res.data);
        let token = res.data;
        const user = jwt_decode(token);
        console.log(user);
        setUserInfo(user);
        setUser(user);

        setUserToken(token);
        AsyncStorage.setItem('user', JSON.stringify(user));
        AsyncStorage.setItem('userToken', token);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
      });
    // setUserToken('abdul256');

    setIsLoading(false);
  };

  const register = async ({
    name,
    email,
    contact,
    ninNumber,
    password,
    confirmPassword,
  }) => {
    console.log({name, email, contact, ninNumber, password, confirmPassword});
    try {
      const response = await axios
        .post(`${BASE_URL}/api/users/register `, {
          name,
          email,
          contact,
          ninNumber,
          password,
          confirmPassword,
        })

        .then(res => {
          console.log(res.data);
          let token = res.data;
          const user = jwt_decode(token);
          console.log(user);
          setUserInfo(user);
          setUser(user);

          setUserToken(token);
          AsyncStorage.setItem('decodedToken', JSON.stringify(user));
          AsyncStorage.setItem('userToken', token);
        })
        .catch(e => {
          console.log(`Login error ${e}`);
        });
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Registration failed');
      console.error(error);
    }
  };

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
      console.log(`islogged in error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo, register}}>
      {children}
    </AuthContext.Provider>
  );
};

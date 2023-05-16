import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({Children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(password, email);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (
          email,
          password,
          nin,
          confirmPassward,
          contact,
          name,
        ) => {
          try {
            await auth().createUserWithEmailAndPassword(
              email,
              password,
              nin,
              confirmPassward,
              contact,
              name,
            );
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

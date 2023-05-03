import React from 'react';
import {StyleSheet, TextInput, View, Platform} from 'react-native';
import colors from '../config/colors';


export default function AppTextInput({Icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {Icon && <Icon color={colors.medium} size={20} />}
      </View>
      <TextInput
        placeholderTextColor={colors.meduim}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 3,
    overflow: 'hidden',
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
    width: '100%',
  },
  icon: {
    marginRight: 10,
    paddingLeft: 2,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

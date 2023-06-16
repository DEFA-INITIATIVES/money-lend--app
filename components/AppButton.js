import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';

export default function AppButton({
  title,
  onPress,
  color = 'primary',
  loadingText,
  isLoading,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      {isLoading ? (
        <Text clasaName="flex flex-row items-center space-x-3 justify-center ">
          <Text className="mr-2"><ActivityIndicator size="small" color="white" /></Text>
          <Text className=" text-white text-lg font-semibold">{ loadingText }</Text>
        </Text>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#334155',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

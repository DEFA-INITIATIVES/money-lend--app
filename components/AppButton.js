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
  isLoading,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
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

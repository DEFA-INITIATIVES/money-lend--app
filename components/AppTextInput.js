import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../config/colors';

export default function AppTextInput({
  Icon,
  labelValue,
  onChangeText,
  ...otherProps
}) {
  return (
    <KeyboardAvoidingView
      style={{}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      <View className="flex-row p-3 overflow-hidden">
        <View style={styles.icon}>
          {Icon && <Icon color={colors.primary} size={20} />}
        </View>

        <TextInput
          placeholderTextColor={colors.dark}
          value={labelValue}
          onChangeText={onChangeText}
          className="w-[255px] px-2 text-gray-700 "
          {...otherProps}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    paddingLeft: 2,
    justifyContent: 'center',
    paddingLeft: 12,
  },
});

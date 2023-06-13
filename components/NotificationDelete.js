import { View, StyleSheet , TouchableWithoutFeedback } from 'react-native';
import { TrashIcon } from 'react-native-heroicons/outline';
import React from 'react'
import colors from '../config/colors';

const NotificationDelete = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress = {onPress}>
    <View style = {styles.container}>
       <TrashIcon color="white" className="px-3" size={30} />
    </View>
</TouchableWithoutFeedback>
  )
}

export default NotificationDelete;

const styles = StyleSheet.create({
    container :{
        backgroundColor: colors.danger,
        width:70,
        justifyContent: "center",
        alignItems: "center"
    }
})
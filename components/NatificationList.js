import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { InformationCircleIcon } from 'react-native-heroicons/outline';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import NotificationDelete from '../components/NotificationDelete';


const Notification = ({
  title,
  message,
  onPress,
  renderRightActions,
}) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableOpacity
      className="mt-4 px-4 flex-row items-center "
      onPress={onPress}>
      <View className=" flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#0d1c64]">
        <InformationCircleIcon size={30} color={colors.white} />
      </View>

      <View className="flex-1">
        <Text className="text-[20px] text-black font-black  ml-3">{title}</Text>
        <Text className="ml-3 text-gray-700">
          {message}
        </Text>

      </View>
      <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] flex  items-center ">
        <Text className="text-white text-[13px]"> 1 </Text>
      </View>
    </TouchableOpacity>
  </Swipeable>
);

const NotificationList = ({ notifications }) => {

  // const [notifications, setNotifications] = useState([]);
  const handleDelete = notification => {
    console.log("deleting notification");
    // setNotifications(notifications.filter(n => n._id !== notification._id));
  };

  return (
    <FlatList
      data={notifications}
      renderItem={({ item }) => (
        <Notification
          title={item?.title}
          message={item?.message}
          onPress={() => console.log('......Am pressed.............')}
          // getnavigation={() => navigation.navigate('Borrow')}
          renderRightActions={() => (
            <NotificationDelete onPress={() => handleDelete(item)} />
          )}
        />
      )}
      keyExtractor={item => item._id}
    />
  );
};

export default NotificationList;

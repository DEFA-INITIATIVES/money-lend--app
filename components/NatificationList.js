import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {chatlist} from '../utlis/loandata';
import {InformationCircleIcon} from 'react-native-heroicons/outline';
import {Swipeable} from 'react-native-gesture-handler';
import colors from '../config/colors';
import NotificationDelete from '../components/NotificationDelete';

const Notification = ({
  title,
  amount,
  time,
  times,
  onPress,
  renderRightActions,
}) => (
  <Swipeable
  renderRightActions = {renderRightActions}
  >
    <TouchableOpacity
      className="mt-4 px-4 flex-row items-center "
      onPress={onPress}>
      <View className=" flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#0d1c64]">
        <InformationCircleIcon size={30} color={colors.white} />
      </View>

      <View className="flex-1">
        <Text className="text-[20px] text-black font-black  ml-3">{title}</Text>
        <Text className="ml-3 text-gray-700">
          you {title === 'Borrowed' ? 'received' : 'paid'} {amount} Ugx
        </Text>
        <Text className="text-gray-600 ml-3"> {time} ago</Text>
      </View>
      <View className="bg-[#0d1c64] rounded-full w-[20px] h-[20px] flex  items-center ">
        <Text className="text-white text-[13px]"> {times}</Text>
      </View>
    </TouchableOpacity>
  </Swipeable>
);

const NotificationList = () => {
  
  const [notifications, setNotifications] = useState(chatlist);

  const handleDelete = notification => {
    setNotifications(notifications.filter(n => n.id !== notification.id));
  };

  return (
    <FlatList
      data={notifications}
      renderItem={({item}) => (
        <Notification
          title={item.title}
          amount={item.amount}
          time={item.time}
          times={item.times}
          onPress={() => console.log('......Am pressed.............')}
          // getnavigation={() => navigation.navigate('Borrow')}
          renderRightActions={() => (
            <NotificationDelete onPress={() => handleDelete(item)} />
          )}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotificationList;

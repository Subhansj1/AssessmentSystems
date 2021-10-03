import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './DateTextStyles';

const DateText = ({date, day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dayStyle}>{day}</Text>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  );
};

export default DateText;

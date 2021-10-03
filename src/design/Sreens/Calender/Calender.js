import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {GREEN, ORANGE, PURPLE, WHITE} from '../../../assets/color/Colors';
import CalenderCard from '../../Atoms/CalenderCard';
import DateText from '../../Atoms/DateText';

import {styles} from './CalenderStyles';

const calenderData = [
  {id: 1, name: 'Sun', date: '11', day: 'Sunday', fullDate: '11 August 2021'},
  {id: 2, name: 'Mon', date: '05', day: 'Monday', fullDate: '05 August 2021'},
  {id: 3, name: 'Tue', date: '06', day: 'Tuesday', fullDate: '06 August 2021'},
  {
    id: 4,
    name: 'Wed',
    date: '07',
    day: 'Wednesday',
    fullDate: '07 August 2021',
  },
  {id: 5, name: 'Thr', date: '08', day: 'Thursday', fullDate: '08 August 2021'},
  {id: 6, name: 'Fri', date: '09', day: 'Friday', fullDate: '09 August 2021'},
  {id: 7, name: 'Sat', date: '10', day: 'Saturday', fullDate: '10 August 2021'},
];

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState({
    id: 4,
    name: 'Wed',
    date: '07',
    day: 'Wednesday',
    fullDate: '11 August 2021',
  });
  const [nextDate, setNextDate] = useState({
    id: 5,
    name: 'Thr',
    date: '08',
    day: 'Thursday',
    fullDate: '08 August 2021',
  });

  const changeSelectedDate = (obj, index) => {
    setSelectedDate(obj);
    if (index + 1 === calenderData.length) {
      setNextDate(calenderData[0]);
    } else {
      setNextDate(calenderData[index + 1]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <ScrollView>
        <Text style={styles.heading}>Calender</Text>

        <View style={styles.calenderContainer}>
          <Text style={styles.monthStyle}>Aug</Text>
          {calenderData.map((value, index) => {
            const {name, date, id} = value;
            return (
              <TouchableOpacity
                key={id + index}
                onPress={() => {
                  changeSelectedDate(value, index);
                }}
                style={{alignItems: 'center'}}>
                {selectedDate.id === id ? (
                  <View style={styles.selectedDateContainer}>
                    <Text style={{...styles.dayStyle, color: WHITE}}>
                      {name}
                    </Text>
                    <Text style={{...styles.dateStyles, color: WHITE}}>
                      {date}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={[styles.dayStyle]}>{name}</Text>
                    <Text style={styles.dateStyles}>{date}</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.contentContainer}>
          <DateText day={selectedDate.day} date={selectedDate.fullDate} />
          <CalenderCard color={GREEN} buttonText={'Approved'} />
          <View style={{marginTop: 12}}>
            <CalenderCard color={ORANGE} buttonText={'Pending'} />
          </View>

          <DateText day={nextDate.day} date={nextDate.fullDate} />

          <CalenderCard color={PURPLE} buttonText={'Buyer Reschedule'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calender;

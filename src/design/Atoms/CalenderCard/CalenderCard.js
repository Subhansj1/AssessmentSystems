import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CalenderCardStyles';

const CalenderCard = ({color, buttonText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerStyle}>
        <View
          style={{
            ...styles.dotStyle,
            backgroundColor: color,
            shadowColor: color,
          }}
        />
      </View>
      <View style={styles.centerStyle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.timeStyle}>8 AM</Text>
        </View>
        <Text style={styles.timeMinuteStyle}>(30 mins)</Text>
      </View>
      <View style={{...styles.cardStyle, backgroundColor: color}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.locationStyle}
            source={require('../../../assets/icons/LocationIcon.png')}
          />
          <Text style={styles.textStyle}>5519 NE Skidmore Portland</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 7}}>
          <Image
            style={styles.imageStyle}
            source={require('../../../assets/icons/AgentPhoto.png')}
          />
          <Text style={styles.nameStyle}>Rick Adams</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={{...styles.buttonText, color: color}}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalenderCard;

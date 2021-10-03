import {StyleSheet, Dimensions} from 'react-native';
import {GREEN, GREY, ORANGE, PURPLE, WHITE} from '../../../assets/color/Colors';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardStyle: {
    backgroundColor: GREEN,
    width: windowWidth / 1.5,
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  textStyle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: WHITE,
  },
  nameStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: WHITE,
  },
  imageStyle: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  locationStyle: {
    width: 12,
    height: 15,
    marginRight: 6,
    marginLeft: 3,
  },
  buttonContainer: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  buttonText: {
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 20,
    fontWeight: '400',
  },
  timeStyle: {
    color: GREY,
    fontWeight: '700',
    fontSize: 'normal',
    fontSize: 14,
    lineHeight: 20,
  },
  timeMinuteStyle: {
    color: GREY,
    fontWeight: '400',
    fontSize: 'normal',
    fontSize: 14,
    lineHeight: 20,
  },
  dotStyle: {
    width: 11,
    height: 11,
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    marginRight: 11,
  },
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

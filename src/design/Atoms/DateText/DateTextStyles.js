import {StyleSheet} from 'react-native';
import {BLACK, GREY} from '../../../assets/color/Colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    flexDirection: 'row',
  },
  dateStyle: {
    color: GREY,
    fontStyle: 'normal',
    fontSize: 20,
  },
  dayStyle: {
    fontWeight: 'bold',
    color: BLACK,
    fontStyle: 'normal',
    fontSize: 20,
    marginRight: 10,
  },
});

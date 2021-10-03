import {StyleSheet} from 'react-native';
import {BLACK, DARKPURPLE, GREY, WHITE} from '../../../assets/color/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  heading: {
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
  },
  contentContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  calenderContainer: {
    backgroundColor: '#F6F8FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  monthStyle: {
    color: BLACK,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    alignSelf: 'center',
  },
  dayStyle: {
    marginBottom: 10,
    color: GREY,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    alignSelf: 'center',
  },
  dateStyles: {
    color: GREY,
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    alignSelf: 'center',
  },
  selectedDateContainer: {
    backgroundColor: DARKPURPLE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

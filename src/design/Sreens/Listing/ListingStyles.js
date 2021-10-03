import {StyleSheet} from 'react-native';

import {WHITE} from '../../../assets/color/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  errorStyle: {
    color: 'red',
  },
  heading: {
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
  },
});

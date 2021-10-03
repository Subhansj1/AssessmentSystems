import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

const Spinner = () => {
  return <ActivityIndicator animating={true} color={Colors.red800} />;
};

export default Spinner;

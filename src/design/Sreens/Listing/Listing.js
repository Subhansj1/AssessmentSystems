import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StatusBar} from 'react-native';

import {get_universities} from '../../../data/api';
import CardAtom from '../../Atoms/CardAtom';
import Spinner from '../../Atoms/Spinner';
import {styles} from './ListingStyles';

const Listing = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchUniversity = () => {
    get_universities()
      .then(res => {
        setLoading(false);
        setData(res);
      })
      .catch(err => {
        setError('Error While Fetching Data');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUniversity();
  }, []);

  const renderItem = ({item}) => <CardAtom data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {loading || error ? (
        <View style={styles.spinnerContainer}>
          {error ? <Text style={styles.errorStyle}>{error}</Text> : <Spinner />}
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>LISTING</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Listing;

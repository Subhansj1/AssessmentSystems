import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {ORANGE} from '../../assets/color/Colors';

const CardAtom = ({data}) => {
  const {name, country, domains} = data;
  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Title>
          {name} {country}
        </Title>
        <Paragraph>Domain: {domains[0]}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: ORANGE,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default CardAtom;

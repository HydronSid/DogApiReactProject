import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const TitleText = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
    // fontFamily: 'Rajdhani-Bold',
  },
});

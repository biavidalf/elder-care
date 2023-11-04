import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

function Cuidados({ navigation }) {
  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>Cuidados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem',
    backgroundColor: '#fff'
  },
});


export default Cuidados;
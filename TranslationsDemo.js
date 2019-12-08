import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TransitionDemo = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text>Box</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    transform: [{translateY: 20}],
  },
});

export default TransitionDemo;

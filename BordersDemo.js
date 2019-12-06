import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BordersDemo = () => {
  return <BorderRadiusEx />;
};

const BorderRadiusEx = () => (
  <View style={styles.container}>
    <Example style={{borderRadius: 20}}>
      <CenteredText>Ex 1 : {'\n'} 4 Rounded</CenteredText>
    </Example>
    <Example style={{borderTopRightRadius: 60, borderBottomRightRadius: 60}}>
      <CenteredText>Ex 1: {'\n'} 2 Rounded</CenteredText>
    </Example>
    <Example style={{borderTopLeftRadius: 30, borderBottomRightRadius: 30}}>
      <CenteredText>Example 3:{'\n'}Leaf Shape</CenteredText>
    </Example>
    <Example style={{borderRadius: 60}}>
      <CenteredText>Example 4:{'\n'}Circle</CenteredText>
    </Example>
  </View>
);

const BorderSidesEx = () => (
  <View style={styles.container}>
    <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
      <Text>borderWidth: 3, borderLeftWidth: 0</Text>
    </Example>
    <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
      <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
    </Example>
    <Example style={{borderLeftWidth: 3}}>
      <Text>borderLeftWidth: 3</Text>
    </Example>
    <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
      <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
    </Example>
  </View>
);

const Example = props => (
  <View style={[styles.example, props.style]}>{props.children}</View>
);

const CenteredText = props => (
  <Text style={[styles.centeredText, props.style]}>{props.children} </Text>
);

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
  example: {
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'dodgerblue',
    borderWidth: 2,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  },
});

export default BordersDemo;

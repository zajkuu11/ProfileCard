import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileCard = () => (
  <View style={styles.container}>
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={require('./usericon.png')} />
      </View>
    </View>
  </View>
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
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  },
});

export default ProfileCard;

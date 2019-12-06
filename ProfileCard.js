import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileCard = () => (
  <View style={styles.container}>
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={require('./usericon.png')} />
      </View>
      <View>
        <Text style={styles.cardName}>John Doe</Text>
      </View>
      <View>
        <Text style={styles.cardOccupation}>React Native Developer</Text>
      </View>
      <View>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
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
    width: '90%',
    height: '98%',
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
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 3},
    textShadowRadius: 5,
  },
  cardOccupation: {
    borderColor: 'black',
    borderBottomWidth: 2,
    fontWeight: 'bold',
  },
  cardDescription: {
    textAlign: 'justify',
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 10,
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  },
});

export default ProfileCard;

import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const userImage = require('./usericon.png');

const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true,
  },
];

const ProfileCard = props => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccuaptionContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

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

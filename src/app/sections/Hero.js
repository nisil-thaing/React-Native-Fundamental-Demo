import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

export const Hero = (prop) => {
  return (
    <Image
      source={ require('../../assets/images/mats-barca.jpg') }
      style={ styles.heroImage } />
  );
}

const styles = StyleSheet.create({
  heroImage: {
    flex: 8,
    width: undefined,
    height: undefined
  }
});
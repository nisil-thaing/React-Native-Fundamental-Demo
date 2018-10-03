import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Hero />
        <Menu navigate={ navigate } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
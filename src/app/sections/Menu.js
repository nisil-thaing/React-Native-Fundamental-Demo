import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

import { ROUTES_NAME } from '../shared/Constant';

export const Menu = props => {
  const onItemPress = () => {
    Alert.alert('You tapped the button!');
  }

  return(
    <View style={ styles.container }>
      <View style={ styles.buttonRow }>
        <TouchableOpacity
          onPress={ () => props.navigate(ROUTES_NAME.VideoRT) }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>LESSIONS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => props.navigate(ROUTES_NAME.RegisterRT) }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.buttonRow }>
        <TouchableOpacity
          onPress={ onItemPress }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>BLOG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => props.navigate(ROUTES_NAME.ContactRT) }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>CONTACT</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.buttonRow }>
        <TouchableOpacity
          onPress={ onItemPress }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ onItemPress }
          style={ styles.buttonStyles } >
          <Text style={ styles.buttonText }>ABOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#35605a'
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: '#35605a',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
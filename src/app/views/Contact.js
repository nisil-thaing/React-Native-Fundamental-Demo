import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableHighlight
} from 'react-native';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      name: '',
      email: ''
    }
  }

  clearAllFields = () => this.setState({ msg: '', name: '', email: '' });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Contact Us</Text>
        <TextInput
          onChangeText={ text => this.setState({ name: text }) }
          value={ this.state.name }
          placeholder='Enter your name'
          style={ styles.inputs } />
        <TextInput
          onChangeText={ text => this.setState({ msg: text }) }
          value={ this.state.msg }
          placeholder='Enter your message'
          multiline={ true }
          numberOfLines={ 4 }
          style={ styles.multiInput } />
        <TextInput
          onChangeText={ text => this.setState({ email: text }) }
          value={ this.state.email }
          placeholder='Enter your email address'
          style={ styles.inputs } />
        <TouchableHighlight
          onPress={ this.sendMessage }
          underlayColor='#31e981'>
          <Text style={ styles.buttons }>Send Message</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ this.clearAllFields }
          underlayColor='#31e981'>
          <Text style={ styles.buttons }>Reset Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },
  heading: {
    flex: 1,
    fontSize: 16
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});
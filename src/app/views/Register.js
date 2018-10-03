import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableHighlight
} from 'react-native';
import { map, catchError } from 'rxjs/operators';

import { ROUTES_NAME } from '../shared/Constant';
import UserService from '../services/UserService';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.userService = new UserService();
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    };
  }

  cancelRegister = () => {
    Alert.alert('Registration cancelled!');
    this.props.navigation.navigate(ROUTES_NAME.HomeRT);
  }

  registerAccount = () => {
    const {
      username,
      password,
      passwordConfirm
    } = this.state;

    if (!username) {
      Alert.alert('Please enter a valid username!');
      return;
    }

    if (!password || password !== passwordConfirm) {
      Alert.alert('Please enter a valid password and password confirm!');
      return;
    }

    this.userService
      .registerAccount(this.state)
      .pipe(
        map(() => {
          Alert.err(`${ username } account has already been created`);
          this.props.navigation.navigate(ROUTES_NAME.HomeRT);
        }),
        catchError(err => Alert.alert(err))
      )
      .subscribe();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Register Account</Text>

        <TextInput
          onChangeText={ text => this.setState({ username: text }) }
          value={ this.state.username }
          placeholder='Enter your username'
          style={ styles.inputs } />
        <Text style={ styles.label }>Enter your username</Text>

        <TextInput
          onChangeText={ text => this.setState({ password: text }) }
          value={ this.state.password }
          placeholder='Enter your password'
          secureTextEntry={ true }
          style={ styles.inputs } />
        <Text style={ styles.label }>Enter your password</Text>

        <TextInput
          onChangeText={ text => this.setState({ passwordConfirm: text }) }
          value={ this.state.passwordConfirm }
          placeholder='Confirm your password agian'
          secureTextEntry={ true }
          style={ styles.inputs } />
        <Text style={ styles.label }>Confirm your password agian</Text>

        <TouchableHighlight
          onPress={ this.registerAccount }
          underlayColor='#31e981'>
          <Text style={ styles.buttons }>Register Account</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ this.cancelRegister }
          underlayColor='#31e981'>
          <Text style={ styles.buttons }>Cancel Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '35%',
    paddingTop: '25%'
  },
  heading: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 20
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  label: {
    paddingBottom: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
})
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { ROUTES_NAME } from '../shared/Constant';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false }
  }

  toggleUser = () => {
    this.setState(prevState => ({
      ...prevState,
      isLoggedIn: !prevState.isLoggedIn
    }));
  }

  render() {
    const displayName = this.state.isLoggedIn ? 'Sample User' : this.props.message;

    return (
      <View style={ styles.headerStyle }>
        <TouchableOpacity
          onPress={ () => this.props.navigate && this.props.navigate(ROUTES_NAME.HomeRT) }
          style={ styles.logoContainer }>
          <Image
            source={ require('../../assets/images/Octocat.png') }
            style={ styles.logoStyle } />
        </TouchableOpacity>
        <View style={ styles.headerText }>
          <Text
            onPress={ this.toggleUser }
            style={ styles.userInfo }>
            { displayName }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: '#35605a',
    borderColor: '#000',
    minHeight: 80
  },
  headerText: {
    flex: 15,
    justifyContent: 'center'
  },
  userInfo: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 20
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logoStyle: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '100%'
  }
});
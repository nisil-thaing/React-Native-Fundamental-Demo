import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ROUTES_NAME } from './src/app/shared/Constant';

import Home from './src/app/views/Home';
import Contact from './src/app/views/Contact';
import Header from './src/app/sections/Header';
import Video from './src/app/views/Video';
import VideoDetails from './src/app/views/VideoDetails';
import Register from './src/app/views/Register';
import Login from './src/app/views/Login';

const AppRoutes = createStackNavigator({
  [ROUTES_NAME.HomeRT]: { screen: Home },
  [ROUTES_NAME.ContactRT]: { screen: Contact },
  [ROUTES_NAME.VideoRT]: { screen: Video },
  [ROUTES_NAME.VideoDetailsRT]: { screen: VideoDetails },
  [ROUTES_NAME.RegisterRT]: { screen: Register },
  [ROUTES_NAME.LoginRT]: { screen: Login }
}, {
  initialRouteName: ROUTES_NAME.Home,
  navigationOptions: ({ navigation }) => ({
    header: (<Header
              navigate={ navigation.navigate }
              message='Press to Login!' />)
  })
});

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.mainSectionWrapper }>
          <AppRoutes />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 16
  },
  mainHeader: {},
  mainSectionWrapper: {
    flex: 16,
  }
});
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { take, catchError } from 'rxjs/operators';

import { TubeItem } from '../sections/TubeItem';
import { ROUTES_NAME } from '../shared/Constant';
import { QUERY_PARAMS } from './VideoDetails';
import VideoService from '../services/VideoService';

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isListLoaded: false };
    this.videoService = new VideoService();
  }

  componentDidMount() {
    this.videoService
      .fetchVideoList()
      .pipe(
        take(1),
        catchError(console.error)
      )
      .subscribe(data => this.setState({
        isListLoaded: true,
        videoList: Array.from(data.items)
      }));
  }

  onItemPress = id => {
    this.props.navigation.navigate(ROUTES_NAME.VideoDetailsRT, { [QUERY_PARAMS.tubeId]: id });
  }

  render() {
    return (
      <View>
        { this.state.isListLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              keyExtractor={ item => item.id.videoId }
              data={ this.state.videoList }
              renderItem={ ({item}) =>
                <TubeItem
                  id={ item.id.videoId }
                  title={ item.snippet.title }
                  imageSrc={ item.snippet.thumbnails.high.url }
                  onItemPress={ this.onItemPress } /> } />
          </View>
        ) }

        { !this.state.isListLoaded && (
          <View style={{ paddingTop: 70 }}>
            <Text>LOADING...</Text>
          </View>
        ) }
      </View>
    );
  }
}
import React from 'react';
import { WebView } from 'react-native';

export const QUERY_PARAMS = {
  tubeId: 'yTubeId'
};

export default class VideoDetails extends React.Component {
  render() {
    const tubeId = this.props.navigation.getParam(QUERY_PARAMS.tubeId, 'NO VIDEO');
    const tubeUrl = `https://www.youtube.com/embed/${ tubeId }`;
    return (
      <WebView
        javaScriptEnabled={ true }
        source={{ uri: tubeUrl }}
        style={{ marginTop: 20 }} />
    );
  }
}
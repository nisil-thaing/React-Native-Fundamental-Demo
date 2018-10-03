import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

export const TubeItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={ () => props.onItemPress(props.id) }>
      <View style={{ paddingTop: 20, alignItems: 'center' }}>
        <Image
          source={{ uri: props.imageSrc }}
          style={{ width: '100%', height: 200 }} />
        <Text>{ props.title }</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
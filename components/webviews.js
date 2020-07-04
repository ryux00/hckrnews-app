import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {WebView} from 'react-native-webview';

const Comments = ({story_detail}) => {
  return <WebView source={{uri: story_detail.hckr_url}} />;
};
const Article = ({story_detail}) => {
  console.log('article');

  if (story_detail.text == undefined) {
    return <WebView source={{uri: story_detail.url}} />;
  } else {
    return (
      <View style={styles.header}>
        <Text>{story_detail.text}</Text>
      </View>
    );
  }
};

export {Comments, Article};

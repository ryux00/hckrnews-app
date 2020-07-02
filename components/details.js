import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Details = props => {
  const {story_detail} = props.route.params;
  return (
    <View style={styles.header}>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL(story_detail.hckr_url)}>
        {story_detail.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  text: {},
});

export default Details;

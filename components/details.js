import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {WebView} from 'react-native-webview';

const Details = props => {
  const {story_detail} = props.route.params;
  return (
    <View style={styles.header}>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL(story_detail.hckr_url)}>
        {story_detail.title}
      </Text>
      <View style={styles.listItemScore}>
        <Icon
          name="heart"
          size={20}
          color="firebrick"
          style={styles.listItemIcon}
        />
        <Text style={styles.listItemText}>{story_detail.score}</Text>

        <Icon
          name="comment-alt"
          size={20}
          color="firebrick"
          style={styles.listItemIcon}
        />
        <Text style={styles.listItemText}>{story_detail.descendants}</Text>
      </View>
      <WebView
        source={{uri: story_detail.hckr_url}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  text: {
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItemScore: {
    // flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  listItemIcon: {
    paddingHorizontal: 10,
  },
});

export default Details;

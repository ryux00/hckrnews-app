import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {WebView} from 'react-native-webview';

const Tab = createMaterialTopTabNavigator();

const Details = props => {
  const {story_detail} = props.route.params;
  console.log(story_detail);
  const comments = () => {
    return <WebView source={{uri: story_detail.hckr_url}} />;
  };
  const article = () => {
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
      <Tab.Navigator backBehavior="none" tabBarPosition="bottom">
        <Tab.Screen name="comments" component={comments} />
        <Tab.Screen name="article" component={article} />
      </Tab.Navigator>
      {/* <WebView source={{uri: story_detail.hckr_url}} /> */}
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

import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {WebView} from 'react-native-webview';
import {Comments, Article} from './webviews';

const Tab = createMaterialTopTabNavigator();

const Details = props => {
  const {story_detail, scoreColor} = props.route.params;
  console.log(story_detail);

  return (
    <View style={styles.header}>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL(story_detail.url)}>
        {story_detail.title}
      </Text>
      <View style={styles.listItemScore}>
        <Icon
          name="heart"
          size={20}
          color={scoreColor(story_detail.score)}
          style={styles.listItemIcon}
        />
        <Text style={styles.listItemText}>{story_detail.score}</Text>

        <Icon
          name="comment-alt"
          size={20}
          color={scoreColor(story_detail.descendants)}
          style={styles.listItemIcon}
        />
        <Text style={styles.listItemText}>{story_detail.descendants}</Text>
        <Icon
          name="external-link-alt"
          size={20}
          color="black"
          onPress={() => Linking.openURL(story_detail.hckr_url)}
          style={{...styles.listItemIcon, ...styles.IconExternal}}
        />
      </View>
      <Tab.Navigator backBehavior="none" tabBarPosition="bottom">
        <Tab.Screen name="comments">
          {props => <Comments story_detail={story_detail}></Comments>}
        </Tab.Screen>
        <Tab.Screen name="article">
          {props => <Article story_detail={story_detail}></Article>}
        </Tab.Screen>
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
  IconExternal: {
    marginLeft: 'auto',
  },
});

export default Details;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import Story from "./components/story"

const App = () => {
  const [postIds, setPostIds] = useState([]);
  const [processedPosts, setProcessedPosts] = useState([]);

  const getStoryData = story_id => {
    var items = fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + story_id + '.json',
    )
      .then(response => {
        return response.json();
      })
      .then(items => {
        items.hckr_url = 'https://news.ycombinator.com/item?id=' + story_id;
        return items;
      });
    return items;
  };

  const fetchTopPosts = () => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        return response.json();
      })
      .then(items => {
        let pages = Math.ceil(items.length / 20);
        setPostIds(items);
        let display = [];
        items.slice(0, 20).forEach(element => {
          getStoryData(element).then(result => {
            // display[element] = result;
            display.push(result);
            // Prevents rendering the component while the data is being fetched
            // Removing this condition causes constant rerendering and rearranging of the component
            // Will cause no data to be rendered if the count is  less than 20 but that is an edge case
            // unless the last page is visited using pagination or multiple filters are used
            if (Object.keys(display).length >= 20) {
              setProcessedPosts(display);
            }
          });
        });
      });
  };

  React.useEffect(() => {
    fetchTopPosts();
    console.log('componentDidMount');
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={processedPosts}
        renderItem={({item}) => (<Story item={item}></Story>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

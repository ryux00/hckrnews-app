/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import Story from './components/story';
import Details from './components/details';

const Stack = createStackNavigator();
const Homepage = () => {};

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

  const loadMoreStories = () => {
    let current_length = processedPosts.length;
    let display = [];
    let ids_to_fetch = postIds
      .slice(current_length, current_length + 20)
      .forEach(story_id => {
        getStoryData(story_id).then(result => {
          display.push(result);
          if (display.length == 20 || current_length == 80) {
            setProcessedPosts(prevItems => {
              return [...prevItems, ...display];
            });
          }
        });
      });
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
  const Homepage = ({navigation}) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={processedPosts}
          renderItem={({item,index}) => (
            <Story item={item} story_rank={index} navigation={navigation}></Story>
          )}
          onEndReached={loadMoreStories}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

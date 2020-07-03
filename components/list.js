import React from 'react';
import {View, Text, StyleSheet, Linking, FlatList} from 'react-native';

import Story from './story';

const List = props => {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.processedPosts}
        renderItem={({item, index}) => (
          <Story
            item={item}
            story_rank={item.uid}
            navigation={props.navigation}
            story_rank={index}></Story>
        )}
        onEndReached={props.loadMoreStories}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.uid.toString()}
        initialNumToRender={10}
        extraData={props.processedPosts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;

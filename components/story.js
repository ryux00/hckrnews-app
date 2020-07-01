import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const Story = props => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text
          style={styles.listItemText}
        //   onPress={() => Linking.openURL(props.item.hckr_url)}
        >
          {props.item.title}
        </Text>
      </View>
      <View style={styles.listItemScore}>
        <Icon
          name="heart"
          size={20}
          color="firebrick"
          style={styles.listItemIcon}
          //   onPress={() => props.deleteItem(props.item.id)}
        />
        <Text style={styles.listItemText}>{props.item.score}</Text>

        <Icon
          name="comment-alt"
          size={20}
          color="firebrick"
          style={styles.listItemIcon}
          //   onPress={() => props.deleteItem(props.item.id)}
        />
        <Text style={styles.listItemText}>{props.item.score}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#dfe4eb',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  listItemText: {
    fontSize: 15,
  },
  listItemIcon: {
    paddingHorizontal: 10,
  },
  listItemScore: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Story;

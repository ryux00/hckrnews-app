import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Story extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  styles = StyleSheet.create({
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
      fontWeight: 'bold',
    },
    listItemIcon: {
      paddingHorizontal: 10,
    },
    listItemScore: {
      flex: 1,
      flexDirection: 'row',
    },
  });
  render() {
    return (
      <TouchableOpacity style={this.styles.listItem}>
        <View style={this.styles.listItemView}>
          <Text
            style={this.styles.listItemText}
            onPress={() =>
              this.props.navigation.navigate('Details', {
                story_detail: this.props.item,
              })
            }>
            {this.props.story_rank + 1}){" "}
            {this.props.item.title}
          </Text>
        </View>
        <View style={this.styles.listItemScore}>
          <Icon
            name="heart"
            size={20}
            color="firebrick"
            style={this.styles.listItemIcon}
          />
          <Text style={this.styles.listItemText}>{this.props.item.score}</Text>

          <Icon
            name="comment-alt"
            size={20}
            color="firebrick"
            style={this.styles.listItemIcon}
          />
          <Text style={this.styles.listItemText}>{this.props.item.descendants}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Story;
// export const Story = React.memo(_Story);

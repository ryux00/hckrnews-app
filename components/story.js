import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Story extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  styles = StyleSheet.create({
    listItem: {
      padding: 10,
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
    listItemTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingBottom: 2,
    },
    listItemIcon: {
      paddingHorizontal: 8,
    },
    listItemScore: {
      flex: 1,
      flexDirection: 'row',
    },
    storyAuthor: {
      color: 'grey',
    },
  });

  scoreColor = score => {
    return score >= 150 ? 'orange' : 'black';
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Details', {
            story_detail: this.props.item,
            scoreColor: this.scoreColor,
          })
        }
        style={this.styles.listItem}>
        <View style={this.styles.listItemView}>
          <Text style={this.styles.listItemTitle}>
            {this.props.story_rank + 1}) {this.props.item.title}
          </Text>
        </View>
        <View style={this.styles.listItemScore}>
          <Text style={this.styles.storyAuthor}>by {this.props.item.by}</Text>
          <Icon
            name="heart"
            size={20}
            color={this.scoreColor(this.props.item.score)}
            style={this.styles.listItemIcon}
          />
          <Text style={this.styles.listItemText}>{this.props.item.score}</Text>

          <Icon
            name="comment-alt"
            size={20}
            color={this.scoreColor(this.props.item.descendants)}
            style={this.styles.listItemIcon}
          />
          <Text style={this.styles.listItemText}>
            {this.props.item.descendants}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Story;
// export const Story = React.memo(_Story);

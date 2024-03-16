import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function PostItem({props}): React.JSX.Element {
  const {id, title, date, description} = props;
  return (
    <View key={id} style={styles.postItem}>
      <Icon name="photo" size={70} color="#ccc" style={styles.postImage} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  postImage: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  date: {
    fontSize: 10,
    color: 'gray',
  },
  description: {
    color: 'black',
  },
});

export default PostItem;

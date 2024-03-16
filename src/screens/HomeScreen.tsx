import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PostItem from '../components/PostItem';

const posts = Array.from({length: 15}, (_, index) => ({
  id: index,
  title: 'Заголовок новини',
  date: 'дата новини',
  description: 'короткий текст новини',
}));

function HomeScreen(): React.JSX.Element {
  return (
    <ScrollView>
      <Text style={styles.title}>Новини</Text>
      {posts.map(e => (
        <PostItem
          key={e.id}
          props={{
            id: e.id,
            title: e.title,
            date: e.date,
            description: e.description,
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
  },
});

export default HomeScreen;

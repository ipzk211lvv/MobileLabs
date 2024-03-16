import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PostItem from '../components/PostItem';
import axios from 'axios';

function HomeScreen(): React.JSX.Element {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/ipzk211lvv/news/main/news.json',
        );
        setNews(response.data.news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>Новини</Text>
      {news.map(e => (
        <PostItem
          key={e.id}
          props={{
            id: e.id,
            image: e.image,
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

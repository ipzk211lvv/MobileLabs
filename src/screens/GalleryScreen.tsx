import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios/index';

const icons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function GalleryScreen(): React.JSX.Element {
  const [visibleIcons, setVisibleIcons] = useState(12);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/ipzk211lvv/news/contents/image',
        );
        setNews(response.data);
        response.data.forEach(e => console.log(e))
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 500;

    if (isEndReached) {
      setVisibleIcons(prev => prev + 12);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onScroll={event => handleScroll(event)}
      scrollEventThrottle={16}>
      {news.map(e => (
        <View key={e.path} style={styles.square}>
          <Image style={styles.image} source={{uri: e.download_url}} />
        </View>
      ))}
      {visibleIcons < icons.length && (
        <ActivityIndicator style={styles.loadingIndicator} />
      )}
    </ScrollView>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  square: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: width / 2 - 20,
    height: width / 3 - 20,
    marginBottom: 10,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
  },
});

export default GalleryScreen;

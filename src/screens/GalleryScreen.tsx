import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import AllIcons from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const icons = Object.keys(AllIcons);

function GalleryScreen(): React.JSX.Element {
  const [visibleIcons, setVisibleIcons] = useState(12);

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
      {icons.slice(0, visibleIcons).map(name => (
        <View key={name} style={styles.square}>
          <Icon name={name} size={width / 5} color="gray" />
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
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
  },
});

export default GalleryScreen;

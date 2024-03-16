import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerLogo}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.headerTitle}>FirstMobileApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
  },
  headerLogo: {
    flex: 1,
    height: '100%',
    objectFit: 'contain',
  },
  headerTitle: {
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Header;

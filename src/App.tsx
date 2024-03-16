import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../src/components/Header';
import TabTopNavigation from './navigations/TabTopNavigation';
import Footer from '../src/components/Footer';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header />
        <TabTopNavigation />
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

export default App;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Footer(): React.JSX.Element {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Литвин В.В. ІПЗк-21-1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    backgroundColor: 'rgba(0, 0, 0, .10)',
    padding: 2,
  },
  footerText: {
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic',
  },
});

export default Footer;

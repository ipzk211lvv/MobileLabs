import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

function LabeledInput(props): React.JSX.Element {
  const {label, value, secureTextEntry, keyboardType, onChangeText} = props;

  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </>
  );
}

LabeledInput.defaultProps = {
  secureTextEntry: false,
  keyboardType: 'default',
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  title: {
    color: 'black',
  },
});

export default LabeledInput;

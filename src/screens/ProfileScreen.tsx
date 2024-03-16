import React, {useState} from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import LabeledInput from '../components/LabeledInput';

function ProfileScreen(): React.JSX.Element {
  const [user, setUser] = useState({
    mail: '',
    password: '',
    surname: '',
    name: '',
  });

  const handleInputChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  const handleButtonPress = () => {
    Alert.alert(
      'Реєстрація',
      `Ім'я: ${user.name}\nПрізвище: ${user.surname}\nЕлектронна пошта: ${user.mail}\nПароль: ${user.password}`,
      [
        {
          text: 'OK',
          onPress: () =>
            setUser({mail: '', password: '', surname: '', name: ''}),
        },
        {text: 'Відміна'},
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <LabeledInput
        label="Електронна пошта"
        value={user.mail}
        keyboardType="email-address"
        onChangeText={e => handleInputChange('mail', e)}
      />
      <LabeledInput
        label="Пароль"
        value={user.password}
        secureTextEntry
        onChangeText={e => handleInputChange('password', e)}
      />
      <LabeledInput
        label="Пароль (ще раз)"
        value={user.password}
        secureTextEntry
        onChangeText={e => handleInputChange('password', e)}
      />
      <LabeledInput
        label="Прізвище"
        value={user.surname}
        onChangeText={e => handleInputChange('surname', e)}
      />
      <LabeledInput
        label="Ім'я"
        value={user.name}
        onChangeText={e => handleInputChange('name', e)}
      />
      <View style={styles.button}>
        <Button title="Зареєструватися" onPress={handleButtonPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    marginBottom: 50,
  },
});

export default ProfileScreen;

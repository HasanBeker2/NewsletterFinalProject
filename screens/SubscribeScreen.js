import React, { useState } from 'react';
import {
  ScrollView, Text, StyleSheet, TextInput,
  KeyboardAvoidingView, Platform, Image, Pressable
} from 'react-native';
import { validateEmail } from '../utils';

export default function SubscribeScreen() {
  const [email, onChangeEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (text) => {
    onChangeEmail(text);
    if (!validateEmail(text)) {
      setErrorMessage('Invalid email');
      setIsButtonDisabled(true);
    } else {
      setErrorMessage('');
      setIsButtonDisabled(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo-grey.png')}
        />
        <Text style={styles.regularText}>Subscribe to our newsletter for our
          latest delicious recipes! </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          placeholder={'Type your email'}
          keyboardType={"email-address"}
        />
        {errorMessage ? <Text style={{ color: 'red',textAlign:'center'}}>{errorMessage}</Text> : null}
        <Pressable
          disabled={isButtonDisabled}
          style={isButtonDisabled ? styles.buttonDisabled : styles.button}
          onPress={() => {
            if (validateEmail(email)) {
              alert("Thanks for subscribing, stay tuned!");
            }
          }}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 15,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: 'white',
    borderRadius: 8
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 25,
    
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 15
  },
  buttonDisabled: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

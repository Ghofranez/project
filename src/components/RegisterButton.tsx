import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';

const RegisterButton = ({onPress}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 119, // Ajout du padding horizontal
    paddingVertical:17,
    borderRadius: 10, // Ajout du border radius pour rendre les coins arrondis
    backgroundColor: 'black',
    top:10,
  },
  buttonText: {
    color: 'white',
  },
});

export default RegisterButton;

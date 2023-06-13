import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const WelcomeScreen = ({navigation}) => {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighbor bistro that serves simple food
          and classic cocktail in a lively but casusal environment.
        </Text>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Go to menu</Text>
        </TouchableOpacity>

        {/* ------------------- */}
        {/* <Image
        style={styles.logo}
        source={require('../img/logo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
        </Text>
        <Image 
        style = {styles.image}
        source={require('../img/Picture1.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel='Little Lemon Logo'
        />
        <Image
        style={styles.image}
        source={require('../img/Picture2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../img/Picture3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../img/Picture4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      /> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    padding: 24,
    // marginTop: 25,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    marginBottom: 25,
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
});

export default WelcomeScreen
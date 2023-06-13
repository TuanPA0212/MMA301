import { View, Text, ScrollView, StyleSheet, TextInput,Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MenuItemsSectionList from './MenuItemsSectionList';
const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showMenu, setShowMenu] = useState(true);
  return (
    <View style= {styles.container}>
        <View style={styles.headerContainer}>
            <Image source={require('../img/logo.png')}
            style={styles.img}/>
            <Text style={styles.headerText}>Little Lemon</Text>
        </View>
        
        {showMenu &&(
        <>
            <Text style = {styles.regularText}>Login to continue</Text>
            
            <TextInput style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail} 
            placeholder={'email'}
            />
            <TextInput style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword} 
            placeholder={'password'}
            secureTextEntry={true}
            
            />
        </>
        )}
        {!showMenu && (
            <>
                {/* <Text style={styles.regularText}>You're logged in</Text> */}
                <MenuItemsSectionList/>
            </>
        )}
            {/* <TouchableOpacity style={styles.button}
                onPress={() => {setShowMenu(!showMenu)}}>
                <Text style={styles.buttonText}>{showMenu ? 'Login' : 'Return Login'}</Text>         
            </TouchableOpacity>  */}
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerContainer: {
        flexDirection: 'row',
    },
    headerText: {
        padding: 40,
        paddingLeft:0,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        // padding: 20,
        // marginVertical: 8,
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
    img: {
        height: '10%',
        width: '10%',
        padding: 50,
        margin: 20,
        marginLeft: 40,
    }
})

export default LoginScreen
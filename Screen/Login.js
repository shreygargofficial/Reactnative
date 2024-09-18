import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator, Button, Pressable, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

export default function Login(props) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    let clickhandler = () => {
        if (user == "shrey" && password == "garg") {
            console.log("loggedON")
            props.onScreenChange()
        }
    }
    let usernamehandler = (value) => {
        setUser(value)
    }

    let passwordhandler = (value) => {
        setPassword(value)
    }
    return (
        <View style={styles.root}>
            
               <LinearGradient colors={["red","#fdf3df"]} style={{flex:1}}>
               <ImageBackground
                source={require('../assets/Images/bg.jpg')}
                resizeMode='cover'
                imageStyle={styles.img}
                style={styles.imageContainer}>
                <View style={styles.loginContainerWrapper}>
                    <View style={styles.loginContainer}>
                        <Text>Login</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder='Username'
                            secureTextEntry={false}
                            onChangeText={usernamehandler}
                            value={user} />
                        <TextInput
                            style={styles.textField}
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={passwordhandler}
                            value={password} />

                        <Pressable onPress={clickhandler} style={({pressed})=>pressed ? [styles.btn, styles.opacity] : styles.btn} android_ripple={{ color: '#ccc' }}>
                            <Text style={styles.btntext}>Login</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.text}>Forget Password?</Text>
                </View>
                </ImageBackground>
                </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',


    },
    img:{
       opacity:0.4
    },
    btn: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 15,
        marginTop: 10
    },
    opacity:{
        opacity:0.5
    },
    loginContainerWrapper: {
        width: '95%',
        opacity:1
    },

    loginContainer: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingVertical: 40,
        borderRadius: 15,
        alignItems: 'center',

    },
    textField: {
        color: '#000',
        borderColor: '#ccc',
        margin: 12,
        fontSize: 17,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        height: 50


    },

    text: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        color: '#fff',
        fontSize: 12,
    },
    btntext: {
        color: 'white'
    }

});

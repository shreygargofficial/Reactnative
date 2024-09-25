import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Button, Pressable, FlatList, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { signUP } from '../utilities/http';
import { authContext } from '../context/AuthContextProvider';
import Loader from '../components/uiComponents/Loader';


export default function Signup({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const authCtx = useContext(authContext)
    let clickhandler = async () => {
        try {
            setIsSubmitting(true)
            let response = await signUP(user, password);
            authCtx.addToken(response.data.idToken, response.data.email)
            navigation.navigate('Welcome')
        }
        catch (e) {
            setIsSubmitting(false)
            if (e.response)
                Alert.alert("Something went wrong!!", e.response.data.error.message, {
                    text: 'Ok',
                    style: 'cancel'
                })
            else {
                Alert.alert("Network Issue!", e.message, {
                    text: 'Ok',
                    style: 'cancel'
                })
            }
        }
    }
    let usernamehandler = (value) => {
        setUser(value)
    }

    let passwordhandler = (value) => {
        setPassword(value)
    }
    let loginHandler = () => {
        navigation.replace('Login')
    }
    return (
        <>
            {isSubmitting && <Loader/>}
            <View style={styles.root}>
                <View style={styles.loginContainerWrapper}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.title}>Sign Up</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder='Email'
                            secureTextEntry={false}
                            onChangeText={usernamehandler}
                            value={user} />
                        <TextInput
                            style={styles.textField}
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={passwordhandler}
                            value={password} />

                        <Pressable onPress={clickhandler} style={({ pressed }) => [pressed && styles.opacity, styles.btn]} android_ripple={{ color: '#ccc' }}>
                            <Text style={styles.btntext}>Register</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={loginHandler}>
                        <Text style={styles.text}>  Already a User? log-in</Text>
                    </Pressable>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
    },
    loginContainerWrapper: {
        padding: 10,
        alignItems: 'center'
    },
    loginContainer: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 15,
        width: '100%',
        borderColor: '#ccc'
    },
    title: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',
        padding: 5,
    },


    textField: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '100%',
        borderRadius: 5,
        marginVertical: 10
    },

    btn: {
        backgroundColor: '#C70039',
        paddingVertical: 13,
        paddingHorizontal: 44,
        marginVertical: 6,
        borderRadius: 10,
        fontSize: 16,
        alignSelf: 'center'
    },
    opacity: {
        opacity: 0.5
    },
    btntext: {
        color: 'white'
    },
    text: {
        marginTop: 20,
        textAlign: 'center'
    },

});

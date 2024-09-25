import { StatusBar } from 'expo-status-bar';
import { useState ,useContext} from 'react';
import { StyleSheet, Text, View, Alert, TextInput,  Pressable,ImageBackground,  ImageBack, Pressableground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { login } from '../utilities/http';
import { authContext } from '../context/AuthContextProvider';
import Loader from '../components/uiComponents/Loader';

export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting,setIsSubmitting] = useState(false)
    const authCtx =  useContext(authContext)
    let clickhandler = async() => {
        try{
            setIsSubmitting(true)
            let response  = await login(user,password);
            authCtx.addToken(response.data.idToken,response.data.email);
            navigation.navigate('Welcome')
       }
       catch(e){
        setIsSubmitting(false)
            if(e.response){
                Alert.alert("Invalid Credentials!!",e.response.data.error.message,{
                    text:'Ok',
                    style: 'cancel'
                })
               
            }
            else{
                Alert.alert("Network Issue!",e.message,{
                    text:'Ok',
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
    let signupHandler =()=>{
        navigation.replace('Register')
    }
    
    return (
        <>
        {isSubmitting && <Loader/>}
        <View style={styles.root}>        
            <LinearGradient colors={["red", "#fdf3df"]} style={{ flex: 1 }}>        
                <ImageBackground
                    source={require('../assets/Images/bg.jpg')}
                    resizeMode='cover'
                    imageStyle={styles.img}
                    style={styles.imageContainer}>
                    <View style={styles.loginContainerWrapper}>
                    <Text>{authCtx.token?.substring(0,100)}</Text>
                        <View style={styles.loginContainer}>
                            <Text>Login</Text>
                            <TextInput
                                style={styles.textField}
                                placeholder='Email'
                                inputMode='email'
                                secureTextEntry={false}
                                onChangeText={usernamehandler}
                                value={user} />
                            <TextInput
                                style={styles.textField}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={passwordhandler}
                                value={password} />

                            <Pressable onPress={clickhandler} style={({ pressed }) => pressed ? [styles.btn, styles.opacity] : styles.btn} android_ripple={{ color: '#ccc' }}>
                                <Text style={styles.btntext}>Login</Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={signupHandler}>
                            <Text style={styles.text}>Are you a new user? sign-up</Text>
                        </Pressable>

                    </View>
                </ImageBackground>
            </LinearGradient>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    img: {
        opacity: 0.4
    },
    btn: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 15,
        marginTop: 10
    },
    opacity: {
        opacity: 0.5
    },
    loginContainerWrapper: {
        width: '95%',
        alignItems:'center',
        opacity: 1
    },

    loginContainer: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingVertical: 40,
        width:'100%',
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
        color: 'black',
        fontWeight:'900',
        fontSize: 14,
    },
    btntext: {
        color: 'white'
    }

});

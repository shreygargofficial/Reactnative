import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authContext = createContext({
    token: "",
    email:"",
    isLoggedIn: false,
    addToken: () => { },
    removeToken: () => { }
})


function AuthContextProvider({children}) {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    let addToken = async(token,email) => {
        setToken(token);
        setEmail(email);
        try {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('email', email);
          } catch (e) {
            console.log("Saving error: ", e);
          }
        
    }

    let removeToken = async() => {
        setToken("");
        setEmail("")
        try {
            await AsyncStorage.setItem('token', "");
            await AsyncStorage.setItem('email', "");
          } catch (e) {
            console.log("Saving error: ", e);
          }
    }

    let value = {
        token,
        email,
        isLoggedIn: !!token,
        addToken,
        removeToken
    }
    return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>);
}

export default AuthContextProvider;
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text } from 'react-native';
import Login from './Screen/Login';
import Main from './Screen/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screen/Signup';
import AuthContextProvider, { authContext } from './context/AuthContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen'

const NativeStack = createNativeStackNavigator();

let AuthenticationScreen = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name='Login'
        component={Login}
        options={{ headerShown: false }} />
      <NativeStack.Screen name='Register'
        component={Signup}
        options={{ headerShown: false }} />
    </NativeStack.Navigator>
  )
}

let AutherisedScreen = () => {
  const authCtx = useContext(authContext)
  let logoutHandler = () => {
    authCtx.removeToken()
  }
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name='Welcome'
        component={Main}
        options={{
          headerShown: true,
          headerRight: () => <Pressable onPress={logoutHandler}>
            <Text>Logout</Text>
          </Pressable>
        }} />
    </NativeStack.Navigator>
  )
}
let AllNavigation = function () {
  let authCtx = useContext(authContext);
  useEffect(() => {

    async function fetchMyStorage() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent auto hiding of splash screen
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        if (token !== null && email !== null) {
          authCtx.addToken(token, email)
        }
      } catch (e) {
        Alert.alert("There is some issue", JSON.stringify(e))
      }
      await SplashScreen.hideAsync(); // Hide splash screen
    }
    fetchMyStorage();
  }, [])
  let isLoggedIn = authCtx.isLoggedIn ? <AutherisedScreen /> : <AuthenticationScreen />

  return (
    isLoggedIn
  )
}
export default function App() {

  return (
    <>
      <AuthContextProvider>
        <StatusBar style='dark' />
        <NavigationContainer>
          <AllNavigation />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}


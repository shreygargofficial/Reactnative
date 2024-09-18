import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator, Button, Pressable, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import Login from './Screen/Login';
import Main from './Screen/Main';


export default function App() {
  const [mainScreen,setMainScreen] = useState(false)
  let onScreenChange =()=>{
    setMainScreen(true)
  }
  let Screen = <Login onScreenChange={onScreenChange}/>
  if(mainScreen){
    Screen = <Main/>
  }
  return (
    <View style={styles.root}>
      {Screen}
    </View>
  );
}
let styles = StyleSheet.create({
  root:{
    flex:1
  }
})

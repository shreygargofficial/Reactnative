import { useContext } from "react";
import { SafeAreaView, Text, View,StyleSheet } from "react-native";
import { authContext } from "../context/AuthContextProvider";

function Main() {
    const authCtx = useContext(authContext)
    return (<SafeAreaView style={styles.root}>
        <View style={styles.view}>
            <Text>Welcome {authCtx.email}</Text>
        </View>
    </SafeAreaView>);
}

export default Main;


let styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    view:{
    }

})
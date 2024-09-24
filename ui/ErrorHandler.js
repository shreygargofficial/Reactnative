import { StyleSheet,View,Text } from "react-native";
import { COLORS } from "../constants/colors";

function ErrorHandler({error}) {
    console.log("my error",error);
    return ( <View style={styles.root}>
        <Text style={styles.text}>{error}</Text>
    </View> );
}

export default ErrorHandler;

let styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'900',
        color:COLORS.darkRed

    }
})
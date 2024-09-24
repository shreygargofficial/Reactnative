import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";

function Input(props) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
            style={[styles.input,props.myStyle]}
            {...props}
           />
        </View>);
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:8,
        marginHorizontal:30,
    },
    label:{
        marginVertical:5,
    },
    input:{
        borderWidth:1,
        borderColor:COLORS.grey,
        padding:8,
        fontSize:20,
        color:COLORS.black,


    }
})

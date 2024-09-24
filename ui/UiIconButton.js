import { Ionicons } from "@expo/vector-icons";
import { Pressable,StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

function UiIconBtn({size,color,onPress,style,name}) {
    return ( 
    <Pressable  onPress={onPress} style={({pressed})=>[pressed && styles.pressed,style]}>
        <Ionicons name={name} size={size} color={color}/>
    </Pressable> );
}

export default UiIconBtn;

let styles = StyleSheet.create({
    pressed:{
        opacity:0.5
    },
    transparent:{
        color:COLORS.red,
        borderWidth:1,
        borderColor:COLORS.red
    },
    text:{
        textAlign:'center',
        textTransform:'capitalize'
    },
    blocked:{
        backgroundColor:COLORS.red,
        color:COLORS.white
    }

})
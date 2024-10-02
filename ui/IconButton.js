import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({onPress,name,size,color}) {
    return ( 
    <Pressable onPress={onPress} style={({pressed})=>[pressed && styles.pressed ]}>
        <Ionicons name={name} size={size} color={color}/>
    </Pressable> );
}

export default IconButton;

let styles = StyleSheet.create({
    pressed:{
        opacity:0.5
    }
})
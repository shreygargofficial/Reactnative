import { Pressable, StyleSheet,View,Text } from "react-native";
import { COLORS } from "../constants/colors";

function CustomButton({onPress,style,transparent,rounded,text}) {
    return ( 
        <Pressable onPress={onPress} style={({pressed})=>[pressed && styles.pressed,styles.button,rounded && styles.rounded,transparent?styles.transparent: styles.blocked,style]}>
            <View>
                <Text style={[styles.text,transparent?styles.transparentText: styles.blockedText]}>{text}</Text>
            </View>
        </Pressable>
     );
}

export default CustomButton;

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
    button:{
        paddingHorizontal:20,
        paddingVertical:10
    },
    rounded:{
        borderRadius:10,
    },
    blocked:{
        backgroundColor:COLORS.red,
    },
    transparentText:{
        color:COLORS.black
    },
    blockedText:{
        color:COLORS.white
    },

})
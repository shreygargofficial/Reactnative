import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";

function Loader() {
    return ( <View style={styles.root}>
        <ActivityIndicator size={100} color={COLORS.darkRed}/>
    </View> );
}

export default Loader;

let styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
import { StyleSheet, Text, View } from "react-native";

function Welcome() {
    return ( 
        <View style={styles.root}>
            <Text>
                Welcome
            </Text>
        </View>
     );
}

export default Welcome

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
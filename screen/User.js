import { StyleSheet, Text, View } from "react-native";

function User() {
    return ( 
        <View style={styles.root}>
            <Text>
                User
            </Text>
        </View>
     );
}

export default User

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
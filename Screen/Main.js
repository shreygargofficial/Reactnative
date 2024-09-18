import { SafeAreaView, Text, View,StyleSheet } from "react-native";

function Main() {
    return (<SafeAreaView style={styles.root}>
        <View style={styles.view}>
            <Text>Shere</Text>
            <Text>Shere</Text>
            <Text>Shere</Text>
            <Text>Shere</Text>
            <Text>Shere</Text>
            <Text>Shere</Text>
            <Text>Shere</Text>

             <Text>Shere</Text>
             <Text>Shere</Text>
             <Text>Shere</Text>
             <Text>Shere</Text>
             <Text>Shere</Text>
        </View>
    </SafeAreaView>);
}

export default Main;


let styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        borderWidth:2,
        borderColor:'grey'
    },
    view:{
        flex:1,
    }

})
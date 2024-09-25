import { ActivityIndicator ,StyleSheet,View} from "react-native";

function Loader() {
    return (
        <View style={styles.root}>
            <ActivityIndicator color={'#C70039'} size={100} />
        </View>
      );
}

export default Loader;

let styles  = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'transparent',
        opacity:1,
        height:'100%',
        width:'100%',
        position:'absolute',
        zIndex:100,
        alignItems:'center',
        justifyContent:'center'
    }
})
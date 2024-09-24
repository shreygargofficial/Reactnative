import { StyleSheet, Text, View } from "react-native";

function ExpensesSummary({total,text}) {
    return (
    <View style={styles.totalTile}>
        <Text style={styles.text}>{text} </Text>
        <Text style={styles.totalValue}> ${total}</Text>
    </View>);
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    totalTile:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:5,
        padding:10,
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
    },
    text:{
        textTransform: 'capitalize',
        fontWeight:'700'
    },
    totalValue:{
        fontSize:18,
        fontWeight:'900',
        color:'#0000ff'
    }
})
import { Pressable, StyleSheet, Text, View } from "react-native";
import { dateStringClear } from "../utility/date";
import { COLORS } from "../constants/colors";

function ExpenseItem({ title, id, amount, date, onPress }) {
    return (
        <Pressable
            onPress={onPress.bind(this, id)}
            style={({ pressed }) => [pressed && styles.pressed]}
        >
            <View style={styles.card}>
                <View style={styles.rowFlex}>
                    <View style={styles.titleAndDateContainer}>
                        <View>
                            <Text style={[styles.title, styles.textColor]}>{title}</Text>
                        </View>
                        <View>
                            <Text style={[styles.date, styles.textColor]}>{dateStringClear(date) }</Text>
                        </View>
                    </View>
                    <View style={styles.amountViewContainer}>
                        <View style={styles.btnContainer}>
                            <Text style={[styles.amount]}>${amount}</Text>
                        </View>
                    </View>

                </View>

            </View>
        </Pressable>
    );
}

export default ExpenseItem;

let styles = StyleSheet.create({
    card: {
        elevation: 3,
        backgroundColor: COLORS.yellow,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 10,
        flex:1,
        padding:10,
        marginVertical:4

    },
    titleAndDateContainer: {
       flex:3
    },
    amountViewContainer:{
       justifyContent:'center',
       flex:1,
    },
    btnContainer: {
        backgroundColor: 'white',
        padding:10,
        alignItems:'center',
        borderRadius:4,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 17,
        letterSpacing: 1,
        paddingBottom:5
    },
    pressed: {
        opacity: 0.5,
        overflow:'hidden',
    },
    rowFlex: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    date: {
        fontSize: 13,
    },
    amount: {
        fontSize: 12,
        fontWeight:'700'

    },
    textColor: {
        color: 'black'
    }

})
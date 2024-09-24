import { Text, View, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors";

function ExpensesList({ expenseList }) {

    const navigation = useNavigation()
    let expenseItemClick = (id) => {
        navigation.navigate('manage', { id: id })
    }
    if (!expenseList.length)
        return (
            <View style={styles.noExpenseContainer}>
                <Text style={styles.noExpenseText}>No Expense Available at a Moment</Text>
            </View>
        )
    return (
        <FlatList
            data={expenseList}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.flatListContainer}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { id, title, amount, date } }) => <ExpenseItem
                id={id}
                title={title}
                amount={amount}
                date={date}
                onPress={expenseItemClick}
            />

            }
        />);
}

export default ExpensesList;


const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 14,
        paddingBottom: 140,
    },
    noExpenseContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    noExpenseText:{
        fontSize:16,
        color:COLORS.darkRed,
    }
})
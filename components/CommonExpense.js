import {  useMemo } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { View ,StyleSheet} from "react-native";

function CommonExpense({expenseList, text}) {
    let expenseTotal = useMemo(() => {
        return expenseList.reduce((acc, ele) => {
            return acc + ele.amount
        }, 0)

    }, [expenseList])
    return (
        <View style={styles.root}>
            <ExpensesSummary total={expenseTotal} text={text}/>
            <ExpensesList expenseList={expenseList}/>
        </View>
    );

}

export default CommonExpense;
let styles = StyleSheet.create({
    root:{
        flex:1
    }
})
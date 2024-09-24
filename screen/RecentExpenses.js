import { StyleSheet, View } from "react-native";
import { useMemo,useContext} from "react";
import { expenseContex } from "../context/ExpenseProvider";
import CommonExpense from "../components/CommonExpense";


function RecentExpenses() {
    let expenseCtx = useContext(expenseContex);


 
    let recentExpenses =  useMemo(()=>{
        return expenseCtx?.allExpense?.filter(expense=>{
            let currentTime =  new Date().getTime();
            let savedTime = new Date(expense.date).getTime();
            return currentTime - savedTime <= 7*24*60*60*1000;
        })
       
    },[expenseCtx])

    return ( 
    <View  style={styles.root}>
          <CommonExpense expenseList={recentExpenses} text={'Recent 7 days expense'}/>
    </View> );
}

export default RecentExpenses;

let styles = StyleSheet.create({
    root:{
        flex:1
    }
})
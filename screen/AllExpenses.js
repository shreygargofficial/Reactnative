import { View,StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { expenseContex } from "../context/ExpenseProvider";
import CommonExpense from "../components/CommonExpense";
import { getExpense } from "../utility/http";
import Loader from "../ui/Loader";
import ErrorHandler from "../ui/ErrorHandler";

function AllExpenses() {
    let expenseCtx = useContext(expenseContex);
    const [isLoading,setIsLoading]= useState(true);
    const [err,setErr] = useState(null)

    useEffect(()=>{
        async function gettingExpense(){
            try{

                let expenseArray = await getExpense();
                expenseCtx.setExpense(expenseArray)
            }
            catch(e){
                if (e.response)
                    setErr(e.response.data)
                else
                    setErr(e.message);
            }
            setIsLoading(false)
        }
        gettingExpense();
    },[])
    if(isLoading)
        return <Loader/>
    if(err)
        return <ErrorHandler error={err}/>
    return (
        <View style={styles.root}>
            <CommonExpense expenseList={expenseCtx.allExpense} text={'total'}/>
        </View>);
}

export default AllExpenses;
let styles = StyleSheet.create({
    root:{
        flex:1
    }
})
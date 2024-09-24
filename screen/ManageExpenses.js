import { useContext, useLayoutEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import UiIconBtn from "../ui/UiIconButton";
import { expenseContex } from "../context/ExpenseProvider";
import { COLORS } from "../constants/colors";
import ExpenseForm from "../components/expenseForm/ExpenseForm";
import { deleteExpense, getExpense, postExpense, putExpense } from "../utility/http";
import Loader from "../ui/Loader";
import ErrorHandler from "../ui/ErrorHandler";


function ManageExpenses({ route, navigation }) {
    let expenseCtx = useContext(expenseContex);
    const [isLoading, setIsLoading] = useState(false);
    const [err,setErr] = useState(null)

    const id = route?.params?.id;
    const myExpenseToUpdate = useMemo(() => {
        if (id)
            return expenseCtx.allExpense.find(ele => ele?.id == id);
        else
            return ""
    }, [expenseCtx])
    const isEditing = !!id;
    let text = '';
    let headerTitle = "";
    if (isEditing) {
        headerTitle = `Update or Delete`
        text = `My Expense of ${myExpenseToUpdate.title.toUpperCase()}`;
    }
    else {
        headerTitle = `Add Item`
        text = `Add Expense`;
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: headerTitle
        })
    }, [navigation])

    let cancelBtnHandler = () => {
        navigation.goBack();
    }

    let deleteBtnHandler = (id) => {
        Alert.alert('Delete', `Do you Really want to Delete ${myExpenseToUpdate.title}`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    setIsLoading(true)
                    navigation.goBack();
                    try {

                        deleteExpense(id);
                        expenseCtx.deleteExpense(id);
                      

                    }
                    catch (e) {
                        if (e.response)
                            setErr(e.response.data)
                        else
                            setErr(e.message);
                    }
                    setIsLoading(false)
                }
            },
        ])

    }

    let updateHandler = async (id, data) => {
        setIsLoading(true)
       
        try {
            await putExpense(id, data);
            expenseCtx.updateExpense(id, data);
            navigation.goBack()
        }
        catch (e) {
            if (e.response)
                setErr(e.response.data)
            else
                setErr(e.message);
        }
        setIsLoading(false)
    }

    let addHandler = async (data) => {
        setIsLoading(true)
        try{
            let id = await postExpense(data)
            let newData = { ...data, id: id }
            expenseCtx.addExpense(newData);
            navigation.goBack();

        }
        catch(e){
            if (e.response)
                setErr(e.response.data)
            else
                setErr(e.message);
        }
        setIsLoading(false)
    }
    if(isLoading)
        return <Loader/>
    if(err)
        return <ErrorHandler error={err}/>
    if (isEditing)
        return (
            <View style={styles.root}>
                <Text style={[styles.textCenter, styles.bold]}>{text}</Text>
                <ExpenseForm isEditing={true}
                    updateHandler={updateHandler}
                    cancelBtnHandler={cancelBtnHandler}
                    myExpenseToUpdate={myExpenseToUpdate}
                    id={id} />
                <View style={styles.deleteContainer}>
                    <UiIconBtn onPress={deleteBtnHandler.bind(this, id)} name={'trash'} size={30} color={COLORS.red} />
                </View>
            </View>
        );
    else
        return (
            <View style={styles.root}>
                <Text style={[styles.textCenter, styles.bold]}>{text}</Text>
                <ExpenseForm isEditing={false} addHandler={addHandler} />

            </View>
        )
}

export default ManageExpenses;

let styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: 30,

    },

    textCenter: {
        textAlign: 'center'
    },
    marginRight: {
        marginRight: 10,
    },
    bold: {
        fontWeight: '700'
    },
    deleteContainer: {
        paddingTop: 30,
        borderTopColor: COLORS.brown,
        borderTopWidth: 1,
        alignItems: 'center'
    },
})
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../../ui/Input";
import { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import { dateExtractor, dateStringClear } from "../../utility/date";
import { COLORS } from "../../constants/colors";

function ExpenseForm({ isEditing, addHandler, updateHandler, cancelBtnHandler, id, myExpenseToUpdate }) {
    const [formValue, setFormValue] = useState({
        amount: {
            value: myExpenseToUpdate ? myExpenseToUpdate.amount.toString() : "",
            isValid: true
        },
        title: {
            value: myExpenseToUpdate ? myExpenseToUpdate.title : "",
            isValid: true
        },
        date: {
            value: myExpenseToUpdate ? dateStringClear(myExpenseToUpdate.date) : "",
            isValid: true
        },
    })
    let onChangeText = function (identifier, value) {
        setFormValue(prev => {
            let current = { ...prev[identifier] }
            current.value = value
            return { ...prev, [identifier]: current }
        })
    }

    let onSubmit = function () {

        let finalValues = {
            amount: +formValue.amount.value,
            title: formValue.title.value.trim(),
            date: dateExtractor(formValue.date.value)
        }
        let amountInvalid = isNaN(finalValues.amount) || finalValues.amount <= 0 ? true : false;
        let dateInvalid = finalValues.date.toString() == 'Invalid Date' ? true : false
        let titleInvalid = finalValues.title == "" ? true : false
        if (amountInvalid) {
            setFormValue(prev => {
                let amount = { ...prev['amount'] }
                amount.isValid = false;
                return { ...prev, amount }
            })
        }
        if (dateInvalid) {
            setFormValue(prev => {
                let date = { ...prev['date'] }
                date.isValid = false;
                return { ...prev, date }
            })
        }
        if (titleInvalid) {
            setFormValue(prev => {
                let title = { ...prev['title'] }
                title.isValid = false;
                return { ...prev, title }
            })
        }
        let allValid = !amountInvalid && !dateInvalid && !titleInvalid
        if (allValid && isEditing)
            updateHandler.call(this, id, finalValues)
        if (allValid && !isEditing)
            addHandler.call(this, finalValues);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.formContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={8} // Adjust this based on your needs
            >

                <Input
                    placeholder={'Amount'}
                    label={'Amount'}
                    keyboardType={'decimal-pad'}
                    onChangeText={onChangeText.bind(this, 'amount')}
                    value={formValue.amount.value}
                />
                {!formValue.amount.isValid && <Text style={styles.error}>Amount should be a number > 0</Text>}
                <Input
                    placeholder={'Title'}
                    label={'Add Title'}
                    keyboardType={'default'}
                    multiline={true}
                    myStyle={styles.title}
                    onChangeText={onChangeText.bind(this, 'title')}
                    value={formValue.title.value}
                />
                {!formValue.title.isValid && <Text style={styles.error}>Title should not be empty</Text>}
                <Input
                    placeholder={'yyyy-mm-dd'}
                    label={'Date'}
                    keyboardType={'default'}
                    maxLength={10}
                    onChangeText={onChangeText.bind(this, 'date')}
                    value={formValue.date.value}
                />
                {!formValue.date.isValid && <Text style={styles.error}>Date should be in a correct format</Text>}

                {isEditing && <View style={styles.buttonGroup}>
                    <CustomButton
                        text={'Update'}
                        transparent={false}
                        rounded={true}
                        style={styles.marginRight}
                        onPress={onSubmit}
                    />
                    <CustomButton text={'Cancel'}
                        transparent={true}
                        onPress={cancelBtnHandler}
                        rounded={true} />
                </View>}
                {
                    !isEditing && <CustomButton
                        text={'Add'}
                        transparent={false}
                        rounded={true}
                        style={styles.marginRight}
                        onPress={onSubmit}
                    />
                }

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default ExpenseForm;

let styles = StyleSheet.create({
    formContainer: {
        marginVertical: 40,
    },
    title: {
        minHeight: 100,
    },
    error: {
        color: COLORS.red,
        marginBottom: 6,
        marginHorizontal: 30,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },

    marginRight: {
        marginRight: 10,
        marginVertical: 30
    },
})
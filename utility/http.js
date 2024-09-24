import axios from "axios";
export async function getExpense(){
    let response = await axios.get('https://expense-manager-9e6ae-default-rtdb.firebaseio.com/expense.json');
    let expenseArr  = []
    for(key in response.data){
        expenseArr.push({...response.data[key],id:key});
    }
    return expenseArr.reverse();
}

export async function postExpense(expense){
    let response = await axios.post('https://expense-manager-9e6ae-default-rtdb.firebaseio.com/expense.json',expense);
    return response.data.name;
}

export function putExpense(id,expense){
     axios.put(`https://expense-manager-9e6ae-default-rtdb.firebaseio.com/expense/${id}.json`,expense);
}

export function deleteExpense(id){
    axios.delete(`https://expense-manager-9e6ae-default-rtdb.firebaseio.com/expense/${id}.json`);
}
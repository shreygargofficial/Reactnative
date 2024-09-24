import { createContext, useState } from "react";
import { dateExtractor } from "../utility/date";

let DATA_DUMMY = [
    // {
    //     id: 1,
    //     title :'grocery',
    //     amount: 1000,
    //     date: dateExtractor('2024-03-19')//yyyy-mm-dd
    // },
    // {
    //     id: 2,
    //     title :'vegetables',
    //     amount: 600,
    //     date: dateExtractor('2024-05-29') //yyyy-mm-dd
    // },
    // {
    //     id: 3,
    //     title :'mug',
    //     amount: 900,
    //     date: dateExtractor('2023-03-19') //yyyy-mm-dd
    // },
    // {
    //     id: 4,
    //     title :'stationary',
    //     amount: 100,
    //     date: dateExtractor('2024-03-19') //yyyy-mm-dd
    // },
    // {
    //     id: 5,
    //     title :'mobile',
    //     amount: 40000,
    //     date: dateExtractor('2024-09-18') //yyyy-mm-dd
    // },
    // {
    //     id: 6,
    //     title :'laptop',
    //     amount: 100000,
    //     date: dateExtractor('2024-09-22') //yyyy-mm-dd
    // },
    // {
    //     id: 7,
    //     title :'mouse',
    //     amount: 100,
    //     date: dateExtractor('2024-06-14') //yyyy-mm-dd
    // },
    // {
    //     id: 8,
    //     title :'pendrive',
    //     amount: 400,
    //     date: dateExtractor('2024-09-19') //yyyy-mm-dd
    // },
    // {
    //     id: 9,
    //     title :'bag',
    //     amount: 4000,
    //     date: dateExtractor('2024-09-16') //yyyy-mm-dd
    // },
    // {
    //     id: 10,
    //     title :'belt',
    //     amount: 400,
    //     date: dateExtractor('2024-09-15') //yyyy-mm-dd
    // },
    // {
    //     id: 11,
    //     title :'wallet',
    //     amount: 1000,
    //     date: dateExtractor('2024-09-22') //yyyy-mm-dd
    // },
    // {
    //     id: 12,
    //     title :'earphone',
    //     amount: 2000,
    //     date: dateExtractor('2024-09-19') //yyyy-mm-dd
    // },
    // {
    //     id: 13,
    //     title :'powerbank',
    //     amount: 900,
    //     date: dateExtractor('2024-09-18') //yyyy-mm-dd
    // },
    // {
    //     id: 14,
    //     title :'laptop sleeve',
    //     amount: 200,
    //     date: dateExtractor('2024-09-19') //yyyy-mm-dd
    // },
   
]
export let expenseContex = createContext({
    allExpense : [],
    addExpense : ()=>{},
    deleteExpense : ()=>{},
    updateExpense :()=>{},
    setExpense:()=>{}
})
function ExpenseProvider({children}) {
    const [allExpense,setAllExpense] = useState(DATA_DUMMY);

    let addExpense = (data)=>{

        setAllExpense(prevExpenses=>[data,...prevExpenses])
    }

    let setExpense = (data)=>{
        setAllExpense(data)
    }
    let deleteExpense = (id)=>{
        setAllExpense(prevExpenses=>prevExpenses.filter(ele=>ele.id!=id))
    }
    let updateExpense =(id,data)=>{
        setAllExpense(prevExpenses=>{
            let elementIndex = prevExpenses.findIndex(ele=>ele.id == id);
            let arrayCopy =  [...prevExpenses];
            if(elementIndex!=-1){
                let newElementToInsert = {...prevExpenses[elementIndex],...data};
                arrayCopy[elementIndex] = newElementToInsert;
            }
            return arrayCopy;
        })
    }

    let value = {
        allExpense,
        addExpense,
        updateExpense,
        deleteExpense,
        setExpense
    }

    return ( 
        <expenseContex.Provider value={value}>
            {children}
        </expenseContex.Provider>
     );
}

export default ExpenseProvider;
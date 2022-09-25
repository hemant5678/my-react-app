import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title : "College Fees",
        amount: 60000,
        date: new Date()
    },
    {
        id: 'e2',
        title : "Ration",
        amount: 5000,
        date: new Date(2022,8,)
    },
    {
        id: 'e3',
        title : "Recharge",
        amount: 2500,
        date: new Date(2022,8,1)
    },
    {
        id: 'e4',
        title : "Travelling",
        amount: 20000,
        date: new Date(2022,8,10)
    }
];

const App = () =>{

    const [expenses,setExpenses] = useState(DUMMY_EXPENSE)
    

    const addExpenseHandler = (expense) => {
        const updateExpense = [expense, ...expenses];
        setExpenses(updateExpense)

    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}
export default App;
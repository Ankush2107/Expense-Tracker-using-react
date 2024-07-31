import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenditure/Expenses';
import NewExpense from './components/NewFormExpense/NewExpense';

const initialExpenses = [
    { id: 'E1', title: 'Food', amount: 3800, date: new Date(2024, 1, 21) },
    { id: 'E2', title: 'House Rent', amount: 4500, date: new Date(2024, 2, 9) },
    { id: 'E3', title: 'Electric Bill', amount: 800, date: new Date(2024, 3, 10) },
    { id: 'E4', title: 'Petrol', amount: 1800, date: new Date(2024, 4, 13) }
];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpenseHandler = (newExpense) => {
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    };

    return (
        <div className="header">
            <h1>Welcome to Our World</h1>
            <p>Monthly Expenses Record Tracker</p>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;

import { useState } from 'react'; 
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const dateChangeHandler = (event) => setDate(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title,
            amount: parseFloat(amount),
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setDate('');
        setAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date:</label>
                    <input type="date" value={date} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;

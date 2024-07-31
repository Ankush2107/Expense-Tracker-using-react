import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI_Design/Card';

function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </Card>
    );
}

export default Expenses;

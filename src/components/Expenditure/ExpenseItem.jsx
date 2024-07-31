import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI_Design/Card';

function ExpenseItem({ title, date, amount }) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">{amount.toFixed(2)} Rupees</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;

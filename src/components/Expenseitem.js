import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
function Expenseitem(props){
    return (
        <div className="expense-item">

            <div>{props.expenseData.date.toString()}</div>
            <div>Date</div>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
        </div>
    )
}

export default Expenseitem
import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return(

        <diV className="expense-date">
        <diV className="expense-date__month">{month}</diV>
        <diV className="expense-date__day">{day}</diV>
        <diV className="expense-date__year">{year}</diV>
        </diV>

    );

}

export default ExpenseDate;
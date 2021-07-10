import Card from "../UI/Card";
import './Expenses.css';
import { useState } from 'react';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2021');

    const selectYearHandler = (year) => {

        //console.log(year);
        setFilteredYear(year);
    }

    const filteredExpenses = props.item.filter(expense => {

        return expense.date.getFullYear().toString() === filteredYear;


    });

    

    return (
       
         <Card className="expenses">

        <ExpenseFilter defaultYear={filteredYear} onSelectYear={selectYearHandler}/>

        <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesList items={filteredExpenses}/>

        </Card>

       
      
    )


}

export default Expenses;
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {

  const [isEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

 

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()

    };

    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);

    
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditinghandler = () => {
    setIsEditing(false);
  }




    return(

        <div className="new-expense">
          {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
          {isEditing && <ExpenseForm onCancel={stopEditinghandler} onSaveExpenseData={saveExpenseDataHandler}/> }
        </div>
        
    );

}

export default NewExpense;
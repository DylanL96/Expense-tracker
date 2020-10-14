import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ExpenseInputForm = (props) => {
  // console.log(props)
  return (
    <div class="col-sm-5" id="ExpenseForm">
      Expense Form
      <Form onSubmit={props.handleSubmitFormExpense} >
        <Form.Group controlId="formExpenseInput">
          <Form.Label class="labels">Enter your item here:</Form.Label>
          <Form.Control placeholder="Enter Item" value={props.expenseText} onChange={props.handleExpenseText}/>
        </Form.Group>

        <Form.Group controlId="formExpenseValue">
          <Form.Label class="labels">Enter your value here:</Form.Label>
          <Form.Control placeholder="Enter price" onChange={props.handleExpenseValue} value={props.expenseValue}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button> 
        <Form.Label id="displayExpense">Total Expense: $
        {props.valueExpense.reduce((accumulator, currentValue) => {
          return (accumulator += parseInt(currentValue.expenseValue))
        },0)}</Form.Label>
      </Form>
    </div>
  )
}

export default ExpenseInputForm
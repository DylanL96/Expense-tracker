import React from 'react';
import Table from 'react-bootstrap/Table';

const ListExpense = (props) => {
  console.log(props)
  return (
    <div>
        <Table striped bordered hover id="expenseTable">
        <thead>
          <th>Expense</th>
          <th>Value</th>
          </thead>
          <tbody>
          {props.valueExpense.map(val =><tr><td>{val.expenseText}</td> 
          <td>{val.expenseValue}</td></tr>)}
          </tbody>
      </Table>
    </div>
  )
}

export default ListExpense
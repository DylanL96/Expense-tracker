import React from 'react';
import Table from 'react-bootstrap/Table';

const ListIncome = (props) => {
  // console.log(props)
  return (
    <Table striped bordered hover id="incomeTable">
      <thead>
        <th>Income</th>
        <th>Value</th>
        </thead>
        <tbody>
        {props.valueIncome.map(val => <tr><td>{val.incomeText}</td> 
        <td>{val.incomeValue}</td></tr>)}
        </tbody>
    </Table>
  )
}

export default ListIncome
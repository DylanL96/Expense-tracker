import React from 'react';

const Total = (props) => {
  // console.log(props)
  let incomeReduce = props.valueIncome.reduce((accumulator, currentValue) => { return (accumulator += parseInt(currentValue.incomeValue))
  }, 0)

  let expenseReduce = props.valueExpense.reduce((accumulator, currentValue) => { return (accumulator += parseInt(currentValue.expenseValue))
  }, 0)

  let diff = incomeReduce - expenseReduce;

  return (
    <div id="total">
      <h1>Balance: $ {diff} </h1>
    </div>
  )
}

export default Total;
import React, { useState } from 'react';
import Total from './components/Total';
import ListIncome from './components/ListIncome';
import ListExpense from './components/ListExpense';
import IncomeInputForm from './components/IncomeInputForm';
import ExpenseInputForm from './components/ExpenseInputForm';
import './app.css';

const App = () => {
  const income = []
  const expense = []
  const [valueExpense, setValueExpense] = useState(expense)
  const [valueIncome, setValueIncome] = useState(income)
  const [incomeText, setIncomeText] = useState('')
  const [incomeValue, setIncomeValue] = useState('')
  const [expenseText, setExpenseText] = useState('')
  const [expenseValue, setExpenseValue] = useState('')

  const handleIncomeText = (event) => {
    // console.log(`The income item is: ${event.target.value}`)
    setIncomeText(event.target.value)
  }

  const handleExpenseText = (event) => {
    // console.log(`The expense text is ${event.target.value}`)
    setExpenseText(event.target.value)
  }

  const handleIncomeValue = (event) => {
    // console.log(`The income value is: ${event.target.value}`)
    setIncomeValue(event.target.value)
  }

  const handleExpenseValue = (event) => {
    // console.log(`The expense value is ${event.target.value}`)
    setExpenseValue(event.target.value)
  }

  // Income logic
  const handleSubmitFormIncome = (event) => {
    event.preventDefault()
  
  // Tests to see if the inputted value is only numbers
  let isnumIncome = /^\d+$/.test(incomeValue);

    if(incomeValue === '' && incomeText === ''){
      alert('Missing income text and value')
    } else if (incomeText === ''){
      alert('Missing income text')
    } else if (!isnumIncome){
      alert('Only numbers allowed')
    } else if (incomeValue === '') {
      alert('Missing income value')
    } else if (incomeValue <= 0) {
      alert('Income cannot be less than 0')
    } else {

      const incomeObject = {
        incomeText: incomeText,
        incomeValue: incomeValue,
      }
      setValueIncome(valueIncome.concat(incomeObject))
      setIncomeText('')
      setIncomeValue('')
    }
  }

  // Expense logic
  const handleSubmitFormExpense = (event) => {
    event.preventDefault()

    // Tests to see if the inputted value is only numbers
    let isnumExpense = /^\d+$/.test(expenseValue);

    if(expenseValue === '' && expenseText === ''){
      alert('Missing expense text and value')
    } else if (expenseText === ''){
      alert('Missing expense text')
    } else if (!isnumExpense){
      alert('Only numbers allowed')
    } else if (expenseValue === '') {
      alert('Missing expense value')
    } else if (expenseValue <= 0) {
      alert('Income cannot be less than 0')
    } else {

      const expenseObject = {
        expenseText: expenseText,
        expenseValue: expenseValue,
      }
      setValueExpense(valueExpense.concat(expenseObject))
      setExpenseText('')
      setExpenseValue('')
    }

  }

  return (
    <div>
      <Total valueExpense={valueExpense} valueIncome={valueIncome}/>
      <IncomeInputForm incomeText={incomeText} incomeValue={incomeValue} handleIncomeText={handleIncomeText} handleIncomeValue={handleIncomeValue} handleSubmitFormIncome={handleSubmitFormIncome} valueIncome={valueIncome} />
      <ExpenseInputForm expenseText={expenseText} expenseValue={expenseValue}handleExpenseText={handleExpenseText} handleExpenseValue={handleExpenseValue} handleSubmitFormExpense={handleSubmitFormExpense} valueExpense={valueExpense}  />
      <ListIncome valueIncome={valueIncome}/>
      <ListExpense valueExpense={valueExpense}/>
    </div>
  )
}

export default App
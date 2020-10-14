import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const IncomeInputForm = (props) => {
  // console.log(props)
  return (
    <div class="col-sm-5" id="InputForm">
      Income Form
      <Form onSubmit={props.handleSubmitFormIncome}>
        <Form.Group controlId="formIncomeInput">
          <Form.Label class="labels">Enter your item here:</Form.Label>
          <Form.Control placeholder="Enter Item" value={props.incomeText} onChange={props.handleIncomeText} />
        </Form.Group>

        <Form.Group controlId="formIncomeValue">
          <Form.Label class="labels">Enter your value here:</Form.Label>
          <Form.Control placeholder="Enter price" onChange={props.handleIncomeValue} value={props.incomeValue}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        <Form.Label id="displayIncome">Total Income: ${props.valueIncome.reduce((accumulator, currentValue) => {
        return (accumulator += parseInt(currentValue.incomeValue))
      },0)}</Form.Label>
      </Form>
    </div>
  )
}

export default IncomeInputForm
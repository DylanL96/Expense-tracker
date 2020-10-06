import React, { useState } from 'react';

const Display = (props) => {
  return(
    <div>${props.value}</div>
  )
}

const Add = (props) => {
  return (
    <form onSubmit={props.handleClick}>
      <input value={props.newNote} onChange={props.handleChange}/>
      <button type="submit">Save</button>
    </form>
  )
}

const App = () => {
  const [value, setValue] = useState(0)
  const [newNote, setNewNote] = useState('')
  const handleClick = (event) => {
    // console.log(event.target)
    event.preventDefault()
    setValue(newNote)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <Display value={value}/>
      <Add handleClick={handleClick} handleChange={handleChange}/>
    </div>
    
  )
}

export default App;

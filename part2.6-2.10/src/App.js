import React, { useState } from 'react'

import Person from './components/Person'



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    //console.log('this is the name added',newName)
    //console.log('this is the number added', newNumber)
    
    if(persons.some(person =>person.name === newName)){
      window.alert(`${newName} is already added to phonebook`);
      setNewName('')
    }
    else {
      const personObject ={
        name: newName,
        number: newNumber
    }

      setPersons(persons.concat(personObject))
      window.alert(`${newName} was successfully added`);
      setNewName('')
  }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event)=>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <form onSubmit ={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      <ul>
        {persons.map(person => <Person key = {person.name} person ={person}/>)}
      </ul>
    </div>
  )
}

export default App

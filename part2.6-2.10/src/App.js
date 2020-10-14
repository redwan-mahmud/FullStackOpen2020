import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filter, setFilter] = useState("")

//part 2.11
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promisefulfilled')
        setPersons(response.data)
      })
  },[])
console.log('render', persons.length, 'persons')
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    //console.log('this is the name added',newName)
    //console.log('this is the number added', newNumber)
    var id = persons.length 
    
    if(persons.some(person =>person.name === newName)){
      window.alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
      setFilter('')
    }
    else {
      const personObject ={
        name: newName,
        number: newNumber,
        id: ++id
    }
      
      setPersons(persons.concat(personObject))
      window.alert(`${newName} was successfully added`);
      setNewName('')
      setNewNumber('')
      setFilter('')
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

  const handleFilter = (event)=>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  //ex 2.9

  //const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
 // console.log("Okay till here line 64")
 //console.log("This is the filter value",filter)
 console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value = {filter} handleFilter = {handleFilter}/>
      
      
      <PersonForm addName = {addName} newName = {newName} newNumber = {newNumber} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}/>
      
      
      
      <Persons persons = {persons} filter = {filter} />
    </div>
  )
}

export default App

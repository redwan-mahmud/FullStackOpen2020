import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
//import axios from 'axios'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [ notification, setNotification ] = useState(null)

  //const [deleteName, removeName] = useState("")

//part 2.11
  useEffect(() => {
    //console.log('effect')
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  },[])
//console.log('render', persons.length, 'persons')
  


const notifyWith = (message, type='success') => {
  setNotification({ message, type })
  setTimeout(() => {
    setNotification(null)
  }, 5000)
}


const addName = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    //console.log('this is the name added',newName)
    //console.log('this is the number added', newNumber)
    //var id = persons.length 
    const existing = persons.find(p => p.name === newName)
    
    if(existing){
      const ok = window.confirm(`${existing.name} already in phonebook, replace old number with new one? `)
      if(ok){
        personService
        .update(existing.id, {
          name: existing.name,
          number: newNumber
        }). then(returnedPerson => {
          setPersons(persons.map(person => person.id !== existing.id ? person: returnedPerson.data))
          notifyWith(`Changed number of ${existing.name}`)
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else {
      const personObject ={
        name: newName,
        number: newNumber,
      }
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        window.alert(`${newName} was successfully added`);
        setNewName('')
        setNewNumber('')
      }).catch( error => {
        console.log(error.response.data.error)
        notifyWith(`${error.response.data.error}`,'error')
      })


    }
  }
  


    /*
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
        //id: ++id
    }*/
      
      //setPersons(persons.concat(personObject))
  

  const deletePerson = (id) => {
    //event.preventDefault()
    //console.log("Id of " + id + " needs to be deleted")
    const toDelete = persons.find( q => q.id === id)
    console.log(toDelete.name)
    let result = window.confirm(`Delete ${toDelete.name}`)
    if(result){
      console.log("Deletion in progression")
      personService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(q => q.id !==id))
        notifyWith(`Deleted ${toDelete.name}`)
      })
    }
    else{
      console.log("Don't delete")
    }

  }

  const handleNameChange = (event) => {
    //console.log("event.target.value")
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event)=>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event)=>{
    //console.log(event.target.value)
    setFilter(event.target.value)
  }



  //ex 2.9

  //const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
 // console.log("Okay till here line 64")
 //console.log("This is the filter value",filter)
 //console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />
      
      <Filter value = {filter} handleFilter = {handleFilter}/>
      
      
      <PersonForm addName = {addName} newName = {newName} 
      newNumber = {newNumber} handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange}/>
      
      
      
      <Persons persons = {persons} filter = {filter}  deletePerson = {deletePerson} />
    </div>
  )
}

export default App

import React from 'react'
import Person from './Person'
const Persons = ({persons, filter})=> {
    
    const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return(
    <div>
    <h2>Phonebook</h2>    
    <ul>
      
        {results.map(person => <Person key = {person.id} person = {person}/>)}
    </ul>
    </div>
    )
}

export default Persons 
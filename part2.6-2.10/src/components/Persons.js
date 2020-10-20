import React from 'react'
//import Person from './Person'
const Persons = ({persons, filter, deletePerson})=> {
    
    const results = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    //console.log(results.map(person => person.id))
    return(
    <div>
    <h2>Phonebook</h2>    
    <ul>
      
        {results.map(person => 
            <li key = {person.id}>
                {person.name} {person.number}
                <button onClick = {() => deletePerson(person.id)}> delete</button>
            </li>)}
    </ul>
    </div>
    )
}

export default Persons 
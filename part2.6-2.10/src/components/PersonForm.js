import React from 'react'

const PersonForm = ({addName,newName,newNumber,handleNameChange,handleNumberChange}) =>{
    //console.log("Form component working")
    return (
    <div>
        <h2>add a new contact</h2>
    <form onSubmit ={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>

)}



export default PersonForm 
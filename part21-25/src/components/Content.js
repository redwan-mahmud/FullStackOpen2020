import React from 'react'
const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>    
    )
  }

const Content = ({ parts }) => {
    console.log("Content.js", parts)
    return (
      <div>
        {parts.map(part => 
        <Part key ={part.id} name= {part.name} exercises = {part.exercises}/>
        )}
      </div>
    )
  }

  export default Content
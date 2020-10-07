import React from 'react'


const Total = ({ parts }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

    //const reducer = (accumulator, currentValue) => accumulator + currentValue
    const sum = parts.reduce((prevValue,currentValue)=> prevValue + currentValue.exercises,0)
    //const sum = course.parts.reduce((accumulator, current) => accumulator + current.exercises, 0)
    console.log(sum)
    return (
        <h3>Number of exercises {sum}</h3>
    )
    //console.log(prevValue, currentValue)
    
    //console.log(course.parts.exercises.reduce(reducer))
    /*
    return(
      
    ) */
  }

export default Total
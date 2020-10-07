import React from 'react'

import Total from './Total'
import Header from './Header'
import Content from './Content'



const Course = ({course}) => {
    //console.log("This is from course", course.name)
    //console.log("This is from course", course.parts)
    return(
    
    <div>
    <Header course = {course.name}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
    </div>
)}


export default Course
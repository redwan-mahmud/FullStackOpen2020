import React from 'react'
// exercises 2.1 to 2.3 

const Header = ({ course }) => {
    console.log("Header",course)
    return (
      <h2>{course}</h2>
    )
  }

  export default Header
import React from "react"

const Person =({person}) => {
    //console.log("From person.js",person.name)
    //console.log("From person.js",person.number)
    

    return(
    <div>
        {person.name} {person.number}
    </div>
    )

}

export default Person

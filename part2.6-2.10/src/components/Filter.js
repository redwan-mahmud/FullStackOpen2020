import React from "react"


const Filter = ({filter, handleFilter}) => {
    return(
        <div>
            Search: <input value = {filter} onChange = {handleFilter}/>

        </div>
    )
}

export default Filter
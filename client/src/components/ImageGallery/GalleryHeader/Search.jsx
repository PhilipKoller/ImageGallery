import React, { useState } from "react";


const Search = ({ handleSearch }) => {
    const [name, setName] = useState("");

    const onChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <input value={name} onChange={(e) => {onChange(e)}} 
            />
            <button onClick={() => { handleSearch(name) }}>Search</button>
        </>

    )
}

export default Search;
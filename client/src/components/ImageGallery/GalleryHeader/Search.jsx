import React, { useState } from "react";
import InputBase from '@mui/material/InputBase';

const Search = ({ handleSearch }) => {
 //   const [name, setName] = useState("");

/*     const onChange = (e) => {
        setName(e.target.value)
    } */

    const enterPressed = (e) => {
        let code = e.keyCode || e.which
        if (code === 13) {
            handleSearch(e.target.value)
        }
    }
    return (
        <>
            <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={(e) => { enterPressed(e) }}
                className="input-header"
            />
{/*             <input value={name} onChange={(e) => { onChange(e) }}
            />
            <button onClick={() => { handleSearch(name) }}>Search</button> */}
        </>

    )
}

export default Search;
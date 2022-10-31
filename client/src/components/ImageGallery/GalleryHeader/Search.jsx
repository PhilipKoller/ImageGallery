import React, { useState } from "react";
import InputBase from '@mui/material/InputBase';

const Search = ({ handleSearch }) => {
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
        </>

    )
}

export default Search;
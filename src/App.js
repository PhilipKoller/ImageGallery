import React from 'react';
import axios from 'axios';

export function App() {
    axios.get('/upload')
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

    return (
        <div>
            <h1>Hi { new Date().toDateString() }</h1>
        </div>
    )
}
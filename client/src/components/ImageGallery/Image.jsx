import React from 'react';

const Image = ({ imageBase64 }) => {

    return (
        <div>
            <img src={`data:image/jpeg;base64,${imageBase64}`} alt="Girl in a jacket" width="500" height="600"></img>
        </div>
    )
}

export default Image;



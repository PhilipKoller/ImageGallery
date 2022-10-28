import React from 'react';

const Image = ({imageBuffer}) => {
    return (
        <img src={`data:image/jpeg;base64,`} alt="Girl in a jacket" width="500" height="600"></img>
    )
}

export default Image;



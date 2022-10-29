import React, {useState, useEffect}from 'react';
const Buffer = require('buffer/').Buffer

const Image = ({ imageData }) => {
    let [imageBase64, setImageBase64] = useState();

    useEffect(() => {
         setImageBase64(Buffer.from(imageData.image.data.data).toString('base64'));
    },[])

    return (
        <div>
            {
                imageBase64 ? <img src={`data:image/jpeg;base64,${imageBase64}`} alt={`${imageData.name}`} width="500" height="600"></img> : null
            }

        </div>
    )
}

export default Image;
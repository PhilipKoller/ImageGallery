import React from 'react'
const Buffer = require('buffer/').Buffer 
import Image from './Image.jsx';

const GalleryBody = ({ images }) => {
    return (
        images.map((imageData) => {
            let imageBase64 = Buffer.from(imageData.image.data.data).toString('base64');
            return <Image imageBase64={imageBase64} key={imageData._id} />
        })
    )
}

export default GalleryBody;
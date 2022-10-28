import React from 'react';
import Image from './Image.jsx';
const Buffer = require('buffer/').Buffer 


const GalleryBody = ({ images }) => {
    return (
        images.map((imageData) => {
            /*  <Image imageBuffer = {imageData.image.data.data} /> */
            var buf = Buffer.from(imageData.image.data.data).toString('base64');
            console.log(buf);
        })

    )
}

export default GalleryBody;
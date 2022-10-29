import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
const Buffer = require('buffer/').Buffer


const GalleryBody = ({ images }) => {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            {images.map((imageData) => {
                // Convert to base64 
                let imageBase64 = Buffer.from(imageData.image.data.data).toString('base64');
                return <>
                    <ImageListItem key={imageData._id}>
                        <img
                            src={`data:image/jpeg;base64,${imageBase64}`}
                            srcSet={`data:image/jpeg;base64,${imageBase64}`}
                            alt={imageData.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={
                                imageData.name.length > 20
                                    ? imageData.name.slice(0, 20) + "..."
                                    : imageData.name
                            }
                            subtitle={<span>Date Created: {new Date(`${imageData.createdAt}`).toDateString()}</span>}
                            position="below"
                        />
                    </ImageListItem>
                </>
            })}
        </ImageList>
    )
}

export default GalleryBody;
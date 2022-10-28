import React from 'react';
import Upload from './Upload.jsx';
import Search from './Search.jsx';



const GalleryHeader = ({handleImageUpload}) => {
    return (
       <Upload handleImageUpload={handleImageUpload}/>
    )
}

export default GalleryHeader;
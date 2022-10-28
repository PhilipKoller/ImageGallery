import React from 'react';
import Upload from './Upload.jsx';
import Search from './Search.jsx';



const GalleryHeader = ({ handleImageUpload, handleSearch }) => {
    return (
        <>
            <Upload handleImageUpload={handleImageUpload} />
            <Search handleSearch={handleSearch} />
        </>
    )
}

export default GalleryHeader;
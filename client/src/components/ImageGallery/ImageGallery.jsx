import React, { useState, useEffect } from "react";
import axios from 'axios';
import GalleryHeader from "./GalleryHeader/GalleryHeader.jsx";
import GalleryBody from "./GalleryBody.jsx";
import DisplayModal from './DisplayModal/DisplayModal.jsx';
import '../../App.css'

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    //const [displayModal, setDisplayModal] = useState(false);
    const [searchedImage, setSearchedImage] = useState();

    useEffect(() => {
        axios.get('/images')
            .then((res) => {
                setImages(res.data)
            })
    }, [])

    const handleImageUpload = (e) => {
        const form = document.getElementById('form');
        e.preventDefault();
        var formData = new FormData(form);
        formData.append('image', document.getElementById('imageInput').value);
        axios.post('/upload', formData)
            .then((res) => {
                setImages([...images, res.data])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSearch = (name) => {
        // look through state to find image
        for (let image of images) {
            if (image.name === name) {
                setSearchedImage(image);
                return;
            }
        }
        alert(`image: ${name} not found`)
    }

    return (
        <>
            <div className="container">
                <div className="image-gallery">
                    <div className="image-header">
                    <GalleryHeader handleImageUpload={handleImageUpload} handleSearch={handleSearch} />
                    </div>
                    <GalleryBody images={images} />
                    {
                        searchedImage ? <DisplayModal setSearchedImage={setSearchedImage} imageData={searchedImage} /> : null
                    }
                </div>
            </div>
        </>

    )
}

export default ImageGallery;
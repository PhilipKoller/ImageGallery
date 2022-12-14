import React, { useState, useEffect } from "react";
import axios from 'axios';
import GalleryHeader from "./GalleryHeader/GalleryHeader.jsx";
import GalleryBody from "./GalleryBody.jsx";
import DisplayModal from './DisplayModal/DisplayModal.jsx';
import '../../App.css'

const ImageGallery = () => {
    const [images, setImages] = useState([]);
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
        let formData = new FormData(form);
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
            image.name.length > 20 ? image.name = image.name.slice(0,20) : null
            if (image.name === name) {
                setSearchedImage(image);
                return;
            }
        }
        alert(`image: ${name} not found`)
        
         // Query Database to get Image
        /* 
           axios.get(`/image${name}`)
            .then((res) => { 
                setSearchedImage(res.data);
             })
             .catch((err) => {
                alert(`an error has occured: ${err}`)
            }) 
        */
    }

    const handleDelete = (imageData) => {
         axios.delete(`/image${imageData._id}`, )
        .then((res) => {
            console.log(res.data)
            //TODO: Update state to reflect delete image 
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    return (
        <>
            <div className="container">
                <div className="image-gallery">
                    <div className="image-header">
                        <GalleryHeader handleImageUpload={handleImageUpload} handleSearch={handleSearch} />
                    </div>
                    <div className="image-body">
                        <GalleryBody images={images} />
                        {
                            searchedImage ? <DisplayModal setSearchedImage={setSearchedImage} imageData={searchedImage} handleDelete={handleDelete}/> : null
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default ImageGallery;
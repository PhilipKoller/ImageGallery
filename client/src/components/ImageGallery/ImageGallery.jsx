import React, { useState, useEffect } from "react";
import axios from 'axios';
import GalleryHeader from "./GalleryHeader/GalleryHeader.jsx";
import GalleryBody from "./GalleryBody.jsx";
import DisplayModal from './DisplayModal/DisplayModal.jsx';

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
        let response;
         axios.get(`/images${name}`)
          .then((res) => {
            console.log(res.data);
            setSearchedImage(res.data);
        })
        .catch((err) => {

        })
        //let imageBase64 = Buffer.from(res.data.image.data.data).toString('base64');

    }

   // const handleModalOpen = () => setDisplayModal(true);
    const handleSearchedImage = () => setSearchedImage([]);

    return (
        <>
            <GalleryHeader handleImageUpload={handleImageUpload} handleSearch={handleSearch} />
            <GalleryBody images={images} />
            {
                searchedImage ? <DisplayModal setSearchedImage={setSearchedImage} imageData={searchedImage}/> : null
            }
        </>

    )
}

export default ImageGallery;
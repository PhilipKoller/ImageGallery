import React, {useState, useEffect} from "react";
import axios from 'axios';
import GalleryHeader from "./GalleryHeader/GalleryHeader.jsx";
import GalleryBody from "./GalleryBody.jsx";

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('/images')
        .then((res) => {
            setImages(res.data)
        })
    },[])

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

    return (
        <div>
            <GalleryHeader handleImageUpload={handleImageUpload} />
            <GalleryBody images={images}/>
        </div>

    )
}

export default ImageGallery;
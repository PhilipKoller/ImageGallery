import React from "react";
import axios from 'axios';
import GalleryHeader from "./GalleryHeader.jsx";
import GalleryBody from "./GalleryBody.jsx";

const ImageGallery = () => {

    const form = document.getElementById('form');

    const handleImageUpload = (e) => {
        const form = document.getElementById('form');
        e.preventDefault();
        var formData = new FormData(form);
        axios.post('/upload', formData)
            .then((res) => {
                console.log(res);
            })
        /*         formData.append('userName', "fred");
           
                axios({
                   method: "post",
                   url: "/test",
                   data: formData,
                   headers: { "Content-Type": "multipart/form-data"}
                }).then((res) => {
                   console.log('res', res)
                }) */
    }

    return (
        <div>
            <GalleryHeader handleImageUpload={handleImageUpload} />
            <GalleryBody />
        </div>

    )
}

export default ImageGallery;
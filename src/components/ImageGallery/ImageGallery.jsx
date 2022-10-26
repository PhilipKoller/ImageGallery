import React from "react";
import axios from 'axios';

const ImageGallery = () => {

    const form = document.getElementById('form');

    const uploadImage = (e) => {

        const form = document.getElementById('form');
        e.preventDefault();
        var formData = new FormData(form);
        axios.post('/upload', formData);
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
        <form id="form">
            <label>Select Photo</label><br />
            <input type="file" name="image" accept="image/*"></input>
            <button type="submit" onClick={(e) => { uploadImage(e) }}>Submit</button>
        </form>
    )
}

export default ImageGallery;
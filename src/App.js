import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

export function App() {

    const form = document.getElementById('form');

    const uploadImage = (e) => {
        const form =  document.getElementById('form');
        e.preventDefault();
            var formData = new FormData(form);
    
            console.log(...formData)
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
                <label for="photo">Select Photo</label><br/>
                <input type="file" name="image" accept="image/*"></input>

                <button type="submit" onClick={(e) => {uploadImage(e)}}>Submit</button>
            </form>
          ) 
}
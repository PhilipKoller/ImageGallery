import React from "react";
import Button from '@mui/material/Button';

const Upload = ({ handleImageUpload }) => {
    return (
        <form id="form">
            <Button variant="contained" component="label" >
                Upload
                <input hidden accept="image/*" multiple type="file" name="image"  id="imageInput" onChange={(e) => { handleImageUpload(e) }} />
            </Button>
        </form>
    )
}

export default Upload;
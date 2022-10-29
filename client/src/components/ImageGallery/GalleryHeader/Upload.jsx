import React from "react";

const Upload = ({ handleImageUpload }) => {
    return (
        <form id="form">
            <label htmlFor="imageInput">Select Photo</label> <br/>
            <input type="file" name="image" accept="image/*" id="imageInput" required="file" onChange={(e) => { handleImageUpload(e) }} />
        </form>
    )
}

export default Upload;
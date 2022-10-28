import React from "react";

const Upload = ({handleImageUpload}) => {
    return (
        <form id="form">
            <label>Select Photo</label><br />
            <input type="file" name="image" accept="image/*" id="imageInput" onChange={(e) => {handleImageUpload(e)}}></input>
        </form>
    )
}

export default Upload;
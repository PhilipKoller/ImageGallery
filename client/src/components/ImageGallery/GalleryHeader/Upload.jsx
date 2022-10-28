import React from "react";

const Upload = ({handleImageUpload}) => {
    return (
        <form id="form">
            <label>Select Photo</label><br />
            <input type="file" name="image" accept="image/*" id="imageInput"></input>
            <button type="submit" onClick={(e) => { handleImageUpload(e) }}>Submit</button>
        </form>
    )
}

export default Upload;
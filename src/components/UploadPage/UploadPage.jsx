import React, { useState } from "react";
import { UploadPageWrap } from "./Upload.Page";
import Lofoten6 from "./Lofoten6.jpg";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement your upload logic here, e.g., using fetch or axios
    console.log(selectedImage);
  };

  return (
    <UploadPageWrap>
      <div className="UploadPage">
        <h1 className="header">
          <img className="main-image" src={Lofoten6} alt="Lofoten" />
        </h1>
        <div className="upload-inputs">
          <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
          <button className="upload-button" onClick={() => handleUpload()}>Upload</button>
        </div>
      </div>
    </UploadPageWrap>
  );
};

export default ImageUploader;

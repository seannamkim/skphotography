import React, { useState } from "react";
import { UploadPageWrap } from "./Upload.Page";

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
        UPLOAD
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={() => handleUpload()}>Upload</button>
      </div>
    </UploadPageWrap>
  );
};

export default ImageUploader;

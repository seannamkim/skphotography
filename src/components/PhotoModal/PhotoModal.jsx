import React, { useEffect } from "react";
import { PhotoModalWrap } from "./Photo.Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const PhotoModal = ({ selectedPhoto, setOpenPhotoModal }) => {
  const handleCloseModal = () => {
    setOpenPhotoModal(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  return (
    <PhotoModalWrap>
      <div className="PhotoModal">
        <div className="photo-modal">
          <img className="photo-pop" alt={selectedPhoto} src={selectedPhoto} />
          <div className="close-modal">
            <FontAwesomeIcon
              className="close-icon"
              icon={faClose}
              onClick={() => handleCloseModal()}
            />
          </div>
        </div>
      </div>
    </PhotoModalWrap>
  );
};

export default PhotoModal;

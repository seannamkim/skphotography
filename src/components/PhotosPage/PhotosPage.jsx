import React from "react";
import { PhotosPageWrap } from "./Photos.Page";
import { Link } from "react-router-dom";

const PhotosPage = ({ allPhotos }) => {
  const photos = Object.entries(allPhotos);

  const filteredIcelandPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("iceland")
  );

  const filteredGreenlandPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("greenland")
  );

  const filteredPatagoniaPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("patagonia")
  );

  const filteredLofotenPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("lofoten")
  );

  const filteredSeoulPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("seoul")
  );

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          <div className="greenland-photos photos-column">
            <Link to="/photos/greenland" className="location-link">
              <h2>GREENLAND</h2>
              <img
                className="photo"
                src={filteredGreenlandPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="iceland-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>ICELAND</h2>
              <img
                className="photo"
                src={filteredIcelandPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="lofoten-photos photos-column">
            <Link to="/photos/lofoten" className="location-link">
              <h2>LOFOTEN</h2>
              <img
                className="photo"
                src={filteredLofotenPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="patagonia-photos photos-column">
            <Link to="/photos/patagonia" className="location-link">
              <h2>PATAGONIA</h2>
              <img
                className="photo"
                src={filteredPatagoniaPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="seoul-photos photos-column">
            <Link to="/photos/seoul" className="location-link">
              <h2>SEOUL</h2>
              <img className="photo" src={filteredSeoulPhotos[0][1]} alt={""} />
            </Link>
          </div>
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;

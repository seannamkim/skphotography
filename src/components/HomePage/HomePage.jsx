import React from "react";
import { HomePageWrap } from "./Home.Page";
import Lofoten12 from "./Lofoten12.jpg";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <HomePageWrap>
      <div className="HomePage">
        <div className="header">
          <img className="main-image" src={Lofoten12} alt="Lofoten" />
        </div>
        <Link to="/photos" className="photo-link">
          EXPLORE
          {/* <FontAwesomeIcon icon={faCaretRight} /> */}
        </Link>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;

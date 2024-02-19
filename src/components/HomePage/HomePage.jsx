import React from "react";
import { HomePageWrap } from "./Home.Page";
import Lofoten12 from "./Lofoten12.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomePageWrap>
      <div className="HomePage">
        <div className="header">
          <img className="main-image" src={Lofoten12} alt="Lofoten" />
        </div>
        <Link to="/photos" className="photo-link">
          EXPLORE
        </Link>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;

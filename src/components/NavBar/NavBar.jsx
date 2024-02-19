import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      //  Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  const handlSecondaryeLeave = () => {
    setDropdownVisible(false);
  };

  const photosDropdown = (
    <div className="photos-dropdown">
      <div className="dropdown-items">
        <Link
          to="/photos/greenland"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          GREENLAND
        </Link>
        <Link
          to="/photos/iceland"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          ICELAND
        </Link>
        <Link
          to="/photos/lofoten"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          LOFOTEN
        </Link>
        <Link
          to="/photos/patagonia"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          PATAGONIA
        </Link>
        <Link
          to="/photos/seoul"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          SEOUL
        </Link>
      </div>
    </div>
  );

  return (
    <NavBarWrap>
      <div className="NavBar" ref={wrapperRef}>
        <h1>SEANNA KIM</h1>
        <div className="nav-links">
          <Link
            to="/home"
            className={selectedTab.includes("home") ? "selected" : "nav-link"}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={selectedTab.includes("about") ? "selected" : "nav-link"}
          >
            ABOUT
          </Link>
          <Link
            to="/photos"
            className={selectedTab.includes("photos") ? "selected" : "nav-link"}
          >
            PHOTOS
          </Link>
          {dropdownVisible ? (
            <FontAwesomeIcon
              className={
                selectedTab.includes("photos")
                  ? "selected dropdown-arrow-down"
                  : "nav-link dropdown-arrow-down"
              }
              icon={faCaretDown}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            />
          ) : (
            <FontAwesomeIcon
              className={
                selectedTab.includes("photos")
                  ? "selected dropdown-arrow-right"
                  : "nav-link dropdown-arrow-right"
              }
              icon={faCaretRight}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            />
          )}
          {dropdownVisible && photosDropdown}
          <Link
            to="/upload"
            className={selectedTab.includes("upload") ? "selected" : "nav-link"}
          >
            UPLOAD
          </Link>
        </div>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;

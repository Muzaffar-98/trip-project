import React, { useState } from "react";
import "./BottomHeader.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./img/Logo.png";
import user from "./img/User_01.svg";
import hamburger from "./img/Hamburger_MD.svg";
import x_mark from "./img/x_mark.png";

const MainHeader = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  const [hamburgerShown, setHamburgerShown] = useState(false);
  const clickHandler = () => {
    setHamburgerShown(!hamburgerShown);
    document.body.classList.toggle("overflow-hidden");
  };
  const backClick = () => {
    setHamburgerShown(!hamburgerShown);
    document.body.classList.toggle("overflow-hidden");

  }
  return (
    <header>
      <div className="container">
        <div className="main-header-wrapper">
          <div className="header-links">
            <button
              onClick={clickHandler}
              className="hamburger-btn"
              type="button"
            >
              <img src={hamburgerShown ? x_mark : hamburger} alt="hamburger" />
            </button>
            <ul>
              <li>
                <NavLink className="link" to="/destination?sort=asc">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/destination/italy">
                  Private trips
                </NavLink>
              </li>
            </ul>
            <div
              className={`hamburger-menu-none ${
                hamburgerShown ? "hamburger-menu-shown" : ""} `}
            >
              <ul className={`d-none ${hamburgerShown ? "ul-shown" : ""}`}>
                <li>
                  <NavLink className="link" to="/destination?sort=asc">
                    Destinations
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/destination/italy">
                    Private trips
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/about">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="buttons">
            <Link className="link user" to="/signIn">
              <img src={user} alt="user" />
            </Link>
            <Link className="link lucky" to="/signIn">
              I'm Feeling Lucky
            </Link>
            <Link className="link login" to="/signIn">
              Login
            </Link>
          </div>
          <div onClick={backClick} className={hamburgerShown? 'background-opacity':'d-none'}>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

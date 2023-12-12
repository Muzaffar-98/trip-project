import React from "react";
import "./SignInPage.css";
import signInImg from "./img/image.png";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/Logo.png";
import prevArr from "./img/Chevron_Left.svg";

import LoginPage from "./LoginPage";
import ForgotPass from "./ForgotPass";
import CreateAcc from "./CreateAcc";

const SignInPage = () => {
  const location = useLocation();

  const prevClick = () => {
    window.history.back();
  };

  return (
    <div className="sign-in">
      <img src={signInImg} alt="signInImg" />

      <div className="sign-in-right">
        <div className="sign-in-container">
          <div className="sign-in-right-inner">
            <div className="right-head">
              {location.pathname === "/password" && (
                <div onClick={prevClick} className="prev-arrow">
                  <img src={prevArr} alt="prevArr" />
                </div>
              )}
              {location.pathname === "/createAcc" && (
                <div onClick={prevClick} className="prev-arrow">
                  <img src={prevArr} alt="prevArr" />
                </div>
              )}
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {location.pathname === "/signIn" && <LoginPage />}
            {location.pathname === "/password" && <ForgotPass />}
            {location.pathname === "/createAcc" && <CreateAcc />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

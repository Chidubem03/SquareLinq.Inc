import React from "react";
import shineLogo from "../Images/shineLogo.png";
import slider from "../Images/auth-pagination-slider.png";
import "./resetSuccess.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import leftsideImg from "../Images/selfie.png";

// import { Link } from "react-router-dom/cjs/react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="getstarted-container">
      <div className="interactive-sec_container" style={{ backgroundImage: `url(${leftsideImg})` }}>
        <div>
          <h1>
            Interactive <img src={shineLogo} alt="shine logo" id="shine-logo" />{" "}
          </h1>
          <br />
          <p className="paragraph-info">
            Join a community of like minded people where you can free air you
            opinions, discuss new trends and shared interests. Interact with
            your friends, family, colleagues and teammates as you you strengthen
            the bond between one another...
          </p>
          <img src={slider} className="slides" alt="slider" />
          </div>
      </div>
      <section className="reset-success-section">
        <article className="reset-success-article">
          <h1 id="reset-pswd-1">Password Reset Successfully</h1>
          <p>Your password has been successfully changed, now Sign In</p>
          <div className="check-container">
            <IoCheckmarkOutline />
          </div>
          <button className="suggested-btn">
            Continue
          </button>
        </article>
      </section>
    </div>
  );
};

export default ResetSuccess;

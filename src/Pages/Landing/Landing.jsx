import openBrowser from "../Images/open-browser.png";
import gmBox from "../Images/GmBox.png";
import userVisuals from "../Images/userVisual.png";
import forum from "../Images/forum.png";
import LandingBgImage from "../Images/LandingBg.png";
import rocketImg from "../Images/rocket.png";
import expressImg from "../Images/Express.png";
import sitting from "../Images/Sitting.png";
import thirdBgImage from "../Images/Features.png";
import beReady from "../Images/Text.png";
import OpenSqL from "../Images/openbrowser.png";
import groupies from "../Images/cuate.png";
import joinWtl from "../Images/Header-text.png";
import womanSitting from "../Images/Frame.png";
import joinBtn from "../Images/Join-button.png";
import contactUs from "../Images/Text 1.png";
import manWalk from "../Images/Frame1.png";
import circle1 from "../Images/Circle_2.png";
import circle2 from "../Images/Cirlcles_2.png";
import circle3 from "../Images/Circles_1.png";
import circle4 from "../Images/Circle_1.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="sections">
      <div
        className="Landing-page hero"
        style={{ backgroundImage: `url(${LandingBgImage})` }}
      >
        <div className="writeUps hero-text">
          <h1>
            Stay
            <br />
            linqed
          </h1>

          <p>
            ...and spend quality time with friends, family and colleagues from
            different ethnicities, communities and workgroups all in one place.
          </p>

          <Link to="#">
            <img src={openBrowser} alt="OpenSquarelinq" className="opensql" />
          </Link>
        </div>

        <div className="images hero-images">
          <div className="left-image">
            <img src={userVisuals} alt="Visuals" />
          </div>

          <div className="vertical-images">
            <img src={gmBox} alt="GoodMorning" />
            <img src={forum} alt="Forum" />
          </div>
        </div>
      </div>

      <div className="second-container">
        <img src={rocketImg} alt="Rocket" className="rocketImg" />
        <img src={expressImg} alt="Express" className="expressImg" />
        <img src={sitting} alt="Sitting" className="sittingImg" />
      </div>
      <div
        className="third-container"
        style={{ backgroundImage: `url(${thirdBgImage})` }}
      ></div>
      <div className="fourth-container">
        <img src={beReady} alt="text" />
        <div className="FC-groupies">
          <Link to="#">
            <img src={OpenSqL} alt="OpenBrowserBtn" className="OpenBtn" />
          </Link>
          <img src={groupies} alt="Groupies" className="group" />
        </div>
      </div>
      <div className="last-container">
        <div className="img">
          <img src={circle1} alt="" className="circle1" />
          <img src={circle2} alt="" className="circle2" />
          <img src={circle3} alt="" className="circle3" />
          <img src={circle4} alt="" className="circle4" />
        </div>
        <div className="subLast">
          <div className="joinWaitlist">
            <img src={joinWtl} alt="" className="joinWtl" />
            <img src={womanSitting} alt="" className="womansit" />
            <form action="post">
              <input type="text" placeholder="Enter your email..." />
              <img src={joinBtn} alt="" className="joinBtn" />
            </form>
          </div>
          <div className="contactUs-container">
            <img src={contactUs} alt="" className="contactUs" />
            <img src={manWalk} alt="" className="manWalk" />
            <form action="post"></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import gmBox from "../Images/GmBox.png";
import userVisuals from "../Images/userVisual.png";
import forum from "../Images/forum.png";
import LandingBgImage from "../Images/LandingBg.png";
import rocketImg from "../Images/rocket.png";
import sitting from "../Images/Sitting.png";
import thirdContainerBg from "../Images/third-container-bg.png";
import iphoneMockupA from "../Images/iphone-mockup-a.png";
import iphoneMockupB from "../Images/iphone-mockup-b.png";
import OpenSqL from "../Images/openbrowser.png";
import groupies from "../Images/cuate.png";
import womanSitting from "../Images/Frame.png";
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
        className="hero"
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
            <button>Open Squarelinq in your browser</button>
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
        <h2>
          Express yourself freely with private messaging and calling, stay
          linked to close ones no matter where they are
        </h2>
        <img src={sitting} alt="Sitting" className="sittingImg" />
      </div>

      <div
        className="third-container"
        style={{ backgroundImage: `url(${thirdContainerBg})` }}
      >
        <div className="row">
          <div className="col image">
            <img src={iphoneMockupA} alt="" />
          </div>

          <div className="col">
            <h3>Create safe space for you and others through forums</h3>
            <h4>
              Forums are organized into topic-based channels where you can
              collaborate, share and just talk about your day without clogging
              up a group chat.
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3>Where hanging out is easy</h3>
            <h4>
              Grab a seat in a voice call when you're free. Friends in your
              forum can see you're around and instantly pop in to talk without
              having to call.
            </h4>
          </div>
          <div className="col image">
            <img src={iphoneMockupB} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col image">
            <img src={iphoneMockupA} alt="" />
          </div>

          <div className="col">
            <h3>Capture, share and experience moments</h3>
            <h4>
              Share and experience rare moments with others and through visuals
              and make sure to share what you are thinking at a go.
            </h4>
          </div>
        </div>
      </div>

      <div
        className="fourth-container"
        style={{ backgroundImage: `url(${groupies})` }}
      >
        <h3>BE READY TO DISCOVER YOURSELF IN THE MOMENT</h3>

        <h4>
          Get instantly connected to your friends and family, express your
          creativity, expand your network and discover new content on the fly
        </h4>

        <Link to="#">
          <img src={OpenSqL} alt="OpenBrowserBtn" className="OpenBtn" />
        </Link>
      </div>

      <div className="last-container contact-section">
        <div className="img">
          <img src={circle1} alt="" className="circle1" />
          <img src={circle2} alt="" className="circle2" />
          <img src={circle3} alt="" className="circle3" />
          <img src={circle4} alt="" className="circle4" />
        </div>

        <div className="subLast">
          <div className="joinWaitlist waitlist">
            <h4>Join our waitlist</h4>

            <p>
              Be one of the very first people to test out new feature launches
              and products
            </p>

            <form action="POST">
              <input
                name="email"
                type="text"
                placeholder="Enter your email..."
              />
              
              <img src={womanSitting} alt="" className="womansit" />

              <button>Join</button>
            </form>
          </div>

          <div className="contactUs-container contact">
            <h4>Contact Us</h4>

            <p>
              Feel free to reach out to us concerning any issues you might have
            </p>

            <img src={manWalk} alt="" className="manWalk" />

            <form action="POST">
              <input type="text" placeholder="Enter your fullname..." />
              <input type="email" placeholder="Enter your Email..." />
              <input
                type="text"
                placeholder="Enter the subject for contacting us"
              />
              <input
                type="text"
                placeholder="Type Something..."
                className="Textarea"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

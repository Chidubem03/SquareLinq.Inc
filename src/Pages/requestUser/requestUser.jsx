import leftsideImg from "../Images/selfie.png";
import shineLogo from "../Images/shineLogo.png";
import slides from "../Images/auth-pagination-slider.png";
import googleLogo from '../Images/google_icon.png';
import "./requestUser.css";

const RequestUser = () => {
     const handleNext = (e) =>{
        e.preventDefault();
        window.location.pathname = "/signin";
    }


    return ( 
        <div className="requestUser-container">
             <div className="requestUser-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="requestUser-leftside_container">
                <h1>
                    Interactive <img src={shineLogo} alt="shineLogo" />{" "}
                </h1>
                <p className="paragraph-info">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" className='slides' />
              </div>
            </div>
            <div className="requestUser-rightside">
              <div className="requestUser-rightside_content">
                <h1 id="reset-pswd-1">
                    Sign In to your account
                </h1>
              </div>
                <form action="/#" id="requestUser-form">
                    <label htmlFor="username">
                        <input 
                        type="name" 
                        placeholder="Enter your username" 
                        /> 
                        
                    </label>
        <button onClick={handleNext} className="btn">
        Next 
        </button>
        
        <div id="sign-in-inner6" className="sign-in-inner6">
               <div className="Google-btn"> 
              <div className="Google-btn_txt"><a href="/#">Continue with Google</a></div>
              <div className="Google-btn_logo"> 
            <img src= {googleLogo} alt="Google"/>
        </div>
        </div>
        </div>
        </form>
      </div>
    </div>
     );
}
 
export default RequestUser

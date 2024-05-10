import leftsideImg from "../Images/selfie.png";
import slides from "../Images/auth-pagination-slider.png";
import googleIcon from "../Images/google_icon.png";
import squareLinq from '../Images/squarelink-logo.png';
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
                    Interactive
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
              <div className="logoCon">
                <img src={squareLinq} className='logoIcon' alt="" />
                <p className='logoText'>Squarelinq</p>
              </div>
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
        <button type="button" className="google-btn">
          Continue with Google
          <img src={googleIcon} alt="google icon" className="google_icon" />
        </button>
        </form>
      </div>
    </div>
     );
}
 
export default RequestUser

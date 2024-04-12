import slides from '../Images/slider-img.png';
import leftsideImg from '../Images/leftside-img.png';
import shineLogo from '../Images/shineLogo.png';
import "./sendVerificationCode.css";
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { useLocation } from 'react-router-dom';

function SendVerificationCode() {

    const handleClick = (e) =>{
        e.preventDefault();
        if(document.getElementById('email').checked){
           window.location.pathname = '/verifyemail';
            return true;
           
        }
        else if(document.getElementById('phone').checked){
            return true;
        }
        else{
            alert('Check one of the boxes');
            return false;
        }
    }

    return (
        <div className="sendVerification-container">
            <div className="sendVerification-leftside" style={{ backgroundImage: `url(${leftsideImg})` }}>
             <div className="sendVerification-leftside_container">
                <img src={shineLogo} alt="shineLogo" className='shine' />
                <h1 className="leftside-header">
                    Explore
                </h1>
                <p className="leftside-paragraph">
                    Join a community of like minded people
                    where you can free air you opinions, discuss
                    new trends and shared interests. Interact with
                    your friends, family, colleagues and teammates
                    as you you strengthen the bond between one another...
                </p>
                <img src={slides} alt="slide" className='slides' />
              </div>
            </div>
            <div className="sendVerfication-rightside">
                <h1 className="rightside-header">
                    Get a verification code
                </h1>
                <p className="rightside-paragraph">
                    Select where you would like your verification code to be sent
                </p>
                <form action='#'>

                    <label htmlFor="email">
                        <input type="radio" name='verify' value='Email' id='email' required='required'/>
                        Email address
                    </label>

                    <label htmlFor="number">
                        <input type="radio" name='verify' value='Phone No' id='phone' required='required'/>
                        Phone Number
                    </label>
                   <button onClick={handleClick} >Send code</button>
                </form>
            </div>
        </div>
    );
}
 
export default SendVerificationCode;
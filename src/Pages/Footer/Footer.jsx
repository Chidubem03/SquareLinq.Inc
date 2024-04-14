import "./Footer.css";
import Logo from "../Images/Logo.png";
import SignUpButton from "../Images/signupbutton.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from 'react-router-dom';


const Footer = () => {

//Getting rid of the footer page, when the other pages aside from the landing page is loading
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isSignuppages = () =>{
    const isSignupPage = location.pathname === '/Signup';
    const isVerifyemailPage = location.pathname === '/verifyemail';
    const isVerificationcompletePage = location.pathname === '/completed';
    const isSendverificationcodePage = location.pathname === '/verification';
    const isPreloaderPage = location.pathname === '/preloader';
    return(
      isSignupPage, isVerifyemailPage, isVerificationcompletePage, isSendverificationcodePage, isPreloaderPage
    );
  }


  // Getting the current year..................
  const currentYear = new Date().getFullYear();
  ///////////////////////////////////////////////////

    return (
      <div className={` ${isSignuppages ? 'hidden' : ''}, ${isLandingPage ? 'footer-section' : 'hidden'}`}>
        <div className="footer-section">
    
    <div className="footer-section_Inner">

          <div className = "footer-section_InnerTop " >
            <div className="footer-section_InnerTop1 footer-top"> 
              <div className="footer-section_InnerTop1_img"> 
              
                  <img src={Logo} alt="logo" className="footer-section_InnerTop1_img_logo" />

              </div>

            </div>
            <div className="footer-section_InnerTop2 footer-top"> 
            
              <ul>
                <li ><Link> Home</Link></li> 
                <li><Link>Contact Us</Link></li>
                <li><Link>Waitlist</Link></li>
              </ul>
            
            </div>
            <div className="footer-section_InnerTop3 footer-top"> 
            
            <div className="footer-section_InnerTop3Inner">
           <Link to="/Signup"><img src={SignUpButton} alt="sign-up" /></Link>
            
            </div>
            </div>
          </div>

          <div className="footer-section_InnerBottom">
            <div className="footer-section_InnerBottom_Inner">
             
                <div className="footer-section_InnerBottom_Inner1"> 
                <svg width="15" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.58 9.51625C8.63 9.18625 8.74 8.89625 8.88 8.64625C9.02 8.39625 9.22 8.18625 9.47 8.02625C9.71 7.87625 10.01 7.80625 10.38 7.79625C10.61 7.80625 10.82 7.84625 11.01 7.92625C11.21 8.01625 11.39 8.13625 11.53 8.28625C11.67 8.43625 11.78 8.61625 11.87 8.81625C11.96 9.01625 12 9.23625 12.01 9.45625H13.8C13.78 8.98625 13.69 8.55625 13.52 8.16625C13.35 7.77625 13.12 7.43625 12.82 7.15625C12.52 6.87625 12.16 6.65625 11.74 6.49625C11.32 6.33625 10.86 6.26625 10.35 6.26625C9.7 6.26625 9.13 6.37625 8.65 6.60625C8.17 6.83625 7.77 7.13625 7.45 7.52625C7.13 7.91625 6.89 8.36625 6.74 8.88625C6.59 9.40625 6.5 9.94625 6.5 10.5262V10.7963C6.5 11.3763 6.58 11.9163 6.73 12.4362C6.88 12.9562 7.12 13.4062 7.44 13.7863C7.76 14.1663 8.16 14.4763 8.64 14.6963C9.12 14.9163 9.69 15.0362 10.34 15.0362C10.81 15.0362 11.25 14.9562 11.66 14.8062C12.07 14.6562 12.43 14.4463 12.74 14.1763C13.05 13.9062 13.3 13.5962 13.48 13.2362C13.66 12.8763 13.77 12.4963 13.78 12.0863H11.99C11.98 12.2963 11.93 12.4862 11.84 12.6663C11.75 12.8463 11.63 12.9963 11.48 13.1263C11.33 13.2563 11.16 13.3563 10.96 13.4263C10.77 13.4963 10.57 13.5162 10.36 13.5262C10 13.5162 9.7 13.4462 9.47 13.2963C9.22 13.1363 9.02 12.9263 8.88 12.6763C8.74 12.4263 8.63 12.1263 8.58 11.7963C8.53 11.4663 8.5 11.1263 8.5 10.7963V10.5262C8.5 10.1762 8.53 9.84625 8.58 9.51625ZM10.5 0.65625C4.98 0.65625 0.5 5.13625 0.5 10.6562C0.5 16.1763 4.98 20.6562 10.5 20.6562C16.02 20.6562 20.5 16.1763 20.5 10.6562C20.5 5.13625 16.02 0.65625 10.5 0.65625ZM10.5 18.6562C6.09 18.6562 2.5 15.0662 2.5 10.6562C2.5 6.24625 6.09 2.65625 10.5 2.65625C14.91 2.65625 18.5 6.24625 18.5 10.6562C18.5 15.0662 14.91 18.6562 10.5 18.6562Z" fill="#231942" fill-opacity="0.42"/>
                  </svg>
                </div>
                
                <div className="footer-section_InnerBottom_Inner2">
                  <Link>Squarelink {currentYear} All Rights Reserved</Link>
                </div>
                
            </div>
          </div>
    </div>
        </div>
        </div>
      );
}
 
export default Footer;
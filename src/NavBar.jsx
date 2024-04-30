import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './Pages/Images/squarelink-logo.png';
import squareLinq from './Pages/Images/Squarelinq.png';
import { Link } from 'react-router-dom';
import './index.css'

const NavBar = () => {
  const location = useLocation();
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
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`${isSignuppages ? 'hidden' : 'navbar'}, ${isLandingPage ? 'navbar' : 'hidden'}`}>  {/* Apply class based on route */}
      <div className="leftside">
        <img src={logo} alt="squarelinq-logo" className='Img1' />
        <img src={squareLinq} alt="squarelinq" className='Img2' />
      </div>
      <nav className="middle">
        <ul>
          <li><Link to="#">features</Link></li>
          <li><Link to="#">join waitlist</Link></li>
          <li><Link to="#">contact us</Link></li>
        </ul>
      </nav>
      <div className="rightside">
        <Link to="/Signup"><button className="btn">Sign Up</button></Link>
        <Link to="/SignIn"><button className="button">Sign In</button></Link>
      </div>
    </div>
  );
}

export default NavBar;

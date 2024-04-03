import logo from './Pages/Images/squarelink-logo.png';
import squareLinq from './Pages/Images/Squarelinq.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="leftside">
                <img src={logo} alt="squarelinq-logo" className='Img1'/>
                <img src={squareLinq} alt="squarelinq" className='Img2'/>
            </div>
            <nav className="middle">
                <ul>
                    <li><Link to="#">features</Link></li>
                    <li><Link to="#">join waitlist</Link></li>
                    <li><Link to="#">contact us</Link></li>
                </ul>
            </nav>
            <div className="rightside">
                <Link to="#"><button>Get Started</button></Link>
            </div>
        </div>
     );
}
 
export default NavBar;
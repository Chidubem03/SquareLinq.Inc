import triangle from '../Images/triangle.png';
import polygon from '../Images/polygon.png';
import rectangle from '../Images/rectangle.png';
import ellipse from '../Images/ellipse.png';
import logo from '../Images/squarelink-logo.png';
import shineLogo from '../Images/shineLogo.png';
import bgImage from '../Images/bgimage.png';
import {Link} from 'react-router-dom';


const Home = () => {
    return ( 
        <div className="home-container" style={{backgroundImage: `url(${bgImage})`}} >
           <div className="contain">
               <div className="contain-first">
                  <img src={triangle} alt="triangle" />
                  <img src={polygon} alt="Polygon" />
               </div>
                <div className="contain-middle">
                  <img src={logo} alt="SquareLinq.Inc_logo"/>
                    <div className="content-text">
                             <img src={shineLogo} alt="" />
                             <Link to="#" style={{cursor: 'pointer', textDecoration: 'none' }}> 
                                <span className="content"> 
                                  <span className='text'>It's your place to shine </span>
                                      <span className="subtext">shine</span>
                                </span>
                              </Link>
                             <span>
                               <span className="first"></span>
                                 <span className="second"></span>
                                  <span className="third"></span>
                             </span>
                    </div>     
               </div>
               <div className="contain-last">
                     <img src={rectangle} className='rec' alt="rectangle" />
                      <img src={ellipse} alt="ellipse" />
               </div>
            </div>
        </div>
    );
}
 
export default Home;
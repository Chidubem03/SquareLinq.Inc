import triangle from '../Images/triangle.png';
import polygon from '../Images/polygon.png';
import rectangle from '../Images/rectangle.png';
import ellipse from '../Images/ellipse.png';
import logo from '../Images/squarelink-logo.png';
import shineLogo from '../Images/shineLogo.png';


const Home = () => {
    return ( 
        <div className="home-container" >
           <div className="contain">
               <div className="contain-first">
                  <img src={triangle} alt="triangle" />
                  <img src={polygon} alt="Polygon" />
               </div>
               <div className="contain-second">
                  <div className="contain-second_first">
                     <img src={rectangle} className='rec' alt="rectangle" />
                  </div>
                  <div className="contain-second_second">
                      <img src={ellipse} alt="ellipse" />
                  </div>
               </div>

              <div className="contain-content">
                <img src={logo} alt="SquareLinq.Inc_logo"/>
              <div className="content-text">
                <img src={shineLogo} alt="" />
                <span className='text'>It's your place to shine </span><span className="subtext">shine</span>
                 <span className="first"></span>
                  <span className="second"></span>
                   <span className="third"></span>
              </div>     
              </div>
            </div>
        </div>
        
    );
}
 
export default Home;
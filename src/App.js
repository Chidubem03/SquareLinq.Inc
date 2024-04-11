import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Landing from './Pages/Landing/Landing';
import Footer from './Pages/Landing/Footer';
import Signup from './Pages/signup/Signup';
import NavBar from './NavBar';
import Landing from './Pages/Landing/Landing';
import Footer from './Pages/Footer/Footer';
import VerifyEmail from './Pages/Verification/VerifyEmail';
import SendVerificationCode from './Pages/sendVerificationCode/sendVerificationCode';
import Preloader from './Pages/Preloader/Preloader';
import VerificationComplete from './Pages/VerificationComplete/VerifyComplete';


function App() {
  
  return (
  <div className="App">
      <Router>
      <NavBar /> 
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>

          <Route exact path="/Signup">
          <Signup />
          </Route>
          <Route path='/preloader'>
            <Preloader />
          </Route>
        <Route exact path = '/verifyemail'>
          <VerifyEmail />
        </Route>
        <Route path="/verification">
          <SendVerificationCode />
        </Route>
        <Route path='/completed'>
          <VerificationComplete />
        </Route>
        </Switch> 
         <Footer />
      </Router>
  </div>
  );
}

export default App;

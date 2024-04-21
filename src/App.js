import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './Pages/signup/Signup';
import NavBar from './NavBar';
import Landing from './Pages/Landing/Landing';
import Footer from './Pages/Footer/Footer';
import VerifyEmail from './Pages/Verification/VerifyEmail';
import SendVerificationCode from './Pages/sendVerificationCode/sendVerificationCode';
import Preloader from './Pages/Preloader/Preloader';
import VerificationComplete from './Pages/VerificationComplete/VerifyComplete';
import RequestPhone from './Pages/RequestPhone/RequestPhone';
import UserInvite from './Pages/userInvite/UserInvite';
import GetStarted from './Pages/GetStarted/GetStarted';


function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/preloader">
            <Preloader />
          </Route>
          <Route exact path="/verifyemail">
            <VerifyEmail />
          </Route>
          <Route exact path="/verification">
            <SendVerificationCode />
          </Route>
          <Route exact path="/completed">
            <VerificationComplete />
          </Route>
          <Route exact path="/request-phone">
            <RequestPhone />
          </Route>
          <Route exact path="/UserInvite">
            <UserInvite />
          </Route>
          <Route exact path="/getstarted">
            <GetStarted />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './Pages/signup/Signup';
import SignIn from './Pages/signIn/signIn'
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
import YourInterest from './Pages/yourInterest/YourInterest';
import ResetPassword from './Pages/resetPassword/resetPassword';

import ResetSuccess from "./Pages/resetSuccess/ResetSuccess"

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* sign up */}
          <Route exact path="/Signup">
            <Signup />
          </Route>
          {/* Sign in */}
          <Route exact path="/signin">
            <SignIn />
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
          <Route exact path="/yourinterest">
            <YourInterest />
          </Route>
          <Route exact path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route exact path="/resetsucess">
            <ResetSuccess />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

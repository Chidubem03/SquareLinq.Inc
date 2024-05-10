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
import PasswordSent from './Pages/Passwordsent/PasswordSent';
import ResetPassword from './Pages/resetPassword/resetPassword';
import ResetSuccess from "./Pages/resetSuccess/ResetSuccess";
import RequestUser from './Pages/requestUser/requestUser';
import SetNewPassword from './Pages/SetNewPassword/SetNewPassword';
import './normalize.css';


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
          <Route exact path="/requestuser">
            <RequestUser />
          </Route>
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
          <Route exact path="/requestPhone">
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

            <Route exact path="/setnewpassword">
            <SetNewPassword />
            </Route>

          <Route exact path='/passwordSent'>
            <PasswordSent />  
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
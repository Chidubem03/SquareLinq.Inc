  import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Landing from './Pages/Landing/Landing';
import Footer from './Pages/Footer/Footer';
import VerifyEmail from './Pages/Verification/VerifyEmail'

function App() {
  return (
  <div className="App">
      <Router>
        <NavBar />
        <Switch>
          
          <Route exact path='/'>
            <Landing />
          </Route>
        <Route exact path = '/verifyemail'>
          <VerifyEmail/>
        </Route>

        </Switch> 
         <Footer />
      </Router>
  </div>
  );
}

export default App;

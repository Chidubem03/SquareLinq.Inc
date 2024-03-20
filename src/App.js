  import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
  import Home from './Pages/Home/Home';

function App() {
  return (<Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;

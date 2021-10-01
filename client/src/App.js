/*::::::::::::::::::::::::::::::::::::::::
::  Importing CSS, Dependencies, Routes ::
::::::::::::::::::::::::::::::::::::::::*/

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact component={
            () => <LandingPage/>
          }
          />

          <Route path="/about" exact component={
            () => <AboutUs/>
          }
          />
          
        </Switch>
      </Router>
    </div>
  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;
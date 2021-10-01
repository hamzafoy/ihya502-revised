/*::::::::::::::::::::::::::::::::::::::::
::  Importing CSS, Dependencies, Routes ::
::::::::::::::::::::::::::::::::::::::::*/

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/ContactUs/Contact';
import LandingPage from './components/LandingPage/LandingPage';
import Stations from './components/Stations/Stations';



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

          <Route path="/calendar" exact component={
            () => <Calendar/>
          }
          />

          <Route path="/stations" exact component={
            () => <Stations/>
          }
          />

          <Route path="/contact-us" exact component={
            () => <Contact/>
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
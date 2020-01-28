import React from 'react';
import { Router, Switch, Route} from 'react-router';
import NavBar from './cmps/NavBar.js'
import history from './history';
import './App.css';

import Homepage from './pages/Homepage.js';
import ContactPage from './pages/ContactPage.js';
import ContactDetails from './cmps/ContactDetails.js';


function App() {
  return (
    <div className="App"> 
      <Router history={history}>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/contact" component={ContactPage} exact/>
          <Route path="/contact/:id" component={ContactDetails} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

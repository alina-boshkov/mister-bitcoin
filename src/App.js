import React from 'react';
import { Router, Switch, Route } from 'react-router';
import NavBar from './cmps/NavBar.js'
import history from './history';


import Homepage from './pages/Homepage.js';
import ContactPage from './pages/ContactPage.js';
import ContactDetails from './pages/ContactDetails.js';
import ContactEdit from './pages/ContactEdit.js';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/contact" component={ContactPage} exact />
          <Route path="/contact/:id" component={ContactDetails} exact />
          <Route component={ContactEdit} path="/contact/:id/edit" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

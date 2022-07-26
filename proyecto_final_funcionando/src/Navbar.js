import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
} from 'react-router-dom ';

const Navbar = () => {
  return (
    <Router>
      <h1>Navbar</h1>
      <Switch>
        <Route path="./pages/Newsfeed"></Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

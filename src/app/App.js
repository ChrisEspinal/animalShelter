import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledNavbar from '../styledNavbar/StyledNavbar';
import Home from '../home/Home';
import About from '../about/About';
import ContactUs from '../contactUs/ContactUs';

function App() {
  return (
    <div className="container-fluid App">
      <Router>
      <StyledNavbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />  
        </Switch>
    </Router>
    </div>
  );
}

export default App;
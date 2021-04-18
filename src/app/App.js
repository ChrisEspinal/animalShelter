import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledNavbar from '../styledNavbar/StyledNavbar';
import Home from '../home/Home';
import About from '../about/About';
import ContactUs from '../contactUs/ContactUs';
import Wildlife from '../animals/Wildlife';
import Domestic from '../animals/Domestic';

function App() {
  return (
    <div className="container-fluid App">
      <Router>
      <StyledNavbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/wildlife" component={Wildlife} /> 
          <Route path="/domestic" component={Domestic} /> 
          <Route path="/contactUs" component={ContactUs} />  
        </Switch>
    </Router>
    </div>
  );
}

export default App;
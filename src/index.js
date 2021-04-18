import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import StyledNavbar from './components/StyledNavbar';
// import Home from './home/Home';
// import About from './about/About';
// import ContactUs from './contactUs/ContactUs';


ReactDOM.render(
  <React.StrictMode>

    <Router>
      <App/>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

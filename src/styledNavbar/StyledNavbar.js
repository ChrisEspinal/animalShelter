import React from 'react'
import './StyledNavbar.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'

class StyledNavbar extends React.Component{

    render(){
        return(
          <Navbar className="navbar" collapseOnSelect bg="dark" variant="dark" expand="lg">
              <LinkContainer to="/">
                <Navbar.Brand><img src={logo} className="d-inline-block align-top logo"/></Navbar.Brand>
              </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                  <NavDropdown title="See Our Animals" id="collasible-nav-dropdown">
                    <LinkContainer to="/wildlife">
                      <NavDropdown.Item>Wildlife</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/domestic">
                      <NavDropdown.Item>Domestic</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
              </Nav>
              <Nav>
                <LinkContainer to="/contactUs">
                  <Nav.Link>ContactUs</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
          </Navbar>

        );  
    }
}

export default StyledNavbar;
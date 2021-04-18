import React from 'react';
import './Home.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'; 
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import companyLogo from '../assets/company-logo.png'

class Home extends React.Component {

    render () {
        return (
            <div className="">
                <div className="upperArea">
                    <Row>
                        <Col sm={12}>
                            <div className="custom-jumbotron">
                                <Jumbotron fluid>
                                    <Row>
                                        <Col sm={12}>
                                        <Container className="jumbotron-text">
                                        <h1 className="display-3"><b>Lorem ipsum</b></h1>
                                        <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                        aute irure dolor in reprehenderit in voluptate velit esse 
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                        occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.
                                        </p>
                                        <Link to="/About">
                                        <Button variant="primary">Learn more</Button>
                                        </Link>
                                    </Container>
                                        </Col>
                                    </Row>
                                </Jumbotron>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="midArea">
                    <Row>
                        <Col>
                            <p className="lead col-1-text">
                                &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                ccaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                aute irure dolor in reprehenderit.
                            </p>
                        </Col>

                        <Col sm={12} md={6}>
                            <Carousel className="carousel-container">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={carousel1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Lorem ipsum dolor</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={carousel2}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={carousel3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Lorem ipsum dolor</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </div>

                <footer className="footer bg-dark">
                    <div className="container-fluid">
                        <Row>
                            <Col className="col-footer" sm={12} md={2}>
                                <img class="img-fluid footerImg" src={companyLogo}/>
                            </Col>
                            <Col className="copyright" sm={12} md={7}>
                                <p>Copyright © 2020-2021 Your LLC. All Rights Reserved.</p>
                            </Col>
                            <Col sm={12} md={3} className="footer-links">
                                <a href="https://facebook.com" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="4x" /></a>
                                <a href="https://instagram.com" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="4x"/></a>
                                <a href="https://twitter.com" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="4x"/></a>
                            </Col>
                        </Row>
                    </div>
                </footer>
                    

            </div>
            
        );
    }

}

export default Home;
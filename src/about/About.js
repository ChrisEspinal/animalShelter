import React from 'react';
import './About.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import CustomModal from '../modal/CustomModal';

class About extends React.Component {
    render () {
        return (
            <div>
                <div className="upperHalf">
                    <Row>
                        <Col sm={12}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">About Us</h1>
                                        <p className="lead">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                            aute irure dolor in reprehenderit in voluptate velit esse 
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                            occaecat cupidatat non proident, sunt in culpa qui officia 
                                            deserunt mollit anim id est laborum.
                                            <br/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                            aute irure dolor in reprehenderit in voluptate velit esse 
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                            occaecat cupidatat non proident, sunt in culpa qui officia 
                                            deserunt mollit anim id est laborum.
                                        </p>
                                </Container>
                            </Jumbotron>
                        </Col>    
                    </Row>
                </div>

                <div className="lowerHalf">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={4}>
                                    <img class="img-fluid imgs" src="https://mycolumbuspower.com/wp-content/uploads/sites/29/2020/01/15797160627716.jpg?quality=80&strip=all&w=560&h=320&crop=1"/>
                                    <Row>
                                        <Col sm={12}>
                                            <CustomModal/>
                                        </Col> 
                                    </Row>
                                </Col>
                                <Col sm={12} lg={4}>
                                    <img class="img-fluid imgs" src="https://newsone.com/wp-content/uploads/sites/22/2019/03/1552395325925.jpg?quality=80&strip=all&w=560&h=320&crop=1"/>
                                    <Row>
                                        <Col sm={12}>
                                            <CustomModal/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} lg={4}>
                                    <img class="img-fluid imgs" src="https://www.hecktictravels.com/wp-content/uploads/2014/03/Yamnuska-Wolfdof-Sanctuary-Excerpt.jpg"/>
                                    <Row>
                                        <Col sm={12}>
                                            <CustomModal/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            
            </div>
        );
    }
}

export default About;
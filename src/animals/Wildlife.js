import React from 'react';
import './Wildlife.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class Wildlife extends React.Component {
    render () {
        return (
            <div>
                <div className="wl-jumbotron">
                    <Row>
                        <Col sm={12}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">Hi there!</h1>
                                        <p className="lead">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                            aute irure dolor in reprehenderit in voluptate velit esse 
                                            cillum dolore eu fugiat nulla pariatur. 
                                        </p>
                                </Container>
                            </Jumbotron>
                        </Col>    
                    </Row>
                </div>

                <div className="wl-row1">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col> 
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="wl-row2">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col> 
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="wl-row3">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col> 
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.dailynews.com/wp-content/uploads/2019/04/LDN-Z-SEARCH-0404-01-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sally</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    </Card>
                                    {/* <Row>
                                        <Col sm={12}>
                                            //btn
                                        </Col>
                                    </Row> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>



            </div>
        );
    }
}

export default Wildlife;
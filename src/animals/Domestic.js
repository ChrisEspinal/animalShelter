import React from 'react';
import './Domestic.css';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class Domestic extends React.Component {
    render () {
        return (
            <div>
                <div className="dm-jumbotron">
                    <Row>
                        <Col sm={12}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">I'm coming home!</h1>
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

                <div className="dm-row1">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/55a2bffae4b037baec79f96e/1498237355084-LTOGTNCAX3H674KLT0NA/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/Norbio" />
                                    <Card.Body>
                                        <Card.Title>Walle</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/35585131450_6-20190322154216-20190322154226-1000x1000.jpg" />
                                    <Card.Body>
                                        <Card.Title>Tuna</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5334dd68e4b00c509599056d/1587712995250-Q2W0FQF3Z3UXW4FSY6ZE/ke17ZwdGBToddI8pDm48kJ9tCWZfZ59IBBwzpN6u4Vh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXVvPGC71WNlOhGjfTD6B-aDS26eOn7DcQGMG76K4qVWWZXVa6t3lOB28ooYNrPaSQ/germanshepherd.JPG" />
                                    <Card.Body>
                                        <Card.Title>Barney</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0514/9740/2526/products/knox-group-puppy-class-4-1000x1000_1000x.jpg?v=1609266540" />
                                    <Card.Body>
                                        <Card.Title>Peanut</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="dm-row2">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5bb0d2b5b2cf79f507095311/1551060405637-E8T51PI5T9T6HUA2D125/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/AfterlightImage.jpg?format=1000w" />
                                    <Card.Body>
                                        <Card.Title>Spot</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://petzonepuppies.com/media/ap_media/RHMGIXHWSYWL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Foxy</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2430/2205/products/ycb-ta-1.jpg?v=1617832355" />
                                    <Card.Body>
                                        <Card.Title>Luna</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5a2c764af43b551b489c752d/1519112016236-YU0LR4L7IM98MMWL9B0X/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/javacats03Feb20180094.jpg?format=1500w" />
                                    <Card.Body>
                                        <Card.Title>Elizabeth</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="dm-row3">
                    <Row>
                        <Col sm={12}>
                            <Row>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5ec67e952aa5c333297be103/1595946119099-R484A7V05YI9NVKX796V/ke17ZwdGBToddI8pDm48kLKxICdzq2q2SdiBxsfN_q57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaEvoQheVss8j_tgnC-Up5hUANWhsG4383RBZT-LnfYUBCNz6nEb8mveAFSbJeRRHQ/Happy+cat.jpg" />
                                    <Card.Body>
                                        <Card.Title>Alexa</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/57d01e263e00beaa121ebff3/1612104596704-TGM3SSF2LPYQ073DU6XE/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/Buddy+3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Frank</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.milofoundation.org/wp-content/uploads/2020/05/cat_fence_1kx1k.jpg" />
                                    <Card.Body>
                                        <Card.Title>Dandy</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} lg={3}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5c6035de2727be28e9507335/1617983153483-LCE442J5LL0W7PMMUJ8L/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Marcie+2229.jpeg?format=1000w" />
                                    <Card.Body>
                                        <Card.Title>Buttons</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Link to="/ContactUs">
                                        <Button variant="primary">Ask About Me!</Button>
                                        </Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>


            </div>
        );
    }
}

export default Domestic;
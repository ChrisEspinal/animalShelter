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
                                    <h1 className="display-3">I'm here to stay :)</h1>
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
                                    <Card.Img variant="top" src="https://img.apmcdn.org/4087ef0bd0c5d3a330f5c821103bb8f4f8bdfd2e/square/5e59fb-20130113-wildlife-photographer01.jpg" />
                                    <Card.Body>
                                        <Card.Title>Ramona</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0506/3055/7870/products/wildlife_4copycopy_1000x1000.jpg?v=1606211718" />
                                    <Card.Body>
                                        <Card.Title>Lionel</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://www.oryxwildlifesafaris.com/wp-content/uploads/2016/01/zambia-lion-1000x1000.jpg" />
                                    <Card.Body>
                                        <Card.Title>George</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://paradisecountry.com.au/-/media/project/paradisecountry/images/73a---masonry-gallery/73a-masonry-koalas-1000x1000-mob.jpg" />
                                    <Card.Body>
                                        <Card.Title>Betty</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://i.pinimg.com/originals/0a/6e/50/0a6e50dc19e25baaddabf373a17d98e7.jpg" />
                                    <Card.Body>
                                        <Card.Title>Zaboomafu</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://img-cdn.greatergood.com/clickToGive/images/takeaction/campaigns/exotic-pets-petition.jpg" />
                                    <Card.Body>
                                        <Card.Title>Roger</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5d65dfa92fb94200018c0101/1582052362363-M8U2ANDCFG8ASCWQ2TS9/ke17ZwdGBToddI8pDm48kFeAIarFmw2N1L_d6ZBfxAV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdNGbcBhbv60w-PslQpvx8mx63YmFs6Eeby2qQYDZmq0HNP1QgZwtN409T_NTuhBOQ/Frannie.jpg" />
                                    <Card.Body>
                                        <Card.Title>Greg</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://www.seattleaquarium.org/sites/default/files/images/Rhinoceros%20Auklet.jpg" />
                                    <Card.Body>
                                        <Card.Title>Sam</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://i.pinimg.com/originals/8c/ad/62/8cad62061c97d8455a69ab330e9dc01d.png" />
                                    <Card.Body>
                                        <Card.Title>Lisa</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://www.tripsavvy.com/thmb/Rb9IOHRgE12CP9J_cf7G2FDdDCQ=/1000x1000/smart/filters:no_upscale()/GettyImages-98745880-56a0093e5f9b58eba4ae919b.jpg" />
                                    <Card.Body>
                                        <Card.Title>Kirby</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://img.apmcdn.org/bb8d6d7968a55afe91ac463c90eb7336acd751f6/square/67d45f-20120127-wolf1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Night</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
                                    <Card.Img variant="top" src="https://assets.speakcdn.com/assets/2147/red-kangaroo---2017---david-duplessis-web-sq.jpg" />
                                    <Card.Body>
                                        <Card.Title>Hope</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                        <Button href="https://en.wikipedia.org/wiki/Serval" variant="primary" target="_blank">Learn More</Button>
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
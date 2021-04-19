import React, { useState } from "react";
import './ContactUs.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import companyLogo from '../assets/company-logo.png'

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setName("");
        setEmail("");
        setMessage("");

        alert(name + ', your message has been sent successfully!');
    };

    return (
        <div className="contact-body">
            
            <div className="header">
                <Row>
                     <Col sm={12}>
                         <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">Contact Us</h1>
                                </Container>
                            </Jumbotron>
                        </Col>    
                    </Row>
                </div>

                <div className="container-fluid formBody">
                <Row>
                    <Col></Col>
                    <Col sm={12} md={8}>
                    <div className="inputFields">
                    <form className="form" onSubmit={handleSubmit}>
                        <input 
                            className="form-control name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="form-control email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="form-control msg"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <Button variant="primary"type="submit">Submi</Button>
                    </form>
                    </div>
                    </Col>
                    <Col></Col>
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
};


export default ContactUs;
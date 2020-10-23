import React from 'react';
import myStyles from "../styles/main.module.css";
import {Element} from "react-scroll";
import Container from "react-bootstrap/Container";
import contactStyles from "../styles/Contact.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <Element name="contact" className="element" >
            <section className={`wrapper`}>
                <Container fluid="md">
                    <Row className={`justify-content-md-center ${contactStyles.contactHeader} mb-5`}>
                        <Col>
                            <h2>GET IN <strong>TOUCH.</strong></h2>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg="6">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridName">
                                        {/*<Form.Label>Name</Form.Label>*/}
                                        <Form.Control placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        {/*<Form.Label>Email</Form.Label>*/}
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridSubject">
                                    {/*<Form.Label>Subject</Form.Label>*/}
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>

                                <Form.Group controlId="formGridMessage">
                                    {/*<Form.Label>Message</Form.Label>*/}
                                    <Form.Control as="textarea" placeholder="Message" />
                                </Form.Group>

                                <div className="text-sm-center">
                                    <Button className={`${contactStyles.submitBtn}`}  type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <div style={{height: "200px"}}>

                    </div>
                </Container>
            </section>
        </Element>
    );
}
export default Contact;
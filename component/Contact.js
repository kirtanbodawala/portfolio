import React, {useState} from 'react';
import {Element} from "react-scroll";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import contactStyles from "../styles/Contact.module.css";

const Contact = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } else {
            msg = "Encountered an error when submitting your message. Please try again in few minutes";
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }

    return (
        <Element name="contact" className="element" >
            <Container fluid="md">
                <Row className={`justify-content-md-center ${contactStyles.contactHeader} mb-5`}>
                    <Col>
                        <h2>GET IN <strong>TOUCH.</strong></h2>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                    <Form.Control
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.name}
                                        placeholder="Name"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="email">
                                    <Form.Control
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.email}
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="subject">
                                <Form.Control
                                    onChange={handleOnChange}
                                    value={inputs.subject}
                                    placeholder="Subject" />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Control
                                    onChange={handleOnChange}
                                    value={inputs.message}
                                    as="textarea"
                                    placeholder="Message" />
                            </Form.Group>

                            <div className="text-sm-center">
                                <Button
                                    disabled={status.submitting}
                                    className={`${contactStyles.submitBtn}`}
                                    type="submit">
                                    {!status.submitting
                                        ? !status.submitted
                                            ? 'Submit'
                                            : 'Submitted'
                                        : 'Submitting...'}
                                </Button>
                            </div>
                        </Form>
                        {status.info.error && (
                            <div className="error">Error: {status.info.msg}</div>
                        )}
                        {!status.info.error && status.info.msg && (
                            <div className="success">{status.info.msg}</div>
                        )}
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}
export default Contact;
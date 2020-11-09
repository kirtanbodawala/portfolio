import React from 'react';
import { Element } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import myStyles from '../styles/main.module.css';
import Parallax from './Parallax';

const Homepage = () => (
  <Element name="home" className="element">
    <Parallax title="FULL STACK DEVELOPER" type="home" />
    <Container fluid>
      <Row className="justify-content-center text-center">
        <Col sm={3} className="d-block">
          <Image
            src="kirtan-circle.png"
            className={`${myStyles.profilePic} mx-auto`}
            roundedCircle
          />
        </Col>
      </Row>
      <Row className={`justify-content-center ${myStyles.profileName}`}>
        <h2>KIRTAN BODAWALA</h2>
      </Row>
    </Container>
  </Element>
);

export default Homepage;

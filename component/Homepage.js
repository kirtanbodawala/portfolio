import React from 'react';
import { Element } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import myStyles from '../styles/main.module.css';
import Parallax from './Parallax';

const Homepage = () => (
  <Element name="home" className="element">
    <Parallax title="FULL STACK DEVELOPER" type="home" />
    <Container fluid>
      <Row className="justify-content-sm-center text-center">
        <Col sm={3} className="d-block">
          <Image
            src="kirtan-circle.png"
            className={`${myStyles.profilePic} mx-auto`}
            roundedCircle
          />
        </Col>
      </Row>
      <Row
        className={`justify-content-sm-center text-center ${myStyles.profileName}`}
      >
        <h2 style={{ fontSize: '2rem' }}>KIRTAN BODAWALA</h2>
      </Row>
    </Container>
  </Element>
);

export default Homepage;

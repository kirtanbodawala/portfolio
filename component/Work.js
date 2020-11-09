import React from 'react';
import { Element } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Parallax from './Parallax';

const Work = () => (
  <Element name="work" className="element">
    <Parallax title="WORK" type="work" />
    <Container fluid>
      {/* <Row>
        <Col md={2} lg={2} />
        <Col xs={12} md={2} lg={2} className="text-right">
          <Figure>
            <Figure.Image
              alt="php"
              src="FoxLogo_squared_orange icon_black lettering.png"
            />
          </Figure>
        </Col>
        <Col xs={6} md={8} lg={8} className="text-center">
          <h4>COMPUTER SYSTEMS ENGINEER</h4>
        </Col>
      </Row> */}
    </Container>
  </Element>
);
export default Work;

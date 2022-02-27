import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
  GrGithub,
} from 'react-icons/gr';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const SocialMediaIcons = () => (
  <Container>
    <Row className="justify-content-center">
      <Col lg={4}>
        <Row>
          <Col>
            <a
              href="https://www.facebook.com/kirtanbodawala93"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: '#4267B2', size: '2em' }}>
                <div>
                  <GrFacebook />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.instagram.com/kirtanbodawala"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: '#C13584', size: '2em' }}>
                <div>
                  <GrInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
          <Col>
            <a
              href="https://twitter.com/kirtanbodawala"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: '#1DA1F2', size: '2em' }}>
                <div>
                  <GrTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/kirtan-bodawala"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: '#2867B2', size: '2em' }}>
                <div>
                  <GrLinkedin />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/kirtanbodawala"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: '#000000', size: '2em' }}>
                <div>
                  <GrGithub />
                </div>
              </IconContext.Provider>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default SocialMediaIcons;

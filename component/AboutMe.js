import React from 'react';
import { Element } from 'react-scroll';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutStyles from '../styles/About.module.css';

const AboutMe = () => {
  const totalExperience = new Date().getFullYear() - 2017;

  return (
    <Element name="about" className="element">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col xs={12}>
            <p className={`${aboutStyles.aboutMeTxt}`}>
              {`I am innovative optimized solution seeker and a senior full stack software
            developer with ${totalExperience}+ years of experience in architecting, designing and
            implementing new products, technical solutions and feature
            improvements for different projects by using PHP, Wordpress and
            NextJS.`}
            </p>
          </Col>
          <Col xs={12}>
            <p className={`${aboutStyles.aboutMeTxt}`}>
              Capable of strong leadership and good organization to make sure
              every project is done on time.
            </p>
          </Col>
        </Row>

        <br />

        <div className={`${aboutStyles.prog} mt-5`}>
          <hr
            className={`${aboutStyles.hrText} ${aboutStyles.hr}`}
            data-content="PROGRAMMING"
          />
          <Row className="">
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="php"
                  src="/tech_logos/php.svg"
                />
                <Figure.Caption className="text-center">PHP</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/wordpress.svg"
                />
                <Figure.Caption className="text-center">
                  WORDPRESS
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/reactjs.svg"
                />
                <Figure.Caption className="text-center">REACT</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/redux.svg"
                />
                <Figure.Caption className="text-center">REDUX</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/nodejs.svg"
                />
                <Figure.Caption className="text-center">NODE</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/javascript.svg"
                />
                <Figure.Caption className="text-center">
                  JAVASCRIPT
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/laravel.svg"
                />
                <Figure.Caption className="text-center">LARAVEL</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/webpack.svg"
                />
                <Figure.Caption className="text-center">WEBPACK</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/sass.svg"
                />
                <Figure.Caption className="text-center">SASS</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/bootstrap.svg"
                />
                <Figure.Caption className="text-center">
                  BOOTSTRAP
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/css3.svg"
                />
                <Figure.Caption className="text-center">CSS3</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="171x180"
                  src="/tech_logos/html5.svg"
                />
                <Figure.Caption className="text-center">HTML 5</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </div>
        <div className={`${aboutStyles.prog} mt-5`}>
          <hr
            className={`${aboutStyles.hrText} ${aboutStyles.hr}`}
            data-content="DEVELOPMENT TOOLS"
          />
          <Row className="justify-content-center">
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="git"
                  src="/tech_logos/git.svg"
                />
                <Figure.Caption className="text-center">GIT</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="docker"
                  src="/tech_logos/docker.svg"
                />
                <Figure.Caption className="text-center">DOCKER</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="Amazon AWS"
                  src="/tech_logos/amazon-aws.svg"
                />
                <Figure.Caption className="text-center">
                  AMAZON AWS
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="Digital Ocean"
                  src="/tech_logos/digital-ocean.svg"
                />
                <Figure.Caption className="text-center">
                  DIGITAL OCEAN
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="Jira"
                  src="/tech_logos/jira.svg"
                />
                <Figure.Caption className="text-center">JIRA</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="slack"
                  src="/tech_logos/slack.svg"
                />
                <Figure.Caption className="text-center">SLACK</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </div>
        <div className={`${aboutStyles.prog} mt-5`}>
          <hr
            className={`${aboutStyles.hrText} ${aboutStyles.hr}`}
            data-content="OPERATING SYSTEMS"
          />
          <Row className="justify-content-center">
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="MAC OS"
                  src="/tech_logos/mac-os.svg"
                />
                <Figure.Caption className="text-center">MAC OS</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="Ubuntu"
                  src="/tech_logos/ubuntu.svg"
                />
                <Figure.Caption className="text-center">UBUNTU</Figure.Caption>
              </Figure>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <Figure>
                <Figure.Image
                  className={`${aboutStyles.techIcons}`}
                  alt="Window"
                  src="/tech_logos/windows.svg"
                />
                <Figure.Caption className="text-center">WINDOWS</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </div>
      </Container>
    </Element>
  );
};
export default AboutMe;

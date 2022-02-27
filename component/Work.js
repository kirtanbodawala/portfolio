import React from 'react';
import { Element } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Figure } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Parallax from './Parallax';
import workStyles from '../styles/Work.module.css';
import useViewPort from '../hooks/viewPort.hook';

const workPlaces = [
  {
    name: 'Fox Dealer',
    logo: 'FoxLogo_squared_orange_icon_black_lettering.png',
    position: 'Computer Systems Engineer',
    date: 'March 2017 - January 2022',
    years: '2017 - 2022',
    description:
      'I started as a Junior developer and in two years I transitioned into Computer Systems Engineer(Lead Developer). I was responsible for the development of the back-end of the platform, worked on building custom wordpress plugins and themes for clients. I also managed the core architecture of the platform, and was also responsible for new development of the platform. I took full responsibility on onboarding/integrating new OEMs to our platform. I was also in charge of onboarding and mentoring new developers. I am really proud of the e-commerce project that I architect for General Motors Canada to launch their future models.',
  },
  {
    name: 'SADA Systems',
    logo: 'SADA_logo.png',
    position: 'Senior Software Developer',
    date: 'January 2022 - Present',
    years: '2022 - Present',
    description:
      'Working on projects with applications in various stages of development, ranging from discovery and architecture processes, soup-to-nuts development of an application, or consulting on individual features for our customers. Responsible for collaborating with solution architects, product managers, and UX/UI designers to define the requirements for high-quality user experiences. I am also responsible for the development of the front-end of the platform and the implementation of new features and bug fixes. Developing repeatable processes, solutions, or products that enable SADA and its customers to work more efficiently.',
  },
];

export const WorkPlaceCard = ({ work }) => {
  const { logo, position, years } = work;

  return (
    <Figure className={`${workStyles.boldTxt}`}>
      <Figure.Image width={171} height={180} alt="171x180" src={logo} />
      <Figure.Caption>{position}</Figure.Caption>
      <Figure.Caption>{years}</Figure.Caption>
    </Figure>
  );
};

const LeftImageContent = ({ work }) => {
  const { description } = work;
  return (
    <Row>
      <Col
        lg={{ span: 4, offset: 2 }}
        style={{ margin: 'auto 0px' }}
        className="text-center"
      >
        <WorkPlaceCard work={work} />
      </Col>
      <Col lg={8} style={{ margin: 'auto 0px' }} className="text-center">
        {description}
      </Col>
    </Row>
  );
};
const RightImageContent = ({ work }) => {
  const { description } = work;
  return (
    <Row>
      <Col lg={8} style={{ margin: 'auto 0px' }} className="text-center">
        {description}
      </Col>
      <Col
        lg={{ span: 4, offset: 2 }}
        style={{ margin: 'auto 0px' }}
        className="text-center"
      >
        <WorkPlaceCard work={work} />
      </Col>
    </Row>
  );
};

const HRwrapper = ({ children }) => (
  <>
    {children}
    <hr className={`${workStyles.hr}`} />
  </>
);

const Work = () => {
  const { isMobile } = useViewPort();

  return (
    <Element name="work" className="element">
      <Parallax title="WORK" type="work" />
      <Container fluid="md" className={`${workStyles.txtFonts}`}>
        {!isMobile &&
          workPlaces.map((workPlace, index) =>
            index % 2 === 0 ? (
              <HRwrapper key={index}>
                <LeftImageContent work={workPlace} />
              </HRwrapper>
            ) : (
              <HRwrapper key={index}>
                <RightImageContent work={workPlace} />
              </HRwrapper>
            )
          )}
        {isMobile &&
          workPlaces.map((workPlace, index) => (
            <HRwrapper key={index}>
              <LeftImageContent work={workPlace} />
            </HRwrapper>
          ))}
      </Container>
    </Element>
  );
};
export default Work;

WorkPlaceCard.propTypes = {
  work: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

LeftImageContent.propTypes = {
  work: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

RightImageContent.propTypes = {
  work: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

HRwrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

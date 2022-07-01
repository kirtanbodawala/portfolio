import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll } from 'react-scroll';
import myStyles from '../styles/main.module.css';

const NavBar = () => {
  const [active, setActive] = useState('home');
  const [needsWhiteNav, setNeedsWhiteNav] = useState(false);
  const [expand, setExpand] = useState(false);
  const [contactOffset, setContactOffset] = useState(-70);
  const handleSetActive = (section) => () => {
    setActive(section);
    return section !== 'home'
      ? setNeedsWhiteNav(true)
      : setNeedsWhiteNav(false);
  };
  const handleNavEvent = (e) => {
    if (expand) setExpand(false);
    else setExpand(true);
  };

  useEffect(() => {
    if (window.innerHeight > 800 && window.innerHeight < 1100)
      setContactOffset(-400);
    if (window.innerHeight > 1200) setContactOffset(-840);
  }, []);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expanded={expand}
      onToggle={handleNavEvent}
      expand="lg"
      className={`${myStyles.primaryNav} ${
        needsWhiteNav ? myStyles.whiteNavBar : ''
      }`}
    >
      <Container fluid>
        <Navbar.Brand
          className={`${myStyles.logo}`}
          onClick={() => animateScroll.scrollToTop()}
        >
          KB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="">
            <Nav.Item>
              <Link
                activeClass={`${myStyles.active}`}
                className={`${myStyles.primaryNavLinks} nav-link`}
                to="home"
                spy
                smooth
                duration={500}
                onSetActive={handleSetActive('home')}
                onClick={handleNavEvent}
              >
                HOME
              </Link>
              <div
                className={`${active === 'home' ? myStyles.activeBar : ''}`}
              />
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass={`${myStyles.active}`}
                className={`${myStyles.primaryNavLinks} nav-link`}
                to="about"
                spy
                smooth
                duration={500}
                offset={-70}
                onSetActive={handleSetActive('about')}
                onClick={handleNavEvent}
              >
                ABOUT
              </Link>
              <div
                className={`${active === 'about' ? myStyles.activeBar : ''}`}
              />
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass={`${myStyles.active}`}
                className={`${myStyles.primaryNavLinks} nav-link`}
                to="work"
                spy
                smooth
                duration={500}
                offset={-70}
                onSetActive={handleSetActive('work')}
                onClick={handleNavEvent}
              >
                WORK
              </Link>
              <div
                className={`${active === 'work' ? myStyles.activeBar : ''}`}
              />
            </Nav.Item>
            <Nav.Item>
              <Link
                activeClass={`${myStyles.active}`}
                className={`${myStyles.primaryNavLinks} nav-link`}
                to="contact"
                spy
                smooth
                duration={500}
                offset={contactOffset}
                onSetActive={handleSetActive('contact')}
                onClick={handleNavEvent}
              >
                CONTACT
              </Link>
              <div
                className={`${active === 'contact' ? myStyles.activeBar : ''}`}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

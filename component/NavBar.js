import myStyles from "../styles/main.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, {useState} from "react";
import { Link } from 'react-scroll';

const NavBar = () => {
    const [active, setActive] = useState('home');
    const [needsWhiteNav, setNeedsWhiteNav] = useState(false);
    const handleSetActive = (section) => () => {
        setActive(section);
        section != 'home' ? setNeedsWhiteNav(true) : setNeedsWhiteNav(false);
    };

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className={`${myStyles.primaryNav} ${needsWhiteNav ? myStyles.whiteNavBar : ""}`}>
            <Container fluid>
                <Navbar.Brand className={`${myStyles.logo}`} href="#home">KB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link
                                activeClass={`${myStyles.active}`}
                                className={`${myStyles.primaryNavLinks} nav-link`}
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={handleSetActive('home')}
                            >
                                HOME
                            </Link>
                            <div className={`${ active == "home" ? myStyles.activeBar : ""}`}></div>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                activeClass={`${myStyles.active}`}
                                className={`${myStyles.primaryNavLinks} nav-link`}
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onSetActive={handleSetActive('about')}
                            >
                                ABOUT
                            </Link>
                            <div className={`${ active == "about" ? myStyles.activeBar : ""}`}></div>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                activeClass={`${myStyles.active}`}
                                className={`${myStyles.primaryNavLinks} nav-link`}
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onSetActive={handleSetActive('work')}
                            >
                                WORK
                            </Link>
                            <div className={`${ active == "work" ? myStyles.activeBar : ""}`}></div>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                activeClass={`${myStyles.active}`}
                                className={`${myStyles.primaryNavLinks} nav-link`}
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onSetActive={handleSetActive('contact')}
                            >
                                CONTACT
                            </Link>
                            <div className={`${ active == "contact" ? myStyles.activeBar : ""}`}></div>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
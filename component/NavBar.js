import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll } from 'react-scroll';
import myStyles from "../styles/main.module.css";

const NavBar = () => {
    const [active, setActive] = useState('home');
    const [needsWhiteNav, setNeedsWhiteNav] = useState(false);
    const [expand, setExpand] = useState(false);
    const handleSetActive = (section) => () => {
        setActive(section);
        section != 'home' ? setNeedsWhiteNav(true) : setNeedsWhiteNav(false);
    };
    const handleNavEvent = (e) => {
        if(expand)
            setExpand(false);
        else
            setExpand(true);
    }

    return (
        <Navbar fixed="top" collapseOnSelect expanded={expand} onToggle={handleNavEvent} expand="lg" className={`${myStyles.primaryNav} ${needsWhiteNav ? myStyles.whiteNavBar : ""}`}>
            <Container fluid>
                <Navbar.Brand className={`${myStyles.logo}`} onClick={() => animateScroll.scrollToTop()}>KB</Navbar.Brand>
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
                                onClick={handleNavEvent}
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
                                onClick={handleNavEvent}
                            >
                                ABOUT
                            </Link>
                            <div className={`${ active == "about" ? myStyles.activeBar : ""}`}></div>
                        </Nav.Item>
                        {/*<Nav.Item>*/}
                        {/*    <Link*/}
                        {/*        activeClass={`${myStyles.active}`}*/}
                        {/*        className={`${myStyles.primaryNavLinks} nav-link`}*/}
                        {/*        to="work"*/}
                        {/*        spy={true}*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        offset={-80}*/}
                        {/*        onSetActive={handleSetActive('work')}*/}
                        {/*        onClick={handleNavEvent}*/}
                        {/*    >*/}
                        {/*        WORK*/}
                        {/*    </Link>*/}
                        {/*    <div className={`${ active == "work" ? myStyles.activeBar : ""}`}></div>*/}
                        {/*</Nav.Item>*/}
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
                                onClick={handleNavEvent}
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
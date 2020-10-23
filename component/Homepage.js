import React from 'react';
import myStyles from "../styles/main.module.css";
import {Element} from "react-scroll";

const Homepage = () => {
    return (
        <Element name="home" className="element" >
            <section className={`${myStyles.wrapper}`}>
                <div className={`${myStyles.module}`}>
                    <h1>FULL STACK DEVELOPER</h1>
                </div>
                <div className={`${myStyles.whiteRect}`}>
                    <h2>KIRTAN BODAWALA</h2>
                </div>
                <div className={`${myStyles.profilePic}`}>
                </div>
            </section>
        </Element>
    );
}

export default Homepage;
import React from 'react';
import myStyles from "../styles/main.module.css";
import {Element} from "react-scroll";

const Work = () => {
    return (
        <Element name="work" className="element" >
            <section className={`wrapper`}>
                <div className={`${myStyles.module}`}>
                    <h1>WORK DEVELOPER</h1>
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
export default Work;
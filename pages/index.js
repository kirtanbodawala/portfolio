import React, { useState } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../component/NavBar";
import Homepage from "../component/Homepage";
import AboutMe from "../component/AboutMe";
import Contact from "../component/contact";


const HomePage = () => {
    return (
        <div>
            <Head>
                <title>Kirtan Bodawala</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;700&family=Roboto:wght@900&display=swap" rel="stylesheet" />
            </Head>

            <NavBar></NavBar>
            <Homepage></Homepage>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    )

}

export default HomePage;

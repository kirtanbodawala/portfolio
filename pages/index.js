import React, { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../component/NavBar';
import Homepage from '../component/Homepage';
import AboutMe from '../component/AboutMe';
import Timeline from '../component/Timeline';
import Work from '../component/Work';
import Contact from '../component/Contact';
import SocialMediaIcons from '../component/SocialMediaIcons';

const HomePage = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kirtan Bodawala - Full Stack Developer</title>
    </Head>
    <NavBar />
    <Homepage />
    <AboutMe />
    <Work />

    <Contact />
    <footer className="mt-5 mb-5">
      <SocialMediaIcons />
    </footer>
  </div>
);

export default HomePage;

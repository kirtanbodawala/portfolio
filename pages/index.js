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

const structuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  additionalName: 'Kirtan Gopaldas Bodawala',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pasadena',
    addressRegion: 'California',
    postalCode: '91101',
    addressCountry: 'United State of America',
  },
  birthPlace: 'Vadodara',
  familyName: 'Bodawala',
  gender: 'male',
  givenName: 'Kirtan',
  height: '72 inches',
  honorificPrefix: 'Mr.',
  jobTitle: 'Computer Systems Engineer',
  knows: {
    '@type': 'Person',
    gender: 'female',
    name: 'Kajal Rathod',
    familyName: 'Rathod',
    additionalName: 'Kajal Sanjaykumar Rathod',
    givenName: 'Kajal',
    alumniOf: 'California State University, Fullerton ',
  },
  knowsLanguage: ['en', 'gu', 'hi'],
  nationality: 'Indian',
  worksFor: {
    '@type': 'Organization',
    name: 'Fox Dealer Interactive Inc',
  },
  spouse: {
    '@type': 'Person',
    gender: 'female',
    name: 'Kajal Rathod',
    familyName: 'Rathod',
    additionalName: 'Kajal Sanjaykumar Rathod',
    givenName: 'Kajal',
    alumniOf: 'California State University, Fullerton ',
  },
  name: 'Kirtan Bodawala',
  url: 'https://www.kirtanbodawala.pro',
  image: 'https://www.kirtanbodawala.pro/kirtan.png',
  sameAs: [
    'https://www.facebook.com/kirtanbodawala93',
    'https://twitter.com/kirtanbodawala',
    'https://www.instagram.com/kirtanbodawala/',
    'https://www.linkedin.com/in/kirtan-bodawala/',
    'https://www.pinterest.com/kirtanbodawala',
    'https://github.com/kirtanbodawala',
    'https://www.kirtanbodawala.pro',
  ],
  alumniOf: 'California State University, Fullerton ',
};

const HomePage = () => (
  <div>
    <Head>
      <meta
        name="description"
        content="Full stack software engineer with 4+ years of experience building website with React, PHP and WordPress. Capable of strong leadership."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <title>Kirtan Bodawala - Full Stack Developer</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;700&family=Roboto:wght@900&display=swap"
        rel="stylesheet"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S0QFRFP1ZN"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S0QFRFP1ZN');`,
        }}
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
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

import { Html, Head, Main, NextScript } from 'next/document';
import SEO from '../config/seo';

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
  jobTitle: 'Sr. Software Developer',
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
    name: 'SADA Systems Inc',
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

export default function Document() {
  return (
    <Html>
      <Head>
        <meta key="description" name="description" content={SEO.description} />
        <meta
          key="twitter:card"
          name="twitter:card"
          content={SEO.twitter.cardType}
        />
        <meta
          key="twitter:site"
          name="twitter:site"
          content={SEO.twitter.handle}
        />
        <meta key="og:url" property="og:url" content={SEO.openGraph.url} />
        <meta key="og:type" property="og:type" content={SEO.openGraph.type} />
        <meta
          key="og:title"
          property="og:title"
          content={SEO.openGraph.title}
        />
        <meta
          key="og:description"
          property="og:description"
          content={SEO.openGraph.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={SEO.openGraph.image}
        />
        <meta
          key="og:image:width"
          property="og:image:width"
          content={SEO.openGraph.imageWidth}
        />
        <meta
          key="og:image:height"
          property="og:image:height"
          content={SEO.openGraph.imageHeight}
        />
        <meta
          key="og:locale"
          property="og:locale"
          content={SEO.openGraph.locale}
        />

        <meta name="robots" content="index, follow" />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

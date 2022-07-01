import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import myStyles from '../styles/Parallax.module.css';

function Parallax(props) {
  const { title, type } = props;
  const parallaxImg = `${type}Img`;

  return (
    <Container
      fluid
      className={`${myStyles.parallax} ${myStyles[parallaxImg]} mh-80`}
      {...props}
    >
      <h1>{`${title}`}</h1>
    </Container>
  );
}

export default Parallax;

Parallax.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

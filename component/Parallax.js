import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import myStyles from '../styles/Parallax.module.css';

function Parallax(props) {
  const { title, type } = props;
  const parallaxImg = `${type}Img`;

  return (
    <Jumbotron
      fluid
      className={`${myStyles.parallax} ${myStyles[parallaxImg]} mh-80`}
      {...props}
    >
      <h1>{`${title}`}</h1>
    </Jumbotron>
  );
}

export default Parallax;

Parallax.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

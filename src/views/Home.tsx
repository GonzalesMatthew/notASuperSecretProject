import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../components/Contact';
import Music from '../components/Music';
import Releases from '../components/Releases';

const Home = (user) => {
  console.warn(user);
  return (
    <>
      <Music />
      <Releases />
      <Contact />
    </>
  );
};

export default Home;

Home.propTypes = {
  user: PropTypes.any,
};

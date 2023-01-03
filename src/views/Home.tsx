import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../components/Contact';
import Music from '../components/Music';
import Releases from '../components/Releases';

const Home = (user, toggle) => {
  console.warn(user);
  return (
    <>
      <Music toggle={toggle}/>
      <Releases toggle={toggle}/>
      <Contact toggle={toggle}/>
    </>
  );
};

export default Home;

Home.propTypes = {
  user: PropTypes.any,
  toggle: PropTypes.string
};

import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Contact from '../components/Contact';
import Music from '../components/Music';
import Releases from '../components/Releases';

const Home = ({ toggle }: InferProps<typeof Home.propTypes>) => {
  console.warn('Home component mounted');
  return (
  <>
    <Music toggle={toggle}/>
    <Releases toggle={toggle} />
    <Contact toggle={toggle} />
  </>
  );
};

export default Home;

Home.propTypes = {
  toggle: PropTypes.string,
};

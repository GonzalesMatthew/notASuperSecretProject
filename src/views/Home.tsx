import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Music from '../components/Music';
import Releases from '../components/Releases';
import Contact from '../components/Contact';

const Home = ({ toggle }: InferProps<typeof Home.propTypes>) => {
  console.warn('Home component mounted');

  useEffect(() => {
    const releasesDiv = document.getElementById('releasesComp') as HTMLElement;
    const contactDiv = document.getElementById('contactComp') as HTMLElement;
    switch (toggle) {
      case 'Music':
        releasesDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        break;
      case 'Releases':
        releasesDiv.style.display = 'block';
        contactDiv.style.display = 'none';
        break;
      case 'Contact':
        releasesDiv.style.display = 'none';
        contactDiv.style.display = 'block';
        break;
      default:
        console.warn('switch code error');
    }
  }, []);

  return (
    <>
      <div id="releasesComp">
        <Releases/>
      </div>
      <div id="contactComp">
        <Contact/>
      </div>
    </>
  );
};

export default Home;

Home.propTypes = {
  toggle: PropTypes.string,
};

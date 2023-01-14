import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Music from '../components/Music';
import Releases from '../components/Releases';
import Contact from '../components/Contact';

const Home = ({ toggle }: InferProps<typeof Home.propTypes>) => {
  console.warn('Home component mounted');

  useEffect(() => {
    const musicDiv = document.getElementById('musicComp') as HTMLElement;
    const releasesDiv = document.getElementById('releasesComp') as HTMLElement;
    const contactDiv = document.getElementById('contactComp') as HTMLElement;
    switch (toggle) {
      case 'Music':
        musicDiv.style.display = 'block';
        releasesDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        break;
      case 'Releases':
        musicDiv.style.display = 'none';
        releasesDiv.style.display = 'block';
        contactDiv.style.display = 'none';
        break;
      case 'Contact':
        musicDiv.style.display = 'none';
        releasesDiv.style.display = 'none';
        contactDiv.style.display = 'block';
        break;
      default:
        console.warn('switch code error');
    }
  }, [toggle]);

  return (
    <>
      <div id="musicComp">
        <Music/>
      </div>
      <div id="releasesComp">
        <Releases/>
      </div>
      <div id="contactComp">
        <Contact/>
      </div>
      {/* <button type='button' onClick={() => hide()}> Hide Element </button>
        <button type='button' onClick={() => show()}> Show Element </button> */}
    </>
  );
};

export default Home;

Home.propTypes = {
  toggle: PropTypes.string,
};

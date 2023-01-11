import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Contact from '../components/Contact';
import Music from '../components/Music';
import Releases from '../components/Releases';

const Home = ({ toggle }: InferProps<typeof Home.propTypes>) => {
  const myDiv = document.getElementById('myTest') as HTMLElement | null;
  if (myDiv != null) {
    console.log(myDiv);
  }
  function hide() {
    myDiv.style.display = 'none';
    console.warn('Now hiding the element');
  }
  function show() {
    myDiv.style.display = 'inline';
    console.warn('Now showing the element');
  }
  console.warn('Home component mounted');
  return (
    <>
      <div id="myTest" >
        <Music toggle={toggle} />
      </div>
      <Releases toggle={toggle} />
      <Contact toggle={toggle} />
      <button type="button" onClick={() => hide()}> Hide Element </button>
      <button type="button" onClick={() => show()}> Show Element </button>
    </>
  );
};

export default Home;

Home.propTypes = {
  toggle: PropTypes.string,
};

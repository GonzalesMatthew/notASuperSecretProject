import 'firebase/auth';
import React, { useState } from 'react';
import Music from '../components/Music';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [toggle, setToggle] = useState<string>('Music');

  return (
    <>
      <NavBar setToggle={setToggle}/>
      <div id='musicDiv'>
        <Music/>
      </div>
      <Routes toggle={toggle}/>
    </>
  );
}

export default App;

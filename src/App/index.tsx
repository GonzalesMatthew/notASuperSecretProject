import 'firebase/auth';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [toggle, setToggle] = useState<string>('Music');

  return (
    <>
      <NavBar setToggle={setToggle}/>
      <Routes toggle={toggle}/>
    </>
  );
}

export default App;

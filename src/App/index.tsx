import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [toggle, setToggle] = useState<string>('Music');
  useEffect(() => {
    setToggle('Music');
  }, []);

  return (
    <>
      <NavBar setToggle={setToggle}/>
      <Routes toggle={toggle}/>
    </>
  );
}

export default App;

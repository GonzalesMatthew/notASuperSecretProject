// import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
// import firebaseConfig from '../helpers/apiKeys';
import Routes from '../helpers/Routes';
import './App.scss';

// firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState<any | null>(false);
  const [toggle, setToggle] = useState<string>('Music');

  useEffect(() => {
    setUser(false);
    // firebase.auth().onAuthStateChanged((authed) => {
    //   if (authed) {
    //     // something to happen
    //     const userInfoObj = {
    //       fullName: authed.displayName,
    //       profileImage: authed.photoURL,
    //       uid: authed.uid,
    //       user: authed.email.split('@')[0]
    //     };
    //     setUser(userInfoObj);
    //   } else if (user || user === null) {
    //     setUser(false);
    //   }
    // });
  }, []);
  console.warn('Index', user);
  console.warn('Index toggle value: ', toggle);
  return (
    <>
      <NavBar user={user} setToggle={setToggle}/>
      <Routes user={user} toggle={toggle}/>
    </>
  );
}

export default App;

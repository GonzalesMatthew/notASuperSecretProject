// import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
// import firebaseConfig from '../helpers/apiKeys';
// import Routes from '../helpers/Routes';
import Contact from '../views/Contact';
import Music from '../views/Music';
import Releases from '../views/Releases';
import './App.scss';

// firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState<any | null>(null);
  const [musicStatus, setMusicStatus] = useState<boolean | true>(true);
  // const [releasesStatus, setReleasesStatus] = useState<boolean | true>(false);
  // const [contactStatus, setContactStatus] = useState<boolean | true>(false);

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

  return (
    <>
      <NavBar user />
      <Music musicStatus setMusicStatus/>
      <Releases/>
      <Contact/>
      {/* <Routes user={user} /> */}
    </>
  );
}

export default App;

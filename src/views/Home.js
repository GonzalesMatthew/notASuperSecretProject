import React from 'react';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div>
      This is home page
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
};

export default Home;

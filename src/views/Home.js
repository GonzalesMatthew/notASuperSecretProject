import React from 'react';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div>
      This is home page<br/>
      <iframe
        frameBorder="0"
        width="500"
        height="250"
        src="https://drive.google.com/file/d/1oOj5RIgQh1jT_D25Cvjnm_F8r55lTeSP/preview">
      </iframe>
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

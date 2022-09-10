import React from 'react';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div>
      <br />
      <div>
        Whatever - Demo<br/>
        <iframe
          frameBorder="0"
          width="500"
          height="250"
          src="https://drive.google.com/file/d/19OhxEnh2d_PQhE_3uUB36Fq9YMR9uYNM/preview"
        ></iframe>
      </div>
      <div>
        Sailing Tepid Waters - Demo<br/>
        <iframe
          frameBorder="0"
          width="500"
          height="250"
          src="https://drive.google.com/file/d/1oOj5RIgQh1jT_D25Cvjnm_F8r55lTeSP/preview"
        ></iframe>
      </div>
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

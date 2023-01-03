import React from 'react';
import PropTypes from 'prop-types';

function Releases(toggle) {
  console.warn('Releases', toggle);
  return (
    <div>
      This is release page
    </div>
  );
}

Releases.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
  toggle: PropTypes.string
};

export default Releases;

import React from 'react';
import PropTypes from 'prop-types';

function Contact(toggle) {
  console.warn('Contact', toggle);
  return (
    <div>
      Contact:<br/>
      logit@logitmusic.com
    </div>
  );
}

Contact.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
  toggle: PropTypes.string
};

export default Contact;

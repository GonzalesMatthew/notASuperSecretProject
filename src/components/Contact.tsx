import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const Contact = ({ toggle }: InferProps<typeof Contact.propTypes>) => {
  console.warn('Contact component mounted');
  return (
    <>
      {toggle === 'Contact' && (
        <div>
          Contact:
          <br />
          logit@logitmusic.com
        </div>
      )}
    </>
  );
};

Contact.propTypes = {
  toggle: PropTypes.string,
};

export default Contact;

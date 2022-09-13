import PropTypes from 'prop-types';

function Contact() {
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
};

export default Contact;

import PropTypes from 'prop-types';

function Donate() {
  return (
    <div>
      This is contact page
    </div>
  );
}

Donate.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
};

export default Donate;

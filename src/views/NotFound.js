import PropTypes from 'prop-types';

function NotFound() {
  return (
    <div>
      This is a blank page ...
    </div>
  );
}

NotFound.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
};

export default NotFound;

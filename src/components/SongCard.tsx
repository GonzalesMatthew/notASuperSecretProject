import React from 'react';
import PropTypes from 'prop-types';

const SongCard = ({ title, path }) => (
  <>
    <div>
      {title}<br/>
      <iframe
        frameBorder="0"
        width="500"
        height="250"
        src={path}
      ></iframe>
    </div>
  </>
);

SongCard.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string
};

export default SongCard;

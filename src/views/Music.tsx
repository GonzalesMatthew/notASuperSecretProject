import React from 'react';
import PropTypes from 'prop-types';
import SongCard from '../components/SongCard';

const Music = (musicStatus, setMusicStatus) => (
  <>
    <div>
      <SongCard
        title="Whatever - Demo"
        path="https://drive.google.com/file/d/19OhxEnh2d_PQhE_3uUB36Fq9YMR9uYNM/preview"
      />
      <SongCard
        title='Sailing Tepid Waters - Demo'
        path="https://drive.google.com/file/d/1oOj5RIgQh1jT_D25Cvjnm_F8r55lTeSP/preview"
      />
    </div>
  </>
);

Music.propTypes = {
  musicStatus: PropTypes.bool,
  setMusicStatus: PropTypes.any
};

export default Music;

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import SongCard from '../components/SongCard';

const Music = () => {
  const [openToggle, setOpenToggle] = useState<any | true>(true);
  const toggleOn = () => setOpenToggle(!openToggle);

  return (
    <div>
      <button className='button' type='button' onClick={toggleOn}>
        {openToggle ? <i className='fas fa-minus fa-2x'></i> : <i className='fas fa-plus fa-2x'></i>}
      </button>
      <SongCard
        title="Whatever - Demo"
        path="https://drive.google.com/file/d/19OhxEnh2d_PQhE_3uUB36Fq9YMR9uYNM/preview"
      />
      <SongCard
        title="Sailing Tepid Waters - Demo"
        path="https://drive.google.com/file/d/1oOj5RIgQh1jT_D25Cvjnm_F8r55lTeSP/preview"
      />
    </div>
  );
};

// Music.propTypes = {
//   musicToggle: PropTypes.bool,
//   setMusicToggle: PropTypes.any,
// };

export default Music;

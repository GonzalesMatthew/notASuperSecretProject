import React from 'react';
import SongCard from './SongCard';

const Music = () => (
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
export default Music;

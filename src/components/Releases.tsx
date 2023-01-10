import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const Releases = ({ toggle }: InferProps<typeof Releases.propTypes>) => {
  console.warn('Releases component mounted');
  return (
    <>
      {toggle === 'Releases' && (
        <div>This is release page</div>
      )}
    </>
  );
};

Releases.propTypes = {
  toggle: PropTypes.string,
};

export default Releases;

import 'ldrs/ring2';
import propTypes from 'prop-types';

const Loaders = ({size}) => {
  return (
    <>
      <l-ring-2
        // size={size || 40}
        // size='40'
        size={size ? (size) : 40} 
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color="#e50815"
      ></l-ring-2>
    </>
  );
};

Loaders.propTypes = {
  size: propTypes.number,
};

export default Loaders;

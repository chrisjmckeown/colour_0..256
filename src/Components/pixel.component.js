import React from 'react';

const Pixel = ({ rgb: { r, g, b } }) => {
  return (
    <div
      className='pixel'
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    ></div>
  );
};

export default Pixel;

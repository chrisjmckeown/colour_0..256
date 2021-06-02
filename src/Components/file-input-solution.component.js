import React, { useState, useEffect } from 'react';
import Pixel from './pixel.component';
import '../App.css';
import Data from '../Data';

const FileInputSolution = () => {
  const [rgbValues, setRGBValues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRGBValues(Data.sort(() => Math.random() - 0.5));
  }, []);

  const load = () => {
    setLoading(true);
  };

  return (
    <>
      <div className='heading'>Input from File Solution, with random sort</div>
      <button onClick={load}>Load this option</button>
      <div className='picture-container'>
        {loading &&
          rgbValues.map((rgb, index) => {
            return <Pixel key={index} rgb={rgb} />;
          })}
      </div>
    </>
  );
};

export default FileInputSolution;

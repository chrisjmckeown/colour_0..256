import React, { useState, useEffect } from 'react';
import Pixel from './pixel.component';
import '../App.css';

const UseEffectSolution = () => {
  const [rgbValues, setRGBValues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const increment = 8;
    const steps = 32;
    const params = new Array(steps + 1).fill().map((_, i) => i * increment);
    params.shift();
    let list = [];
    params.map((r) =>
      params.map((g) =>
        params.map((b) => {
          const rgb = { r, g, b };
          return list.push(rgb);
        })
      )
    );
    setRGBValues(list);
  }, []);

  const load = () => {
    setLoading(true);
  };

  return (
    <>
      <div className='heading'>Randomised Solution</div>
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

export default UseEffectSolution;

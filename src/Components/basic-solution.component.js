import React, { useState, useEffect } from 'react';
import Pixel from './pixel.component';
import '../App.css';

const BasicSolution = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValues([]);
    const increment = 8;
    const steps = 32;
    const params = new Array(steps + 1).fill().map((_, i) => i * increment);
    params.shift();

    setValues(params);
  }, []);

  const load = () => {
    setLoading(true);
  };

  return (
    <>
      <div className='heading'>Basic Solution</div>
      <button onClick={load}>Load this option</button>
      <div className='picture-container'>
        {loading &&
          values.map((r) =>
            values.map((g) =>
              values.map((b) => {
                const rgb = { r, g, b };
                return <Pixel key={r + g + b} rgb={rgb} />;
              })
            )
          )}
      </div>
    </>
  );
};

export default BasicSolution;

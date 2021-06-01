import React, { useState, useEffect } from 'react';
import Pixel from './Pixel';
import './App.css';

const App = () => {
  const [params, setParams] = useState([]);

  useEffect(() => {
    setParams([]);
    const increment = 8;
    const range = 256;
    for (var i = increment; i < range + increment; i = i + increment) {
      let value = i;
      setParams((params) => [...params, value]);
    }
  }, []);

  return (
    <div>
      <p>
        A React.js program which produces a 256x128px image in which each colour
        occurs exactly once..
      </p>

      <div className='container'>
        {params.map((r, i1) =>
          params.map((g, i2) =>
            params.map((b, i3) => (
              <Pixel key={i1 + i2 + i3} r={r} g={g} b={b} />
            ))
          )
        )}
      </div>
    </div>
  );
};

export default App;

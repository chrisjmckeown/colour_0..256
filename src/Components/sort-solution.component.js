import React, { useState, useEffect } from 'react';
import Pixel from './pixel.component';
import '../App.css';

const SortSolution = () => {
  const [rgbValues, setRGBValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const rgbToHsl = (c) => {
    const r = c[0] / 255;
    const g = c[1] / 255;
    const b = c[2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
      }
      h /= 6;
    }
    return new Array(h * 360, s * 100, l * 100);
  };

  useEffect(() => {
    const increment = 8;
    const steps = 32;
    const params = new Array(steps + 1).fill().map((_, i) => i * increment);
    params.shift();
    let rgbArr = [];
    params.map((r) =>
      params.map((g) =>
        params.map((b) => {
          const rgb = [r, g, b];
          return rgbArr.push(rgb);
        })
      )
    );

    const sortedRgbArr = rgbArr
      .map((c, i) => {
        return { color: rgbToHsl(c), index: i };
      })
      .sort((c1, c2) => {
        return c1.color[0] - c2.color[0];
      })
      .map((data) => {
        return rgbArr[data.index];
      });

    setRGBValues(sortedRgbArr);
  }, []);

  const load = () => {
    setLoading(true);
  };

  return (
    <>
      <div className='heading'>Sort Solution</div>
      <button onClick={load}>Load this option</button>
      <div className='picture-container'>
        {loading &&
          rgbValues.map((rgb, index) => {
            const rgbObject = { r: rgb[0], g: rgb[1], b: rgb[2] };
            return <Pixel key={index} rgb={rgbObject} />;
          })}
      </div>
    </>
  );
};

export default SortSolution;

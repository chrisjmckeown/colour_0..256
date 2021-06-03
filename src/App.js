import React from 'react';
import './App.css';
import BasicSolution from './Components/basic-solution.component';
import UseEffectSolution from './Components/useEffect-solution.component';
import FileInputSolution from './Components/file-input-solution.component';
import SortSolution from './Components/sort-solution.component';

const App = () => {
  return (
    <>
      <div className='container'>
        <h1 className='heading'>Colour array</h1>
        <div className='heading'>
          A React.js program which produces a 256x128px image in which each
          colour occurs exactly once.
        </div>
        <BasicSolution />
        <UseEffectSolution />
        <FileInputSolution />
        <SortSolution />
      </div>
    </>
  );
};

export default App;

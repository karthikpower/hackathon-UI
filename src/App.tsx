import React from 'react';
import './App.css';
import { CreatePlan } from './pages/Plan/CreatePlan/createPlan';
import DisplayPlan from './pages/Plan/displayPlan';

function App() {
  return (
    <div className="OverallPlan">
      <div className='col1'>
        <CreatePlan />
        <br /><br />
        // react use context to read the value of selected radio button and disply drop down for generate using AI.
        <DisplayPlan />
      </div>
    
    </div>
  );
}

export default App;

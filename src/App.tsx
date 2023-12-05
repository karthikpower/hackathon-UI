import React from 'react';
import './App.css';
import { CreatePlan } from './pages/Plan/CreatePlan/createPlan';
import DisplayPlan from './pages/Plan/displayPlan';
import { PlanGenAI } from './pages/PlanAI/planAI.component';
import { Footer } from './pages/Footer/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div className="OverallPlan">
      <div className='col1'>
        {/* <CreatePlan />
        <br /><br />
        // react use context to read the value of selected radio button and disply drop down for generate using AI.
        <DisplayPlan /> */}

        <PlanGenAI />
        <br /><br />
        <DisplayPlan />
      </div>

      <div className='col2'>
        <h1>Filter options</h1>
        <h2>Pick grades</h2>
        <Slider min={5} max={10} options={['5', '6', '7', '8', '9', '10']} />
      </div>

      <div className='col3'>
          <h1> Inject course preview component here!!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;

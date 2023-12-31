import React, { useState } from 'react';
import './App.css';
import ExperienceCalculator from './components/experience_calculator/ExperienceCalculator';
import Creatures from './components/creatures/Creatures';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="App">
      <div className="tabs">
        <div className="tab-headers">

          <button className={`tab-link ${activeTab === 'calculator' ? 'active' : ''}`} onClick={() => setActiveTab('calculator')}>Experience Calculator</button>
          <button className={`tab-link ${activeTab === 'creatures' ? 'active' : ''}`} onClick={() => setActiveTab('creatures')}>Creatures</button>
        </div>
        <div className="tab-content">
          {activeTab === 'calculator' && <ExperienceCalculator />}
          {activeTab === 'creatures' && <Creatures/>}
        </div>
      </div>
    </div>
  );
}

export default App;

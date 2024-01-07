import React, { useState } from 'react';
import './App.css';
import ExperienceCalculator from './components/experience_calculator/ExperienceCalculator';
import Creatures from './components/creatures/Creatures';
import Map from './components/map/Map';
import Magma from './components/magma/Magma';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="App">
      <div className="tabs">
        <div className="tab-headers">

          <button className={`tab-link ${activeTab === 'calculator' ? 'active' : ''}`} onClick={() => setActiveTab('calculator')}>Experience Calculator</button>
          <button className={`tab-link ${activeTab === 'creatures' ? 'active' : ''}`} onClick={() => setActiveTab('creatures')}>Creatures</button>
          <button className={`tab-link ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>Map</button>
          <button className={`tab-link ${activeTab === 'magma' ? 'active' : ''}`} onClick={() => setActiveTab('magma')}>Magma</button>
        </div>
        <div className="tab-content">
          {activeTab === 'calculator' && <ExperienceCalculator />}
          {activeTab === 'creatures' && <Creatures/>}
          {activeTab === 'map' && <Map/>}
          {activeTab === 'magma' && <Magma/>}
        </div>
      </div>
    </div>
  );
}

export default App;

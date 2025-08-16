/*
 * Copyright (c) 2025 Jaehong Park <jaehong1972@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import './App.css';
import { stations, Station } from './stations';
import StationList from './components/StationList';
import RadioPlayer from './components/RadioPlayer';

function App() {
  const [currentStation, setCurrentStation] = useState<Station | null>(null);

  return (
    <div className="App">
      <header className="header">
        <h1>Radio Web App</h1>
      </header>
      <main className="main-content">
        <div className="station-list-container">
          <StationList 
            stations={stations} 
            currentStation={currentStation}
            onStationSelect={setCurrentStation} 
          />
        </div>
        <div className="radio-player-container">
          <RadioPlayer station={currentStation} />
        </div>
      </main>
    </div>
  );
}

export default App;
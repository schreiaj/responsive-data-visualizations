import React, { useState } from 'react';

import './App.css';
import { Map } from './components/Map';
import { Colorado } from './data/colorado.geojson';
import { Returns as ElectionResults } from './data/returns.json'
import {Returns} from './components/Returns'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* 
        viewBox allows for the internal points of  the SVG to  always 
        be 960 units wide and 500 tall regardless of the size

        The preserveAspectRatio  requires viewBox, this will change how 
        aspect ratio is maintained. 

       */}
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 960 500">
        <Map geoJSON={Colorado.features} results={ElectionResults}/>
      </svg>
      <Returns results={ElectionResults}></Returns>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import { Breakpoint, BreakpointProvider } from 'react-socks'


import './App.css';
import { Map } from './components/Map';
import { Colorado } from './data/colorado.geojson';
import { Returns as ElectionResults } from './data/returns.json'
import { Returns } from './components/Returns'

const App: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const animSpring = useSpring({
    transform: isOpen ? 'rotateY(-45deg) translateX(100px)' : 'rotateY(-0deg) translateX(0px)'
  })
  return (
    <div className="App">
      <BreakpointProvider>
        {/* 
        viewBox allows for the internal points of  the SVG to  always 
        be 960 units wide and 500 tall regardless of the size

        The preserveAspectRatio  requires viewBox, this will change how 
        aspect ratio is maintained. 

       */}
        <Breakpoint xlarge up>
          <animated.svg style={animSpring} preserveAspectRatio="xMidYMid" viewBox="0 0 960 500">
            <Map geoJSON={Colorado.features} results={ElectionResults} />
          </animated.svg>
          <Returns isOpen={isOpen} setOpen={setOpen} results={ElectionResults}></Returns>
        </Breakpoint>
        <Breakpoint large down>
          <Returns isOpen={true} setOpen={() => { }} results={ElectionResults} isAnimated={false}></Returns>
        </Breakpoint>
      </BreakpointProvider>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import mars from './assets/5672_marsmap4k.jpg';
import './App.css';
import ReactGlobe from 'react-globe';

function App() {
  return (
    <div className="App">
      <ReactGlobe 
        globeTexture={mars}
        globeCloudsTexture={null}
        width="100%"
      />

    </div>
  );
}

export default App;

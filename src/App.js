import React from 'react';
import ReactGlobe from 'react-globe';

import './App.css';

import mars from './assets/5672_marsmap4k.jpg';
import mars12 from './assets/5672_mars_12k_color.jpg';

function App() {

  // support rendering markers with simple data
  const markers = [
    {
      id: 'marker1',
      city: '2413fb3709b05939f04cf2e92f7d0897fc2596f9ad0b8a9ea855c7bfebaae892',
      color: 'gold',
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    {
      id: 'marker2',
      city: 'f692ba25de4478817a565f0c60b6f9c974d1c4ff11397c89119d9946d72ffb1c',
      color: 'gold',
      coordinates: [40.73061, -73.935242],
      value: 25,
    },
    {
      id: 'marker3',
      city: 'e5af4874d53cd94043d5292e3531c9597b3ef8940905c68ad9859c34a8d385dd',
      color: 'gold',
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    {
      id: 'marker4',
      city: '245633f1d8b9adccf4a4eb7459e77ca240a6e4e7da3939328ce192239159ea85',
      color: 'gold',
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    {
      id: 'marker5',
      city: '3636a19e2004d0fdfa7e06f5a3f5e64df958b547fd83c2517c4c4c6a1b408495',
      color: 'gold',
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    {
      id: 'marker6',
      city: 'a2eaa3f5035082052db6d682d6d71f67f2a76dc3c1d5586afed59ed4a0c9cd9a',
      color: 'gold',
      coordinates: [29.7604, -95.3698],
      value: 54,
    },
  ];

  // simple and extensive options to configure globe
  const options = {
    ambientLightColor: 'orange',
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'gold',
    pointLightIntensity: 1.5,
    globeGlowColor: 'orange',
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };


  return (
    <div className="App">
      <ReactGlobe 
      height="100vh"
        globeTexture={mars}
        globeCloudsTexture={null}
        markers={markers}
        options={options}
        width="100%"
        onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        onGlobeTextureLoaded={() => console.log('globe loaded')}
        onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        options={{
          enableMarkerGlow: false,
          markerRadiusScaleRange: [0.2, 0.5],
          markerType: 'bar',
        }}
      />

    </div>
  );
}

export default App;

import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Circle, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Icon } from "leaflet";
//import * as evictionData from "./data/all_sf_evictions.json";
//import * as narrativeData from "./data/narratives.json";
import Map from './components/map/Map';
import "./App.css";
// Added
import Popup from './components/Popup';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import twitterlogo from './twitterlogo.png';
import facebooklogo from './facebook.png';
import linklogo from './linklogo.png';


export default function App() {
  return (
    <Map />
  )
}


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);
  

  return (
    <div className="App">
      <main>
        <h1>AEMP Popups</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>Search Bar</button>
        <button onClick={() => setInfoPopup(true)}>Info Page</button>
        <button onClick={() => setSharePopup(true)}>Share</button>
      </main>
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Search Bar Popup</h3>
          <p>This is the search bar popup</p>
        </Popup>

        <br></br>

        <Popup trigger={infoPopup} setTrigger={setInfoPopup}>
          <h3>About</h3>
          <p>The Anti-Eviction Mapping Project is a data-visualization, critical cartography, and multimedia</p>
          <p>storytelling collective documenting dispossession and resistance upon gentrifying landscapes. </p>
          <p>Primarily working in the San Francisco Bay Area, Los Angeles, and New York City, we are all </p>
          <p>volunteers producing digital maps, software and tools, narrative multimedia work, murals, reports,</p>
          <p>and community events. Working with a number of community partners and in solidarity with</p>
          <p>housing movements globally, we study and visualize entanglements of racial capitalism, </p>
          <p>technocapitalism, and political economy, while providing tools for resistance. Our narrative oral </p>
          <p>history and video work centers the displacement of people and complex social worlds, but also </p>
          <p>modes of resistance. Maintaining antiracist and feminist analyses as well as decolonial methodology,</p>
          <p>the project creates tools and disseminates data contributing to collective resistance and movement building.</p>
        </Popup>

        <Popup trigger={sharePopup} setTrigger={setSharePopup}>
          

<button
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.facebook.com/';
            }}
            ><img style={{maxWidth:"5%"}}

src={facebooklogo}></img></button>
<br></br>
<button
            type="button"
            
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://twitter.com/?lang=en';
            }}
><img style={{maxWidth:"5%"}}

src={twitterlogo}></img></button>
<br></br>
<button
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='http://www.antievictionmappingproject.net/narratives.html';
            }}
            ><img style={{maxWidth:"5%"}}

src={linklogo}></img></button>

        </Popup>
        
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3>Terms of Use</h3>
          <p>Please do not use any of these stories for your own work without express</p>
          <p>permission. Interviewees have only authorized the release of their stories to AEMP.</p>
        </Popup>
    </div>
  );
}

export default App;






/*
ReactDOM.render(
  <div>
      Hello World
  </div>,
  
  document.getElementById('root'),
);
*/


/*
export default function App() {
  return <MapContainer center={[37.7749, -122.4194]} zoom={12}>

    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    <MarkerClusterGroup spiderfyDistanceMultiplier={1}
            showCoverageOnHover={true}>
      {narrativeData.features.map(narrative => (
        <CircleMarker 
          key={narrative.properties.address}
          center={[
            narrative.geometry.coordinates[1],
            narrative.geometry.coordinates[0],
        ]}
        position={[
          narrative.geometry.coordinates[1],
          narrative.geometry.coordinates[0],
      ]}
      radius={5}
        />
      ))}
    </MarkerClusterGroup>;

  </MapContainer>
}
*/
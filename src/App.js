import React from 'react';
import './App.css';
import data from './data';
import Timeline from './components/Timelime/Timeline';

function App() {
  return (
    <>
      <h1>React Timeline</h1>
      {Timeline(data)}
    </>
  );
}

export default App;

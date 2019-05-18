import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo pulse" alt="logo" />
        <p>
          How about we make this into a PWA?
        </p>
        <a
          className="App-link"
          href="https://www.alexanderjacks.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built By AlexJacksApps
        </a>
      </header>
    </div>
  );
}

export default App;

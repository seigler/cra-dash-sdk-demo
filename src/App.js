import React, { useState } from 'react';
import Dash from 'dash';

import logo from './logo.svg';
import './App.css';

function App() {
  const [status, setStatus] = useState('Loading...');
  // try {
    const sdk = new Dash.SDK();
  // } catch (e) {
  //   console.error('Error at "new":', e);
  //   setStatus('Error at "new" (see console)')
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Status: {status}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

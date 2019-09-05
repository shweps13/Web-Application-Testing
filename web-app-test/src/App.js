import React, { useState } from 'react';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Baseball App
        </h1>
      </header>
      <div className="Main-Field">
        <h2>Super Baseball Sport</h2>
        <Display balls={balls} strikes={strikes}/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

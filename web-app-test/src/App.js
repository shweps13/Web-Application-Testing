import React from 'react';
import './App.css';
import Display from './components/Display'
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Baseball App
        </h1>
      </header>
      <div className="Main-Field">
        <h2>Super Baseball Sport</h2>
        <Display />
      </div>
    </div>
  );
}

export default App;

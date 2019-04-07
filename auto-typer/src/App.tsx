import React from 'react'
import Pipe from './components/Pipe';
import "./App.scss";
import Texts from './components/Texts';

const App = () => {
  return (
    <div className="App">
    <h1>About Oyelowo</h1>
    <Texts /> <Pipe height={30} />
    </div>
  )
}

export default App


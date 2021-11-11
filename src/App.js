import React from 'react';

import './App.css';

import Contact from './components/Contact';
import Header from './components/Header';
import Tattoos from './components/Tattoos';

function App() {
  return (
    <div className="Container">
      <Contact />
      <Header />
      <Tattoos />
    </div>
  );
}

export default App;

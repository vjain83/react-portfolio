import React from 'react';
import About from './componenets/About'
import Nav from './componenets/Nav'
import './App.css';
import Portfolio from './componenets/Portfolio';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;

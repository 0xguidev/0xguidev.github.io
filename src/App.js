import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <About/>
      <Contact/>
      <Home/>
      <Projects/>
      </header>
    </div>
  );
}

export default App;

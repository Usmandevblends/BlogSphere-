import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css';
import './style.css';
import Navigation from './components/Navigation';
import Technology from './components/Technology';
import Gadgets from './components/Gadgets';
import Software from './components/Software';
import Games from './components/Games';
import Podcasts from './components/Podcasts';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/software" element={<Software />} />v
        <Route path="/games" element={<Games />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </Router>
  );
}

export default App;


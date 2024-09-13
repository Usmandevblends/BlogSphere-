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
import Error from './components/Error';

const articles = [
  {
    category: "Apps",
    title: "Broke a Glass? Someday You Might 3-D-Print a New One"
  },
  {
    category: "Games",
    title: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube."
  },
  {
    category: "Editors Pick",
    title: "For Families of Teens at Microsoft Surface"
  },
  {
    category: "Editors Pick",
    title: "Why Netflix shares are down 10%"
  }
];

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/software" element={<Software />} />v
        <Route path="/games" element={<Games />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;


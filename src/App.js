import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          {/* This form component is rendered for all routes except "/about" */}
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;




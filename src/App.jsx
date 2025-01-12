import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Memory from './comps/Memory/Memory';
import Tictactoe from './comps/Tictactoe/Tictactoe';
import Portfolio from './comps/Portfolio';
import Header from './comps/Header';
import Footer from './comps/Footer';

// App Component
function App() {
  return (
    <Router>
      <div className="app">
        <div className='header-container'>
          <Header />
        </div>
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/tictactoe" element={<Tictactoe />} />
          </Routes>
        </div>
        <div className='footer-container'>
        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

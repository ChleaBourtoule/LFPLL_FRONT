import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Sessions from './components/Sessions/Sessions';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

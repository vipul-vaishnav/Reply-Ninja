import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

const App = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-24 bg-tw-extraextralightgray text-tw-black text-base font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import './styles/global.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Inicio     from './components/Inicio';
import Dogmas     from './components/Dogmas';
import Prophets   from './components/Prophets';
import Scriptures from './components/Scriptures';
import Blog       from './components/Blog';
import Convert    from './components/Convert';
import Distros    from './components/Distros';
import Footer     from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <hr className="divider" />
              <Dogmas />
              <hr className="divider" />
              <Prophets />
              <hr className="divider" />
              <Scriptures />
              <hr className="divider" />
              <Blog />
              <hr className="divider" />
              <Convert />
            </main>
          }
        />
        <Route
          path="/inicio"
          element={
            <main>
              <Inicio />
            </main>
          }
        />
        <Route
          path="/distros"
          element={
            <main>
              <Distros />
            </main>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
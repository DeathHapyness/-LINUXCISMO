import React from 'react';
import './styles/global.css';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Dogmas     from './components/Dogmas';
import Prophets   from './components/Prophets';
import Scriptures from './components/Scriptures';
import Blog       from './components/Blog';
import Convert    from './components/Convert';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}